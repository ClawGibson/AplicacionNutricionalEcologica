import React from 'react'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'

const AlimentosList = (props) => {

    const { item } = props;
    //console.log(`Item en list: ${item.nombreAlimento}`);

    return (
        <TouchableOpacity
            onPress={() => {
                props.navigation.navigate('AlimentoInd', { item: item })
            }}
        >
            <AlimentoCard {...item} />
        </TouchableOpacity>
    )
}

export default AlimentosList
