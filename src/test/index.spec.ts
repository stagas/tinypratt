import { createParser, joinRegExp, Node } from '../'

let total = 0

function to_string(node: Node): string {
  total++
  if (total > 5000) {
    throw new Error('Tree too large')
  }

  if (Array.isArray(node)) {
    return '(' + node.map(child => to_string(child)).join(' ') + ')'
  }

  return node != null ? node.value : node
}

describe('parse', () => {
  let parse: (input: string) => Node

  beforeEach(() => {
    parse = createParser(
      joinRegExp(
        [
          /(?<ids>[a-z_][a-z0-9_]*)/, //
          /(?<num>\d+(\.\d*)?)/,
          /(?<ops>[\[\]\(\)\",\-~+*\/=<>?!:.|&^@$]{1})/,
          /(?<nul>\s+)/,
          /(?<err>.)/,
        ],
        'gi'
      ),
      ({ pass, pre, post, bin, until, never, expr }) => ({
        ops: [[], never],
        eof: [[], never],
        ids: [[], pass],
        num: [[], pass],
        '!': [[11, 1], { led: pre, nud: post(9) }],
        '.': [[14, 15], { led: bin }],
        '=': [[4, 3], { led: bin }],
        '+': [[5, 6], { led: bin, nud: post(9) }],
        '-': [[5, 6], { led: bin, nud: post(9) }],
        '*': [[7, 8], { led: bin }],
        '/': [[7, 8], { led: bin }],
        '(': [[], { nud: until(')', 0, (_, __, x) => x) }],
        '[': [[11, 12], { led: until(']', 0, (t, L, R) => [t, L, R]) }],
        '?': [[4, 3], { led: until(':', 0, (t, L, M, r) => [t, L, M, expr(r)]) }],
      })
    )
  })

  it('parses correctly', () => {
    let s: Node

    s = parse('1')
    expect(to_string(s)).toEqual('1')

    s = parse('+1')
    expect(to_string(s)).toEqual('(+ 1)')

    s = parse('!1')
    expect(to_string(s)).toEqual('(! 1)')

    s = parse('!!1')
    expect(to_string(s)).toEqual('(! (! 1))')

    s = parse('!!1*2')
    expect(to_string(s)).toEqual('(* (! (! 1)) 2)')

    expect(() => parse('1+')).toThrow('bad op')

    s = parse('1 + +-1')
    expect(to_string(s)).toEqual('(+ 1 (+ (- 1)))')

    s = parse('1 + 2 * 3')
    expect(to_string(s)).toEqual('(+ 1 (* 2 3))')

    s = parse('a + b * c * d + e')
    expect(to_string(s)).toEqual('(+ (+ a (* (* b c) d)) e)')

    s = parse('f . g . h')
    expect(to_string(s)).toEqual('(. (. f g) h)')

    s = parse('1 + 2 + f . g . h * 3 * 4')
    expect(to_string(s)).toEqual('(+ (+ 1 2) (* (* (. (. f g) h) 3) 4))')

    s = parse('--1 * 2')
    expect(to_string(s)).toEqual('(* (- (- 1)) 2)')

    s = parse('--f . g')
    expect(to_string(s)).toEqual('(- (- (. f g)))')

    expect(() => parse('-9!0')).toThrow('bad token')

    s = parse('1+!0')
    expect(to_string(s)).toEqual('(+ 1 (! 0))')

    s = parse('! f . g ')
    expect(to_string(s)).toEqual('(! (. f g))')

    s = parse('(((0)))')
    expect(to_string(s)).toEqual('0')

    s = parse('x[0][1]')
    expect(to_string(s)).toEqual('([ ([ x 0) 1)')

    s = parse(`
      a ? b :
      c ? d
      : e
    `)
    expect(to_string(s)).toEqual('(? a b (? c d e))')

    s = parse('a = 0 ? b : c = d')
    expect(to_string(s)).toEqual('(= a (? 0 b (= c d)))')
  })

  it('throws on errors', () => {
    expect(() => parse('%')).toThrow('bad op')
    expect(() => parse('1+%')).toThrow('bad op')
    expect(() => parse("1'")).toThrow('bad op')
    expect(() => parse("'")).toThrow('bad op')
    expect(() => parse('(')).toThrow('bad token')
    expect(() => parse('(1')).toThrow('bad token')
    expect(() => parse('a[')).toThrow('bad token')
    expect(() => parse('a[1')).toThrow('bad token')
    expect(() => parse('')).not.toThrow()
  })
})
