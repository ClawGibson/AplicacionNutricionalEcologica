import React from 'react'
import { View, Text } from "react-native";
import Boton from '../../components/Boton'

const Piramide = () => {
    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Pirámide
            </Text>
            <Boton name={'ENTRAR'} />
        </View>
    )
}

export default Piramide
