import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { lowestCommonMultiple } from '../../../lib/math.ts';
import type { Conjuction, Module, ProcessingModule } from './shared.js';
import { Pulse, parseModules } from './shared.js';

const buttonPress = (modules: Map<string, Module>, conjuctionName: string): true | [number, string[]] => {
	const toProcess = [[modules.get('broadcaster')!, Pulse.Low, '']] as ProcessingModule[];
	let totalRxPulses = 0;
	const highPulses: string[] = [];

	while (toProcess.length) {
		const [module, pulse, fromModule] = toProcess.shift()!;
		if (pulse === Pulse.High && conjuctionName === module.name) highPulses.push(fromModule);
		const newPulse = module.processPulse(pulse, fromModule);
		if (typeof newPulse === 'undefined') continue;

		for (const output of module.outputs) {
			if (output === 'rx') {
				totalRxPulses++;
				if (newPulse === Pulse.Low) return true;
			}

			const newModule = modules.get(output);
			if (newModule) toProcess.push([newModule, newPulse, module.name]);
		}
	}

	return [totalRxPulses, highPulses];
};

export const solution: Solution<number> = (input: string[]) => {
	const modules = parseModules(input);
	const conjuction = Array.from(modules.values()).find((v) => v.outputs.includes('rx')) as Conjuction;

	let presses = 1;
	const data = new Map<string, number>();
	while (data.size < conjuction.lastPulses.size) {
		const result = buttonPress(modules, conjuction.name);
		if (result === true) return presses;

		for (const pulse of result[1]) {
			data.set(pulse, data.get(pulse) ?? presses);
		}

		presses++;
	}

	const arrayData = Array.from(data.values());
	let result = arrayData[0];
	for (let i = 1; i < arrayData.length; i++) {
		result = lowestCommonMultiple(result, arrayData[i]);
	}

	return result;
};

await benchmark(20, 2, solution);
