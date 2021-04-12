import React from 'react'
import { View, Text, FlatList, ScrollView, TouchableOpacity } from 'react-native'
import ColorCardList from '../Alimentos/ColorCardList'
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux'
import ayer from '../../styles/ayer'

import AddAlimento from '../../components/AddAlimento'

const Yesterday = () => {

    const navigation = useNavigation();
    const breakfast = useSelector(state => state.breakfastYesterday)
    const collation1 = useSelector(state => state.collation1Yesterday)
    const collation2 = useSelector(state => state.collation2Yesterday)
    const dinner = useSelector(state => state.dinnerYesterday)
    const lunch = useSelector(state => state.lunchYesterday)
    const breakfastFlat = breakfast?.flat();
    const collation1Flat = collation1?.flat();
    const collation2Flat = collation2?.flat();
    const dinnerFlat = dinner?.flat();
    const lunchFlat = lunch?.flat();
    const desayuno = breakfastFlat ? breakfastFlat : [];
    const intermedio1 = collation1Flat ? collation1Flat : [];
    const comida = lunchFlat ? lunchFlat : [];
    const intermedio2 = collation2Flat ? collation2Flat : [];
    const cena = dinnerFlat ? dinnerFlat : [];

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
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={ayer.alignerContainer}>
                            {
                                desayuno
                                    ? <FlatList
                                        data={desayuno}
                                        horizontal
                                        keyExtractor={(item) => `${item.nombre}`}
                                        renderItem={item =>
                                            <ColorCardList
                                                item={item}
                                            />
                                        }
                                    />
                                    : null
                            }
                            <AddAlimento
                                tipo='desayunoAyer'
                            />
                        </ScrollView>
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Intermedio
                    </Text>
                    <View style={ayer.separator}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={ayer.alignerContainer}>
                            {
                                intermedio1
                                    ? <FlatList
                                        data={intermedio1}
                                        horizontal
                                        keyExtractor={(item) => `${item.nombre}`}
                                        renderItem={item =>
                                            <ColorCardList
                                                item={item}
                                            />
                                        }
                                    />
                                    : null
                            }
                            <AddAlimento
                                tipo='intermedio1'
                            />
                        </ScrollView>
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Comida
                    </Text>
                    <View style={ayer.separator}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={ayer.alignerContainer}>
                            {
                                comida
                                    ? <FlatList
                                        data={comida}
                                        horizontal
                                        keyExtractor={(item) => `${item.nombre}`}
                                        renderItem={item =>
                                            <ColorCardList
                                                item={item}
                                            />
                                        }
                                    />
                                    : null
                            }
                            <AddAlimento
                                tipo='comidaAyer'
                            />
                        </ScrollView>
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Intermedio 2
                    </Text>
                    <View style={ayer.separator}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={ayer.alignerContainer}>
                            {
                                intermedio2
                                    ? <FlatList
                                        data={intermedio2}
                                        horizontal
                                        keyExtractor={(item) => `${item.nombre}`}
                                        renderItem={item =>
                                            <ColorCardList
                                                item={item}
                                            />
                                        }
                                    />
                                    : null
                            }
                            <AddAlimento
                                tipo='intermedio2'
                            />
                        </ScrollView>
                    </View>
                </View>
                <View style={ayer.itemContainer}>
                    <Text style={ayer.titles}>
                        Cena
                    </Text>
                    <View style={ayer.separator}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={ayer.alignerContainer}>
                            {
                                cena
                                    ? <FlatList
                                        data={cena}
                                        horizontal
                                        keyExtractor={(item) => `${item.nombre}`}
                                        renderItem={item =>
                                            <ColorCardList
                                                item={item}
                                            />
                                        }
                                    />
                                    : null
                            }
                            <AddAlimento
                                tipo='cenaAyer'
                            />
                        </ScrollView>
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
