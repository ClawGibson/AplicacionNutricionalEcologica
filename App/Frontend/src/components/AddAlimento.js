import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import agregarButton1 from '../styles/agregarButton1'

const imageNoAvailable = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvideojuego%2Fimages%2F9%2F9c%2FImagen_no_disponible-0.png%2Frevision%2Flatest%3Fcb%3D20170910134200&f=1&nofb=1';
const addIcon = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Ficons.iconarchive.com%2Ficons%2Fawicons%2Fvista-artistic%2F256%2Fadd-icon.png&f=1&nofb=1';
const AddAlimento = () => {

    return (
        <View style={agregarButton1.container}>
            <View style={agregarButton1.containerButton}>
                <TouchableOpacity>
                    <Image style={agregarButton1.add}
                        source={{ uri: addIcon ? addIcon : imageNoAvailable }}
                    />
                    <Text style={agregarButton1.title}>
                        Agregar
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AddAlimento