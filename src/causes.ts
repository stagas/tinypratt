import { annotate } from 'annotate-code'
import { Impl, Token } from './'

export class ParserErrorCause {
  name = 'ParserUnknownError'
  index: number
  input: string
  line!: number
  col!: number
  message!: string
  constructor(public token: Token, public short?: string) {
    this.index = token.index
    this.input = token.source.input
    const message = `${short || this.name}: [${token.group}]: ${token.value}`
    Object.assign(
      this,
      annotate({
        message,
        index: token.index,
        input: token.source.input,
      })
    )
    this.message = message + '\n' + this.message
  }
}

export class UnexpectedToken extends ParserErrorCause {
  name = 'ParserUnexpectedToken'
  constructor(token: Token, public group: string, public value?: string) {
    super(token, `Expected: '${value}' [${group}], instead received`)
  }
}
export class BadImpl extends ParserErrorCause {
  name = 'ParserBadImpl'
  constructor(token: Token, public impl: keyof Impl) {
    super(token, `Bad ${impl}`)
  }
}
export class BadToken extends ParserErrorCause {
  name = 'ParserBadToken'
}
export class BadOp extends ParserErrorCause {
  name = 'ParserBadOp'
}
