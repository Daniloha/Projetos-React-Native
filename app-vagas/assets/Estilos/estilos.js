import {StyleSheet} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
//#60BE8E


export default styles = StyleSheet.create({
  primeiroStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#fff', // Cor de fundo
 
    },
    header: {
      paddingTop: 40,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#f0f0f0', // Cor de fundo do cabeçalho
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f9f9f9', // Cor de fundo do conteúdo
    },
    logo: {
      width: 200,
      height: 200,
    }
  });

 
  