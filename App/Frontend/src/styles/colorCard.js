import { StyleSheet } from 'react-native'
import {
    colorFrutas,
    colorVerduras,
    colorCarne,
    colorLacteos,
    colorLeguminosas,
    colorCereales
} from './palette'

const colorCard = StyleSheet.create({
    body: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    fruitContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorFrutas,
        justifyContent: 'center'
    },
    vegetableContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorVerduras,
        justifyContent: 'center'
    },
    meatContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorCarne,
        justifyContent: 'center'
    },
    cerealContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorCereales,
        justifyContent: 'center'
    },
    dairyContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorLacteos,
        justifyContent: 'center'
    },
    legumesContainer: {
        width: 84,
        height: 119,
        padding: 1,
        marginLeft: 10,
        borderRadius: 15,
        backgroundColor: colorLeguminosas,
        justifyContent: 'center'
    },
    number: {
        fontSize: 35,
        textAlign: 'center'
    },
    title: {
        fontSize: 14,
        textAlign: 'center'
    },
    bottomContainer: {
        flex: -1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 7
    },
    plusButton: {
        justifyContent: 'center',
        backgroundColor: '#00FF00',
        height: 24,
        width: 24,
        borderRadius: 50,
        marginLeft: '32%'
    },
    minusButton: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        height: 24,
        width: 24,
        borderRadius: 50,
        marginLeft: '5%'
    },
    deleteButton: {
        backgroundColor: '#F2F2F2',
        justifyContent: 'center',
        height: 24,
        width: 24,
        borderRadius: 50,
        marginLeft: '65%'
    }
});

export default colorCard;