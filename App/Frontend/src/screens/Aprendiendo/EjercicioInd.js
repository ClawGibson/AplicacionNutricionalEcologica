import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import ejercicioInd from '../../styles/ejercicioInd'
import Add from 'react-native-vector-icons/Ionicons'
import Minus from 'react-native-vector-icons/Feather'
import { primary } from '../../styles/palette'
import { useDispatch } from 'react-redux'
import { addTime } from '../../Redux/actions/time'

const EjercicioInd = ({ route }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { imagen, name } = route.params.data;
    const [time, setTime] = useState(5);

    useEffect(() => {
        setTime(5);
        return () => {
            setTime(5);
        }
    }, [])

    const add = () => {
        setTime(time + 5);
    }

    const minus = () => {
        time > 5 ? setTime(time - 5) : null;
    }

    return (
        <View style={ejercicioInd.body}>
            <View style={ejercicioInd.container}>
                <Image style={ejercicioInd.image}
                    source={{ uri: imagen ? imagen : null }}
                />
                <Text style={ejercicioInd.title}>{name ? name : 'No data'}</Text>
                <View style={ejercicioInd.button}>
                    <TouchableOpacity onPress={minus} style={{ position: 'absolute', marginTop: 11, marginLeft: '5%', width: 30, alignItems: 'center' }}>
                        <Minus name='minus' size={30} color={primary} />
                    </TouchableOpacity>
                    <Text style={ejercicioInd.text}>{`${time} min`}</Text>
                    <TouchableOpacity onPress={add} style={{ position: 'absolute', marginTop: -29, marginLeft: '80%', width: 30, alignItems: 'center' }}>
                        <Add name='add' size={30} color={primary} />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity
                style={ejercicioInd.register}
                onPress={() => {
                    navigation.navigate('Registro'),
                        dispatch(addTime(time))
                }}>
                <Text style={ejercicioInd.registerText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default EjercicioInd
