import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView } from 'react-native'
import AlimentosList from '../../selectors/Alimentos/AlimentosList'
import AddAlimento from '../../components/AddAlimento'

// Test data
const data = require('../../assets/data/alimentos.json');
const emptyArray = [{ _id: '' }];
const AlimentosContainer = (props) => {

    const [alimentos, setAlimentos] = useState([]);

    useEffect(() => {
        setAlimentos(data);
        return () => {
            setAlimentos([]);
        }
    }, []);

    return (
        <ScrollView>
            {
                alimentos.length > 0 ? (
                    <SafeAreaView>
                        <AddAlimento />
                        <FlatList
                            horizontal
                            data={alimentos != undefined ? alimentos : 'undefined :c'}
                            renderItem={AlimentosList}
                            keyExtractor={item => item._id.id}
                        />
                    </SafeAreaView>
                ) : (
                        <View>
                            <Text>No hay alimentos registrados :c</Text>
                        </View>
                    )
            }
        </ScrollView>
    )
}

export default AlimentosContainer
