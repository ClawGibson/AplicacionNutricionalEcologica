import React from 'react'
import { View } from 'react-native'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'

const AlimentosList = (props) => {

    const { item } = props;
    console.log(`Item en list: ${item}`);

    return (
        <TouchableOpacity
            onPress={() =>
                props.navigation.navigate('AlimentoInd', item)
            }
        >
            <AlimentoCard {...item} />
        </TouchableOpacity>
    )
}

export default AlimentosList
