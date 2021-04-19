import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { Header, Item, Input } from 'native-base'
import Search from 'react-native-vector-icons/AntDesign'
import aprendiendoContainer from '../../styles/aprendiendoContainer'

const test = { 'id': 1, 'link': 'TUC_2nPScxo' }


const AprendiendoContainer = () => {

    const [focus, setFocus] = useState();

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={aprendiendoContainer.topBackground} >
            </View>
            <View style={aprendiendoContainer.wave}>

            </View>
            <Header searchBar rounded transparent style={aprendiendoContainer.wave}>
                <Item>
                    <Search name='search1' size={24} color='#000' style={{ position: 'relative', left: 5 }} />
                    <Input placeholder='Buscar alguna receta'

                    />
                </Item>
            </Header>
            <ScrollView>
                <View style={aprendiendoContainer.separator} >
                    <View style={aprendiendoContainer.rowContainer}>
                        <Text style={aprendiendoContainer.title}>
                            Desayuno
                    </Text>
                        <TouchableOpacity>
                            <Text>Ver todos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={aprendiendoContainer.alignCards}>
                        {
                            test
                                ?
                                <>
                                    {/**
                                        <FlatList
                                            data={videoData}
                                            keyExtractor={item => `${item.id}`}
                                            renderItem={item =>
                                                <CardList
                                                    item={item}
                                                />
                                            }
                                        />
                                     */}
                                </>
                                :
                                <View style={{ marginTop: '50%' }}>
                                    <Text>Ocurrió algún error y no se pudo encontrar la información :(</Text>
                                </View>
                        }
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default AprendiendoContainer
