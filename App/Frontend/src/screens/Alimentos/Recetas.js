import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import WavyHeader from '../../components/WavyHeader'
import recetasStyles from './recetasStyles'
import Video from '../../components/Video'

const test = { 'id': 1, 'link': 'TUC_2nPScxo' }


const Recetas = () => {

    const [focus, setFocus] = useState();

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View style={recetasStyles.topBackground} >
            </View>
            <View style={recetasStyles.wave}>
                <WavyHeader
                    customWidth={Dimensions.get('screen').width}
                    customHeight={Dimensions.get('screen').height * 0.2}
                />
            </View>
            <ScrollView>
                <View style={recetasStyles.separator} >
                    <View style={recetasStyles.rowContainer}>
                        <Text style={recetasStyles.title}>
                            Desayuno
                    </Text>
                        <TouchableOpacity>
                            <Text>Ver todos</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={recetasStyles.alignCards}>
                        {
                            test
                                ?
                                <Video data={test} />
                                :
                                <View style={{ marginTop: '50%' }}>
                                    <Text>Ocurrió algún error y no se pudo encontrar la información :(</Text>
                                </View>
                        }
                    </View>
                </View>
            </ScrollView>
        </ScrollView>
    )
}

export default Recetas
