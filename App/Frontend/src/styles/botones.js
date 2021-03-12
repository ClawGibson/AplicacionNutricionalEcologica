import { StyleSheet, Dimensions } from 'react-native'
import { primary, secondary } from './palette'

const { width } = Dimensions.get('screen')
const white = '#FFFFFF'

const botones = StyleSheet.create({
    container: {
        alignSelf: 'center',
        width: width * 0.8
    },
    greenButton: {
        flexDirection: 'row',
        backgroundColor: primary,
        borderRadius: 30,
        height: 51,
        alignItems: 'center',
        justifyContent: 'center'
    },
    blueButton: {
        flexDirection: 'row',
        backgroundColor: secondary,
        borderRadius: 30,
        height: 51,
        alignItems: 'center',
        justifyContent: 'center'
    },
    principalTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: white
    }
});

export default botones;