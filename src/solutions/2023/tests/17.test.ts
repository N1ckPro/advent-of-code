import { readInput } from '../../../lib/input.ts';
import { solution as solution1 } from '../17/part1.ts';
import { solution as solution2 } from '../17/part2.ts';

const input1 = `2413432311323
3215453535623
3255245654254
3446585845452
4546657867536
1438598798454
4457876987766
3637877979653
4654967986887
4564679986453
1224686865563
2546548887735
4322674655533`.split('\n');

const input2 = `111111111111
999999999991
999999999991
999999999991
999999999991`.split('\n');

describe('Crucidle heat loss be parsed correctly', () => {
	test('Part 1 should be solved successfully', async () => {
		expect(solution1(input1)).toBe(102);
	});

	test('Part 2 should be solved successfully', async () => {
		expect(solution2(input1)).toBe(94);
		expect(solution2(input2)).toBe(71);
	});
});
