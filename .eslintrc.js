module.exports = {
	extends: ["airbnb", "prettier", "prettier/react"],
	plugins: ["prettier"],
	env: {
		browser: true,
		es6: true,
	},
	parser: "babel-eslint",
	rules: {
		"react/jsx-filename-extension": [
			"error",
			{
				extensions: [".js", ".jsx"],
			},
		],
		"prettier/prettier": [
			"error",
			{
				singleQuote: true,
			},
		],
		indent: [
			2,
			"tab",
			{
				SwitchCase: 1,
				VariableDeclarator: 1,
			},
		],

		"no-tabs": 0,
		"no-underscore-dangle": 0,
		"operator-linebreak": ["error", "before"],
		"prefer-destructuring": 0,
		"no-console": [
			"error",
			{
				allow: ["warn", "error", "log"],
			},
		],
		"class-methods-use-this": 0,
		"arrow-parens": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/no-danger": 0,
		"react/no-typos": 0,
		"react/require-default-props": 0,
		"react/no-unused-prop-types": 0,
		"react/sort-comp": 0,
		"jsx-a11y/label-has-for": [
			2,
			{
				components: ["Label"],
				required: {
					every: ["id"],
				},
				allowChildren: false,
			},
		],
		"jsx-a11y/anchor-is-valid": 0,
		"jsx-a11y/alt-text": 0,
		"react/no-array-index-key": 0,
		"no-eval": 0,
		"react/prefer-stateless-function": 0,
		"react/no-multi-comp": 0,
		"import/prefer-default-export": 0,
		camelcase: 0,
		"operator-linebreak": 0,
		"import/no-extraneous-dependencies": 0,
		"jsx-a11y/accessible-emoji": 0,
		"no-prototype-builtins": 0,
		"react/prop-types": 0, // TODO: fix later
	},
};
