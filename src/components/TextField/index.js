import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import TextField from './TextFieldView';
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
		<TextField
			showFilter={false}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithPlaceholder = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<TextField
			placeholder="Search for books"
			showFilter={false}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithDefaultSelected = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<TextField
			defaultSelected="The Murder of Roger Ackroyd"
			showFilter={false}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithCustomStyles = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<TextField
			placeholder="Search for a book title"
			defaultSelected="Harry Potter"
			showFilter={false}
			innerStyle={{
				icon: {
					color: 'purple',
				},
				input: {
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
		<TextField
			placeholder="Search for a book title"
			defaultSelected="Harry Potter"
			showFilter={false}
			filterLabel="Books filter"
			innerStyle={{
				icon: {
					color: 'purple',
				},
				input: {
					color: 'purple',
				},
			}}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);
