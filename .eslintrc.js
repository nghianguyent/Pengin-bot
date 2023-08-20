module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},

	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				singleQuote: true,
				trailingComma: 'all',
				printWidth: 80,
				tabWidth: 4,
				semi: true,
				bracketSpacing: true,
				endOfLine: 'auto',
				arrowParens: 'avoid',
				useTabs: true,
				importOrder: [
					'^@core/(.*)$',
					'^@server/(.*)$',
					'^@client/(.*)$',
					'^@utils/(.*)$',
					'^@types/(.*)$',
					'^@/(.*)$',
					'^[./]',
				],
				plugins: ['prettier-plugin-organize-imports'],
			},
		],
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-empty-function': 'warn',
		'@typescript-eslint/no-unused-vars': 'off',
		'unused-imports/no-unused-imports-ts': 'error',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
};
