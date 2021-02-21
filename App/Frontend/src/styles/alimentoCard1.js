import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

const alimentoCard1 = StyleSheet.create({
    container: {
        width: 143.24,
        height: 175.79,
        padding: 1,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: 18,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: 120,
        height: 106.9,
        borderRadius: 150,
        position: 'relative',
        top: -50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        top: -30,
        textAlignVertical: 'center'
    },
    face1: {
        width: 48,
        height: 48,
        position: 'relative',
        left: '-20%'
    },
    face2: {
        width: 48,
        height: 48,
        top: -47.5,
        left: '20%'
    }
})

export default alimentoCard1
