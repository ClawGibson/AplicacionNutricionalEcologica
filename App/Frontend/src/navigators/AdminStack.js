import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AdminPerfil from '../screens/Admin/Perfil/AdminPerfil'
import MenusBase from '../screens/Admin/Menus/MenusBase'
import GrupoDeAlimentos from '../components/GrupoDeAlimentos/GrupoDeAlimentos';
import ListaPorGrupo from '../components/GrupoDeAlimentos/ListaPorGrupo';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='AdminPerfil' component={AdminPerfil} options={{ title: 'Mi perfil', headerTitleAlign: 'center' }} />
            <Stack.Screen name='NuevoMenuBase' component={MenusBase} options={{ title: 'Nuevo menú base', headerTitleAlign: 'center' }} />
            <Stack.Screen name='GrupoDeAlimentos' component={GrupoDeAlimentos} options={{ title: 'Grupos de alimentos', headerTitleAlign: 'center' }} />
            <Stack.Screen name='ListaPorGrupoDeAlimentos' component={ListaPorGrupo} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}

export default function AdminNavigation() {
    return <MyStack />
}