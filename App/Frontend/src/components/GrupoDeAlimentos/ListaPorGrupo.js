import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { AlphabetList } from "react-native-section-alphabet-list";
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { addToNewMenu } from '../../Redux/actions/newMenu'
import styles from './styles'

const equivalentes = require('../../assets/data/equivalentes.json')

const ListaPorGrupo = ({ route }) => {

    const cat = route?.params;
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const returnColor = (cat) => {
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

    const handleClick = (item) => {
        dispatch(addToNewMenu(item.value))
        navigation.navigate('NuevoMenuBase')
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{ backgroundColor: returnColor(cat) }}>
                <View style={styles.headerList}>
                    <Text style={styles.headerListText}>Equivalencias en {route.params}</Text>
                </View>
                <View style={styles.listContainer}>
                    <View>
                        <AlphabetList
                            data={equivalentes}
                            indexLetterStyle={{
                                color: '#8AB832',
                                fontSize: 15,
                            }}
                            renderCustomItem={(item) => (
                                <TouchableOpacity
                                    onPress={() => handleClick(item)}
                                >
                                    <Text style={styles.listText} >{item.value}</Text>
                                </TouchableOpacity>
                            )}
                            renderCustomSectionHeader={(section) => (
                                <View style={styles.wordContainer}>
                                    <Text style={styles.word} >{section.title}</Text>
                                </View>
                            )}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default ListaPorGrupo
