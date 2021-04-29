import { StyleSheet, Dimensions } from 'react-native'
import { secondary } from '../../../styles/palette'

const styles = StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        height: 145,
        width: Dimensions.get('screen').width * .9,
        borderRadius: 25,
        backgroundColor: '#fff',
        marginTop: 15
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    button: {
        backgroundColor: secondary,
        width: Dimensions.get('screen').width * .8,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: '5%',
        marginBottom: '5%'
    },
    buttonText: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#fff'
    },
    input: {
        height: 40,
        margin: 20,
        borderBottomColor: secondary,
        borderBottomWidth: 1,
        color: secondary,
        fontSize: 24,
        textAlign: 'center'
    },
    addFood: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: secondary,
        borderRadius: 10,
        width: Dimensions.get('screen').width * 0.2,
        height: 20,
        alignItems: 'center',
        marginLeft: 15
    },
    badgeFood: {
        backgroundColor: secondary,
        height: 20,
        alignItems: 'center',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    badgeFoodText: {
        color: '#fff'
    }
});

export default styles;