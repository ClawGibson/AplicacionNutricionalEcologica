import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons'

// Components
import AlimentosContainer from './src/screens/Alimentos/AlimentosContainer'
import Banner from './src/components/Banner'

// Navigators
import Main from './src/navigators/Main'
import HamburgerMain from './src/navigators/HamburgerMain'

export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
