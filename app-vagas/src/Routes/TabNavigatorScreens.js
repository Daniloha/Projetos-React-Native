// TabNavigatorScreen.js

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Views/Home';
import SearchScreen from '../Views/Busca';
import ContactScreen from '../Views/Contato';
import PerfilStack from './PerfilStack';
import BarradeNavegacao from '../Componentes/barraNavegacao';

const Tab = createBottomTabNavigator();

export default function TabNavigatorScreen() {
  return (
    <BarradeNavegacao>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Busca" component={SearchScreen} />
        <Tab.Screen name="PerfilStack" component={PerfilStack} />
        <Tab.Screen name="Contato" component={ContactScreen} />
      </Tab.Navigator>
    </BarradeNavegacao>
  );
}
