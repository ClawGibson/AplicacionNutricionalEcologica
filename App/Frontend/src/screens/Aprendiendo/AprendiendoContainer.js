import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import { Header, Item, Input } from 'native-base'
import WavyHeader from '../../components/WavyHeader'
import Search from 'react-native-vector-icons/AntDesign'
import BuscandoVideo from './BuscandoVideo'

const AprendiendoContainer = () => {

    const [focus, setFocus] = useState();

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={{ position: 'relative', backgroundColor: '#439776', height: 100, width: Dimensions.get('screen').width }} >
                <Text>hola</Text>
            </View>
            <View style={{ position: 'relative', marginTop: '-30%' }}>
                <WavyHeader
                    customWidth={Dimensions.get('screen').width}
                    customHeight={Dimensions.get('screen').height * 0.2}
                />
            </View>
            <Header searchBar rounded transparent style={{ position: 'relative', marginTop: '-30%' }}>
                <Item>
                    <Search name='search1' size={24} color='#000' style={{ position: 'relative', left: 5 }} />
                    <Input placeholder='Buscar alimento'

                    />
                </Item>
            </Header>
            <View>
                <Text>
                    Desayuno
                </Text>
            </View>
        </ScrollView>
    )
}

export default AprendiendoContainer
