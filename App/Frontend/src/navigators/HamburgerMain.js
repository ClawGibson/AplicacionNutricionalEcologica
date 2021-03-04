import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import hamburgerStyles from '../styles/hamburgerStyles'


// Screens - Stacks ?
import AlimentosContainer from '../screens/Alimentos/AlimentosContainer'
import Perfil from '../screens/Usuarios/Perfil'
import AprendiendoContainer from '../screens/Aprendiendo/AprendiendoContainer'
import ComunidadContainer from '../screens/Comunidad/ComunidadContainer'
import MensajesContainer from '../screens/Mensajes/MensajesContainer'
import RegistroDietetico from '../screens/Registro/RegistroDieteticoContainer'
const Drawer = createDrawerNavigator();

const HamburgerMain = () => {
    return (
        <>
            <Drawer.Navigator drawerPosition="right" >
                <Drawer.Screen name='Pirámide' component={AlimentosContainer} />
                <Drawer.Screen name='Registro' component={RegistroDietetico} />
                <Drawer.Screen name='Aprendiendo' component={AprendiendoContainer} />
                <Drawer.Screen name='Comunidad' component={ComunidadContainer} />
                <Drawer.Screen name='Perfil' component={Perfil} />
                <Drawer.Screen name='Mensajes' component={MensajesContainer} />
            </Drawer.Navigator>
        </>
    )
}

export default HamburgerMain
