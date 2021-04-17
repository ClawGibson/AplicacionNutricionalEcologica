import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
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
        fontWeight: '500',
        borderBottomColor: '#328AB2',
        borderBottomWidth: 3
    },
    seeMore: {
        fontSize: 20,
        fontWeight: '500',
        borderBottomColor: '#328AB2',
        borderBottomWidth: 3
    },
    alignCards: {
        alignItems: 'center'
    },
    separator: {
        marginTop: '3%'
    }
});

export default styles