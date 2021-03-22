import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import agua from '../../styles/agua'
import Water from 'react-native-vector-icons/Ionicons'
import { secondary } from '../../styles/palette'

const Agua = () => {

    const [water, setWater] = useState([]);

    useEffect(() => {
        setWater(toRender)
        return () => {
            setWater([])
        }
    }, [])

    const toRender = () => {
        return (
            <TouchableOpacity>
                <Water name='water-outline' size={34} color={secondary} />
            </TouchableOpacity>
        )
    }

    return (
        <View style={agua.body}>
            <View style={agua.instructions}>
                <Text>Una</Text>
                <Water name='water' size={34} color={secondary} />
                <Text>equivale a 100 ml de agua consumida</Text>
            </View>
            <View style={agua.container}>
                {

                }
                <TouchableOpacity>
                    <Water name='water' size={34} color={secondary} style={agua.water} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Agua
