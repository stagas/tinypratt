import { joinRegExp } from 'join-regexp'
import { createLexer, Lexer, LexerError, LexerErrorCauses, RegExpToken, Token } from 'lexer-next'
import * as ParserErrorCauses from './causes'

export { Token }
export { ParserErrorCauses }
export { joinRegExp }

export type { TokenJson } from 'lexer-next'
export type { LexerError }

export interface NodeArray extends Array<Node | NodeArray | Token> {
  [k: number]: Node | NodeArray | Token
}

export type Node = (NodeArray | Token) & {
  lexer?: Lexer
  toString(): string
}

const nodeToString = (node: Node): string =>
  Array.isArray(node) ? '(' + node.map(child => nodeToString(child)).join(' ') + ')' : node != null ? node.value : '()'

interface Fn {
  (t: Token, r: number, x?: unknown): unknown
}

export interface Impl {
  led?: Fn
  nud?: Fn
}

interface ImplTable {
  [k: string]: [number[], Impl]
}

interface ImplTableFactoryProps {
  peek: Lexer['peek']
  advance: Lexer['advance']
  accept: Lexer['accept']
  expect: Lexer['expect']
  unknown: Lexer['unknown']

  never: Impl
  pass: Impl
  bin: Fn
  pre: Fn
  post: (bp: number) => Fn

  until: (op: string, min_bp: number, fn: (t: Token, x: unknown, y: unknown, r: number) => unknown) => Fn
  expr: (min: number) => Node
}

interface ImplTableFactory {
  (props: ImplTableFactoryProps): ImplTable
}

export interface ParserError extends Error {
  cause:
    | ParserErrorCauses.UnexpectedToken
    | ParserErrorCauses.BadImpl
    | ParserErrorCauses.BadToken
    | ParserErrorCauses.BadOp
}
export class ParserError extends Error {
  name = 'ParserError'
  constructor(cause: Error) {
    super(cause.message, { cause })
  }
}

export const createParser = (regexp: RegExp, fn: ImplTableFactory) => {
  const tokenizer = (input: string) => input.matchAll(new RegExpToken(regexp))
  const Lexer = createLexer(tokenizer)
  const parse = (input: string) => {
    const lexer = Lexer(input)
    const { onerror, filter, peek, advance, expect, accept, unknown } = lexer

    filter((token: Token) => token.group !== 'nul')

    onerror((error: LexerError) => {
      if (error.cause instanceof LexerErrorCauses.UnexpectedToken) {
        throw new ParserError(
          new ParserErrorCauses.UnexpectedToken(
            error.cause.currentToken,
            error.cause.expectedGroup,
            error.cause.expectedValue
          )
        )
      } else {
        throw error
      }
    })

    const post = (bp: number): Fn => t => [t, expr(bp)]
    const pre: Fn = (t, r, x) => {
      if (r) throw new ParserError(new ParserErrorCauses.BadToken(t))
      else return [t, x]
    }
    const bin: Fn = (t, r, x) => [t, x, expr(r)]
    const pass: Impl = { nud: t => t, led: (t, _, x) => [x, t] }
    const never: Impl = {
      nud: (t, rbp) => {
        if (rbp) throw new ParserError(new ParserErrorCauses.BadOp(t))
      },
    }
    const until = (op: string, min_bp: number, fn: (t: Token, x: unknown, y: unknown, r: number) => unknown): Fn =>
      (t: Token, r: number, L: unknown) => {
        const m = !peek('ops', op) ? expr(min_bp) : null
        expect('ops', op)
        return fn(t, L, m, r)
      }

    const bp = (t: Token) => desc(t)[0]
    const desc = (t: Token) => {
      const ctx = impl[`${t}`] ?? impl[t.group]
      if (!ctx) throw new ParserError(new ParserErrorCauses.BadOp(t))
      return ctx
    }
    const denom = (impl: 'led' | 'nud', t: Token, rbp: number, left?: unknown) => {
      const fn = desc(t)[1][impl]
      if (fn) return fn(t, rbp, left)
      else throw new ParserError(new ParserErrorCauses.BadImpl(t, impl))
    }
    const nud = denom.bind(null, 'nud')
    const led = denom.bind(null, 'led')

    const expr = (min: number) => {
      let t = advance()
      let left = nud(t, min)
      let lbp, rbp
      while (min < (([lbp, rbp] = bp(peek())), lbp)) {
        t = advance()
        left = led(t, rbp, left)
      }
      return left as Node
    }

    const impl: ImplTable = fn({
      peek,
      advance,
      accept,
      expect,
      unknown,

      never,
      pass,
      bin,
      pre,
      post,

      until,
      expr,
    })

    const node = expr(0)
    if (node) {
      node.lexer = lexer
      node.toString = function() {
        return nodeToString(this)
      }
    }

    return node
  }

  return parse
}
