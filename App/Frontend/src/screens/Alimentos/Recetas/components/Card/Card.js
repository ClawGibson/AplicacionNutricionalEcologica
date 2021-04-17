import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'
import Video from '../../../../../components/Video'

const Card = (props) => {

    console.log('card', props);

    const { item } = props;

    return (
        <View style={styles.container}>
            <Video {...item} />
        </View>
    )
}

export default Card
