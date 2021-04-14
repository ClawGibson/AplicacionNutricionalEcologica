import React from 'react'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AlimentosListAdd = (props) => {

    const { item, ayer, tipo } = props;
    const navigation = useNavigation();

    return (
        <>
            {
                tipo == 'Alimentos' || tipo == undefined
                    ?
                    (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('AlimentoIndAdd', { item: item })
                            }}
                        >
                            <AlimentoCard {...item} />
                        </TouchableOpacity>
                    )
                    :
                    (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('AlimentoIndAdd2', { item: item, tipo: tipo })
                            }}
                        >
                            <AlimentoCard {...item} />
                        </TouchableOpacity>)
            }
        </>
    )
}

export default AlimentosListAdd
