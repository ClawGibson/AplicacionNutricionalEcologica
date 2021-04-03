import React from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import ayer from '../../styles/ayer'

import AddAlimento from '../../components/AddAlimento'

const Yesterday = () => {

    const navigation = useNavigation();
    const desayuno = [];
    const intermedio1 = [];
    const comida = [];
    const intermedio2 = [];
    const cena = [];

    return (
        <ScrollView>
            <Text style={ayer.instructions}>
                Ingresa los alimentos que consumiste el día de ayer
            </Text>
            <View style={ayer.body} >
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Desayuno
                </Text>
                    <View style={ayer.separator}>
                        {
                            desayuno
                                ? <FlatList

                                />
                                : null
                        }
                        <AddAlimento
                            tipo='desayunoAyer'
                        />
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Intermedio
                </Text>
                    <View style={ayer.separator}>
                        {
                            intermedio1
                                ? <FlatList

                                />
                                : null
                        }
                        <AddAlimento
                            tipo='intermedio1'
                        />
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Comida
                </Text>
                    <View style={ayer.separator}>
                        {
                            comida
                                ? <FlatList

                                />
                                : null
                        }
                        <AddAlimento
                            tipo='comidaAyer'
                        />
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Intermedio
                </Text>
                    <View style={ayer.separator}>
                        {
                            intermedio2
                                ? <FlatList

                                />
                                : null
                        }
                        <AddAlimento
                            tipo='intermedio2'
                        />
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Cena
                </Text>
                    <View style={ayer.separator}>
                        {
                            cena
                                ? <FlatList

                                />
                                : null
                        }
                        <AddAlimento
                            tipo='cenaAyer'
                        />
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={ayer.buttonContainer}
                onPress={() => navigation.navigate('Principal')}
            // Registrar los datos aquí
            >
                <Text style={ayer.buttonText} >
                    Terminé
                </Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default Yesterday
