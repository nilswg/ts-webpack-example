import { sum } from '../src'

describe('test sum', () => {
    it('should be pass', () => {
        expect(1).toEqual(1)
    })

    it('test sum', () => {
        const res = sum(1, 2)
        expect(res).toEqual(3)
    })
})
