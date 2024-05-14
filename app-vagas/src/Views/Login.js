import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth'; // Importe a função signInWithEmailAndPassword do pacote firebase/auth
import { db } from '../Controllers/firebaseConfig'; // Importe a configuração do Firestore

import estiloPerfil from '../../assets/Estilos/estilo-perfil';

export default function ProfileScreen() {
  const [emailMatriculaCpf, setEmailMatriculaCpf] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, emailMatriculaCpf, password) // Use signInWithEmailAndPassword diretamente do pacote firebase/auth
      .then((userCredential) => {
        // Login bem-sucedido
        const user = userCredential.user;
  
        // Verifique se o usuário é um administrador
        // (Você pode fazer isso com base no atributo TipoDeConta)
        if (user && user.tipoConta === TipoDeConta.ADMINISTRADOR) {
          // Usuário é um administrador, redirecione para a tela de administração
          navigation.navigate('TelaAdmin');
        } else {
          // Usuário normal, redirecione para a tela de perfil
          navigation.navigate('Perfil');
        }
      })
      .catch((error) => {
        // Trate erros de login
        console.error('Erro de login:', error);
      });
  };

  return (
    <View style={estiloPerfil.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={estiloPerfil.gradient}>
        <View style={estiloPerfil.formContainer}>
          <TextInput
            style={estiloPerfil.input}
            placeholder="Email, Matrícula ou CPF"
            value={emailMatriculaCpf}
            onChangeText={setEmailMatriculaCpf}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity style={estiloPerfil.button} onPress={handleLogin}>
            <Text>Entrar</Text>
          </TouchableOpacity>
          <View style={estiloPerfil.linksContainer}>
            <TouchableOpacity>
              <Text>Esqueceu sua senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
              <Text>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Privacidade</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}
