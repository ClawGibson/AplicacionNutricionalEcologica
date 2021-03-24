import React from 'react'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AlimentosListAdd = (props) => {

    const { item } = props;
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate('AlimentoIndAdd', { item: item })
            }}
        >
            <AlimentoCard {...item} />
        </TouchableOpacity>
    )
}

export default AlimentosListAdd
