export enum ModuleType {
	Broadcaster,
	Conjuction,
	FlipFlop,
}

export enum Pulse {
	Low = 0,
	High,
}

export class BaseModule {
	public name: string;

	public outputs: string[] = [];

	public constructor(name: string, outputs: string[]) {
		this.name = name;
		this.outputs = outputs;
	}
}

export class Broadcaster extends BaseModule {
	public readonly type = ModuleType.Broadcaster;

	public processPulse() {
		return Pulse.Low;
	}
}

export class Conjuction extends BaseModule {
	public lastPulses = new Map<string, Pulse>();

	public readonly type = ModuleType.Conjuction;

	public processPulse(pulse: Pulse, input: string) {
		this.lastPulses.set(input, pulse);
		return Array.from(this.lastPulses.values()).every((v) => v === Pulse.High) ? Pulse.Low : Pulse.High;
	}

	public setLastPulses(inputs: string[]) {
		for (const input of inputs) {
			this.lastPulses.set(input, Pulse.Low);
		}
	}

	public constructor(name: string, outputs: string[]) {
		super(name, outputs);
	}
}

export class FlipFlop extends BaseModule {
	public enabled = false;

	public readonly type = ModuleType.FlipFlop;

	public processPulse(pulse: Pulse) {
		if (pulse === Pulse.High) return;
		this.enabled = !this.enabled;
		return this.enabled ? Pulse.High : Pulse.Low;
	}

	public constructor(name: string, outputs: string[]) {
		super(name, outputs);
	}
}

export type Module = Broadcaster | Conjuction | FlipFlop;

export type ProcessingModule = [Module, Pulse, string];

export const parseModules = (input: string[]) => {
	const modules = new Map<string, Module>();

	for (const line of input) {
		const [data, output] = line.split(' -> ');
		if (data === 'broadcaster') {
			modules.set(data, new Broadcaster(data, output.split(', ')));
			continue;
		}

		const type = data.slice(0, 1);
		const name = data.slice(1);
		if (type === '%') modules.set(name, new FlipFlop(name, output.split(', ')));
		else modules.set(name, new Conjuction(name, output.split(', ')));
	}

	for (const [name, module] of modules) {
		if (module.type !== ModuleType.Conjuction) continue;
		module.setLastPulses(
			Array.from(modules.entries())
				.filter((v) => v[1].outputs.includes(name))
				.map((v) => v[0]),
		);
	}

	return modules;
};
