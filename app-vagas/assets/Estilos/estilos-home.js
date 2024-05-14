import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

export default EstiloHome = StyleSheet.create({
  estiloCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color: '#fff',
  },
  estiloViewHeader: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(240, 240, 240, 0.2)', // Transparente
    marginBottom: 10
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 10
  },
   text: {
     margin: 20,
    color: '#000',
    fontFamily: 'Roboto',
  },
});