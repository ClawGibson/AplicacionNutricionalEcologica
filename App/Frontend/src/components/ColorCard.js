import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colorCard from '../styles/colorCard'
import Plus from 'react-native-vector-icons/Foundation'
import Minus from 'react-native-vector-icons/Foundation'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { removeFromBreakfast, increaseCount, decreaseCount } from '../Redux/actions/cart'

const ColorCard = (props) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const { item } = props;
    const [cant, setCant] = useState(0);
    useEffect(() => {
        setCant(item.cantidad)
        return () => {
            setCant(0);
        }
    }, [])

    const add = () => {
        setCant(cant + 1);
    }

    const minus = () => {
        cant > 1 ? setCant(cant - 1) : null
    }

    const setBackground = (category) => {
        if (category == 'fruit')
            return '#FF7A00'
        if (category == 'vegetable')
            return '#00A24F'
        if (category == 'meat')
            return '#E01400'
        if (category == 'cereal')
            return '#CD8D00'
        if (category == 'dairy')
            return '#00A2FB'
        if (category == 'legumes')
            return '#FF2088'
    }

    return (
        <View style={colorCard.body}>
            <View style={[colorCard.container, { backgroundColor: setBackground(item.categoria) }]}>
                <TouchableOpacity
                    style={colorCard.deleteButton}
                    onPress={() => {
                        dispatch(removeFromBreakfast(item)), navigation.navigate('Registro')
                    }}
                >
                    <Delete name='delete-empty' style={{ position: 'relative', alignSelf: 'center' }} color={'#FF0000'} size={18} />
                </TouchableOpacity>
                <Text style={colorCard.number}>{cant}</Text>
                <Text style={colorCard.title}>{item.nombre}</Text>
                <View style={colorCard.bottomContainer}>
                    <TouchableOpacity style={colorCard.minusButton} onPress={() => dispatch(decreaseCount(item))}>
                        <Minus name='minus' style={{ position: 'relative', alignSelf: 'center' }} color={'#000'} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity style={colorCard.plusButton} onPress={() => dispatch(increaseCount(item))}>
                        <Plus name='plus' style={{ position: 'relative', alignSelf: 'center' }} color={'#000'} size={18} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ColorCard
