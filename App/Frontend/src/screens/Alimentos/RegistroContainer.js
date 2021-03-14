import React from 'react'
import { Image } from 'react-native'
import { FlatList, View, Text } from 'react-native'
import ColorCardList from './ColorCardList'


const imagen = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148039/chems_n0glyv.png';
const imageNoAvailable = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148366/noAvailable_frihp8.png';

const RegistroContainer = () => {
    return (
        < View >
            {/**
        <Image
            style={{
                width: '110%',
                height: 513,
                marginLeft: '-4%'
            }}
            source={{ uri: imagen ? imagen : imageNoAvailable }} />
             
        */}
            <ColorCardList />
        </View>
    )
}

export default RegistroContainer
