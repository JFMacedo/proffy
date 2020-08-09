import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 40,
    backgroundColor: '#8257E5'
  },

  banner: {
    width: '100%',
    resizeMode: 'contain'
  },

  title: {
    marginTop: 80,
    fontFamily: 'Poppins_400Regular',
    fontSize: 20,
    lineHeight: 30,
    color: '#FFFFFF',
  },

  titleBold: {
    fontFamily: 'Poppins_600SemiBold'
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },

  button: {
    justifyContent: 'space-between',
    width: '48%',
    height: 150,
    padding: 24,
    borderRadius: 8,
  },

  buttonPrimary: {
    backgroundColor: '#9871F5'
  },

  buttonSecondary: {
    backgroundColor: '#04D361'
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    fontSize: 20,
    color: '#FFFFFF'
  },

  totalConnections: {
    maxWidth: 140,
    marginTop: 40,
    fontFamily: 'Poppins_400Regular',
    fontSize: 12,
    lineHeight: 20,
    color: '#D4C2FF'
  }
});

export default styles;