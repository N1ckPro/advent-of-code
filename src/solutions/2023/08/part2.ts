import { benchmark, type Solution } from '../../../lib/index.js';
import { lowestCommonMultiple } from '../../../lib/math.js';

export const solution: Solution<number> = (input: string[]) => {
	const instructions = input.shift()!.split('');
	const steps = input.reduce((map, line) => {
		const [key, value] = line.replaceAll(/[ ()+]/g, '').split('=');
		map.set(key, value.split(',') as [string, string]);
		return map;
	}, new Map<string, [string, string]>());

	const nodes = [...steps].filter((step) => step[0].endsWith('A')).map((v) => v[1]);
	const results = nodes.map((node) => {
		let current = node;
		let result = 1;
		while (true) {
			for (const instruction of instructions) {
				const key = instruction === 'L' ? current[0] : current[1];
				if (key.endsWith('Z')) return result;
				current = steps.get(key)!;
				result++;
			}
		}
	});

	let result = results[0];
	for (let i = 1; i < results.length; i++) {
		result = lowestCommonMultiple(result, results[i]);
	}

	return result;
};

await benchmark(2_023, 8, 2, solution);
