import { StyleSheet, Dimensions } from 'react-native'

const recetasStyles = StyleSheet.create({
    topBackground: {
        position: 'relative',
        backgroundColor: '#439776',
        height: 100,
        width: Dimensions.get('screen').width
    },
    wave: {
        position: 'relative', marginTop: '-30%'
    },
    rowContainer: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: '500'
    },
    alignCards: {
        alignItems: 'center'
    },
    separator: {
        marginTop: '3%'
    }
});

export default recetasStyles