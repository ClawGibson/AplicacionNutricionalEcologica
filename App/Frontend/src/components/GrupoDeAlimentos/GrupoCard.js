import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { imageNotFound } from '../../assets/data/cloud'
import { useNavigation } from '@react-navigation/native'
import styles from './styles'

const GrupoCard = ({ categoria, imagen }) => {

    const navigation = useNavigation();

    const evaluateCategory = (cat) => {
        switch (cat) {
            case 'Verduras':
                return '#00A24F'
            case 'Carnes':
                return '#E01400'
            case 'Frutas':
                return '#FF7A00'
            case 'Lácteos':
                return '#00A2FB'
            case 'Leguminosas':
                return '#FF2088'
            case 'Cereales':
                return '#CD8D00'
            default:
                break;
        }
    }

    return (
        <TouchableOpacity
            style={styles.body}
            onPress={() => navigation.navigate('')}
        >
            <View style={[styles.container, { backgroundColor: evaluateCategory(categoria) }]}>
                <Image style={styles.image}
                    source={{ uri: imagen ? imagen : imageNotFound }}
                />
                <View>
                    <Text style={styles.title}>{categoria}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default GrupoCard
