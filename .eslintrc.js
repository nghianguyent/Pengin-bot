module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'prettier'],
	extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
	root: true,
	env: {
		node: true,
		jest: true,
	},

	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'prettier/prettier': [
			'warn',
			{},
			{
				usePrettierrc: true,
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
