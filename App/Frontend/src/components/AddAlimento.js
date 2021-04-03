import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import agregarButton1 from '../styles/agregarButton1'
import Add from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const AddAlimento = (props) => {

    const navigation = useNavigation();

    const evaluateNavigation = (tipo) => {
        switch (tipo) {
            case 'desayunoAyer':
                return 'AlimentosAyer'
            case 'intermedio1':
                return 'AlimentosAyer'
            case 'comidaAyer':
                return 'AlimentosAyer'
            case 'intermedio2':
                return 'AlimentosAyer'
            case 'cenaAyer':
                return 'AlimentosAyer'
            default:
                return 'Alimentos'
        }
    }

    const navigateTo = evaluateNavigation(props.tipo);

    const evaluateType = (tipo) => {
        switch (tipo) {
            case 'desayunoAyer':
                return 'desayunoAyer'
            case 'intermedio1':
                return 'intermedio1'
            case 'comidaAyer':
                return 'comidaAyer'
            case 'intermedio2':
                return 'intermedio2'
            case 'cenaAyer':
                return 'cenaAyer'
            default:
                return 'Alimentos'
        }
    }


    return (
        <View style={agregarButton1.body}>
            <View style={agregarButton1.container}>
                <TouchableOpacity onPress={() => navigation.navigate(navigateTo, evaluateType(props.tipo))}>
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