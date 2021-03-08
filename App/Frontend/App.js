import React from "react";
import { NavigationContainer } from '@react-navigation/native'

// Redux
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'

// Components
import AlimentosContainer from './src/screens/Alimentos/AlimentosContainer'
import Banner from './src/components/Banner'

// Navigators
import Main from './src/navigators/Main'
import HamburgerMain from './src/navigators/HamburgerMain'

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
