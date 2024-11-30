import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

export const readInput = async (day: number, year: string, filterEmpty = true) => {
	const input = await readFile(join('inputs', year, `${day >= 10 ? day.toString() : `0${day}`}.txt`), 'utf8');

	if (filterEmpty) return input.split('\n').filter((line) => line !== '');
	else return input.split('\n');
};
