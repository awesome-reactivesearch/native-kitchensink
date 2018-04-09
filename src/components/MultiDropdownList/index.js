import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import MultiDropdownList from './MultiDropdownListView';
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
		<MultiDropdownList
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithPlaceholder = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			placeholder=""
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithSize = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			size={6}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithCustomStyles = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
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

export const WithoutCount = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			showCount={false}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithCustomSort = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			sortBy="desc"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithSelectAll = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			selectAllLabel="All Series"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithDefaultSelected = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			defaultSelected={['Anita Blake', 'Discworld']}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const Playground = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<MultiDropdownList
			size={10}
			sortBy="count"
			defaultSelected={['Anita Blake', 'Discworld']}
			placeholder="Select multiple series"
			showFilter={false}
			filterLabel="Series filter"
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
