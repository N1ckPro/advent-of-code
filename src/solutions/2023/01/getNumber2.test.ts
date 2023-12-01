import { getNumber } from './getNumber2.ts';

describe('Numbers should be found in strings', () => {
	test('6mlhponeglrzrvbsseven should give 67', () => {
		expect(getNumber('6mlhponeglrzrvbsseven')).toBe(67);
	});
	test('8d should give 88', () => {
		expect(getNumber('8d')).toBe(88);
	});
	test('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex should give 81', () => {
		expect(getNumber('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex')).toBe(81);
	});
});
