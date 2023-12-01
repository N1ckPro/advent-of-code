import { getNumber } from './getNumber1.ts';

describe('Numbers should be found in strings', () => {
	test('54nzzddht8ninelrkkseightseven6 should give 56', () => {
		expect(getNumber('54nzzddht8ninelrkkseightseven6')).toBe(56);
	});
	test('8d should give 88', () => {
		expect(getNumber('8d')).toBe(88);
	});
	test('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex should give 67', () => {
		expect(getNumber('eightsevenvqvzlqxkbm6rqhsgqpnine7twonex')).toBe(67);
	});
});
