import { StyleSheet, Dimensions } from 'react-native'
import { colorFrutas } from './palette'

const { width } = Dimensions.get('screen');

const BannerStyles = StyleSheet.create({
    container: {
        flex: 5,
        marginBottom: 10,
        borderRadius: 20,
    },
    swiper: {
        width: width,
        alignContent: 'center',
        marginTop: 20
    },
    imageBanner: {
        width: width - 20,
        height: width / 2.5,
        marginHorizontal: 10,
        borderRadius: 20
    }
})

export default BannerStyles
