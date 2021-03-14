import React from 'react'
import ColorCard from '../../components/ColorCard'
import { TouchableOpacity } from 'react-native'

const ColorCardList = (props) => {

    const { card } = props;

    return (
        <TouchableOpacity>
            <ColorCard {...card} />
        </TouchableOpacity>
    )
}

export default ColorCardList
