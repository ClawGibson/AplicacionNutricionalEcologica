import React from 'react'
import { TouchableOpacity } from 'react-native'
import EjerciciosCard from './EjerciciosCard'

const EjerciciosList = (props) => {

    const { item } = props;

    return (
        <TouchableOpacity>
            <EjerciciosCard {...item} />
        </TouchableOpacity>
    )
}

export default EjerciciosList
