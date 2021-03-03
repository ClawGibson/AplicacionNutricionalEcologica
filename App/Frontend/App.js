import React from "react";
import { NavigationContainer } from '@react-navigation/native'

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
