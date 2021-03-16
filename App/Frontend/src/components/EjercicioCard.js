import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import aguaCard from '../styles/aguaCard'
import { useNavigation } from '@react-navigation/native'

const EjercicioCard = () => {

    const navigation = useNavigation()

    return (
        <TouchableOpacity style={aguaCard.aguaContainer} onPress={() => {
            navigation?.navigate('Ejercicios')
        }}>
            <View>
                <Text style={aguaCard.title}>Ejercicio</Text>
                <Text style={aguaCard.number}>0</Text>
                <Text style={aguaCard.measure}>min</Text>
                <View style={aguaCard.button}>
                    <Text style={aguaCard.text}>Agregar</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default EjercicioCard
