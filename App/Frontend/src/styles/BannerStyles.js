import { StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('screen');

const BannerStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 20
    },
    swiper: {
        width: width,
        alignContent: 'center',
        marginTop: 20
    },
    imageBanner: {
        width: width - 40,
        height: width / 2.5,
        marginHorizontal: 20
    }
})

export default BannerStyles
