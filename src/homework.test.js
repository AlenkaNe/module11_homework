

import {countDown}  from "./homework";

describe('test', () => {
	it('The function should return the join numbers', () => {
		const result = countDown(3)
		expect(result).toBe("321")
	});
  it('Checking for a number', () => {
    const result = countDown('m')
    expect(result).toBe('Недопустимые символы. Введите положительное число.')
  })
  it('Checking for a positive number', () => {
    const result = countDown(0)
    expect(result).toBe('Недопустимые символы. Введите положительное число.')
  })
});
