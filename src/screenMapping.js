import * as DataSearchScreens from './components/DataSearch';
import * as TextFieldScreens from './components/TextField';
import * as MultiDropdownListScreens from './components/MultiDropdownList';
import * as MultiDropdownRangeScreens from './components/MultiDropdownRange';
import * as SingleDropdownListScreens from './components/SingleDropdownList';
import * as SingleDropdownRangeScreens from './components/SingleDropdownRange';
import * as DatePickerScreens from './components/DatePicker';
import * as DateRangeScreens from './components/DateRange';

import { evaluateChildDrawerTitle } from './utils';

export default {
	DataSearch_Basic: {
		screen: DataSearchScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_With Icon Position': {
		screen: DataSearchScreens.WithIconPosition,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_Without Search Icon': {
		screen: DataSearchScreens.WithoutSearchIcon,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_Without Autosuggest': {
		screen: DataSearchScreens.WithoutAutosuggest,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_With Custom Styles': {
		screen: DataSearchScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_With Default Suggestions': {
		screen: DataSearchScreens.WithDefaultSuggestions,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_With Default Selected': {
		screen: DataSearchScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DataSearch_With Fuzziness As Auto': {
		screen: DataSearchScreens.WithFuzzinessAsAuto,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DataSearch_Playground: {
		screen: DataSearchScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	TextField_Basic: {
		screen: TextFieldScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'TextField_With Placeholder': {
		screen: TextFieldScreens.WithPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'TextField_With DefaultSelected': {
		screen: TextFieldScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'TextField_With CustomStyles': {
		screen: TextFieldScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	TextField_Playground: {
		screen: TextFieldScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	MultiDropdownList_Basic: {
		screen: MultiDropdownListScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_Without Placeholder': {
		screen: MultiDropdownListScreens.WithPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_With Size': {
		screen: MultiDropdownListScreens.WithSize,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_With Custom Styles': {
		screen: MultiDropdownListScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_Without Count': {
		screen: MultiDropdownListScreens.WithoutCount,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_With Sort Z->A': {
		screen: MultiDropdownListScreens.WithCustomSort,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_With Select All': {
		screen: MultiDropdownListScreens.WithSelectAll,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownList_With Default Selected': {
		screen: MultiDropdownListScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	MultiDropdownList_Playground: {
		screen: MultiDropdownListScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	MultiDropdownRange_Basic: {
		screen: MultiDropdownRangeScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownRange_Without Placeholder': {
		screen: MultiDropdownRangeScreens.WithoutPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownRange_With Default Selected': {
		screen: MultiDropdownRangeScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'MultiDropdownRange_With Custom Styles': {
		screen: MultiDropdownRangeScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	MultiDropdownRange_Playground: {
		screen: MultiDropdownRangeScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	SingleDropdownList_Basic: {
		screen: SingleDropdownListScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	SingleDropdownList_WithoutPlaceholder: {
		screen: SingleDropdownListScreens.WithoutPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_With Max Size as 5': {
		screen: SingleDropdownListScreens.WithSize,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_Without Count': {
		screen: SingleDropdownListScreens.WithoutCount,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_With Custom Styles': {
		screen: SingleDropdownListScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_With Sort Z->A': {
		screen: SingleDropdownListScreens.WithCustomSort,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_With Select All Option': {
		screen: SingleDropdownListScreens.WithSelectAll,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownList_With Default Selected': {
		screen: SingleDropdownListScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	SingleDropdownList_Playground: {
		screen: SingleDropdownListScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	SingleDropdownRange_Basic: {
		screen: SingleDropdownRangeScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownRange_Without Placeholder': {
		screen: SingleDropdownRangeScreens.WithoutPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownRange_With Default Selected': {
		screen: SingleDropdownRangeScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'SingleDropdownRange_With Custom Styles': {
		screen: SingleDropdownRangeScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	SingleDropdownRange_Playground: {
		screen: SingleDropdownRangeScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DatePicker_Basic: {
		screen: DatePickerScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DatePicker_With Placeholder': {
		screen: DatePickerScreens.WithPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DatePicker_With Initial Month': {
		screen: DatePickerScreens.WithInitialMonth,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DatePicker_With Custom Styles': {
		screen: DatePickerScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DatePicker_Playground: {
		screen: DatePickerScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DateRange_Basic: {
		screen: DateRangeScreens.Basic,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DateRange_With Placeholder': {
		screen: DateRangeScreens.WithPlaceholder,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DateRange_With Default Selected': {
		screen: DateRangeScreens.WithDefaultSelected,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DateRange_With Custom Styles': {
		screen: DateRangeScreens.WithCustomStyles,
		navigationOptions: evaluateChildDrawerTitle,
	},
	'DateRange_With Query Format': {
		screen: DateRangeScreens.WithQueryFormat,
		navigationOptions: evaluateChildDrawerTitle,
	},
	DateRange_Playground: {
		screen: DateRangeScreens.Playground,
		navigationOptions: evaluateChildDrawerTitle,
	},
};
