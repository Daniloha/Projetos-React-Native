import React from 'react';
import { View, Text } from 'react-native';
import { Usuario } from '../Models/Iusuarios';
import { PerfilProps } from '../Models/Iusuarios';
import { TipoDeConta } from '../Models/Entidades';


export default function Perfil({ route }: PerfilProps) {
    const { usuario } = route.params;
  
      if (
        usuario.tipoConta === TipoDeConta.ESTUDANTE){
          return (
      <View>
        <Text>Nome: {usuario.nome}</Text>
        <Text>CPF: {usuario.cpf}</Text>
        <Text>Email: {usuario.email}</Text>
        <Text>Curso: {usuario.curso}</Text>
        <Text>Matrícula: {usuario.matricula}</Text>
        <Text>Semestre: {usuario.semestre}</Text>
      </View>
    );
  } else if ( 
    usuario.tipoConta === TipoDeConta.COMUM){
      return (
    <View>
      <Text>Nome: {usuario.nome}</Text>
      <Text>CPF: {usuario.cpf}</Text>
      <Text>Email: {usuario.email}</Text>
    </View>
  );
  }
  }