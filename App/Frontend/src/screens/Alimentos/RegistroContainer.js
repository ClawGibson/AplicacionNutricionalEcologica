import React, { useState, useEffect } from 'react'
import { FlatList, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

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
    const [breakfastTime, setbreakfastTime] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

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

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        hours > 12
            ? setbreakfastTime(`${hours}:${minutes} pm`)
            : setbreakfastTime(`${hours}:${minutes} am`)
        hideDatePicker();
    };

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
                <View style={styles.container}>
                    <Text style={styles.title}>Desayuno</Text>
                    <TouchableOpacity style={styles.inputTime} onPress={showDatePicker}>
                        <Text style={styles.timeFormat}>{breakfastTime ? breakfastTime : 'Horario'}</Text>
                        <DateTimePickerModal
                            isVisible={isDatePickerVisible}
                            mode="time"
                            locale="en_GB"
                            is24Hour={false}
                            display='spinner'
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />
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
            </SafeAreaView>
        </View>
    )
}

export default RegistroContainer
