import React from 'react'
import ColorCard from '../../components/ColorCard'

const ColorCardList = (props) => {

    const { item } = props;

    return (
        <ColorCard {...item} />
    )
}

export default ColorCardList
