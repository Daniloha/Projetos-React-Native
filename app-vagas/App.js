/**
 * --------------------------------------------------------------
 *
 * TITULO: PROJETO RH EM AÇÃO
 *  -> ESTE É UM PROJETO REFERENTE A DISCIPLINA DE PROGRAMAÇÃO
 *  PARA DISPOSITIVOS MÓVEIS EM ANDROID.
 * PROFESSOR:MARCIO BARBADO
 * INTEGRANTES:
 * ---------------------------------------------------------------
 * |   NOME                        |   FUNÇÃO  |    MATRICULA     |
 *----------------------------------------------------------------
 * | DANILO HOLANDA ARAUJO         |   SCRUM   |   202202150241   |
 * |  ALBERTO TELES                |   DBA     |  --------------  |
 * |  AMANDA MARTINS               | FRONT-END |   202202931306   |
 * |  BEATRIZ RAMOS REIS           |FULL STACK |  --------------  |
 * |  DIEREE                       | P.MANAGER |   202203882449   |
 * |  VITOR PILARES                | S.ANALYST |   202201048166   |
 *----------------------------------------------------------------
 *
 * DESCRIÇÃO:
 *
 *
 *
 *
 *
 *
 *               MAIN - COMPONENTE DE INICIALIZAÇÃO
 *
 *  ESTE É O COMPONENTE PRINCIPAL DESTA APLICAÇÃO, ONDE SE
 * ENCONTRA O EMPILHAMENTO DE TELAS PRINCIPAL, E A PARTIR DELE,
 *  SEGUEM-SE AS RAMIFICAÇÕES. AQUI TAMBÉM SÃO CRIADOS OS
 * COMPONENTES PADRÕES UTILIZADOS EM TODAS AS VIEWS, COMOO NOME
 * E LOGO.
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
 *      4 - FUNÇÕES PRINCIPAIS
 *          4.1 - FUNÇÃO APP() DE INICIALIZAÇÃO
 *      5 - ANÁLISES E CONCLUSÕES
 *
 * ---------------------------------------------------------------
 *
 */

/**
 * ---------------------------------------------------------------
 *
 *                 1 - IMPORTAÇÃO DE BIBLIOTECAS
 *
 * ---------------------------------------------------------------
 *
 *                  1.1 - BIBLIOTECAS EXTERNAS
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  NESTE FICHEIRRO, UTILIZAMOS:
 * {View, Text, SafeAreaView e Image} DA BIBLIOTECA NATIVA
 *  react-native;
 *  - VIEW -> COMPONENTE MAIS GENÉRICO UTILIZADO PARA COMPOR AS
 * TELAS(VIEWS) EM REACT. SÃO COMO CAIXAS OU CONTAINERS TOTALMENTE
 * PERSONALIZÁVEIS. EQUIVALENTE AS 'DIVS' DE HTML5.
 * - TEXT -> COMPONENTE GENÉRICO UTILIZADO PARA APLICAÇÃO DE TEXTOS
 * DENTRO DAS 'VIEWS'. TAMBÉM ALTAMENTE PERSONALIZÁVEIS.
 * - SAFEAREAVIEW -> COMPONENTE SEMELHANTE AO VIEW PORÉM COM UMA
 * PARTICULARIDADE NO CASO DE RENDERIZAÇÃO EM IOS. ESTE COMPONENTE
 * EVITA QUE O APLICATIVO OCUPE A BARRA DE STATUS DO APARELHO.
 * - IMAGE -> UTILIZADO PARA CARREGAR IMAGENS NAS VIEWS. TAMBÉM
 *  EDITÁVEL QUANTO AO TAMANHO DA IMAGEM, TRANSPARÊNCIA E ETC.
 * { NavigationContainer } DE @react-navigation/native;
 * - NAVIGATIONCONTAINER ->
 *
 * --------------------------------------------------------------- */

import { View, Text, SafeAreaView, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/**
 *
 * *                  1.2 - BIBLIOTECAS INTERNAS
 *
 *  O CONCEITO ESTÁ DESCRITO NO FICHEIRO App.js
 *  NESTE FICHEIRRO, UTILIZAMOS:
 * BarraNavegacao -> COMPONENTE BARRA DE NAVEGAÇÃO CRIADO E
 * ESTILIZADO PARA NAVEGAR NA S TELAS PRINCIPAIS DO APLICATIVO,
 * SEM QUALQUER VINCULO COM AS SUAS SUBTELAS/RAMIFICAÇÕES.
 *  styles -> CRIADO PARA APLICAR A FUNÇÃO DEFAULT(PADRÃO) DA
 *  FOLHA DE ESTILO GERAL.
 */
import styles from './assets/Estilos/estilo-geral';
import HomeScreen from './src/Views/Home';
import SearchScreen from './src/Views/Busca';
import ContactScreen from './src/Views/Contato';
import PerfilStack from './src/Routes/PerfilStack';
import ScreeNavegator from './src/Routes/TabNavigatorScreens';
import HeaderMain from './src/Componentes/HeaderMain';

/**
 * ---------------------------------------------------------------
 *
 *              2 - CRIAÇÃO DE VARIÁVEIS E CONSTANTES
 *
 *   NÃO FORAM CRIADAS VARIÁVEIS OU CONSTANTES NESTE FICHEIRO ATÉ
 *  O MOMENTO
 *
 * ---------------------------------------------------------------
 */
const Tab = new createBottomTabNavigator();

/**
 * ---------------------------------------------------------------
 *
 *                    3 - FUNÇÕES COMPLEMENTARES
 *
 * NÃO FORAM CRIADAS FUNÇÕES COMPLEMENTARES ATÉ O MOMENTO.
 *
 *
 * ---------------------------------------------------------------
 */

/**
 * ---------------------------------------------------------------
 *
 *                      4 - FUNÇÕES PRINCIPAIS
 *
 * ---------------------------------------------------------------
 *
 *                4.1 - FUNÇÃO APP() DE INICIALIZAÇÃO
 *
 * OBS: O AMBIENTE SNACK É UM AMBIENTE COTROLADO PELO EXPO. ALGUMAS
 * CONFIGURAÇOES E FUNÇÕES DE INICIALIZAÇÃO SÃO PRÉ-CONFIGURADAS,
 * EXCLUINDO A NECESSIDADE DE index.js COM A FUNÇÃO AppRegistry.
 * registerComponent(appName, () => App) POR EXEMPLO.
 *
 * ESTA FUNÇÃO É RESPONSÁVEL PELA NAVEGAÇÃO ENTRE AS TELAS PRINCIPAIS,
 * APLICAÇÃO DE ESTILOS E COMPONENTES GERAIS COMO O NOME DA APICAÇÃO E
 * LOGO, ALÉM DA APLICAÇÃO DO ESTILO PADRÃO DE LETRAS E FORMAS
 * UTILIZADOS NA APLICAÇÃO.
 *
 *
 *
 * --------------------------------------------------------------- */

export default function App() {
  //EXPORTAÇÃO DA FUNÇÃO PRINCIPAL
  return (
    //RETORNO A FUNÇÃO
    <SafeAreaView style={styles.container}>
      <HeaderMain/>
      <NavigationContainer>
        <ScreeNavegator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

/**
 * ---------------------------------------------------------------
 *
 *                  5 - ANÁLISES E CONCLUSÕES
 *
 *   NÃO FORAM CRIADAS VARIÁVEIS OU CONSTANTES NESTE FICHEIRO ATÉ
 *  O MOMENTO
 *
 * ---------------------------------------------------------------
 */
