import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Styles from './styles';

interface IParticipantProps {
	name: string;
	onRemove: (name: string) => void;
}

const Participant: React.FC<IParticipantProps> = ({ name, onRemove }) => {
	return (
		<View style={Styles.container}>
			<Text style={Styles.name}>{name}</Text>

			<TouchableOpacity style={Styles.button} onPress={() => onRemove(name)}>
				<Text style={Styles.buttonText}>-</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Participant;
