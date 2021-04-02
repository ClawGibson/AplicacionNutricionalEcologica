import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const ComunidadContainer = () => {
    const navigation = useNavigation();

    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Ayer')}>
                    <Text>Ayer</Text>
                </TouchableOpacity>
            </Text>
        </View>
    )
}

export default ComunidadContainer
