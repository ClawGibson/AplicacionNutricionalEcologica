import { StyleSheet, Dimensions } from 'react-native'
import { secondary } from '../../../styles/palette'

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titlesContainer: {
        flexDirection: 'row',
        width: Dimensions.get('screen').width * 0.9,
        justifyContent: 'space-between',
        margin: 15
    },
    title: {
        fontSize: 18,
        fontWeight: '600'
    },
    edit: {
        fontSize: 18,
        fontWeight: 'bold',
        color: secondary
    },
    cardContainer: {
        height: 145,
        width: Dimensions.get('screen').width * 0.9,
        borderRadius: 25,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#FFF'
    },
    cardInfoContainer: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignSelf: 'center'
    },
    options: {
        height: 55,
        width: Dimensions.get('screen').width * 0.9,
        backgroundColor: '#FFF',
        borderRadius: 20,
        margin: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    optionsText: {
        fontSize: 26,
        fontWeight: '600',
        marginLeft: 10
    },
    userName: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    image: {
        height: 145 * 0.7,
        width: 95,
        alignSelf: 'center',
        borderRadius: 5,
        borderColor: '#FFF',
        borderWidth: 1
    }
});

export default styles;