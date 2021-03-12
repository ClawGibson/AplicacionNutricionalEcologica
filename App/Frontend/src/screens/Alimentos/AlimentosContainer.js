import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView, Image, StyleSheet } from 'react-native'
import AlimentosList from './AlimentosList'
import DiasFilter from '../../components/DiasFilter'

// Test data
const data = require('../../assets/data/alimentos.json');
const data2 = require('../../assets/data/data2.json');
const days = require('../../assets/data/dias.json');

const imagen404 = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615570044/404_not_found_short_obkarx.png';
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
                        <Text style={styles.title} >Desayuno - 9:30</Text>
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
                        <Text style={styles.title} >Colación - 11:30</Text>
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
                        <Text style={styles.title} >Comida - 4:30</Text>
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
                        <Text style={styles.title} >Colación - 7:30</Text>
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
                        <Text style={styles.title} >Cena - 10:30</Text>
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
                                width: '110%',
                                height: 513,
                                marginLeft: '-4%'
                            }}
                            source={{ uri: imagen404 ? imagen404 : imageNoAvailable }} />
                    </View>
                )
            }
        </ScrollView >
    )
}

export default AlimentosContainer


const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '3%'
    }
})