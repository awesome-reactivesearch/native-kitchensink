/* 	Used for all the child component screens to register them individually
	Flatten the screen mapping in form of:
	{
		DataSearch_withTitle: {
			screen: DataSearch_withTitle
		},
  		DataSearch_withIcon: {
			screen: DataSearch_withIcon
		}
	}
*/
export const flattenChildDrawerObjects = nestedObject => {
	let output = {};
	Object.keys(nestedObject).forEach(componentKey => {
		const { screen, ...pluckScreenProp } = nestedObject[componentKey];
		output = { ...output, ...pluckScreenProp };
	});
	return output;
};

/* 	Returns child drawer options based on component/screen ID of outer drawer
	Input: TextField
	Output:
	{
		TextField_withTitle: {
			screen: TextField_withTitle
		},
		TextField_withIcon: {
			screen: TextField_withIcon
		}
	}
*/
export const getChildDrawerOptions = (screenMapping, componentId) => {
	const { screen, ...drawerOptions } = screenMapping[componentId];
	return drawerOptions;
};

const _addedToSetChecker = (set, elementToAdd) => {
	size = set.size;
	return set.add(elementToAdd).size > size;
}

export const _evaluateOuterDrawerListItems = items => {
	// let drawerItems = new Set();
	// items.forEach(item => {
	// 	let { key } = item;
	// 	// Delimeter _
	// 	key = key.substr(0, key.indexOf('_'));
	// 	if (key.length) {
	// 		if (_addedToSetChecker(drawerItems, key)) {

	// 		}
	// 	}
	// });
	// drawerItems = Array.from(drawerItems);
	// return drawerItems;
	
};

export const 
