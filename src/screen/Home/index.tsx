import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import Participant from '../../components/Participant';

import Styles from './styles';

const Home: React.FC = () => {
	const handleParticipantAdd = () => {};

	const handleParticipantRemove = (name: string) => {};

	return (
		<View style={Styles.container}>
			<Text style={Styles.eventName}>Nome do evento</Text>

			<Text style={Styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

			<View style={Styles.form}>
				<TextInput
					style={Styles.input}
					placeholder='Nome do participante'
					placeholderTextColor='#6B6B6B'
				/>

				<TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
					<Text style={Styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<Participant name='Paulo Henrique' onRemove={handleParticipantRemove} />

			<Participant name='Pedro Henrique' onRemove={handleParticipantRemove} />

			<Participant name='João Henrique' onRemove={handleParticipantRemove} />

			<Participant name='Luiz Henrique' onRemove={handleParticipantRemove} />
		</View>
	);
};

export default Home;
