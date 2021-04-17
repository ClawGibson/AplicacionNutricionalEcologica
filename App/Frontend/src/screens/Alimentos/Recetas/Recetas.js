import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import WavyHeader from '../../../components/WavyHeader'
import recetasStyles from '../recetasStyles'
import Video from '../../../components/Video'
import Section from './components/Section'

const desayuno = { 'link': 'TUC_2nPScxo' }
const colacion1 = { 'link': 'mFwgP03plgY' }
const comida = { 'link': 'cei3JhG72bg' }
const colacion2 = { 'link': 'bHy2DoIA6ik' }
const cena = { 'link': 'N8uSB4tutOE' }

const Recetas = () => {

    const [focus, setFocus] = useState();

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
        >
            <ScrollView>
                <Section data={desayuno} name={'Desayuno'} />
                <Section data={colacion1} name={'Colación'} />
                <Section data={comida} name={'Comida'} />
                <Section data={colacion2} name={'Colación 2'} />
                <Section data={cena} name={'Cena'} />
            </ScrollView>
        </ScrollView>
    )
}

export default Recetas
