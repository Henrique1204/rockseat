import React from 'react';
import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	ScrollView,
} from 'react-native';

import Participant from '../../components/Participant';

import Styles from './styles';

const participants = [
	'Paulo',
	'Henrique',
	'Luiz',
	'Cris',
	'Ana',
	'Alice',
	'Laura',
	'Mioguel',
	'João',
	'Jennyfer',
	'Emily',
];

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

			<ScrollView />

			<ScrollView showsVerticalScrollIndicator={false}>
				{participants.map((name, key) => (
					<Participant
						key={`${key}_${name}`}
						name={name}
						onRemove={handleParticipantRemove}
					/>
				))}
			</ScrollView>
		</View>
	);
};

export default Home;
