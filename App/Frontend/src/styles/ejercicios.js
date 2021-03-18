
import { StyleSheet } from 'react-native'

const ejercicios = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    container: {
        position: 'relative',
        width: 143,
        height: 176,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: '3%',
        marginRight: '6%',
        marginBottom: 10,
        backgroundColor: '#FFF',
        elevation: 1
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