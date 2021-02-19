import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'
import { Container } from 'native-base'
//import { FlatList } from 'react-native-gesture-handler';

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
            <FlatList
                style={{ marginTop: 50 }}
                horizontal
                data={alimentos}
                renderItem={({ item }) => <Text>{item.nombreAlimento}</Text>}
                keyExtractor={item => item.nombreAlimento}
            />
        </View>
    )
}

export default AlimentosContainer
