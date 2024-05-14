/*
*Estilos Gerais
*/ 
import {StyleSheet} from 'react-native';



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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0', // Cor de fundo
      

 
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      padding: 30,
      backgroundColor: '#f0f0f0', // Cor de fundo do cabeçalho
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'Roboto',
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

 
  