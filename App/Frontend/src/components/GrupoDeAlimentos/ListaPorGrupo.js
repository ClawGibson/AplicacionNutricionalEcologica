import React from 'react'
import { View, Text } from 'react-native'
import { AlphabetList } from "react-native-section-alphabet-list";

const data = [
    { value: 'Lillie-Mai Allen', key: 'lCUTs2' },
    { value: 'Emmanuel Goldstein', key: 'TXdL0c' },
    { value: 'Winston Smith', key: 'zqsiEw' },
    { value: 'William Blazkowicz', key: 'psg2PM' },
    { value: 'Gordon Comstock', key: '1K6I18' },
    { value: 'Philip Ravelston', key: 'NVHSkA' },
    { value: 'Rosemary Waterlow', key: 'SaHqyG' },
    { value: 'Julia Comstock', key: 'iaT1Ex' },
    { value: 'Mihai Maldonado', key: 'OvMd5e' },
    { value: 'Murtaza Molina', key: '25zqAO' },
    { value: 'Peter Petigrew', key: '8cWuu3' },
]


const ListaPorGrupo = () => {
    return (
        <AlphabetList
            data={data}
            indexLetterStyle={{
                color: 'blue',
                fontSize: 15,
            }}
            renderCustomItem={(item) => (
                <View>
                    <Text >{item.value}</Text>
                </View>
            )}
            renderCustomSectionHeader={(section) => (
                <View >
                    <Text >{section.title}</Text>
                </View>
            )}
        />
    )
}

export default ListaPorGrupo
