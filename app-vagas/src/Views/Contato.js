// ContactScreen.js
import React from 'react';
import {View, Text} from 'react-native';
import styles from '../../assets/Estilos/estilo-geral';
import {LinearGradient} from 'expo-linear-gradient';
export default function ContactScreen() {
  return (
    <View style={styles.primeiroStyle}>
    <LinearGradient
      colors={['#60BE8E', '#33AFC1', '#00A0F4']}
      style={styles.gradient}
    >
            <Text>Contato</Text>
    </LinearGradient>
    </View>
    );
}