import calculator from './Calculator';

describe("Calculator spec ", () => {
    it("calc test", () => {
        expect(calculator.sum).toBe(0)
        calculator.add(1)
        expect(calculator.sum).toBe(1)
    })
})