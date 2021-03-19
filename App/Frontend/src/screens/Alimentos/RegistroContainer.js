import React, { useState, useEffect } from 'react'
import { Image } from 'react-native'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import ColorCardList from './ColorCardList'
import DiasFilter from '../../components/DiasFilter'
import AguaCard from '../../components/AguaCard'
import EjercicioCard from '../../components/EjercicioCard'
import AddAlimento from '../../components/AddAlimento'

const imagen = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148039/chems_n0glyv.png';
const imageNoAvailable = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148366/noAvailable_frihp8.png';

const data = [
    { 'id': '1', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'fruit', 'alimento': 'naranja', "cantidad": 5 } },
    { 'id': '2', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'vegetable', 'alimento': 'zanahoria', "cantidad": 2 } },
    { 'id': '3', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'meat', 'alimento': 'bictec', "cantidad": 100 } }
]
const dias = require('../../assets/data/dias.json');

const RegistroContainer = (props) => {

    const [cards, setCards] = useState([]);
    const [days, setDays] = useState([]);
    const [active, setActive] = useState([]);

    useEffect(() => {

        setCards(data);
        setDays(dias);
        setActive(-1);

        return () => {

            setCards([]);
            setDays([]);
            setActive([]);
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
            {
                cards.length > 0 ? (
                    <SafeAreaView>
                        <DiasFilter
                            day={days}
                            daySelected={changeDay}
                            active={active}
                            setActive={setActive}
                        />
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <AguaCard />
                            <EjercicioCard />
                            <AddAlimento />
                        </View>
                        {/**
                            <FlatList
                                data={cards}
                                horizontal
                                keyExtractor={item => `${item.id}`}
                                renderItem={({ item }) =>
                                    <ColorCardList
                                        item={item}
                                    />
                                }
                            />
                         */}
                    </SafeAreaView>
                ) : (
                    <View>
                        <Text>
                            Narinas
                        </Text>
                    </View>
                )
            }
        </View>
    )
}

export default RegistroContainer
