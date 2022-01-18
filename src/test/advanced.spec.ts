import { createParser, joinRegExp, Node } from '..'

describe('parse', () => {
  let parse: (input: string) => Node

  beforeEach(() => {
    parse = createParser(
      joinRegExp(
        [
          /(?<ids>[a-zA-Z_$][a-zA-Z0-9_$]*)/,
          /(?<num>inf|nan|\d[\d_]*(\.((e[+\-]?)?[\d]+)+[kBb]*|(e[+\-]?[\d]+)?[kBb]*))/,
          /(?<ops>\+\+|\-\-|\+=|-=|\*=|\/=|%=|<<=|>>=|&=|\^=|\|=|&&|!&|\|\||!=|==|>=|<=|>>|<<|\.\.|[\[\]\(\)\{\}\\\"'`,\-~+*\/%=<>?!:;.|&^@]{1})/,
          /(?<nul>\s+)/,
          /(?<err>.)/,
        ],
        'g'
      ),
      ({ never, pass, bin, pre, post, until, expr }) => ({
        ops: [[], never],
        eof: [[], never],
        ids: [[], pass],
        num: [[], pass],

        ',': [[1, 1], { led: bin }],
        ';': [[1, 1], { led: bin }],
        '..': [[1, 1], { led: bin }],

        '=': [[2, 1], { led: bin }],
        '+=': [[2, 1], { led: bin }],
        '-=': [[2, 1], { led: bin }],
        '*=': [[2, 1], { led: bin }],
        '/=': [[2, 1], { led: bin }],
        '%=': [[2, 1], { led: bin }],
        '<<=': [[2, 1], { led: bin }],
        '>>=': [[2, 1], { led: bin }],
        '&=': [[2, 1], { led: bin }],
        '^=': [[2, 1], { led: bin }],
        '|=': [[2, 1], { led: bin }],

        '?': [[3, 1], { led: until(':', 0, (t, L, M, r) => [t, L, M, expr(r)]) }],

        '||': [[4, 3], { led: bin }],

        '&&': [[5, 4], { led: bin }],

        '|': [[6, 5], { led: bin }],

        '^': [[7, 6], { led: bin }],

        '&': [[8, 7], { led: bin }],

        '==': [[9, 8], { led: bin }],
        '!=': [[9, 8], { led: bin }],

        '<': [[10, 9], { led: bin }],
        '>': [[10, 9], { led: bin }],
        '<=': [[10, 9], { led: bin }],
        '>=': [[10, 9], { led: bin }],

        '>>': [[11, 10], { led: bin }],
        '<<': [[11, 10], { led: bin }],

        '+': [[12, 12], { led: bin, nud: post(14) }],
        '-': [[12, 12], { led: bin, nud: post(14) }],

        '*': [[13, 13], { led: bin }],
        '/': [[13, 13], { led: bin }],
        '%': [[13, 13], { led: bin }],

        '!': [[14, 1], { led: pre, nud: post(14) }],
        '~': [[14, 1], { led: pre, nud: post(14) }],

        '++': [[15, 1], { led: (t, _, x) => [t.as('=+'), x], nud: post(14) }],
        '--': [[15, 1], { led: (t, _, x) => [t.as('=-'), x], nud: post(14) }],
        '[': [[15, 15], { led: until(']', 0, (t, L, R) => [t, L, R]) }],
        '(': [[15, 0], { led: until(')', 0, (t, L, R) => [t.as('@'), L, R]), nud: until(')', 0, (_, __, x) => x) }],
        '.': [[15, 16], { led: bin }],
      })
    )
  })

  it('parses correctly', () => {
    expect('' + parse('1')).toEqual('1')
    expect('' + parse('3*4+5*6')).toEqual('(+ (* 3 4) (* 5 6))')
    expect('' + parse('3*(4+5)*6')).toEqual('(* (* 3 (+ 4 5)) 6)')
    expect('' + parse('1..2')).toEqual('(.. 1 2)')
    expect('' + parse('1k..10k')).toEqual('(.. 1k 10k)')
    expect('' + parse('1..2+5')).toEqual('(.. 1 (+ 2 5))')
    expect('' + parse('1+2..2+5')).toEqual('(.. (+ 1 2) (+ 2 5))')
    expect('' + parse('1;2')).toEqual('(; 1 2)')
    expect('' + parse('1;2;3')).toEqual('(; (; 1 2) 3)')
    expect('' + parse('1||2')).toEqual('(|| 1 2)')
    expect('' + parse('1>>2')).toEqual('(>> 1 2)')
    expect('' + parse('1||2&&3')).toEqual('(|| 1 (&& 2 3))')
    expect('' + parse('1&&2||3')).toEqual('(|| (&& 1 2) 3)')
    expect('' + parse('+1')).toEqual('(+ 1)')
    expect('' + parse('a(z)')).toEqual('(@ a z)')
    expect('' + parse('a(z=1)')).toEqual('(@ a (= z 1))')
    expect('' + parse('a()=x')).toEqual('(= (@ a ()) x)')
    expect('' + parse('a(z)=x')).toEqual('(= (@ a z) x)')
    expect('' + parse('a(z[0..2])=x')).toEqual('(= (@ a ([ z (.. 0 2))) x)')
    expect('' + parse('a(z[0..2]=2)=x')).toEqual('(= (@ a (= ([ z (.. 0 2)) 2)) x)')
    expect('' + parse('a(z[0..2],b[4.5..8.5])=x')).toEqual('(= (@ a (, ([ z (.. 0 2)) ([ b (.. 4.5 8.5)))) x)')
    expect('' + parse('x=a(1)')).toEqual('(= x (@ a 1))')
    expect('' + parse('a(1 + 2)')).toEqual('(@ a (+ 1 2))')
    expect('' + parse('a(1 + 2, 3)')).toEqual('(@ a (, (+ 1 2) 3))')
    expect('' + parse('a(1 + 2, b(3))')).toEqual('(@ a (, (+ 1 2) (@ b 3)))')
    expect('' + parse('a(1 + 2, b(3), c[1])')).toEqual('(@ a (, (, (+ 1 2) (@ b 3)) ([ c 1)))')
    expect('' + parse('a=1')).toEqual('(= a 1)')
    expect('' + parse('a+=1')).toEqual('(+= a 1)')
    expect('' + parse('a=1+2')).toEqual('(= a (+ 1 2))')
    expect('' + parse('a=1+2/3')).toEqual('(= a (+ 1 (/ 2 3)))')
    expect('' + parse('!1')).toEqual('(! 1)')
    expect('' + parse('!!1')).toEqual('(! (! 1))')
    expect('' + parse('!!1*2')).toEqual('(* (! (! 1)) 2)')
    expect(() => parse('1+')).toThrow('bad op')
    expect('' + parse('1 + +-1')).toEqual('(+ 1 (+ (- 1)))')
    expect('' + parse('1 + 2 * 3')).toEqual('(+ 1 (* 2 3))')
    expect('' + parse('a + b * c * d + e')).toEqual('(+ (+ a (* (* b c) d)) e)')
    expect('' + parse('f . g . h')).toEqual('(. (. f g) h)')
    expect('' + parse('1 + 2 + f . g . h * 3 * 4')).toEqual('(+ (+ 1 2) (* (* (. (. f g) h) 3) 4))')
    expect('' + parse('--1 * 2')).toEqual('(* (-- 1) 2)')
    expect('' + parse('--1--')).toEqual('(-- (=- 1))')
    expect('' + parse('--f . g')).toEqual('(-- (. f g))')
    expect('' + parse('f . g--')).toEqual('(=- (. f g))')
    expect('' + parse('--!f . g')).toEqual('(-- (! (. f g)))')
    expect('' + parse('!--f . g')).toEqual('(! (-- (. f g)))')
    expect(() => parse('-9!0')).toThrow('bad token')
    expect('' + parse('1+!0')).toEqual('(+ 1 (! 0))')
    expect('' + parse('! f . g ')).toEqual('(! (. f g))')
    expect('' + parse('(((0)))')).toEqual('0')
    expect('' + parse('x[0][1]')).toEqual('([ ([ x 0) 1)')
    expect('' + parse('x[y[1]]')).toEqual('([ x ([ y 1))')
    expect(
      '' +
        parse(`
        a ? b
      : c ? d
          : e
    `)
    ).toEqual('(? a b (? c d e))')
    expect('' + parse('a = 0 ? b : c = d')).toEqual('(= a (? 0 b (= c d)))')
  })

  it('throws on errors', () => {
    expect(() => parse('(')).toThrow('bad token')
    expect(() => parse('(1')).toThrow('bad token')
    expect(() => parse('a[')).toThrow('bad token')
    expect(() => parse('a[1')).toThrow('bad token')
    expect(() => parse('')).not.toThrow()
  })
})
