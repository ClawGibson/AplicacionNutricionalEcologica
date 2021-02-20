import React, { Fragment } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

import alimentoCard1 from '../styles/alimentoCard1'

const imageBase = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffrutasyverduras.info%2Fwp-content%2Fuploads%2F2019%2F02%2Fmanzana-roja.jpg&f=1&nofb=1';

const AlimentoCard = (props) => {

    const { imagen, nombreAlimento, icono } = props;

    return (
        <TouchableOpacity style={{ width: '50%' }}>
            <View style={alimentoCard1.container}>
                <Image style={alimentoCard1.image}
                    resizeMode='contain'
                    source={{ uri: imagen ? imagen : imageBase }}
                />
                <View style={alimentoCard1.card} />
                <Text style={alimentoCard1.title}>
                    {nombreAlimento.length > 15 ? nombreAlimento.substring(0, 15 - 3) + '...' : nombreAlimento}
                </Text>
                <Image style={alimentoCard1.face1}
                    resizeMode='contain'
                    source={{ uri: icono.iconoNutricional ? icono.iconoNutricional : 'no available1' }}
                />
                <Image style={alimentoCard1.face2}
                    resizeMode='contain'
                    source={{ uri: icono.iconoAmbiental ? icono.iconoAmbiental : 'no available2' }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default AlimentoCard
