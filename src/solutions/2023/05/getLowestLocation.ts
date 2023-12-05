import type { MapTypes } from './shared.js';
import { Seed } from './shared.js';

export const getLowestLocation = (input: string[]) => {
	const neededSeeds = input[0].replace('seeds: ', '').split(' ').map(Number);
	const seeds: Seed[] = [];

	let sourceType: MapTypes = 'seed';
	let destinationType: MapTypes = 'seed';

	for (const seed of neededSeeds) {
		seeds.push(new Seed(seed));
	}

	for (const line of input) {
		if (line.startsWith('seeds: ')) continue;

		if (/\d/.test(line[0])) {
			const [destinationStart, sourceStart, length] = line.split(' ').map(Number);

			for (const seed of seeds) {
				if (seed[sourceType] >= sourceStart && seed[sourceType] <= sourceStart + length) {
					seed[destinationType] = destinationStart + seed[sourceType] - sourceStart;
				} else if (!seed[destinationType]) seed[destinationType] = seed[sourceType];
			}
		} else {
			[sourceType, , destinationType] = line.replace(' map:', '').split('-') as MapTypes[];
		}
	}

	return Math.min(...seeds.map((seed) => seed.location));
};
