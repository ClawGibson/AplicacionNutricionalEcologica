import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '3%',
        marginBottom: '2%'
    },
    inputTime: {
        height: 24,
        width: 120,
        marginRight: '15%',
        borderRadius: 15,
        backgroundColor: 'transparent',
        borderColor: '#000',
        borderWidth: 1
    },
    timeFormat: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        alignSelf: 'center'
    },
    handleTime: {
        position: 'relative',
        marginRight: '10%',
        height: 24,
        width: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4BB5C3'
    },
    time2Format: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#FFF'
    }
});

export default styles;