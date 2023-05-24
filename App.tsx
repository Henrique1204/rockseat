import React from 'react';
import { SafeAreaView } from 'react-native';

import Home from './src/screen/Home';

const App: React.FC = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#131016' }}>
			<Home />
		</SafeAreaView>
	);
};

export default App;
