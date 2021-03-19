import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegistroDieteticoContainer from '../screens/Registro/RegistroDieteticoContainer'
import AlimentoInd from '../screens/Alimentos/AlimentoInd'
import Ejercicios from '../screens/Aprendiendo/Ejercicios'
import EjercicioInd from '../screens/Aprendiendo/EjercicioInd'
import Agua from '../screens/Aprendiendo/Agua'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Registro' component={RegistroDieteticoContainer} options={{ headerTitle: 'Registro', headerTitleAlign: 'center' }} />
            <Stack.Screen name='AlimentoInd' component={AlimentoInd} options={{ headerShown: false }} left />
            <Stack.Screen name='Ejercicios' component={Ejercicios} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name='Agua' component={Agua} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name='EjercicioInd' component={EjercicioInd} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function RegistroDieteticoNavigator() {
    return <MyStack />
}
