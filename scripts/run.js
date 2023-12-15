import { createCommand } from 'commander';
import childProcess from 'node:child_process';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';

const command = createCommand()
	.option('-d --day <number>', 'Day from which to run solutions')
	.option('-y --year <number>', 'Year from which to run solutions');
const program = command.parse(process.argv);
const options = program.opts();
const { day, year } = options;

const exec = promisify(childProcess.exec);
const basePath = join('src', 'solutions', year ?? '2023', day >= 10 ? day.toString() : `0${day}`);
if (!existsSync(basePath)) throw new Error(`Invalid path ${basePath}`);
if (!existsSync(join(basePath, 'part1.ts'))) throw new Error(`Provided directory contains no solutions!`);

const output1 = await exec(`npx ts-node ${join(basePath, 'part1.ts')}`);
console.log(output1.stdout.trim());

if (!existsSync(join(basePath, 'part2.ts'))) process.exit();
const output2 = await exec(`npx ts-node ${join(basePath, 'part2.ts')}`);
console.log(output2.stdout.trim());
