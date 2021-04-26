import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AdminPerfil from '../screens/Admin/Perfil/AdminPerfil'
import MenusBase from '../screens/Admin/Menus/MenusBase'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='AdminPerfil' component={AdminPerfil} options={{ title: 'Mi perfil', headerTitleAlign: 'center' }} />
            <Stack.Screen name='NuevoMenuBase' component={MenusBase} options={{ title: 'Nuevo menú base', headerTitleAlign: 'center' }} />
        </Stack.Navigator>
    )
}

export default function AdminNavigation() {
    return <MyStack />
}