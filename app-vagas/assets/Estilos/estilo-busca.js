/*
*Estilo busca
*/ 
import { StyleSheet } from 'react-native';

const EstiloBusca = StyleSheet.create({
  estiloTitulo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Roboto',
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '80%',
    marginTop: 50,
  },
  input: {
    color: '#fff',
    padding: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 5,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  resultItemImage: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  resultItemText: {
    color: '#333',
    fontSize: 16,
    fontFamily: 'Roboto',
  },
  button: {
    backgroundColor: 'rgba(0, 100, 255, 0.3)',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginBottom: 5,
  },
});

export default EstiloBusca;