import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import DatePicker from './DatePickerView';
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
		<DatePicker
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
		<DatePicker
			placeholder="Pick a date"
			showFilter={false}
			initialMonth="2017-05-05"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const WithInitialMonth = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DatePicker
			initialMonth="2017-05-05"
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
		<DatePicker
			innerStyle={{
				button: {
					backgroundColor: '#000066',
				},
				icon: {
					color: '#f2f2f2',
				},
			}}
			innerProps={{
				calendar: {
					theme: {
						backgroundColor: '#f2f2f2',
						calendarBackground: '#f2f2f2',
						textSectionTitleColor: '#b3b3ff',
						selectedDayBackgroundColor: '#000066',
						selectedDayTextColor: '#f2f2f2',
						todayTextColor: '#000066',
						dayTextColor: '#0000cc',
						textDisabledColor: '#b3b3ff',
						dotColor: '#000066',
						selectedDotColor: '#f2f2f2',
						arrowColor: '#000066',
						monthTextColor: '#000066',
					},
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
		<DatePicker
			placeholder="Choose a date"
			queryFormat="date_time_no_millis"
			showFilter={false}
			filterLabel="Date"
			innerProps={{
				calendar: {
					theme: {
						backgroundColor: '#f2f2f2',
						calendarBackground: '#f2f2f2',
						textSectionTitleColor: '#b3b3ff',
						selectedDayBackgroundColor: '#000066',
						selectedDayTextColor: '#f2f2f2',
						todayTextColor: '#000066',
						dayTextColor: '#0000cc',
						textDisabledColor: '#b3b3ff',
						dotColor: '#000066',
						selectedDotColor: '#f2f2f2',
						arrowColor: '#000066',
						monthTextColor: '#000066',
					},
				},
			}}
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);
