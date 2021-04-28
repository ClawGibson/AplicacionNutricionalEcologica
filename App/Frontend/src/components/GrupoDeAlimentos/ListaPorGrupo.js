import React from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { AlphabetList } from "react-native-section-alphabet-list";
import styles from './styles'

const equivalentes = require('../../assets/data/equivalentes.json')

const ListaPorGrupo = ({ route }) => {

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.headerList}>
                <Text style={styles.headerListText}>Equivalencias en {route.params}</Text>
            </View>
            <AlphabetList
                data={equivalentes}
                indexLetterStyle={{
                    color: '#8AB832',
                    fontSize: 15,
                }}
                renderCustomItem={(item) => (
                    <TouchableOpacity>
                        <Text style={styles.listText} >{item.value}</Text>
                    </TouchableOpacity>
                )}
                renderCustomSectionHeader={(section) => (
                    <View style={styles.wordContainer}>
                        <Text style={styles.word} >{section.title}</Text>
                    </View>
                )}
            />
        </ScrollView>
    )
}

export default ListaPorGrupo
