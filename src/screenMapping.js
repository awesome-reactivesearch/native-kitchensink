import * as DataSearchScreens from './components/DataSearch';
import * as TextFieldScreens from './components/TextField';
import * as MultiDropdownListScreens from './components/MultiDropdownList';
import * as MultiDropdownRangeScreens from './components/MultiDropdownRange';
import * as SingleDropdownListScreens from './components/SingleDropdownList';
import * as SingleDropdownRangeScreens from './components/SingleDropdownRange';
import * as DatePickerScreens from './components/DatePicker';
import * as DateRangeScreens from './components/DateRange';

export default {
	DataSearch: {
		DataSearch_Basic: {
			screen: DataSearchScreens.Basic,
		},
		'DataSearch_With Icon Position': {
			screen: DataSearchScreens.WithIconPosition,
		},
		'DataSearch_Without Search Icon': {
			screen: DataSearchScreens.WithoutSearchIcon,
		},
		'DataSearch_Without Autosuggest': {
			screen: DataSearchScreens.WithoutAutosuggest,
		},
		'DataSearch_With Custom Styles': {
			screen: DataSearchScreens.WithCustomStyles,
		},
		'DataSearch_With Default Suggestions': {
			screen: DataSearchScreens.WithDefaultSuggestions,
		},
		'DataSearch_With Default Selected': {
			screen: DataSearchScreens.WithDefaultSelected,
		},
		'DataSearch_With Fuzziness As Auto': {
			screen: DataSearchScreens.WithFuzzinessAsAuto,
		},
		DataSearch_Playground: {
			screen: DataSearchScreens.Playground,
		},
	},
	TextField: {
		TextField_Basic: {
			screen: TextFieldScreens.Basic,
		},
		'TextField_Without Placeholder': {
			screen: TextFieldScreens.WithoutPlaceholder,
		},
		'TextField_With DefaultSelected': {
			screen: TextFieldScreens.WithDefaultSelected,
		},
		'TextField_With CustomStyles': {
			screen: TextFieldScreens.WithCustomStyles,
		},
		TextField_Playground: {
			screen: TextFieldScreens.Playground,
		},
	},
	MultiDropdownList: {
		MultiDropdownList_Basic: {
			screen: MultiDropdownListScreens.Basic,
		},
		'MultiDropdownList_Without Placeholder': {
			screen: MultiDropdownListScreens.WithPlaceholder,
		},
		'MultiDropdownList_With Size': {
			screen: MultiDropdownListScreens.WithSize,
		},
		'MultiDropdownList_With Custom Styles': {
			screen: MultiDropdownListScreens.WithCustomStyles,
		},
		'MultiDropdownList_Without Count': {
			screen: MultiDropdownListScreens.WithoutCount,
		},
		'MultiDropdownList_With Sort Z->A': {
			screen: MultiDropdownListScreens.WithCustomSort,
		},
		'MultiDropdownList_With Select All': {
			screen: MultiDropdownListScreens.WithSelectAll,
		},
		'MultiDropdownList_With Default Selected': {
			screen: MultiDropdownListScreens.WithDefaultSelected,
		},
		MultiDropdownList_Playground: {
			screen: MultiDropdownListScreens.Playground,
		},
	},
	MultiDropdownRange: {
		MultiDropdownRange_Basic: {
			screen: MultiDropdownRangeScreens.Basic,
		},
		'MultiDropdownRange_Without Placeholder': {
			screen: MultiDropdownRangeScreens.WithoutPlaceholder,
		},
		'MultiDropdownRange_With Default Selected': {
			screen: MultiDropdownRangeScreens.WithDefaultSelected,
		},
		'MultiDropdownRange_With Custom Styles': {
			screen: MultiDropdownRangeScreens.WithCustomStyles,
		},
		MultiDropdownRange_Playground: {
			screen: MultiDropdownRangeScreens.Playground,
		},
	},
	SingleDropdownList: {
		SingleDropdownList_Basic: {
			screen: SingleDropdownListScreens.Basic,
		},
		SingleDropdownList_WithoutPlaceholder: {
			screen: SingleDropdownListScreens.WithoutPlaceholder,
		},
		'SingleDropdownList_With Max Size as 5': {
			screen: SingleDropdownListScreens.WithSize,
		},
		'SingleDropdownList_Without Count': {
			screen: SingleDropdownListScreens.WithoutCount,
		},
		'SingleDropdownList_With Custom Styles': {
			screen: SingleDropdownListScreens.WithCustomStyles,
		},
		'SingleDropdownList_With Sort Z->A': {
			screen: SingleDropdownListScreens.WithCustomSort,
		},
		'SingleDropdownList_With Select All Option': {
			screen: SingleDropdownListScreens.WithSelectAll,
		},
		'SingleDropdownList_With Default Selected': {
			screen: SingleDropdownListScreens.WithDefaultSelected,
		},
		SingleDropdownList_Playground: {
			screen: SingleDropdownListScreens.Playground,
		},
	},
	SingleDropdownRange: {
		SingleDropdownRange_Basic: {
			screen: SingleDropdownRangeScreens.Basic,
		},
		'SingleDropdownRange_Without Placeholder': {
			screen: SingleDropdownRangeScreens.WithoutPlaceholder,
		},
		'SingleDropdownRange_With Default Selected': {
			screen: SingleDropdownRangeScreens.WithDefaultSelected,
		},
		'SingleDropdownRange_With Custom Styles': {
			screen: SingleDropdownRangeScreens.WithCustomStyles,
		},
		SingleDropdownRange_Playground: {
			screen: SingleDropdownRangeScreens.Playground,
		},
	},
	DatePicker: {
		DatePicker_Basic: {
			screen: DatePickerScreens.Basic,
		},
		'DatePicker_With Placeholder': {
			screen: DatePickerScreens.WithPlaceholder,
		},
		'DatePicker_With Initial Month': {
			screen: DatePickerScreens.WithInitialMonth,
		},
		'DatePicker_With Custom Styles': {
			screen: DatePickerScreens.WithCustomStyles,
		},
		DatePicker_Playground: {
			screen: DatePickerScreens.Playground,
		},
	},
	DateRange: {
		DateRange_Basic: {
			screen: DateRangeScreens.Basic,
		},
		'DateRange_With Placeholder': {
			screen: DateRangeScreens.WithPlaceholder,
		},
		'DateRange_With Default Selected': {
			screen: DateRangeScreens.WithDefaultSelected,
		},
		'DateRange_With Custom Styles': {
			screen: DateRangeScreens.WithCustomStyles,
		},
		'DateRange_With Query Format': {
			screen: DateRangeScreens.WithQueryFormat,
		},
		DateRange_Playground: {
			screen: DateRangeScreens.Playground,
		},
	},
};
