export class Part {
	public a: number;

	public m: number;

	public s: number;

	public x: number;

	public constructor(a: number, m: number, s: number, x: number) {
		this.a = a;
		this.m = m;
		this.s = s;
		this.x = x;
	}
}

export type Rating = 'a' | 'm' | 's' | 'x';

export type Sign = '<' | '>';

export type Rule = {
	against?: number;
	rating?: Rating;
	result: boolean | string;
	sign?: Sign;
};
