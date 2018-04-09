import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import SingleDropdownList from './SingleDropdownListView';
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
		<SingleDropdownList
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithoutPlaceholder = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			placeholder=""
			showFilter={false}
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithSize = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			size={6}
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithoutCount = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			showCount={false}
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithCustomStyles = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			innerStyle={{
				title: {
					color: 'purple',
				},
				label: {
					color: 'purple',
				},
			}}
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithCustomSort = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			sortBy="desc"
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithSelectAll = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			selectAllLabel="All Series"
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const WithDefaultSelected = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			defaultSelected="Discworld"
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);

export const Playground = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<SingleDropdownList
			size={100}
			showCount
			sortBy="count"
			selectAllLabel="All Series"
			defaultSelected="Discworld"
			placeholder="Select one"
			showFilter={false}
			filterLabel="Series filter"
			innerStyle={{
				title: {
					color: 'purple',
				},
				label: {
					color: 'purple',
				},
			}}
			navigate={() => {
				navigation.goBack();
			}}
		/>
	</View>
);
