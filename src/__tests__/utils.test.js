import * as utils from '../utils';

const input = [
	{
		key: 'Home',
		params: undefined,
		routeName: 'Home',
	},
	{
		key: 'DataSearch_Basic',
		params: undefined,
		routeName: 'DataSearch_Basic',
	},
	{
		key: 'DataSearch_With Icon Position',
		params: undefined,
		routeName: 'DataSearch_With Icon Position',
	},
	{
		key: 'DataSearch_Without Search Icon',
		params: undefined,
		routeName: 'DataSearch_Without Search Icon',
	},
	{
		key: 'DataSearch_Playground',
		params: undefined,
		routeName: 'DataSearch_Playground',
	},
	{
		key: 'TextField_Basic',
		params: undefined,
		routeName: 'TextField_Basic',
	},
	{
		key: 'TextField_Without Placeholder',
		params: undefined,
		routeName: 'TextField_Without Placeholder',
	},
	{
		key: 'TextField_Playground',
		params: undefined,
		routeName: 'TextField_Playground',
	},
	{
		key: 'MultiDropdownList_Basic',
		params: undefined,
		routeName: 'MultiDropdownList_Basic',
	},
	{
		key: 'MultiDropdownList_Without Placeholder',
		params: undefined,
		routeName: 'MultiDropdownList_Without Placeholder',
	},
];

const output = {
	DataSearch: { start: 1, end: 4 },
	TextField: { start: 5, end: 7 },
	MultiDropdownList: { start: 8, end: 9 },
};

/* eslint no-undef: 0 */

test('Evaluates outer drawer list items', () => {
	expect(utils.evaluateOuterDrawerListItems(input)).toEqual(output);
});
