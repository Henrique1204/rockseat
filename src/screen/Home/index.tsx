import React from 'react';

import {
	Text,
	View,
	TextInput,
	TouchableOpacity,
	FlatList,
} from 'react-native';

import Participant from '../../components/Participant';

import Styles from './styles';

const Home: React.FC = () => {
	const [participantName, setParticipantName] = React.useState<string>('');
	const [participants, setParticipants] = React.useState<string[]>([]);

	const refInput = React.useRef<TextInput>(null);

	const handleParticipantAdd = () => {
		if (participants.includes(participantName)) return;

		setParticipantName('');
		setParticipants((prev) => [...prev, participantName]);

		refInput.current?.focus();
	};

	const handleParticipantRemove = (name: string) => {
		setParticipants((prev) =>
			prev.filter((participant) => participant !== name)
		);
	};

	return (
		<View style={Styles.container}>
			<Text style={Styles.eventName}>Nome do evento</Text>

			<Text style={Styles.eventDate}>Sexta, 4 de novembro de 2022</Text>

			<View style={Styles.form}>
				<TextInput
					ref={refInput}
					style={Styles.input}
					placeholder='Nome do participante'
					placeholderTextColor='#6B6B6B'
					defaultValue={participantName}
					onChangeText={setParticipantName}
				/>

				<TouchableOpacity style={Styles.button} onPress={handleParticipantAdd}>
					<Text style={Styles.buttonText}>+</Text>
				</TouchableOpacity>
			</View>

			<FlatList
				data={participants}
				keyExtractor={(name) => name}
				showsVerticalScrollIndicator={false}
				renderItem={({ item: name }) => (
					<Participant name={name} onRemove={handleParticipantRemove} />
				)}
				ListEmptyComponent={() => (
					<Text style={Styles.listEmptyText}>
						Ninguém chegou ao evento ainda? Adicione nomes a sua lita de
						participantes.
					</Text>
				)}
			/>
		</View>
	);
};

export default Home;
