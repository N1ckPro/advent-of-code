import { performance, PerformanceObserver } from 'node:perf_hooks';
import process from 'node:process';
import { readInput } from './input.ts';

export type Solution<Result> = (resource: string[]) => Promise<Result> | Result;

export const benchmark = async <Result>(day: number, part: number, solution: Solution<Result>) => {
	if (process.env.NODE_ENV === 'test') return;

	const observer = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			console.log(`${entry.name}: ${entry.duration.toFixed(2)} ms`);
		}
	});
	observer.observe({ entryTypes: ['measure'], buffered: true });

	const resource = await readInput(day);
	performance.mark('start');
	const result = await solution(resource);
	performance.mark('end');
	performance.measure('Took', 'start', 'end');
	console.log(`Part ${part} Result: ${result}`);
};
