import React from 'react'
import { View } from 'react-native'
import AlimentoCard from '../../components/AlimentoCard'

const AlimentosList = (props) => {

    const { item } = props;

    return (
        <View>
            <AlimentoCard {...item} />
        </View>
    )
}

export default AlimentosList
