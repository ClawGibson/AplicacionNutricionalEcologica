import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Item, Input } from 'native-base'
import alimentoIndAdd from '../../styles/alimentoIndAdd'
import { ProgressCircle } from 'react-native-svg-charts'
import { ExpandableListView } from 'react-native-expandable-listview';
import { LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { secondary } from "../../styles/palette";
import { useDispatch } from 'react-redux'
import {
    addToBreakfastYesterday,
    addToCollation1Yesterday,
    addToCollation2Yesterday,
    addToDinnerYesterday,
    addToLunchYesterday
} from '../../Redux/actions/yesterday'
import SegmentedControlTab from "react-native-segmented-control-tab"

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const { imageNotFound } = require('../../assets/data/cloud');
const CONTENT = require('../../assets/data/desplegable.json');

const AlimentoIndAdd2 = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIntex] = useState(0)
    const [data, setData] = useState([]);
    const [selectedPortion, setSelectedPortion] = useState(0);
    const [button, setButton] = useState(true);
    const operation = props.route.params.tipo;

    useEffect(() => {
        setSelectedIntex(0)
        setSelectedPortion(0)
        return () => {
            setSelectedIntex(0)
            setSelectedPortion(0)
            setData([])
        }
    }, []);

    const handleButton = () => {
        setButton(!button)
    }

    const handleData = (name, count, category) => {

        let datos = {
            nombre: name,
            cantidad: count,
            categoria: category
        }

        data.length <= 0
            ? (
                handleButton(),
                setData([...data, datos])
            )
            : (
                handleButton(),
                evaluateOperation(operation),
                navigation.navigate('Ayer')
            )
    }

    const evaluateOperation = (op) => {
        switch (op) {
            case 'desayunoAyer':
                dispatch(addToBreakfastYesterday(data)),
                    navigation.navigate('Ayer')
                break;
            case 'intermedio1':
                dispatch(addToCollation1Yesterday(data)),
                    navigation.navigate('Ayer')
                break;
            case 'comidaAyer':
                dispatch(addToLunchYesterday(data)),
                    navigation.navigate('Ayer')
                break;
            case 'intermedio2':
                dispatch(addToCollation2Yesterday(data)),
                    navigation.navigate('Ayer')
                break;
            case 'cenaAyer':
                dispatch(addToDinnerYesterday(data)),
                    navigation.navigate('Ayer')
                break;
            default:
                console.log('Hubo un problema y no sé por qué :c')
                navigation.navigate('Ayer')
        }
    }

    return (
        <>
            <Image
                style={alimentoIndAdd.image}
                resizeMode='stretch'
                source={{ uri: item?.imagen ? item?.imagen : imageNotFound }}
            />
            <Text style={alimentoIndAdd.title}>{item?.nombreAlimento}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} >
                <SegmentedControlTab
                    activeTabStyle={{ backgroundColor: '#FFF' }}
                    activeTabTextStyle={{ color: secondary }}
                    tabTextStyle={{ color: '#969696' }}
                    tabStyle={{ borderColor: secondary, marginTop: 6, marginBottom: -4 }}
                    values={["Registro por porciones", "Registro libre"]}
                    selectedIndex={selectedIndex}
                    onTabPress={(index) => setSelectedIntex(index)}
                />
                <View style={alimentoIndAdd.huellaConsumo}>
                    <View style={alimentoIndAdd.textContainer}>
                        {
                            selectedIndex == 1
                                ?
                                <View>
                                    <Item>
                                        <Input
                                            placeholder='Ingresa la cantidad que comiste'
                                            textAlign={'center'}
                                            placeholderTextColor={'#969696'}
                                            onChangeText={text => { setSelectedPortion({ value: text }) }}
                                        />
                                    </Item>
                                    <Text style={alimentoIndAdd.extraText}></Text>
                                </View>
                                :
                                <Text style={alimentoIndAdd.portion}>1 Porción</Text>

                        }
                    </View>
                </View>
                <Text style={alimentoIndAdd.titles}>Información ecológica</Text>
                <View style={alimentoIndAdd.huella}>
                    <View>
                        <Text>
                            Huella nutricional
                        </Text>
                        <Image style={alimentoIndAdd.icon1}
                            resizeMode='contain'
                            source={{ uri: item?.icono.iconoNutricional ? item?.icono.iconoNutricional : imageNotFound }}
                        />
                    </View>
                    <View>
                        <Text>
                            Huella ambiental
                        </Text>
                        <Image style={alimentoIndAdd.icon2}
                            resizeMode='contain'
                            source={{ uri: item?.icono.iconoAmbiental ? item?.icono.iconoAmbiental : imageNotFound }}
                        />
                    </View>
                </View>
                <Text style={alimentoIndAdd.titles}>Información nutricional</Text>
                <View style={alimentoIndAdd.details}>
                    <View style={alimentoIndAdd.percentajes}>
                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.85} progressColor={'#C1CF3A'} />
                            <Text style={alimentoIndAdd.percentajesText}>Grasas</Text>
                        </View>
                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.8} progressColor={'#4BB5C3'} />
                            <Text style={alimentoIndAdd.percentajesText} >Carbohidratos</Text>
                        </View>

                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.51} progressColor={'#8AB832'} />
                            <Text style={alimentoIndAdd.percentajesText}>Proteinas</Text>
                        </View>
                    </View>
                    <ExpandableListView
                        data={CONTENT}
                    />
                </View>
            </ScrollView>
            <View style={alimentoIndAdd.buttonContainer}>
                {
                    button
                        ? (
                            <TouchableOpacity style={alimentoIndAdd.button} onPress={() => handleData(item.nombreAlimento, 1, 'fruit')}>
                                <Text style={alimentoIndAdd.buttonText}>Agregar</Text>
                            </TouchableOpacity>
                        )
                        : (
                            <TouchableOpacity style={[alimentoIndAdd.button, alimentoIndAdd.buttonBack]} onPress={() => handleData(item.nombreAlimento, 1, 'fruit')}>
                                <Text style={[alimentoIndAdd.buttonText, { color: '#328AB2' }]}>Ver mi lista</Text>
                            </TouchableOpacity>
                        )
                }
            </View>
        </>
    )
}

export default AlimentoIndAdd2
