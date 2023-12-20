import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import type { Rating, Rule, Sign } from './shared.js';

type Range = Record<
	Rating,
	{
		lessThan: number;
		moreThan: number;
	}
>;

const getCombinations = (workflows: Map<string, Rule[]>, result: boolean | string, range: Range): number => {
	const rangeArray = Object.values(range);
	if (rangeArray.some((rating) => rating.lessThan - rating.moreThan <= 1)) return 0;

	if (typeof result === 'string') {
		// eslint-disable-next-line @typescript-eslint/no-use-before-define
		return parseWorkflow(workflows, result, range);
	}

	if (!result) return 0;
	return rangeArray.reduce((sum, rating) => sum * Math.max(0, rating.lessThan - rating.moreThan - 1), 1);
};

const parseWorkflow = (workflows: Map<string, Rule[]>, name: string, partRange: Range): number => {
	const workflow = workflows.get(name)!;

	let total = 0;
	const newPartRange = { ...partRange };
	for (const rule of workflow) {
		if (!rule.against) {
			total += getCombinations(workflows, rule.result as string, newPartRange);
			break;
		}

		const newRange = {
			lessThan: rule.sign === '<' ? rule.against! : newPartRange[rule.rating!].lessThan,
			moreThan: rule.sign === '>' ? rule.against! : newPartRange[rule.rating!].moreThan,
		};
		total += getCombinations(workflows, rule.result, { ...newPartRange, [rule.rating!]: newRange });
		newPartRange[rule.rating!] = {
			lessThan: rule.sign === '>' ? rule.against! + 1 : newPartRange[rule.rating!].lessThan,
			moreThan: rule.sign === '<' ? rule.against! - 1 : newPartRange[rule.rating!].moreThan,
		};
	}

	return total;
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

	return parseWorkflow(workflows, 'in', {
		a: {
			lessThan: 4_001,
			moreThan: 0,
		},
		m: {
			lessThan: 4_001,
			moreThan: 0,
		},
		s: {
			lessThan: 4_001,
			moreThan: 0,
		},
		x: {
			lessThan: 4_001,
			moreThan: 0,
		},
	});
};

await benchmark(19, 2, solution, false);
