import { StyleSheet, Dimensions } from 'react-native'
import { primary, secondary } from './palette'

const { width } = Dimensions.get('screen')

const ejercicioInd = StyleSheet.create({
    body: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    container: {
        position: 'relative',
        width: width * .8,
        height: 350,
        borderRadius: 30,
        backgroundColor: '#FFF',
        alignSelf: 'center',
        elevation: 1
    },
    button: {
        position: 'relative',
        width: (width * .8) * .8,
        height: 45,
        borderRadius: 18,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: primary,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    title: {
        position: 'relative',
        fontSize: 34,
        textAlign: 'center',
        marginTop: 40,
        marginBottom: -40
    },
    text: {
        color: primary,
        alignSelf: 'center'
    },
    image: {
        position: 'relative',
        width: width * .6,
        height: 215,
        borderRadius: 150,
        alignSelf: 'center',
        marginTop: -90,
        backgroundColor: '#FF0000'
    },
    register: {
        position: 'absolute',
        backgroundColor: primary,
        width: width * .8,
        height: 40,
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 30,
        bottom: '5%',
        alignItems: 'center',
        elevation: 1,
        borderWidth: 1,
        borderColor: '#FFF'
    },
    registerText: {
        color: '#FFF',
        fontSize: 24
    }
});

export default ejercicioInd;