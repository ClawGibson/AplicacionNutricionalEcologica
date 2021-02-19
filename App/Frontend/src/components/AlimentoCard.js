import React, { Fragment } from 'react'
import { View, Image, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

import alimentoCard from '../styles/alimentoCard'

const imageBase = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffrutasyverduras.info%2Fwp-content%2Fuploads%2F2019%2F02%2Fmanzana-roja.jpg&f=1&nofb=1';

const AlimentoCard = (props) => {

    const { foodImage, foodName, face1, face2, counter } = props;

    return (
        <TouchableOpacity>
            <View style={alimentoCard.container}>
                <Image style={alimentoCard.image}
                    resizeMode='contain'
                    source={{ uri: foodImage ? foodImage : imageBase }}
                />
                <View style={alimentoCard.card} />
                <Text style={alimentoCard.title}>
                    {foodName.length > 15 ? foodName.substring(0, 15 - 3) + '...' : foodName}
                </Text>
                <Image style={alimentoCard.face1}
                    resizeMode='contain'
                    source={{ uri: face1 ? face1 : 'no available1' }}
                />
                <Image style={alimentoCard.face2}
                    resizeMode='contain'
                    source={{ uri: face2 ? face2 : 'no available2' }}
                />
            </View>
        </TouchableOpacity>
    )
}

export default AlimentoCard
