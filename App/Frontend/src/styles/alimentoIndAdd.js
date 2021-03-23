import { StyleSheet, Dimensions } from 'react-native'
import { primary } from './palette'

const gray = '#969696';
const white = '#FFFFFF';
const { width } = Dimensions.get('window')

const alimentoIndAdd = StyleSheet.create({
    image: {
        backgroundColor: gray,
        height: 170
    },
    huellaConsumo: {
        marginTop: 14,
        marginLeft: 6,
        marginRight: 6,
        borderRadius: 10,
        backgroundColor: white,
        height: 100,
        elevation: 2,
        alignItems: 'center'
    },
    textContainer: {
        position: 'absolute',
        marginRight: 6,
        height: 55,
        margin: 23
    },
    title: {
        position: 'absolute',
        marginTop: 116,
        marginLeft: 38,
        fontSize: 24,
        fontWeight: 'bold',
        lineHeight: 29.26,
        color: white,
        textShadowColor: '#000000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 1
    },
    titles: {
        fontSize: 18,
        marginTop: 7,
        fontWeight: 'bold'
    },
    extraText: {
        position: 'relative',
        alignItems: 'center',
        textAlign: 'right',
        marginTop: -18,
        marginLeft: 220,
        color: gray
    },
    details: {
        position: 'relative',
        marginLeft: 6,
        marginRight: 6,
        marginTop: 10,
        marginBottom: 5,
        borderRadius: 10,
        backgroundColor: white
    },
    percentajes: {
        flex: 1,
        marginTop: 7,
        marginBottom: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    percentajesText: {
        textAlign: 'center'
    },
    button: {
        position: 'relative',
        backgroundColor: primary,
        width: width * .8,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        marginTop: '1%',
        marginBottom: '2%',
        alignItems: 'center',
        elevation: 1,
        borderWidth: 1,
        borderColor: white
    },
    buttonText: {
        color: white,
        fontSize: 24
    }
});

export default alimentoIndAdd
