import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { hash } from './hash.js';

export const solution: Solution<number> = (input: string[]) => {
	const boxes = Array.from({ length: 256 })
		.fill(null)
		.map(() => new Map<string, number>());

	for (const sequence of input[0].split(',')) {
		const matches = /(?<label>[a-z]+)(?<type>[=-])(?<lens>\d)?/.exec(sequence)!;
		const { label, lens, type } = matches.groups!;
		const box = boxes[hash(label)];

		switch (type) {
			case '=':
				box.set(label, Number(lens));
				break;
			case '-':
				box.delete(label);
				break;
		}
	}

	return boxes.reduce((sum, box, index) => {
		let slotCount = 1;
		let result = 0;
		for (const [, lens] of box) {
			result += (index + 1) * slotCount * lens;
			slotCount++;
		}

		return sum + result;
	}, 0);
};

await benchmark(15, 2, solution);
