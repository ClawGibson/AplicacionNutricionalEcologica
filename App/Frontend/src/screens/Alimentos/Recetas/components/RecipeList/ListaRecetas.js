import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from '../RecipeList/styles'
import Video from '../../../../../components/Video'

const videoData = { 'id': 1, 'link': 'TUC_2nPScxo' }

const ListaRecetas = ({ route }) => {



    return (
        <View>
            <Text style={styles.title} >{route.params.name}</Text>
            <View>
                <FlatList
                    data={videoData}
                    keyExtractor={item => `${item.id}`}
                    renderItem={item =>
                        <Video
                            data={item}
                        />
                    }
                />
            </View>

        </View>
    )
}

export default ListaRecetas
