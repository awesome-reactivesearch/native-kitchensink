import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	StatusBar,
	TouchableOpacity,
} from 'react-native';
import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';
import { Ionicons as Icon } from '@expo/vector-icons';
import MainDrawer from './src/containers/MainDrawer';
import { flattenObject } from './src/utils';
import DataSearch from './src/components/DataSearch';
import screenMapping from './src/screenMapping';

const styles = StyleSheet.create({
	container: { flex: 1, paddingTop: StatusBar.currentHeight },
	innerContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
	header: { padding: 13, paddingTop: 0 },
	customDrawer: {},
	customDrawerTouch: { paddingLeft: 13, paddingBottom: 5 },
	customDrawerIcon: { paddingRight: 7 },
});

// Root Drawer containing drawers for each components
const RootDrawer = DrawerNavigator(
	{
		Components1: {
			screen: DataSearch,
		},
		Components2: {
			screen: DataSearch,
		},
	},
	{
		contentComponent: MainDrawer,
	}
);

const RootStack = StackNavigator(
	{
		Main: {
			screen: RootDrawer,
		},
		// Register screens of all options of child components
		// Flatten all objects from mapping to screen registration form (like `Main`)
		// Keys of each screen will be used to render screen based on child drawer item selection
		...flattenObject(screenMapping),
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
