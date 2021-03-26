import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

import DiasFilter from '../../components/DiasFilter'
import AguaCard from '../../components/AguaCard'
import EjercicioCard from '../../components/EjercicioCard'
import AddAlimento from '../../components/AddAlimento'
import ColorCardList from './ColorCardList'
import styles from '../../styles/registroContainer'

const data = [
    { 'id': '1', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'fruit', 'alimento': 'naranja', "cantidad": 5 } },
    { 'id': '2', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'vegetable', 'alimento': 'zanahoria', "cantidad": 2 } },
    { 'id': '3', "categoria": 'desayuno', "alimentos": { "categoriaDelAlimento": 'meat', 'alimento': 'bictec', "cantidad": 1 } }
]
const dias = require('../../assets/data/dias.json');

const RegistroContainer = () => {

    const test = useSelector(state => state.cart);
    console.log(data);
    console.log('==========================');
    console.log(test);
    const [days, setDays] = useState([]);
    const [active, setActive] = useState([]);
    const [cart, setCart] = useState([]);
    const [time, setTime] = useState('');
    const [time2, setTime2] = useState('am');

    useEffect(() => {

        let hours = new Date().getHours();
        let min = new Date().getMinutes();
        setDays(dias);
        setActive(-1);
        setCart(data);
        hours.toString().length > 1 && hours > 12
            ? (min.toString().length < 2
                ? setTime(`${hours}:0${min}`)
                : setTime(`${hours - 12}:${min}`))
            : (min.toString().length < 2
                ? setTime(`${hours}:0${min}`)
                : setTime(`${hours}:${min}`))
        setTime2('am');

        return () => {

            setDays([]);
            setActive([]);
            setCart([]);
            setTime('');
            setTime2('am');
        }
    }, [])

    const changeDay = (day) => {
        {
            day === 'Lunes'
                ? console.log('Lunes')
                : console.log(day.name)
        }
    }

    const handleTime = (value) => {
        value == 'am'
            ? setTime2('pm')
            : setTime2('am')
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
                <View style={styles.container}>
                    <Text style={styles.title}>Desayuno</Text>
                    <View style={styles.inputTime}>
                        <Text style={styles.timeFormat}>{time}</Text>
                    </View>
                    <TouchableOpacity onPress={() => { handleTime(time2) }}>
                        <View style={styles.handleTime}>
                            <Text style={styles.time2Format}>{time2}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    horizontal
                    style={{ flex: 1, flexDirection: 'row' }}>
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
                            : (null)
                    }
                    <AddAlimento />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

export default RegistroContainer
