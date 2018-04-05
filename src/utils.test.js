import * as utils from './utils';

const inputMapping = {
	DataSearch: {
		screen: 'DefaultScreen',
		DataSearch_withTitle: {
			screen: 'DataSearch_withTitle',
		},
		DataSearch_withIcon: {
			screen: 'DataSearch_withIcon',
		},
	},
	TextField: {
		screen: 'DefaultScreen',
		TextField_withTitle: {
			screen: 'TextField_withTitle',
		},
		TextField_withIcon: {
			screen: 'TextField_withIcon',
		},
	},
};

const outputOne = {
	DataSearch: { screen: 'DefaultScreen' },
	TextField: { screen: 'DefaultScreen' },
};

const outputTwo = {
	DataSearch_withTitle: { screen: 'DataSearch_withTitle' },
	DataSearch_withIcon: { screen: 'DataSearch_withIcon' },
	TextField_withTitle: { screen: 'TextField_withTitle' },
	TextField_withIcon: { screen: 'TextField_withIcon' },
};

const outputThree = {
	DataSearch_withTitle: {
		screen: 'DataSearch_withTitle',
	},
	DataSearch_withIcon: {
		screen: 'DataSearch_withIcon',
	},
};

const outputFour = {
	TextField_withTitle: {
		screen: 'TextField_withTitle',
	},
	TextField_withIcon: {
		screen: 'TextField_withIcon',
	},
};

/* eslint no-undef: 0 */
test('Flattens MainDrawerO bjects', () => {
	expect(utils.flattenMainDrawerObjects(inputMapping)).toEqual(outputOne);
});

test('Flattens ChildDrawer Objects', () => {
	expect(utils.flattenChildDrawerObjects(inputMapping)).toEqual(outputTwo);
});

test('Fetches ChildDrawer Options for DataSearch', () => {
	expect(utils.getChildDrawerOptions('DataSearch', inputMapping)).toEqual(
		outputThree
	);
});

test('Fetches ChildDrawer Options for TextField', () => {
	expect(utils.getChildDrawerOptions('TextField', inputMapping)).toEqual(
		outputFour
	);
});
