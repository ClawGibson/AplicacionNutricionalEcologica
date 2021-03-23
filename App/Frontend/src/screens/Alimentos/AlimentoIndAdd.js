import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import alimentoIndAdd from '../../styles/alimentoIndAdd'
import { ProgressCircle } from 'react-native-svg-charts'
import { ExpandableListView } from 'react-native-expandable-listview';
import { LogBox } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const { imageNotFound } = require('../../assets/data/cloud');

const AlimentoIndAdd = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    const navigation = useNavigation();

    const CONTENT = [
        {
            id: '42',
            categoryName: 'Vitaminas',
            subCategory: [
                {
                    id: '1',
                    name:
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged",
                }
            ],
        },
        {
            id: '95',
            categoryName: 'Minerales',
            subCategory: [{ id: '1', name: 'Sub Item 1' }],
        },
        {
            id: '94',
            categoryName: 'Item 3',
            subCategory: [{ id: '1', name: 'Sub Item 1' }],
        },
        {
            id: '93',
            categoryName: 'Item 4',
            subCategory: [{ id: '1', name: 'Sub Item 1' }],
        },
        {
            id: '92',
            categoryName: 'Item 5',
            subCategory: [{ id: '1', name: 'Sub Item 1' }],
        },
        {
            id: '96',
            categoryName: 'Item 6',
            subCategory: [{ id: '1', name: 'Sub Item 1' }],
        },
    ];

    return (
        <>
            <Image
                style={alimentoIndAdd.image}
                resizeMode='stretch'
                source={{ uri: item.imagen ? item.imagen : imageNotFound }}
            />
            <Text style={alimentoIndAdd.title}>{item.nombreAlimento}</Text>
            <ScrollView showsVerticalScrollIndicator={false} >
                <View style={alimentoIndAdd.huellaConsumo}>
                    <View style={alimentoIndAdd.textContainer}>
                        <Text style={alimentoIndAdd.titles}>Porción</Text>
                        <Text style={alimentoIndAdd.extraText}>Lorem</Text>
                    </View>
                </View>
                <View style={alimentoIndAdd.details}>
                    <Text style={alimentoIndAdd.titles}>Información nutricional</Text>
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
                        data={CONTENT} // required
                    />

                </View>
            </ScrollView>
            <View style={alimentoIndAdd.buttonContainer}>
                <TouchableOpacity
                    style={alimentoIndAdd.button}
                    onPress={() => {
                        navigation.navigate('Registro');
                    }}
                >
                    <Text style={alimentoIndAdd.buttonText}>Agregar</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default AlimentoIndAdd
