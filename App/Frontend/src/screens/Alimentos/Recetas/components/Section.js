import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Next from 'react-native-vector-icons/MaterialIcons'
import Video from '../../../../components/Video'
import styles from './styles'

const Section = (props) => {

    return (
        <View style={styles.separator} >
            <View style={styles.rowContainer}>
                <Text style={styles.title}>
                    {props.name}
                </Text>
                <TouchableOpacity style={{ flexDirection: 'row' }} >
                    <Text style={styles.seeMore}>Ver todos</Text>
                    <Next name='navigate-next' size={24} color='#000' />
                </TouchableOpacity>
            </View>
            <View style={styles.alignCards}>
                {
                    1 > 0
                        ?
                        <Video data={props.data} />
                        :
                        <View style={{ marginTop: '50%' }}>
                            <Text>Ocurrió algún error y no se pudo encontrar la información :(</Text>
                        </View>
                }
            </View>
        </View>
    )
}

export default Section
