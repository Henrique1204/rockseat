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
	form: {
		width: '100%',
		marginTop: 36,
		marginBottom: 42,
		flexDirection: 'row',
		alignItems: 'center',
		gap: 12,
	},
	input: {
		height: 56,
		padding: 16,
		borderRadius: 5,
		fontSize: 16,
		color: '#FFF',
		backgroundColor: '#1F1E25',
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
		backgroundColor: '#31CF67',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonDisabled: {
		width: 56,
		height: 56,
		borderRadius: 5,
		backgroundColor: '#6B6B6B',
		alignItems: 'center',
		justifyContent: 'center',
	},
	listEmptyText: {
		width: '100%',
		fontSize: 14,
		textAlign: 'center',
		color: '#6B6B6B',
	},
});

export default styles;
