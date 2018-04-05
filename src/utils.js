import screenMapping from './screenMapping';

/*	Used in RootDrawer to register for each component individually
	Flatten the screen mapping in form of:
	{
		DataSearch: {
			screen: DataSearch
		},
  		TextField: {
			screen: TextField
		}
	}
*/
export const flattenMainDrawerObjects = nestedObject => {
	let screens = {};
	Object.keys(nestedObject).forEach(componentKey => {
		const componentScreenObj = {
			[componentKey]: {
				screen: nestedObject[componentKey].screen,
			},
		};
		screens = { ...screens, ...componentScreenObj };
	});
	return screens;
};

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
export const getChildDrawerOptions = (componentId, screenMappingProp) => {
	const { screen, ...drawerOptions } = screenMappingProp
		? screenMappingProp[componentId]
		: screenMapping[componentId];
	return drawerOptions;
};
