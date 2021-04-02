import React from 'react'
import { View, Text, FlatList } from 'react-native'

import AddAlimento from '../../components/AddAlimento'

const Yesterday = () => {
    return (
        <View>
            <Text style={{ marginTop: '20%', fontSize: 24, textAlign: 'center' }}>Una última cosa, ingresa los alimentos que consumiste el día de ayer</Text>
            <View style={{ marginBottom: '15%', marginTop: '5%' }}>
                <Text>
                    Desayuno
                </Text>
                <View style={{ marginTop: '20%' }}>
                    <FlatList

                    />
                    <AddAlimento />
                </View>
            </View>
            <View style={{ marginBottom: '15%', marginTop: '5%' }}>
                <Text>
                    Intermedio
                </Text>
                <View style={{ marginTop: '20%' }}>
                    <FlatList

                    />
                    <AddAlimento />
                </View>
            </View>
            <View style={{ marginBottom: '15%', marginTop: '5%' }}>
                <Text>
                    Comida
                </Text>
                <View style={{ marginTop: '20%' }}>
                    <FlatList

                    />
                    <AddAlimento />
                </View>
            </View>
            <View style={{ marginBottom: '15%', marginTop: '5%' }}>
                <Text>
                    Intermedio
                </Text>
                <View style={{ marginTop: '20%' }}>
                    <FlatList

                    />
                    <AddAlimento />
                </View>
            </View>
            <View style={{ marginBottom: '15%', marginTop: '5%' }}>
                <Text>
                    Cena
                </Text>
                <View style={{ marginTop: '20%' }}>
                    <FlatList

                    />
                    <AddAlimento />
                </View>
            </View>
        </View>
    )
}

export default Yesterday
