import { StyleSheet } from 'react-native'

const agregarButton1 = StyleSheet.create({
    container: {
        width: 143.24,
        height: 175.79,
        padding: 1,
        marginTop: 20,
        marginLeft: 15,
        marginBottom: 20,
        marginRight: 10,
        borderRadius: 30,
        alignContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: '#FFFFFF'
    },
    containerButton: {
        position: 'absolute',
        width: 143.24 * .5,
        height: 20,
        padding: 1,
        borderRadius: 5,
        top: 145,
        alignItems: 'center',
        elevation: 1,
        backgroundColor: '#8AB832'
    },
    title: {
        position: 'absolute',
        fontWeight: 'bold',
        fontSize: 14,
        color: '#FFFFFF'
    },
    add: {
        position: 'relative',
        width: 40,
        height: 40,
        top: -92
    }
})

export default agregarButton1
