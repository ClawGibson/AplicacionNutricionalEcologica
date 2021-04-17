import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from '../RecipeList/styles'
import Video from '../../../../../components/Video'

const videoData = [
    { 'id': 1, 'link': 'TUC_2nPScxo' },
    { 'id': 2, 'link': 'mFwgP03plgY' },
    { 'id': 3, 'link': 'cei3JhG72bg' },
    { 'id': 4, 'link': 'bHy2DoIA6ik' },
    { 'id': 5, 'link': '-LvP0yjaa7o' },
    { 'id': 6, 'link': 'hWYhJHD4UzE' },
    { 'id': 7, 'link': 'BQSwJtoejA8' },
    { 'id': 8, 'link': 'm4zsltMouXM' },
    { 'id': 9, 'link': 'ktxZ9810G7g' }
]

const ListaRecetas = ({ route }) => {

    return (
        <View>
            <Text style={styles.title} >{route.params.name}</Text>
            {
                videoData.length > 0
                    ? <FlatList
                        data={videoData}
                        keyExtractor={item => `${item.id}`}
                        renderItem={({ item }) =>
                            <Video
                                data={item}
                            />
                        }
                    />
                    : <View style={{ marginTop: '50%', alignItems: 'center' }}>
                        <Text>Aún no hay videos de recetas, intente más tarde.</Text>
                    </View>
            }
        </View>
    )
}

export default ListaRecetas
