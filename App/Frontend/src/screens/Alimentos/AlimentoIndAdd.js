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
import { addToBreakfast } from '../../Redux/actions/cart'
import SegmentedControlTab from "react-native-segmented-control-tab"

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const { imageNotFound } = require('../../assets/data/cloud');
const CONTENT = require('../../assets/data/desplegable.json');

const AlimentoIndAdd = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIntex] = useState(0)
    const [selectedPortion, setSelectedPortion] = useState('');
    const [toCart, setToCart] = useState([]);

    useEffect(() => {
        setSelectedIntex(0)
        setToCart([]);
        return () => {
            setSelectedIntex(0)
            setToCart([])
        }
    }, []);

    return (
        <>
            <Image
                style={alimentoIndAdd.image}
                resizeMode='stretch'
                source={{ uri: item.imagen ? item.imagen : imageNotFound }}
            />
            <Text style={alimentoIndAdd.title}>{item.nombreAlimento}</Text>
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
                            selectedIndex == 0
                                ?
                                <View>
                                    <Text style={alimentoIndAdd.portion}>Porción</Text>
                                    <Item>
                                        <Input
                                            placeholder='Ingresa la cantidad que comiste'
                                            textAlign={'center'}
                                            placeholderTextColor={'#969696'}
                                        />
                                    </Item>
                                    <Text style={alimentoIndAdd.extraText}></Text>
                                </View>
                                :
                                <Text>Holis</Text>
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
                            source={{ uri: item.icono.iconoNutricional ? item.icono.iconoNutricional : imageNotFound }}
                        />
                    </View>
                    <View>
                        <Text>
                            Huella ambiental
                        </Text>
                        <Image style={alimentoIndAdd.icon2}
                            resizeMode='contain'
                            source={{ uri: item.icono.iconoAmbiental ? item.icono.iconoAmbiental : imageNotFound }}
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
                <TouchableOpacity
                    style={alimentoIndAdd.button}
                    onPress={() => {
                        navigation.navigate('Registro'),
                            dispatch(addToBreakfast(item))
                    }}
                >
                    <Text style={alimentoIndAdd.buttonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default AlimentoIndAdd
