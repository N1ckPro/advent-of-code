export type MapTypes = 'fertilizer' | 'humidity' | 'light' | 'location' | 'seed' | 'soil' | 'temperature' | 'water';

export class Seed {
	public fertilizer!: number;

	public humidity!: number;

	public light!: number;

	public location!: number;

	public soil!: number;

	public temperature!: number;

	public water!: number;

	public seed!: number;

	public constructor(seed: number) {
		this.seed = seed;
	}
}
