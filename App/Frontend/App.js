import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from '@react-navigation/native'

// Components
import AlimentosContainer from './src/screens/Alimentos/AlimentosContainer'
import Banner from './src/components/Banner'

// Navigator
import Main from './src/navigators/Main'


export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
