import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'

// Screens - Stacks ?
import AlimentosContainer from '../screens/Alimentos/AlimentosContainer'
import Perfil from '../screens/Usuarios/Perfil'
import AprendiendoContainer from '../screens/Aprendiendo/AprendiendoContainer'
import ComunidadContainer from '../screens/Comunidad/ComunidadContainer'
import MensajesContainer from '../screens/Mensajes/MensajesContainer'
import RegistroDietetico from '../screens/Registro/RegistroDietetico'

const Tab = createBottomTabNavigator();
const primaryColor = '#439776';

function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Principal"
            tabBarOptions={{
                showLabel: false,
                activeTintColor: primaryColor
            }}
        >
            <Tab.Screen name="Principal" component={AlimentosContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' style={{ position: 'relative' }} color={color} size={48} />
                    )
                }} />
            <Tab.Screen name="Registro" component={RegistroDietetico}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name='silverware-fork-knife' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
            <Tab.Screen name="Aprendiendo" component={AprendiendoContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name='book-open-page-variant' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
            <Tab.Screen name="Comunidad" component={ComunidadContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon3 name='users' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
            <Tab.Screen name="Perfil" component={Perfil}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='user-circle' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
            <Tab.Screen name="Mensajes" component={MensajesContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='comments' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default Main