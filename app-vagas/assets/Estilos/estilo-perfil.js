import { StyleSheet } from 'react-native';

const estiloPerfil = StyleSheet.create({
  primeiroStyle: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  button: {
    backgroundColor: 'rgba(0, 100, 255, 0.3)',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Roboto',
  },
  linksContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#fff',
    fontFamily: 'Roboto',
  },
});

export default estiloPerfil;