import { annotate } from 'annotate-code'
import { joinRegExp } from 'join-regexp'
import { Lexer, RegExpToken, Token, UnexpectedTokenError, createLexer } from 'lexer-next'

export { joinRegExp }

export interface NodeArray extends Array<Token | Node | NodeArray> {
  [k: number]: Token | Node | NodeArray
}

export type Node = NodeArray | Token

export type { Token }

const nodeToString = (node: Node): string =>
  Array.isArray(node) ? '(' + node.map(child => nodeToString(child)).join(' ') + ')' : node != null ? node.value : '()'

interface Fn {
  (t: Token, r: number, x?: unknown): unknown
}

interface Impl {
  led?: Fn
  nud?: Fn
}

interface ImplTable {
  [k: string]: [number[], Impl]
}

interface ImplTableFactoryProps {
  panic: (message: string, token: Token) => string

  peek: Lexer['peek']
  advance: Lexer['advance']
  accept: Lexer['accept']
  expect: Lexer['expect']

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

export const createParser = (regexp: RegExp, fn: ImplTableFactory) => {
  const tokenizer = (input: string) => input.matchAll(new RegExpToken(regexp))
  const lexer = createLexer(tokenizer)
  const parse = (input: string) => {
    const { onerror, filter, peek, advance, expect, accept } = lexer(input)

    filter((token: Token) => token.group !== 'nul')

    const panic = (message: string, token: Token) =>
      `${message}\n` +
      annotate({
        message: `${message} [${token.group}]: ${token.value}`,
        index: token.index,
        input: token.source.input,
      }).message

    onerror((error: Error) => {
      /* istanbul ignore next */
      if (error instanceof UnexpectedTokenError) {
        throw new SyntaxError(panic(`bad token - expected: '${error.expectedValue}' [${error.expectedGroup}], instead received:`, error.currentToken))
      } else {
        /* istanbul ignore next */
        throw error
      }
    })

    // prettier-ignore
    const post = (bp: number): Fn => t => [t, expr(bp)]
    const pre: Fn = (t, r, x) => {
      if (r) throw new SyntaxError(panic('bad token', t))
      else return [t, x]
    }
    const bin: Fn = (t, r, x) => [t, x, expr(r)]
    const pass: Impl = { nud: t => t, led: (t, _, x) => [x, t] }
    const never: Impl = {
      nud: (t, rbp) => {
        if (rbp) throw new SyntaxError(panic('bad op', t))
      },
    }
    const until =
      (op: string, min_bp: number, fn: (t: Token, x: unknown, y: unknown, r: number) => unknown): Fn =>
      (t: Token, r: number, L: unknown) => {
        const m = !peek('ops', op) ? expr(min_bp) : null
        expect('ops', op)
        return fn(t, L, m, r)
      }

    const bp = (t: Token) => desc(t)[0]
    const desc = (t: Token) => {
      const ctx = impl[t] ?? impl[t.group]
      if (!ctx) throw new SyntaxError(panic('bad op', t))
      return ctx
    }
    const denom = (type: 'led' | 'nud', t: Token, rbp: number, left?: unknown) => {
      const fn = desc(t)[1][type]
      if (fn) return fn(t, rbp, left)
      else throw new SyntaxError(panic('bad ' + type, t))
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
      panic,

      peek,
      advance,
      accept,
      expect,

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
      node.toString = function () {
        return nodeToString(this)
      }
      ;(node as any).panic = panic
    }

    return node as Node & { panic: typeof panic }
  }

  return parse
}
