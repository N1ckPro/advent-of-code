import type { Solution } from '../../../lib/index.js';
import { benchmark } from '../../../lib/index.js';
import { getScratchcards } from './getScratchcards.js';

export const solution: Solution<number> = (input: string[]) => getScratchcards(input);
await benchmark(4, 2, solution);
