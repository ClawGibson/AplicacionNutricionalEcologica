import React, { useState, useEffect } from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import alimentoInd from '../../styles/alimentoInd'
import { ProgressCircle } from 'react-native-svg-charts'
import { ExpandableListView } from 'react-native-expandable-listview';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.']);

const AlimentoInd = (props) => {

    const [item, setItem] = useState(props.route.params.item);
    //console.log(`PROPS EN DETALLES: ${props.nombreAlimento}`);

    const manzana = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FKIhQjkoYYfxW-lpbw7-CwHaFA%26pid%3DApi&f=1';
    const imageNoAvailable = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvideojuego%2Fimages%2F9%2F9c%2FImagen_no_disponible-0.png%2Frevision%2Flatest%3Fcb%3D20170910134200&f=1&nofb=1';

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
                style={alimentoInd.image}
                resizeMode='stretch'
                source={{ uri: item.imagen ? item.imagen : imageNoAvailable }}
            />
            <Text style={alimentoInd.title}>{item.nombreAlimento}</Text>
            <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                <View style={alimentoInd.huellaConsumo}>
                    <View style={alimentoInd.textContainer}>
                        <Text style={alimentoInd.titles}>Huella</Text>
                        <Text style={alimentoInd.extraText}>Lorem</Text>
                        <View style={{ marginTop: 5, marginBottom: -4, borderBottomColor: 'black', borderBottomWidth: 1 }} />
                        <Text style={alimentoInd.titles}>Consumo</Text>
                        <Text style={alimentoInd.extraText}>Lorem</Text>
                    </View>
                </View>
                <View style={alimentoInd.details}>
                    <Text style={alimentoInd.titles}>Información nutricional</Text>
                    <View style={alimentoInd.percentajes}>
                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.85} progressColor={'#C1CF3A'} />
                            <Text style={alimentoInd.percentajesText}>Grasas</Text>
                        </View>
                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.8} progressColor={'#4BB5C3'} />
                            <Text style={alimentoInd.percentajesText} >Carbohidratos</Text>
                        </View>

                        <View>
                            <ProgressCircle style={{ height: 50 }} progress={0.51} progressColor={'#8AB832'} />
                            <Text style={alimentoInd.percentajesText}>Proteinas</Text>
                        </View>
                    </View>
                    <ExpandableListView
                        data={CONTENT} // required
                    />
                </View>
            </ScrollView>
        </>
    )
}

export default AlimentoInd
