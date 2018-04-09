import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import MultiDropdownRange from './MultiDropdownRangeView';
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
		<MultiDropdownRange
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithoutPlaceholder = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownRange
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
		<MultiDropdownRange
			defaultSelected={['Rating 3 to 4']}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithCustomStyles = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownRange
			innerStyle={{
				title: {
					color: 'purple',
				},
				label: {
					color: 'purple',
				},
				checkbox: {
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
		<MultiDropdownRange
			defaultSelected={['Rating 3 to 4']}
			placeholder="Select ratings"
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
