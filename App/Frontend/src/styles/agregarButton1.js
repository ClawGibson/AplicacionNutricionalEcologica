import { StyleSheet } from 'react-native'
import { primary } from './palette'

const agregarButton1 = StyleSheet.create({
    body: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    container: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        elevation: 1
    },
    icon: {
        position: 'relative',
        alignSelf: 'center'
    },
    containerButton: {
        position: 'relative',
        backgroundColor: primary,
        borderRadius: 15,
        alignSelf: 'center',
        width: '80%',
        height: 15,
        marginTop: '33%'
    },
    title: {
        fontSize: 12,
        position: 'relative',
        color: '#FFF',
        textAlign: 'center'
    }
})

export default agregarButton1
