import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen')

const agua = StyleSheet.create({
    body: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        position: 'relative',
        backgroundColor: '#FFF',
        flexDirection: 'column',
        width: width * .8,
        height: width,
        borderRadius: 30
    },
    items: {
        position: 'absolute',
        flex: 2,
        flexDirection: 'row',
        marginTop: '245%',
        marginLeft: 10
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
    water: {
        position: 'relative',
        marginTop: 10,
        marginLeft: 10
    }
});

export default agua;