import React from 'react';
import { View, Image, Text } from 'react-native';

export default () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Projeto RH em Ação</Text>
    <Image
      source={require('../../assets/Img/IconMain/Estacio.png')}
      style={{ width: 30, height: 30 }}
    />
  </View>
);