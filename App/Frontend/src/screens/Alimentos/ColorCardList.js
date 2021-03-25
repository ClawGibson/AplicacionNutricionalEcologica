import React from 'react'
import ColorCard from '../../components/ColorCard'
import { TouchableOpacity } from 'react-native'

const ColorCardList = (props) => {

    const { item } = props;

    return (
        <ColorCard {...item} />
    )
}

export default ColorCardList
