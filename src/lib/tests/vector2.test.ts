import { Vector2 } from '../vector2.ts';

const a = new Vector2(4, 2, 2);
const b = new Vector2(2, 3);
const c = new Vector2(3, 3);
const d = new Vector2(6, 3);

describe('Vector2 methods should work correctly', () => {
	test('isAdjacent method should work correctly', () => {
		expect(a.isAdjacent(d)).toBe(true);
		expect(d.isAdjacent(a)).toBe(true);
		expect(a.isAdjacent(b)).toBe(false);
		expect(a.isAdjacent(c)).toBe(true);
		expect(b.isAdjacent(c)).toBe(true);
	});
});
