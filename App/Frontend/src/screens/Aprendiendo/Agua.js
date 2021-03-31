import React, { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, TextInput, Dimensions } from 'react-native'
import agua from '../../styles/agua'
import Water from 'react-native-vector-icons/Ionicons'
import { primary, secondary } from '../../styles/palette'

const { width } = Dimensions.get('screen')

const Agua = () => {

    const [number, onChangeNumber] = useState(null);

    let data = [
        { id: 1, flag: false }, { id: 2, flag: false }, { id: 3, flag: false }, { id: 4, flag: false }, { id: 5, flag: false }, { id: 6, flag: false },
        { id: 7, flag: false }, { id: 8, flag: false }, { id: 9, flag: false }, { id: 10, flag: false }, { id: 11, flag: false }, { id: 12, flag: false },
        { id: 13, flag: false }, { id: 14, flag: false }, { id: 15, flag: false }, { id: 16, flag: false }, { id: 17, flag: false }, { id: 18, flag: false }
    ]

    const backup = [...data];
    const [water, setWater] = useState(data);

    const renderItem = (item) => {
        if (item.flag == false) {
            return (
                <TouchableOpacity onPress={() => handleOnPress(item.id)}>
                    <Water name='water-outline' size={34} color={secondary} />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity onPress={() => clearSelection()}>
                    <Water name='water' size={34} color={secondary} />
                </TouchableOpacity>
            )
        }
    }

    const handleOnPress = (id) => {
        if (id > data.length) {
            return null
        }
        data = [...water]
        for (let i = 0; i < id; i++) {
            data[i].flag = true
        }
        setWater(data);
    }

    const clearSelection = () => {
        setWater(backup);
    }

    return (
        <View style={agua.body}>
            <View style={agua.instructions}>
                <Text style={agua.instructionsText}>Una</Text>
                <Water name='water' size={34} color={secondary} />
                <Text style={agua.instructionsText}>equivale a 100 ml de agua consumida</Text>
            </View>
            <View style={agua.container}>
                <FlatList
                    data={water}
                    numColumns={6}
                    keyExtractor={item => item.id}
                    renderItem={(item) => renderItem(item.item)}
                />
                <TouchableOpacity
                    onPress={() => clearSelection()}
                    style={agua.clearButton}
                >
                    <Text style={agua.clearButtonText} >Limpiar selección</Text>
                </TouchableOpacity>
            </View>
            <View style={{ alignContent: 'center', alignItems: 'center' }}>
                <Text style={[agua.instructionsText, { marginVertical: 15 }]}>Entrada libre</Text>
                <TextInput
                    style={{ height: 40, width: width * 0.6, borderBottomColor: primary, borderBottomWidth: 2 }}
                    onChangeText={onChangeNumber}
                    value={number}
                    placeholder="1 es igual a 1 litro consumido"
                    keyboardType="numeric"
                />
            </View>
            <TouchableOpacity
                style={agua.register}
            >
                <Text style={agua.registerText}>Registrar</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Agua
