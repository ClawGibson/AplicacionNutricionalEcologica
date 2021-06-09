/*import React from "react";
import { View, Text } from 'react-native'

const Perfil = () => {
    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Perfil de usuario.
            </Text>
        </View>
    )
}

export default Perfil
*/
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Account from "./screensAccount/Account";
import Login from "./screensAccount/Login";
import Register from "./screensAccount/Register";

const Stack = createStackNavigator();

export default function Perfil() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="account"
        component={Account}
        options={{ title: "Cuenta" }}
      />
      <Stack.Screen
        name="login"
        component={Login}
        options={{ title: "Iniciar Sesión" }}
      />
      <Stack.Screen
        name="register"
        component={Register}
        options={{ title: "Registro" }}
      />
    </Stack.Navigator>
  );
}
