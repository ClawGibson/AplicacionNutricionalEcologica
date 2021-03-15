import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colorCard from '../styles/colorCard'
import Plus from 'react-native-vector-icons/Foundation'
import Minus from 'react-native-vector-icons/Foundation'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'

const ColorCard = (props) => {

    const card = props;

    const [cant, setCant] = useState(0);
    const [category, setCategory] = useState('');

    useEffect(() => {
        setCategory(selectCategory(card.alimentos.categoriaDelAlimento));
        return () => {
            setCategory('');
        }
    }, [])

    const add = () => {
        setCant(cant + 1);
    }

    const minus = () => {
        cant > 0 ? setCant(cant - 1) : null
    }

    const selectCategory = (cat) => {
        return `${cat}Container`
    }

    return (
        <View style={colorCard.body}>
            <View style={colorCard.category}>
                <TouchableOpacity style={colorCard.deleteButton}>
                    <Delete name='delete-empty' style={{ position: 'relative', alignSelf: 'center' }} color={'#FF0000'} size={18} />
                </TouchableOpacity>
                <Text style={colorCard.number}>{card.alimentos.cantidad}</Text>
                <Text style={colorCard.title}>{card.alimentos.alimento}</Text>
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
