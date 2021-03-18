import React from 'react'
import ColorCard from '../../components/ColorCard'
import { TouchableOpacity } from 'react-native'

const ColorCardList = (props) => {

    const { card } = props;

    console.log('...');
    card?.map((item) => console.log(`categoriaDelAlimento: ${item.alimentos.categoriaDelAlimento} | alimento: ${item.alimentos.alimento} | cantidad: ${item.alimentos.cantidad}`))

    return (
        <TouchableOpacity>

        </TouchableOpacity>
    )
}

export default ColorCardList
