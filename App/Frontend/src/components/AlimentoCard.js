import React from 'react'
import { View, Image, Text } from 'react-native'
import { TouchableOpacity } from 'react-native'

import alimentoCard1 from '../styles/alimentoCard1'

const imageNoAvailable = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvideojuego%2Fimages%2F9%2F9c%2FImagen_no_disponible-0.png%2Frevision%2Flatest%3Fcb%3D20170910134200&f=1&nofb=1';

const AlimentoCard = (props) => {

    const { imagen, nombreAlimento, icono } = props;

    return (
        <View style={alimentoCard1.container}>
            <TouchableOpacity>
                <Image style={alimentoCard1.image}
                    source={{ uri: imagen ? imagen : imageNoAvailable }}
                />
            </TouchableOpacity>
            <Text style={alimentoCard1.title}>
                {nombreAlimento}
            </Text>
            <TouchableOpacity>
                <Image style={alimentoCard1.face1}
                    resizeMode='contain'
                    source={{ uri: icono.iconoNutricional ? icono.iconoNutricional : imageNoAvailable }}
                />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={alimentoCard1.face2}
                    resizeMode='contain'
                    source={{ uri: icono.iconoAmbiental ? icono.iconoAmbiental : imageNoAvailable }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default AlimentoCard
