import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView } from 'react-native'
import DiasFilter from '../../components/DiasFilter'
import AguaCard from '../../components/AguaCard'
import EjercicioCard from '../../components/EjercicioCard'
import AddAlimento from '../../components/AddAlimento'

const data = [
    { 'id': '1', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'fruit', 'alimento': 'naranja', "cantidad": 5 } },
    { 'id': '2', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'vegetable', 'alimento': 'zanahoria', "cantidad": 2 } },
    { 'id': '3', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'meat', 'alimento': 'bictec', "cantidad": 100 } }
]
const dias = require('../../assets/data/dias.json');

const RegistroContainer = () => {

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
