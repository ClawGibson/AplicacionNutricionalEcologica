import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegistroDieteticoContainer from '../screens/Registro/RegistroDieteticoContainer'
import AlimentoInd from '../screens/Alimentos/AlimentoInd'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Registro' component={RegistroDieteticoContainer}
                options={{
                    headerTitle: 'Registro Dietético',
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen name='AlimentoInd' component={AlimentoInd}
                options={{
                    headerShown: false
                }}
                left />
        </Stack.Navigator>
    )
}

export default function RegistroDieteticoNavigator() {
    return <MyStack />
}
