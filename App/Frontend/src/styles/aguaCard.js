import { StyleSheet } from 'react-native'
import { primary } from './palette'

const back_ground = '#572364';

const aguaCard = StyleSheet.create({
    body: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    aguaContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: back_ground,
        justifyContent: 'center'
    },
    title: {
        position: 'relative',
        fontSize: 14,
        textAlign: 'center',
        color: '#FFF'
    },
    number: {
        fontSize: 35,
        textAlign: 'center',
        color: '#FFF'
    },
    measure: {
        fontSize: 12,
        textAlign: 'center',
        color: '#FFF',
        fontWeight: 'bold'
    },
    text: {
        fontSize: 12,
        position: 'relative',
        color: '#FFF',
        textAlign: 'center'
    },
    button: {
        position: 'relative',
        backgroundColor: primary,
        borderRadius: 15,
        alignSelf: 'center',
        width: '80%',
        height: 15,
        marginTop: 10
    }
});

export default aguaCard;