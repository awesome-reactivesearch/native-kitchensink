import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import DataSearch from './DataSearchView';
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
		<DataSearch
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithIconPosition = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			showFilter={false}
			iconPosition="right"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithoutSearchIcon = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			showFilter={false}
			showIcon={false}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithoutAutosuggest = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			autosuggest={false}
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
		<DataSearch
			showFilter={false}
			defaultSelected="Harry Potter"
			innerStyle={{
				icon: {
					color: 'purple',
				},
				input: {
					color: 'purple',
				},
				label: {
					color: '#9900cc',
				},
				header: {
					backgroundColor: 'purple',
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

export const WithDefaultSuggestions = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			showFilter={false}
			defaultSuggestions={[
				{ label: 'Sherlock Holmes', value: 'Sherlock Holmes' },
				{ label: 'The Lord of the Rings', value: 'The Lord of the Rings' },
			]}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);
export const WithDefaultSelected = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			showFilter={false}
			defaultSelected="Harry Potter"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithFuzzinessAsAuto = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			showFilter={false}
			fuzziness="AUTO"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const Playground = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DataSearch
			defaultSelected="Harry Potter"
			autosuggest
			fieldWeights={[1, 3]}
			fuzziness={1}
			queryFormat="or"
			showFilter
			iconPosition="left"
			filterLabel="Books filter"
			highlight={false}
			innerStyle={{
				icon: {
					color: 'purple',
				},
				input: {
					color: 'purple',
				},
				label: {
					color: '#9900cc',
				},
				header: {
					backgroundColor: 'purple',
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
