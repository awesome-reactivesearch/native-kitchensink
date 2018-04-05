import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import MainDrawer from './src/drawers/MainDrawer';

import screenMapping from './src/screenMapping';
import {
	flattenChildDrawerObjects,
	flattenMainDrawerObjects,
} from './src/utils';

// RootDrawer containing drawers for each components
const RootDrawer = DrawerNavigator(
	{
		// Register screens of all components for main drawer
		// Flatten all objects from mapping to contain only screen
		...flattenMainDrawerObjects(screenMapping),
	},
	{
		// Custom implementation of drawer panel
		contentComponent: MainDrawer,
	}
);

// RootStack containing RootDrawer and all the child component screens registered individually
const RootStack = StackNavigator(
	{
		Main: {
			screen: RootDrawer,
		},
		// Register screens of all options of child components
		// Flatten all objects from mapping to screen registration form (like `Main`)
		// Keys of each screen will be used to render screen based on child drawer item selection
		...flattenChildDrawerObjects(screenMapping),
	},
	{
		headerMode: 'none',
	}
);

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}
