import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import type { Rating, Rule, Sign } from './shared.js';
import { Part } from './shared.js';

const testPart = (workflows: Map<string, Rule[]>, part: Part, name: string): boolean => {
	const workflow = workflows.get(name)!;
	let result: boolean | string = '';
	for (const rule of workflow) {
		if (!rule.rating) {
			result = rule.result;
			break;
		}

		if (rule.sign === '<' ? part[rule.rating!] < rule.against! : part[rule.rating!] > rule.against!) {
			result = rule.result;
			break;
		}
	}

	return typeof result === 'string' ? testPart(workflows, part, result) : result;
};

export const solution: Solution<number> = (input: string[]) => {
	const separator = input.indexOf('');
	const workflows = new Map(
		input.slice(0, separator).map((v) => {
			const [name, rawRules] = v.slice(0, -1).split('{');
			const rules: Rule[] = [];
			for (const rawRule of rawRules.split(',')) {
				const [condition, result] = rawRule.split(':');
				let finalResult: boolean | string = result ?? condition;
				if (condition === 'A' || result === 'A') finalResult = true;
				else if (condition === 'R' || result === 'R') finalResult = false;

				const rule: Rule = {
					result: finalResult,
				};

				if (result) {
					rule.rating = condition[0] as Rating;
					rule.sign = condition.slice(1, 2) as Sign;
					rule.against = Number(condition.slice(2));
				}

				rules.push(rule);
			}

			return [name, rules] as const;
		}),
	);

	const parts = input.slice(separator + 1).map((v) => {
		const [x, m, a, s] = v.replaceAll(/[{}]/g, '').split(',');
		return new Part(Number(a.slice(2)), Number(m.slice(2)), Number(s.slice(2)), Number(x.slice(2)));
	});

	return parts.reduce(
		(sum, part) => (testPart(workflows, part, 'in') ? sum + part.a + part.m + part.s + part.x : sum),
		0,
	);
};

await benchmark(2_023, 19, 1, solution, false);
