import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import RegistroDieteticoContainer from '../screens/Registro/RegistroDieteticoContainer'
import AlimentoInd from '../screens/Alimentos/AlimentoInd'
import Alimentos from '../screens/Alimentos/Alimentos'
import AlimentosAyer from '../screens/Alimentos/AlimentosYesterday'
import Ejercicios from '../screens/Aprendiendo/Ejercicios'
import EjercicioInd from '../screens/Aprendiendo/EjercicioInd'
import Agua from '../screens/Aprendiendo/Agua'
import AlimentoIndAdd from '../screens/Alimentos/AlimentoIndAdd'
import AlimentoIndAdd2 from '../screens/Alimentos/AlimentoIndAdd2'
import Yesterday from '../screens/Registro/Yesterday'
import Recetas from '../screens/Alimentos/Recetas'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Registro' component={RegistroDieteticoContainer} options={{ headerTitle: 'Registro', headerTitleAlign: 'center' }} />
            <Stack.Screen name='AlimentoInd' component={AlimentoInd} options={{ headerShown: false }} left />
            <Stack.Screen name='Ejercicios' component={Ejercicios} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name='Agua' component={Agua} options={{ headerTitleAlign: 'center' }} />
            <Stack.Screen name='EjercicioInd' component={EjercicioInd} options={{ headerShown: false }} />
            <Stack.Screen name='Alimentos' component={Alimentos} options={{ headerShown: true, headerTitleAlign: 'center' }} />
            <Stack.Screen name='AlimentoIndAdd' component={AlimentoIndAdd} options={{ headerShown: false }} />
            <Stack.Screen name='Ayer' component={Yesterday} options={{ tabBarVisible: false, headerShown: false }} />
            <Stack.Screen name='AlimentosAyer' component={AlimentosAyer} options={{ title: 'Selección de alimentos' }} />
            <Stack.Screen name='AlimentoIndAdd2' component={AlimentoIndAdd2} options={{ title: 'Alimento individual' }} />
            <Stack.Screen name='Recetas' component={Recetas} options={{ title: 'Recetas', headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    )
}

export default function RegistroDieteticoNavigator() {
    return <MyStack />
}
