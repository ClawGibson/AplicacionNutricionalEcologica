import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import SelectorHorario from './SelectorHorario'

import DiasFilter from '../../components/DiasFilter'
import AguaCard from '../../components/AguaCard'
import EjercicioCard from '../../components/EjercicioCard'
import AddAlimento from '../../components/AddAlimento'
import ColorCardList from './ColorCardList'
import styles from '../../styles/registroContainer'

const dias = require('../../assets/data/dias.json');

const RegistroContainer = () => {

    const isFocused = useIsFocused()
    const data = useSelector(state => state.cart.data);
    const test = data?.flat();
    //console.log('test: ', test);
    const [days, setDays] = useState([]);
    const [active, setActive] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        setDays(dias);
        setActive(-1);
        setCart(test);
        return () => {
            setDays([]);
            setActive([]);
            setCart([]);
        }
    }, [isFocused])

    const changeDay = (day) => {
        {
            day === 'Lunes'
                ? console.log('Lunes')
                : console.log(day.name)
        }
    }

    return (
        <View>
            <SafeAreaView>
                <DiasFilter
                    day={days}
                    daySelected={changeDay}
                    active={active}
                    setActive={setActive}
                />
                <View style={styles.separator}>
                    <SelectorHorario name='Desayuno' />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        style={{ flex: 1, flexDirection: 'row' }}>
                        <AguaCard />
                        <EjercicioCard />
                        {
                            cart
                                ? (
                                    <FlatList
                                        data={cart}
                                        horizontal
                                        keyExtractor={item => `${item.nombre}`}
                                        renderItem={item =>
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
                </View>
                <View style={styles.separator}>
                    <SelectorHorario name='Colación 1' />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        style={{ flex: 1, flexDirection: 'row' }}>
                        <AguaCard />
                        <EjercicioCard />
                        {
                            cart
                                ? (
                                    <FlatList
                                        data={cart}
                                        horizontal
                                        keyExtractor={item => `${item.nombre}`}
                                        renderItem={item =>
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
                </View>
                <View style={styles.separator}>
                    <SelectorHorario name='Comida' />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        style={{ flex: 1, flexDirection: 'row' }}>
                        <AguaCard />
                        <EjercicioCard />
                        {
                            cart
                                ? (
                                    <FlatList
                                        data={cart}
                                        horizontal
                                        keyExtractor={item => `${item.nombre}`}
                                        renderItem={item =>
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
                </View>
                <View style={styles.separator}>
                    <SelectorHorario name='Colación 2' />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        style={{ flex: 1, flexDirection: 'row' }}>
                        <AguaCard />
                        <EjercicioCard />
                        {
                            cart
                                ? (
                                    <FlatList
                                        data={cart}
                                        horizontal
                                        keyExtractor={item => `${item.nombre}`}
                                        renderItem={item =>
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
                </View>
                <View style={styles.separator}>
                    <SelectorHorario name='Cena' />
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        horizontal
                        style={{ flex: 1, flexDirection: 'row' }}>
                        <AguaCard />
                        <EjercicioCard />
                        {
                            cart
                                ? (
                                    <FlatList
                                        data={cart}
                                        horizontal
                                        keyExtractor={item => `${item.nombre}`}
                                        renderItem={item =>
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
                </View>
            </SafeAreaView>
        </View>
    )
}

export default RegistroContainer
