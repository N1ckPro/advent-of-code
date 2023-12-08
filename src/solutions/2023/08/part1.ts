import { benchmark, type Solution } from '../../../lib/index.js';

export const solution: Solution<number> = (input: string[]) => {
	const instructions = input.shift()!.split('');
	const steps = input.reduce((map, line) => {
		const [key, value] = line.replaceAll(/[ ()+]/g, '').split('=');
		map.set(key, value.split(',') as [string, string]);
		return map;
	}, new Map<string, [string, string]>());

	let result = 1;
	let current = steps.get('AAA')!;
	while (true) {
		for (const instruction of instructions) {
			const key = instruction === 'L' ? current[0] : current[1];
			if (key === 'ZZZ') return result;
			current = steps.get(key)!;
			result++;
		}
	}
};

await benchmark(8, 1, solution);
