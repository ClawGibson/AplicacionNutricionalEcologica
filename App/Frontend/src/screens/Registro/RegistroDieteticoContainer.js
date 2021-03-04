import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import AlimentosContainer from '../Alimentos/AlimentosContainer'
import Banner from '../../components/Banner'

const RegistroDieteticoContainer = (props) => {
    return (
        <ScrollView>
            <Banner />
            <View>
                <Text>
                    Días de la semana
            </Text>
            </View>
            <AlimentosContainer
                navigation={props.navigation}
            />
        </ScrollView>
    )
}

export default RegistroDieteticoContainer
