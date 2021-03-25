import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView } from 'react-native'

import DiasFilter from '../../components/DiasFilter'
import AguaCard from '../../components/AguaCard'
import EjercicioCard from '../../components/EjercicioCard'
import AddAlimento from '../../components/AddAlimento'
import ColorCardList from './ColorCardList'

const data = [
    { 'id': '1', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'fruit', 'alimento': 'naranja', "cantidad": 5 } },
    { 'id': '2', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'vegetable', 'alimento': 'zanahoria', "cantidad": 2 } },
    { 'id': '3', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'meat', 'alimento': 'bictec', "cantidad": 1 } }
]
const dias = require('../../assets/data/dias.json');

const RegistroContainer = () => {

    const [days, setDays] = useState([]);
    const [active, setActive] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {

        setDays(dias);
        setActive(-1);
        setCart(data);

        return () => {

            setDays([]);
            setActive([]);
            setCart([]);
        }
    }, [])

    const changeDay = (day) => {
        {
            day === 'Lunes'
                ? console.log('Lunes')//[setDias(days[0]), setActive(true)]
                : console.log(day.name)//[setDias(dias.filter((i) => i.name == day)), setActive(true)]
        }
    }

    return (
        < View >
            <SafeAreaView>
                <DiasFilter
                    day={days}
                    daySelected={changeDay}
                    active={active}
                    setActive={setActive}
                />
                <Text>Desayuno</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row' }}>
                    <AguaCard />
                    <EjercicioCard />
                    {
                        cart.length > 0
                            ? (
                                <FlatList
                                    data={cart}
                                    horizontal
                                    keyExtractor={item => `${item.id}`}
                                    renderItem={({ item }) =>
                                        <ColorCardList
                                            item={item}
                                        />
                                    }
                                />
                            )
                            : (
                                <View>
                                    <Text>
                                        naranjas
                                            </Text>
                                </View>
                            )
                    }
                    <AddAlimento />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default RegistroContainer
