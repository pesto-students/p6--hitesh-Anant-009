function sum (a,b) {
    return a + b;
  }
  
  function diff(a,b) {
    return a - b;
  }
  
  function product(a,b) {
    return a * b;
  }
  
  test('Sum of 1 + 1 equals 2', () => {
    expect(sum(1, 1)).toBe(2)
  })
  test('Product of 1 * 1 equals 1', () => {
    expect(product(1, 1)).toBe(1)
  })
  test('Differrence of 1 - 1 equals 0', () => {
    expect(diff(1, 1)).toBe(0)
  })