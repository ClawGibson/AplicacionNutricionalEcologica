import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon3 from 'react-native-vector-icons/FontAwesome5'

// Screens
import Perfil from '../screens/Usuarios/Perfil'
import AprendiendoContainer from '../screens/Aprendiendo/AprendiendoContainer'
import ComunidadContainer from '../screens/Comunidad/ComunidadContainer'
import MensajesContainer from '../screens/Mensajes/MensajesContainer'
import Piramide from '../screens/Alimentos/Piramide'

// Stacks
import StackNavigation from '../navigators/StackNavigation'

const Tab = createBottomTabNavigator();
import { primary } from '../styles/palette'

function Main() {
    return (
        <Tab.Navigator
            initialRouteName="Principal"
            swipeEnabled
            animationEnabled
            tabBarOptions={{
                showLabel: true,
                activeTintColor: primary
            }}
        >
            <Tab.Screen name="Principal" component={Piramide}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon name='home' style={{ position: 'relative' }} color={color} size={48} />
                    )
                }} />
            <Tab.Screen name="Registro" component={StackNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name='silverware-fork-knife' style={{ position: 'relative' }} color={color} size={40} />
                    )
                }} />
            <Tab.Screen name="Aprendiendo" component={AprendiendoContainer}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Icon2 name='book-open-page-variant' style={{ position: 'relative' }} color={color} size={45} />
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
                        <Icon name='comments' style={{ position: 'relative' }} color={color} size={45} />
                    )
                }} />
        </Tab.Navigator>
    );
}

export default Main