import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const Perfil = () => {

    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Perfil de usuario.
            </Text>
            <TouchableOpacity>
                <Text>Ir al perfil de admin</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Perfil
