import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingLeft: 16,
		borderRadius: 5,
		marginBottom: 10,
		backgroundColor: '#1F1E25',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	name: {
		fontSize: 16,
		color: '#FFF',
		flex: 1,
	},
	buttonText: {
		color: '#FFF',
		fontSize: 24,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#E23C44',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
