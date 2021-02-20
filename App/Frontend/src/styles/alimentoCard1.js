import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'

let { width, height } = Dimensions.get('window');

const primary = '#439776';
const secondary = '#328AB2';
const auxiliar = '#C1CF3A';
const optional1 = '#4BB5C3';
const optional2 = '#8AB832'

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
        borderRadius: 106.9 / .5,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: -50
    },
    card: {
        marginBottom: 10,
        height: width / 2 - 20 - 90,
        backgroundColor: 'transparent',
        borderRadius: 20,
        width: width / 2 - 20 - 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    face1: {
        width: 24,
        height: 24,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '80%',
        left: '20%'
    },
    face2: {
        width: 24,
        height: 24,
        backgroundColor: 'transparent',
        position: 'absolute',
        top: '80%',
        left: '66%'
    }
})

export default alimentoCard1
