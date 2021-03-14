import React from 'react'
import { View, Text } from "react-native";
import ColorCard from '../../components/ColorCard'

const Piramide = () => {
    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Pirámide
            </Text>
            <ColorCard />
        </View>
    )
}

export default Piramide
