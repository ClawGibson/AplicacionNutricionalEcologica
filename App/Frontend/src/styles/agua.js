import { StyleSheet, Dimensions } from 'react-native'
import { primary, secondary } from './palette'

const { width } = Dimensions.get('screen')

const agua = StyleSheet.create({
    body: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: width
    },
    container: {
        position: 'relative',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        alignItems: 'center',
        width: width * .65,
        height: width * 0.5,
        borderRadius: 30,
        marginVertical: 10
    },
    instructions: {
        flex: 1,
        position: 'absolute',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: width,
        bottom: '88%'
    },
    instructionsText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    clearButton: {
        position: 'relative',
        backgroundColor: '#FFF',
        height: 25,
        width: width * 0.47,
        justifyContent: 'center',
        borderColor: secondary,
        borderWidth: 1,
        borderRadius: 15,
        marginTop: -50
    },
    clearButtonText: {
        color: secondary,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
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

export default agua;