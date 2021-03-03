import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegistroDieteticoContainer from '../screens/Registro/RegistroDieteticoContainer'
import { HeaderTitle } from 'react-navigation-stack';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Registro' component={RegistroDieteticoContainer}
                options={{
                    headerTitle: 'Registro Dietético',
                    headerTitleAlign: 'center',
                    headerBackTitleVisible: true
                }}
                left />
        </Stack.Navigator>
    )
}

export default function RegistroDieteticoNavigator() {
    return <MyStack />
}
