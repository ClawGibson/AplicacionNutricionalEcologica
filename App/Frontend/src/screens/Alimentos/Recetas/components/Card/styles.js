import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        borderRadius: 30,
        marginTop: '2%'
    },
    image: {
        height: 112,
        width: 152,
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
        margin: '5%',
    },
    title: {
        textAlign: 'center',
        fontSize: 15
    }
});

export default styles;