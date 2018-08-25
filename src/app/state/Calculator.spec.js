import calculator from './Calculator';

describe('calc test', () => {
    it("calc sum test ", () => {
        expect(calculator.sum).toBe(0)
        calculator.add(10)
        expect(calculator.sum).toBe(10)
    })
})