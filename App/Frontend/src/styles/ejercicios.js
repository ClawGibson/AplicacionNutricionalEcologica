
import { StyleSheet } from 'react-native'

const ejercicios = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    container: {
        width: 143,
        height: 176,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: 18,
        marginBottom: 10,
        marginRight: 10,
        backgroundColor: '#FFF',
        elevation: 2
    },
    image: {
        width: 120,
        height: 106.9,
        borderRadius: 150,
        position: 'relative',
        top: -50,
        alignSelf: 'center',
        backgroundColor: '#FF0000'
    },
    text: {
        fontSize: 14,
        alignSelf: 'center',
        marginTop: -10
    }

});

export default ejercicios