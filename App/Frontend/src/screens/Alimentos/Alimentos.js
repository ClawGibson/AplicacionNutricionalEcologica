import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, SafeAreaView, ScrollView } from 'react-native'
import { Header, Item, Input } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import AlimentosListAdd from './AlimentosListAdd'
import BuscandoAlimento from './BuscandoAlimento'
import CategoriasAlimentos from './CategoriasAlimentos'
import Search from 'react-native-vector-icons/AntDesign'
import Scan from 'react-native-vector-icons/MaterialCommunityIcons'
import alimentos from '../../styles/alimentos'

const data = require('../../assets/data/data2.json');
const categories = require('../../assets/data/categoriasAlimentos.json');

const Alimentos = () => {

    const navigation = useNavigation();
    const [food, setFood] = useState([]);
    const [searchs, setSearchs] = useState([]);
    const [category, setCategory] = useState([]);
    const [focus, setFocus] = useState();
    const [active, setActive] = useState([]);

    useEffect(() => {
        setFood(data)
        setSearchs(data)
        setFocus(false)
        setCategory(categories)
        setActive(-1)
        return () => {
            setFood([])
            setSearchs([])
            setFocus()
            setCategory([])
            setActive([])
        }
    }, [])

    const searchFood = (text) => {
        setSearchs(food.filter((i) => i.nombreAlimento.toLowerCase().includes(text.toLowerCase())))
    }

    const openList = () => {
        setFocus(true)
    }

    const closeList = () => {
        setFocus(false)
    }

    const changeCat = (ctg) => {
        {
            ctg === 'Todos'
                ? console.log('Todos')
                : console.log(ctg.cat)
        }
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <Header searchBar rounded transparent style={{ position: 'relative', marginTop: -15 }}>
                <Item>
                    <Search name='search1' size={24} color='#000' style={{ position: 'relative', left: 5 }} />
                    <Input placeholder='Buscar alimento'
                        onFocus={openList}
                        onChangeText={(text) => { searchFood(text) }}
                    />
                    {
                        focus
                            ? (<View><Search onPress={closeList} name='close' size={24} color={'#000'} style={{ position: 'relative', left: -10 }} /></View>)
                            : (<Scan name='barcode-scan' size={24} color='#000' style={{ position: 'relative', left: -10 }} />)
                    }
                </Item>
            </Header>
            {
                focus ? (
                    <BuscandoAlimento
                        alimentoBuscado={searchs}
                    />
                )
                    : (<View>
                        <View>
                            <CategoriasAlimentos
                                cat={category}
                                catSelected={changeCat}
                                active={active}
                                setActive={setActive}
                            />
                        </View>
                        <FlatList
                            data={food}
                            numColumns={2}
                            keyExtractor={item => `${item._id.id}`}
                            renderItem={({ item }) =>
                                <AlimentosListAdd
                                    item={item}
                                />
                            }
                        />
                    </View>)
            }
        </ScrollView>
    )
}

export default Alimentos
