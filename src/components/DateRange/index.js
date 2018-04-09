import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import DateRange from './DateRangeView';
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
		<DateRange
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
		<DateRange
			placeholder="Choose dates"
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
		<DateRange
			defaultSelected={{
				start: new Date('2017-04-07'),
				end: new Date('2017-04-14'),
			}}
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
		<DateRange
			placeholder="Pick dates"
			numberOfMonths={1}
			queryFormat="date_time_no_millis"
			defaultSelected={{
				start: new Date('2017-01-01'),
				end: new Date('2017-01-05'),
			}}
			showFilter={false}
			filterLabel="Date Range"
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

export const WithQueryFormat = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DateRange
			placeholder="Choose dates"
			showFilter={false}
			queryFormat="date_time_no_millis"
			navigate={() => {
				navigation.navigate('DrawerToggle');
			}}
		/>
	</View>
);

export const Playground = ({ navigation }) => (
	<View style={{ flex: 1 }}>
		<View style={styles.headerSpacer} />
		<DateRange
			placeholder="Pick dates"
			numberOfMonths={1}
			queryFormat="date_time_no_millis"
			defaultSelected={{
				start: new Date('2017-01-01'),
				end: new Date('2017-01-05'),
			}}
			showFilter={false}
			filterLabel="Date Range"
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
