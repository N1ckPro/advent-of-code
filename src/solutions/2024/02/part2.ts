import { benchmark, type Solution } from '../../../lib/index.ts';

export const solution: Solution<number> = (input: string[]) => {
	let reportType = 0;
	let safeReports = 0;

	const isSafe = (a: number, b: number) => {
		const difference = a - b;
		reportType ||= Math.sign(difference);
		return !(difference === 0 || Math.abs(difference) > 3 || Math.sign(difference) !== reportType);
	};

	for (const rawReport of input) {
		const report = rawReport.split(' ').map(Number);
		reportType = 0;

		if (report.every((value, index) => !index || isSafe(value, report[index - 1]))) {
			safeReports++;
			continue;
		}

		const badLevel = report.findIndex((value, index) => index && !isSafe(value, report[index - 1]));
		for (let i = Math.max(badLevel - 2, 0); i <= badLevel; i++) {
			const newReport = report.toSpliced(i, 1);
			reportType = 0;

			if (newReport.every((value, index) => !index || isSafe(value, newReport[index - 1]))) {
				safeReports++;
				break;
			}
		}
	}

	return safeReports;
};

await benchmark(2_024, 2, 2, solution);
