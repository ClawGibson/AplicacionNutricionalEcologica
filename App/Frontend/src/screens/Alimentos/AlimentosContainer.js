import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView, Image } from 'react-native'
import AlimentosList from './AlimentosList'
import DiasFilter from '../../components/DiasFilter'

// Test data
const data = require('../../assets/data/alimentos.json');
const data2 = require('../../assets/data/data2.json');
const days = require('../../assets/data/dias.json');

const imagen404 = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148039/chems_n0glyv.png';
const imageNoAvailable = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148366/noAvailable_frihp8.png';

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
                        <Image
                            style={{
                                flex: 1,
                                flexDirection: 'row',
                                width: 143.24,
                                height: 175.79,
                                padding: 1,
                                borderRadius: 30,
                                marginTop: 50,
                                marginLeft: 18,
                                marginBottom: 10,
                                marginRight: 10,
                                alignItems: 'center',
                                alignContent: 'center'
                            }}
                            source={{ uri: imagen404 ? imagen404 : imageNoAvailable }} />
                    </View>
                )
            }
        </ScrollView >
    )
}

export default AlimentosContainer
