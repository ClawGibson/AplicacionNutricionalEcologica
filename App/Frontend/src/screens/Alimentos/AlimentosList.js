import React from 'react'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AlimentosList = (props) => {

    const { item } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('AlimentoInd', { item: item })
            }}
        >
            <AlimentoCard {...item} />
        </TouchableOpacity>
    )
}

export default AlimentosList
