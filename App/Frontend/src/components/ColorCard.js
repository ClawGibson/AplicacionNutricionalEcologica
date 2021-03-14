import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import colorCard from '../styles/colorCard'
import Plus from 'react-native-vector-icons/Foundation'
import Minus from 'react-native-vector-icons/Foundation'
import Delete from 'react-native-vector-icons/MaterialCommunityIcons'

const ColorCard = (props) => {

    const [cant, setCant] = useState(0);

    const add = () => {
        setCant(cant + 1);
    }

    const minus = () => {
        cant > 0 ? setCant(cant - 1) : null
    }

    return (
        <View style={colorCard.body}>
            <View style={colorCard.legumesContainer}>
                <TouchableOpacity style={colorCard.deleteButton}>
                    <Delete name='delete-empty' style={{ position: 'relative', alignSelf: 'center' }} color={'#FF0000'} size={18} />
                </TouchableOpacity>
                <Text style={colorCard.number}>{cant}</Text>
                <Text style={colorCard.title}>naranjas</Text>
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
