/**
 * ---------------------------------------------------------------
 *
 *                         TELA INICIAL
 *
 *  AQUI FORAM CRIADAS A TELA INICIAL E AS TELAS DE SEU GRUPO
 * ESPECÍFICO COMO O HISTÓRICO DE BUSCA, ONDE MOSTRA PELO MENOS AS
 * DUAS ÚLTIMAS VAGAS PESQUISADAS POR AQUELE USUÁRIO E SUGESTÕES,
 * ALÉM DE UM LOCAL ESPECÍFICO PARA NOTÍCIAS, PROPAGANDAS E
 * AVISOS.
 *
 * ---------------------------------------------------------------
 *
 *                     ESTRUTURA DO CONTEÚDO
 *
 *      1 - IMPORTAÇÃO DE BIBLIOTECAS
 *          1.1 - BIBLIOTECAS EXTERNAS
 *          1.2 - BIBLIOTECAS INTERNAS
 *      2 - CRIAÇÃO DE VARIÁVEIS E CONSTANTES
 *      3 - FUNÇÕES COMPLEMENTARES
 *          3.1 - LÓGICA DO CAMPO DE NOTÍCIAS
 *      4 - FUNÇÕES PRINCIPAIS
 *          4.1 - TELA INICIAL
 *          4.2 - HISTÓRICO DE BUSCAS
 *          4.3 - SUGESTÕES
 *      5 - ANÁLISES E CONCLUSÕES
 *
 * ---------------------------------------------------------------
 *
 */

/*
 * ---------------------------------------------------------------
 *
 *                 1 - IMPORTAÇÃO DE BIBLIOTECAS
 *
 * ---------------------------------------------------------------
 *
 *                  1.1 - BIBLIOTECAS EXTERNAS
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  NESTE FICHEIRRO, UTILIZAREMOS O COMPONENTE {Card} DA
 *  BIBLIOTECA react-mative-paper
 * (https://callstack.github.io/react-native-paper/docs/components/Card/),
 * {View, Text e Image} DA BIBLIOTECA NATIVA react-native E
 * {linearGradient} DE expo-linear-gradient PARA CRIAR O GRADIENTE
 * DE CORES.
 *
 * --------------------------------------------------------------- */

import { Card } from 'react-native-paper';
import { View, Text, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

/**
 * ---------------------------------------------------------------
 *
 *                  1.2 - BIBLIOTECAS INTERNAS
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  IMPORTAMOS A FOLHA DE ESTILOS GERAL E A ESPECÍFICA DESTA VIEW.
 *
 * --------------------------------------------------------------- */


import styles from '../../assets/Estilos/estilo-geral';
import EstiloHome from '../../assets/Estilos/estilos-home';

/**
 * ---------------------------------------------------------------
 *
 *             2 - CRIAÇÃO DE VARIÁVEIS E CONSTANTES
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  ATÉ O MOMENTO NÃO FORAM CRIADAS VARIÁVEIS OU CONSTANTES PARA
 * ESTA VIEW
 *
 * --------------------------------------------------------------- */

/**
 * ---------------------------------------------------------------
 *
 *                  3 - FUNÇÕES COMPLEMENTARES
 *
 * ---------------------------------------------------------------
 *
 *               3.1 - LÓGICA DO CAMPO DE NOTÍCIAS
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  NESTA ÁREA, ESTÃO DFESTINADAS AS FUNÇÕES E LÓGICA QUE COMPÕEM
 * OS EVENTOS QUE OCORRERÃO OU NÃO NESTA VIEW.
 *
 *
 * --------------------------------------------------------------- */

 /**
 * ---------------------------------------------------------------
 *
 *                   4 - FUNÇÕES PRINCIPAIS
 *
 * ---------------------------------------------------------------
 *
 *                     4.1 - TELA INICIAL
 *
 *  NOMEAMOS A FUNÇÃO PRINCIPAL DESTA VIEW COMO HomeScreen() E
 *  NELA, CONSTRUIMOS O QUE SERÁ VISTO ASSIM QUE O APLICATIVO FOR 
 * INICIALIZADO.
 *
 * --------------------------------------------------------------- */

export default function HomeScreen() {
  return (
    <View style={styles.primeiroStyle}>
      <LinearGradient
        colors={['#60BE8E', '#33AFC1', '#00A0F4']}
        style={styles.gradient}>
        <View style={EstiloHome.estiloViewHeader}>
          <Text style={EstiloHome.text}>
            If Logado: --- Bem vindo ---NOME--- Else: Entre ou cadastre-se
          </Text>
        </View>
        <View style={EstiloHome.estiloCard}>
          <Text>
            Este é um aplicativo desenvolvido por alunos do curso de Análise e
            Desenvolvimento de Sistemas em parceria com a Estácio
          </Text>
        </View>
        <View style={EstiloHome.container}>
          <Image
            source={require('../../assets/Img/propaganda_estacio.png')}
            style={{
              width: 300,
              height: 200,
            }}
          />
        </View>
        <Card style={EstiloHome.estiloCard}>
          <Text>Vagas recomendadas</Text>
        </Card>

        <Card style={EstiloHome.estiloCard}>
          <Text>Histórico</Text>
        </Card>
      </LinearGradient>
    </View>
  );
}
