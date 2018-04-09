import * as utils from '../utils';

const inputMapping = {
	DataSearch: {
		DataSearch_withTitle: {
			screen: 'DataSearch_withTitle',
		},
		DataSearch_withIcon: {
			screen: 'DataSearch_withIcon',
		},
	},
	TextField: {
		TextField_withTitle: {
			screen: 'TextField_withTitle',
		},
		TextField_withIcon: {
			screen: 'TextField_withIcon',
		},
	},
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

test('Flattens ChildDrawer Objects', () => {
	expect(utils.flattenChildDrawerObjects(inputMapping)).toEqual(outputTwo);
});

test('Fetches ChildDrawer Options for DataSearch', () => {
	expect(utils.getChildDrawerOptions(inputMapping, 'DataSearch')).toEqual(
		outputThree
	);
});

test('Fetches ChildDrawer Options for TextField', () => {
	expect(utils.getChildDrawerOptions(inputMapping, 'TextField')).toEqual(
		outputFour
	);
});
