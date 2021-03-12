import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Fontisto'
import botones from '../styles/botones'

const Boton = (props) => {
    return (
        <TouchableOpacity>
            <View style={botones.container}>
                <View style={botones.greenButton}>
                    <Text style={botones.principalTitle}>{props.name}</Text>
                    <Icon name={'angle-right'} size={22} color={'#FFF'} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Boton
