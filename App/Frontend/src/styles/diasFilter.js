import { StyleSheet } from 'react-native'
import { primary } from './palette'

const diasFilter = StyleSheet.create({
    list: {
        marginTop: -15,
        borderBottomColor: '#F2F2F2'
    },
    container: {
        flex: -1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    active: {
        backgroundColor: primary,
        marginRight: 5
    },
    inactive: {
        backgroundColor: '#969696',
        marginRight: 5
    },
    text: {
        color: '#FFF'
    }
})

export default diasFilter