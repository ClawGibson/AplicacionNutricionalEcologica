import { StyleSheet } from 'react-native'
import { secondary, optional1, optional2 } from '../../styles/palette'

const styles = StyleSheet.create({
    body: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    container: {
        width: 143.24,
        height: 175.79,
        padding: 1,
        borderRadius: 30,
        marginTop: 50,
        marginLeft: 18,
        marginBottom: 10,
        marginRight: 10,
        alignItems: 'center',
        elevation: 8,
        backgroundColor: '#FFFFFF'
    },
    image: {
        width: 120,
        height: 106.9,
        borderRadius: 150,
        position: 'relative',
        top: -50
    },
    title: {
        fontWeight: 'bold',
        fontSize: 15,
        textAlign: 'center',
        top: -15,
        textAlignVertical: 'center',
        color: '#FFF'
    },
    wordContainer: {
        height: 25,
        justifyContent: 'center'
    },
    word: {
        color: optional2,
        fontSize: 35,
        marginLeft: 10
    },
    listText: {
        fontSize: 15
    },
    headerList: {
        backgroundColor: optional1,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerListText: {
        color: '#fff',
        fontSize: 35
    }
});

export default styles