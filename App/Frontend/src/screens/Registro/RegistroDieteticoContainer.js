import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AlimentosContainer from '../Alimentos/AlimentosContainer'
import Banner from '../../components/Banner'

const RegistroDieteticoContainer = (props) => {
    return (
        <ScrollView>
            <View>
                <Text>Recetas</Text>
            </View>
            <Banner />
            <AlimentosContainer
                navigation={props.navigation}
            />
        </ScrollView>
    )
}

export default RegistroDieteticoContainer
