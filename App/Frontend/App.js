import React from "react";
import { NavigationContainer } from '@react-navigation/native'

// Redux
import { Provider } from 'react-redux'
import Store from './src/Redux/Store'

// Navigators
import Main from './src/navigators/Main'

export default function App() {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </Provider>
  );
}
