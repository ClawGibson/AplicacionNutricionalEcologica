import { StyleSheet, Dimensions } from 'react-native'
import { primary, secondary } from './palette'

const { width } = Dimensions.get('screen')

const ayer = StyleSheet.create({
    body: {
        marginLeft: '2%'
    },
    instructions: {
        marginTop: '20%',
        fontSize: 34,
        textAlign: 'center',
        fontWeight: 'bold',
        color: secondary
    },
    titles: {
        fontSize: 24,
        fontWeight: '200'
    },
    itemContainer: {
        marginBottom: '1%',
        marginTop: '1%'
    },
    separator: {
        marginTop: '2%'
    },
    buttonContainer: {
        backgroundColor: secondary,
        borderColor: secondary,
        borderRadius: 30,
        borderWidth: 1,
        width: width * 0.8,
        height: 40,
        marginTop: '5%',
        marginBottom: 11,
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: 'bold'
    }
});

export default ayer