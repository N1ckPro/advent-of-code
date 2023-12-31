import { readFile } from 'node:fs/promises';
import { EOL } from 'node:os';
import { join } from 'node:path';

export const readInput = async (day: number, filterEmpty = true) => {
	const input = await readFile(
		join('src', 'solutions', '2023', day >= 10 ? day.toString() : `0${day}`, 'input.txt'),
		'utf8',
	);

	if (filterEmpty) return input.split(EOL).filter((line) => line !== '');
	else return input.split(EOL);
};
