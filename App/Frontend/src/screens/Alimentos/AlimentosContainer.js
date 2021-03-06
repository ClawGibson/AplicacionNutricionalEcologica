import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView, Button } from 'react-native'
import AlimentosList from './AlimentosList'
import DiasFilter from '../../components/DiasFilter'

// Test data
const data = require('../../assets/data/alimentos.json');
const data2 = require('../../assets/data/data2.json');
const days = require('../../assets/data/dias.json');

const AlimentosContainer = (props) => {

    const [alimentos, setAlimentos] = useState([]);
    const [dias, setDias] = useState([]);
    const [active, setActive] = useState([]);

    useEffect(() => {
        setAlimentos(data2);
        setDias(days);
        setActive(-1);
        return () => {
            setAlimentos([]);
            setDias([]);
            setActive([]);
        }
    }, []);

    const changeDay = (day) => {
        {
            day === 'Lunes'
                ? console.log('Lunes')//[setDias(days[0]), setActive(true)]
                : console.log(day.name)//[setDias(dias.filter((i) => i.name == day)), setActive(true)]
        }
    }

    return (
        < ScrollView >
            {
                alimentos.length > 0 ? (
                    <SafeAreaView>
                        <DiasFilter
                            day={dias}
                            daySelected={changeDay}
                            active={active}
                            setActive={setActive}
                        />
                        <FlatList data={alimentos}
                            horizontal
                            keyExtractor={item => `${item._id.id}`}
                            renderItem={({ item }) =>
                                <AlimentosList
                                    navigation={props.navigation}
                                    item={item}
                                />
                            }
                        />
                    </SafeAreaView>
                ) : (
                    <View>
                        <Text>No hay alimentos registrados :c</Text>
                    </View>
                )
            }
        </ScrollView >
    )
}

export default AlimentosContainer
