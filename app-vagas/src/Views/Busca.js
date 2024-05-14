/*
*Tela Busca
*/
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../assets/Estilos/estilo-geral';
import EstiloBusca from '../../assets/Estilos/estilo-busca';

export default function SearchScreen() {
  const data = [
    { id: '1', name: 'Resultado 1' },
    { id: '2', name: 'Resultado 2' },
    { id: '3', name: 'Resultado 3' },
  ];

  const handleLogin = () => {
    console.log('Botão de busca pressionado');
    // Adicione aqui a lógica de busca
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={styles.gradient}>
          <View style={EstiloBusca.inputContainer}>

            <TextInput
              style={EstiloBusca.input}
              placeholder="Digite sua busca"
              placeholderTextColor="#fff"
            />
            <TouchableOpacity style={EstiloBusca.button} onPress={handleLogin}>
              <Text>Buscar</Text>
            </TouchableOpacity>
          </View>
      </LinearGradient>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={EstiloBusca.resultItem}>
            <Image source={require('../../assets/Img/IconMain/Estacio.png')} style={EstiloBusca.resultItemImage} />
            <Text style={EstiloBusca.resultItemText}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}