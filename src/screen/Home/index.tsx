import React from 'react';
import { Text, View } from 'react-native';

import Styles from './styles';

const Home: React.FC = () => {
	return (
		<View style={Styles.container}>
			<Text style={Styles.eventName}>Nome do evento</Text>

			<Text style={Styles.eventDate}>Sexta, 4 de novembro de 2022</Text>
		</View>
	);
};

export default Home;
