import React, { useState, useEffect } from 'react'
import { Image, Dimensions, ScrollView, View, Text } from 'react-native'
import Swiper from 'react-native-swiper'

import BannerStyles from '../styles/BannerStyles'

const { width } = Dimensions.get('screen')
const examples = [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.7w3XHMFhaW6M76gMzFVeTgHaEK%26pid%3DApi&f=1'
    ,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cometemenorca.com%2Fstatic%2Fuploads%2Fvegetariana-cometemenorca.jpg&f=1&nofb=1'
    ,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flaopinion.com%2Fwp-content%2Fuploads%2Fsites%2F3%2F2016%2F06%2Fshutterstock_252230257.jpg%3Fquality%3D80%26strip%3Dall&f=1&nofb=1'
    ,
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpixnio.com%2Ffree-images%2F2017%2F03%2F23%2F2017-03-23-09-26-35.jpg&f=1&nofb=1'
];

const Banner = () => {

    const [BannerData, setBannerData] = useState([]);

    useEffect(() => {
        setBannerData(examples);
        return () => {
            setBannerData([]);
        }
    }, [])

    return (
        <ScrollView>
            <View style={BannerStyles.container}>
                <View style={BannerStyles.swiper}>
                    <Swiper style={{ height: width / 3 }} showsButtons={true} autoplay={true}>
                        {
                            BannerData.map((item) => {
                                return (
                                    <Image
                                        key={item}
                                        style={BannerStyles.imageBanner}
                                        resizeMode='stretch'
                                        source={{ uri: item }}
                                    />

                                )
                            })
                        }
                    </Swiper>
                </View>
            </View>
        </ScrollView>
    )
}

export default Banner
