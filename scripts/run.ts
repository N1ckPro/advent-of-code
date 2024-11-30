import { existsSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';
import { pathToFileURL } from 'node:url';
import { createCommand } from 'commander';

const command = createCommand()
	.option('-d --day <number>', 'Day from which to run solutions')
	.option('-y --year <number>', 'Year from which to run solutions');
const program = command.parse(process.argv);
const options = program.opts();
const { day, year } = options;

if (typeof day === 'undefined') throw new Error('Day argument is required!');

const basePath = join('src', 'solutions', year ?? '2024', day >= 10 ? day.toString() : `0${day}`);
if (!existsSync(basePath)) throw new Error(`Invalid path ${basePath}`);
if (!existsSync(join(basePath, 'part1.ts'))) throw new Error(`Provided directory contains no solutions!`);

console.log(`Running solutions for Day ${day} (${year ?? '2024'})`);
await import(pathToFileURL(join(basePath, 'part1.ts')).href);
if (!existsSync(join(basePath, 'part2.ts'))) process.exit();
await import(pathToFileURL(join(basePath, 'part2.ts')).href);
