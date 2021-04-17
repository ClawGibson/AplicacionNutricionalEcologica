import React from 'react'
import Card from '../Card/Card'
import { TouchableOpacity } from 'react-native'

const CardList = (props) => {

    console.log('cardlist:', props);

    const { item } = props;

    return (
        <TouchableOpacity>
            <Card {...item} />
        </TouchableOpacity>
    )
}

export default CardList
