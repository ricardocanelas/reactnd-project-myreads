import { removeWhiteSpace } from './string'

it('Remove whitespaces', () => {
    let str = removeWhiteSpace("   myReads   ")
    expect('myReads').toBe(str)

    str = removeWhiteSpace("  hello    world   ")
    expect('hello world').toBe(str)
})