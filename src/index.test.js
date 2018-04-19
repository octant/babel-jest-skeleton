/* eslint-env jest */

import Foo from './index'

describe('Foo', () => {
  test('has bar function', () => {
    const foo = new Foo()
    expect(foo.bar()).toEqual(true)
  })
})
