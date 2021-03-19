import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ejercicios from '../../styles/ejercicios'

const EjerciciosCard = (props) => {

    const { imagen, name } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={ejercicios.body} onPress={() => navigation.navigate('EjercicioInd', { data: props })}>
            <View style={ejercicios.container}>
                <Image style={ejercicios.image}
                    source={{ uri: imagen ? imagen : null }}
                />
                <Text style={ejercicios.text}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default EjerciciosCard
