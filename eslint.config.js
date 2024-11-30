import { common, node, typescript, prettier } from 'eslint-config-neon';
import merge from 'lodash.merge';

export default [
	...[...common, ...node, ...typescript, ...prettier].map((config) =>
		merge(config, {
			files: ['src/**/*.ts'],
			languageOptions: {
				parserOptions: {
					project: 'tsconfig.json',
				},
			},
			rules: {
				'id-length': 0,
			},
		}),
	),
];
