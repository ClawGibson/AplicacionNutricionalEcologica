import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView } from 'react-native'
import AlimentosList from '../../selectors/Alimentos/AlimentosList'

// Test data
const data = require('../../assets/data/alimentos.json');
const AlimentosContainer = (props) => {

    const [alimentos, setAlimentos] = useState([]);

    useEffect(() => {
        setAlimentos(data);
        return () => {
            setAlimentos([]);
        }
    }, []);

    return (
        <View>
            {
                alimentos.length > 0 ? (
                    <SafeAreaView>
                        <FlatList
                            numColumns={2}
                            data={alimentos}
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
        </View>
    )
}

export default AlimentosContainer
