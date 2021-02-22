import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'native-base';

// Screens - Stacks ?
import AlimentosContainer from '../screens/Alimentos/AlimentosContainer'
import Perfil from '../screens/Usuarios/Perfil'
import AprendiendoContainer from '../screens/Aprendiendo/AprendiendoContainer'
import ComunidadContainer from '../screens/Comunidad/ComunidadContainer'
import MensajesContainer from '../screens/Mensajes/MensajesContainer'
import RegistroDietetico from '../screens/Registro/RegistroDietetico'

const Tab = createBottomTabNavigator();

function Main() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={AlimentosContainer} />
            <Tab.Screen name="Registro" component={RegistroDietetico} />
            <Tab.Screen name="Aprendiendo" component={AprendiendoContainer} />
            <Tab.Screen name="Comunidad" component={ComunidadContainer} />
            <Tab.Screen name="Perfil" component={Perfil} />
            <Tab.Screen name="Mensajes" component={MensajesContainer} />
        </Tab.Navigator>
    );
}

export default Main