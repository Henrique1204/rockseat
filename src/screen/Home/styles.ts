import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		padding: 24,
		backgroundColor: '#131016',
		flex: 1,
	},
	eventName: {
		marginTop: 48,
		fontSize: 24,
		fontWeight: 'bold',
		color: '#FFF',
	},
	eventDate: {
		fontSize: 16,
		color: '#6B6B6B',
	},
	input: {
		height: 56,
		padding: 16,
		borderRadius: 5,
		marginTop: 16,
		fontSize: 16,
		color: '#FFF',
		backgroundColor: '#1F1E25',
	},
	buttonText: {
		color: '#FFF',
		fontSize: 24,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#31CF67',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default styles;
