import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Home from './src/screen/Home';

const App: React.FC = () => {
	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#131016' }}>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Home />
		</SafeAreaView>
	);
};

export default App;
