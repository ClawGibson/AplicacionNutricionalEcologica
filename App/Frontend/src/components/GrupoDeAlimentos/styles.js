import { StyleSheet } from 'react-native'

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
    }
});

export default styles