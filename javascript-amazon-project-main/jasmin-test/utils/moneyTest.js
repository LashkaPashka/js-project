import {CountPrice} from '../../scripts/utils/utils.js'


describe("Test #1", () => {
    it('Convert dollars in cents', () => {
        expect(CountPrice(2100)).toEqual('21.00');
    });

    it('works with 0', () => {
        expect(CountPrice(0)).toEqual('0.00');
    });

    it('round decimal number', () => {
        expect(CountPrice(2000.5)).toEqual('20.00');
    });
});