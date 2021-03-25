import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colorCard from '../styles/colorCard'
import Plus from 'react-native-vector-icons/Foundation'
import Minus from 'react-native-vector-icons/Foundation'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'

const ColorCard = (props) => {

    const { alimentos } = props;
    const cat = [alimentos.categoriaDelAlimento];
    const [cant, setCant] = useState(0);
    useEffect(() => {
        setCant(alimentos.cantidad)
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
            <View style={[colorCard.container, { backgroundColor: setBackground(alimentos.categoriaDelAlimento) }]}>
                <TouchableOpacity style={colorCard.deleteButton}>
                    <Delete name='delete-empty' style={{ position: 'relative', alignSelf: 'center' }} color={'#FF0000'} size={18} />
                </TouchableOpacity>
                <Text style={colorCard.number}>{cant}</Text>
                <Text style={colorCard.title}>{alimentos.alimento}</Text>
                <View style={colorCard.bottomContainer}>
                    <TouchableOpacity style={colorCard.minusButton} onPress={minus}>
                        <Minus name='minus' style={{ position: 'relative', alignSelf: 'center' }} color={'#000'} size={18} />
                    </TouchableOpacity>
                    <TouchableOpacity style={colorCard.plusButton} onPress={add}>
                        <Plus name='plus' style={{ position: 'relative', alignSelf: 'center' }} color={'#000'} size={18} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ColorCard
