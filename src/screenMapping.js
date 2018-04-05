import {
	DataSearch_withTitle,
	DataSearch_withIcon,
} from './components/DataSearch';
import {
	TextField_withTitle,
	TextField_withIcon,
} from './components/TextField';
import DefaultScreen from './components/DefaultScreen';

export default {
	DataSearch: {
		screen: DefaultScreen,
		DataSearch_withTitle: {
			screen: DataSearch_withTitle,
		},
		DataSearch_withIcon: {
			screen: DataSearch_withIcon,
		},
	},
	TextField: {
		screen: DefaultScreen,
		TextField_withTitle: {
			screen: TextField_withTitle,
		},
		TextField_withIcon: {
			screen: TextField_withIcon,
		},
	},
};
