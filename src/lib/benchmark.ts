import { performance } from 'node:perf_hooks';
import process from 'node:process';
import { readInput } from './input.ts';

export type Solution<Result> = (resource: string[]) => Promise<Result> | Result;

export const benchmark = async <Result>(day: number, part: number, solution: Solution<Result>, filterEmpty = true) => {
	if (process.env.NODE_ENV === 'test') return;

	const resource = await readInput(day, filterEmpty);
	const start = performance.now();
	const result = await solution(resource);
	const end = performance.now();
	console.log(`Part ${part} Result: ${result}`);
	console.log(`Took: ${(end - start).toFixed(2)} ms`);
};
