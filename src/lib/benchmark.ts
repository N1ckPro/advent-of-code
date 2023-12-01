import { performance, PerformanceObserver } from 'node:perf_hooks';

export type Solution<Input, Result> = (resource: Input) => Promise<Result> | Result;

export const benchmark = async <Input, Result>(resource: Input, solution: Solution<Input, Result>) => {
	const observer = new PerformanceObserver((list) => {
		for (const entry of list.getEntries()) {
			console.log(`${entry.name}: ${entry.duration.toFixed(2)} ms`);
		}
	});
	observer.observe({ entryTypes: ['measure'], buffered: true });
	performance.mark('start');
	const result = await solution(resource);
	performance.mark('end');
	performance.measure('Took', 'start', 'end');
	return result;
};
