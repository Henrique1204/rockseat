import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from './styles';

const Participant: React.FC = () => {
	const handleParticipantRemove = () => {};

	return (
		<View style={Styles.container}>
			<Text style={Styles.name}>Paulo Henrique</Text>

			<TouchableOpacity style={Styles.button} onPress={handleParticipantRemove}>
				<Text style={Styles.buttonText}>-</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Participant;
