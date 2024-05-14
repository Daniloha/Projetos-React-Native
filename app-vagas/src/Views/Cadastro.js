/**
 * @c:/Users/nilo_/OneDrive/Desktop/reactNative/app-vagas/src/Views/Cadastro.js
 * Tela de Cadastro
 */

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import estiloPerfil from '../../assets/Estilos/estilo-perfil';
import { Comum, Estudante, TipoDeConta, Semestre, getSemestre, getCursos, Curso } from '../Models/Entidades';
import { Picker } from '@react-native-picker/picker';
import { addConta } from '../Models/fireBaseCRUD';
import { Usuario } from '../Models/Iusuarios';
import { useNavigation } from '@react-navigation/native';
import Perfil from './Perfil';

export default function Cadastro() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [aluno, setAluno] = useState(false);
  const [matricula, setMatricula] = useState('');
  const [curso, setCurso] = useState(Curso.ADMINISTRACAO); // Defina um valor inicial para o curso
  const [semestre, setSemestre] = useState(Semestre.PRIMEIRO); // Defina um valor inicial para o semestre

  const handleSignUp = () => {
    if (senha !== confirmarSenha) {
      console.log('As senhas não coincidem');
      return;
    }

    // Adicione aqui a lógica de validação da senha

    let Candidato;
    if (aluno) {
      Candidato = new Estudante(nome, cpf, TipoDeConta.ESTUDANTE, email, senha, matricula, curso, semestre);
    } else {
      Candidato = new Comum(nome, cpf, TipoDeConta.COMUM, email, senha);
    }

    addConta(Candidato);
    navigation.navigate('Perfil', { usuario: Candidato });
  };

  return (
    <View style={estiloPerfil.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={estiloPerfil.gradient}
      >
        <View style={estiloPerfil.formContainer}>
          <TextInput
            style={estiloPerfil.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="CPF"
            value={cpf}
            onChangeText={setCpf}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Senha"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
          <TextInput
            style={estiloPerfil.input}
            placeholder="Confirmar senha"
            secureTextEntry
            value={confirmarSenha}
            onChangeText={setConfirmarSenha}
          />
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text>É aluno?</Text>
            <Switch
              id="aluno"
              value={aluno}
              onValueChange={setAluno}
            />
          </View>
          {aluno && (
            <>
              <TextInput
                style={estiloPerfil.input}
                placeholder="Matrícula"
                value={matricula}
                onChangeText={setMatricula}
              />
              <Picker
                selectedValue={curso}
                style={estiloPerfil.input}
                onValueChange={(itemValue) => setCurso(itemValue)}>
                {getCursos().map((value, index) => (
                  <Picker.Item label={value} value={value} key={index} />
                ))}
              </Picker>
              <Picker
                selectedValue={semestre}
                style={estiloPerfil.input}
                onValueChange={(itemValue) => setSemestre(itemValue)}>
                {getSemestre().map((value, index) => (
                  <Picker.Item label={value} value={value} key={index} />
                ))}
              </Picker>
            </>
          )}
          <TouchableOpacity
            style={estiloPerfil.button}
            onPress={handleSignUp}
          >
            <Text>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
}
