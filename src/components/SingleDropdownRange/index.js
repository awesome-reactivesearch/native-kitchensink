import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import SingleDropdownRange from './SingleDropdownRangeView';
import { DEFAULT_COLORS } from './../helpers';

const styles = StyleSheet.create({
	headerSpacer: {
		paddingTop: StatusBar.currentHeight,
		backgroundColor: DEFAULT_COLORS.primary,
	},
});

export const Basic = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownRange
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithoutPlaceholder = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownRange
			placeholder=""
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithDefaultSelected = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownRange
			defaultSelected="Rating 3 to 4"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithCustomStyles = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownRange
			innerStyle={{
				title: {
					color: 'purple',
				},
				label: {
					color: 'purple',
				},
			}}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const Playground = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownRange
			placeholder="Select a rating"
			defaultSelected="Rating 3 to 4"
			filterLabel="Book filter"
			showFilter={false}
			innerStyle={{
				title: {
					color: 'purple',
				},
				label: {
					color: 'purple',
				},
			}}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);
