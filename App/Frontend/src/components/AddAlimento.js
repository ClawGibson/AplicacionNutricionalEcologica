import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import agregarButton1 from '../styles/agregarButton1'
import Add from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const AddAlimento = () => {

    const navigation = useNavigation();

    return (
        <View style={agregarButton1.body}>
            <View style={agregarButton1.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Alimentos')}>
                    <View style={agregarButton1.icon}>
                        <Add name="add-circle-outline" size={50} color={'#000'} />
                    </View>
                    <View style={agregarButton1.containerButton}>
                        <Text style={agregarButton1.title}>
                            Agregar
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddAlimento