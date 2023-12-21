import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import type { Module, ProcessingModule } from './shared.js';
import { Pulse, parseModules } from './shared.js';

const buttonPress = (modules: Map<string, Module>) => {
	const toProcess = [[modules.get('broadcaster')!, Pulse.Low, '']] as ProcessingModule[];
	let totalLowPulses = 1;
	let totalHighPulses = 0;

	while (toProcess.length) {
		const [module, pulse, fromModule] = toProcess.shift()!;
		const newPulse = module.processPulse(pulse, fromModule);
		if (typeof newPulse === 'undefined') continue;

		for (const output of module.outputs) {
			const newModule = modules.get(output);
			if (newModule) toProcess.push([newModule, newPulse, module.name]);

			if (newPulse === Pulse.High) totalHighPulses++;
			else totalLowPulses++;
		}
	}

	return [totalHighPulses, totalLowPulses];
};

export const solution: Solution<number> = (input: string[]) => {
	const modules = parseModules(input);
	let totalHighPulses = 0;
	let totalLowPulses = 0;
	for (let i = 0; i < 1_000; i++) {
		const [high, low] = buttonPress(modules);
		totalHighPulses += high;
		totalLowPulses += low;
	}

	return totalHighPulses * totalLowPulses;
};

await benchmark(20, 1, solution);
