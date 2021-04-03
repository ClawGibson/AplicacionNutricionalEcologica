import React from 'react'
import AlimentoCard from '../../components/AlimentoCard'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const AlimentosListAdd = (props) => {

    const { item, ayer, tipo } = props;
    const navigation = useNavigation();

    const evaluateNavigation = (ayer) => {
        if (ayer)
            return 'AlimentoIndAdd2'
        return 'AlimentoIndAdd'
    }

    const data = evaluateNavigation(ayer);

    return (
        <>
            {
                tipo == 'Alimentos'
                    ?
                    (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(evaluateNavigation(data), { item: item })
                            }}
                        >
                            <AlimentoCard {...item} />
                        </TouchableOpacity>
                    )
                    :
                    (<TouchableOpacity
                        onPress={() => {
                            navigation.navigate(evaluateNavigation(data), { item: item, tipo: tipo })
                        }}
                    >
                        <AlimentoCard {...item} />
                    </TouchableOpacity>)
            }
        </>
    )
}

export default AlimentosListAdd
