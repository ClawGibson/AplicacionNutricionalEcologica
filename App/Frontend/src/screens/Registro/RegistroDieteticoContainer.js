import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import AlimentosContainer from '../Alimentos/AlimentosContainer'
import SegmentedControlTab from "react-native-segmented-control-tab"
import Banner from '../../components/Banner'
import { secondary } from '../../styles/palette'
import RegistroContainer from '../Alimentos/RegistroContainer'
import { useNavigation } from '@react-navigation/native'

const RegistroDieteticoContainer = (props) => {

    const navigation = useNavigation();
    const [selectedIndex, setSelectedIntex] = useState(0)

    useEffect(() => {
        setSelectedIntex(0);
    }, []);

    return (
        <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <View>
                <Text style={styles.title}>Recetas</Text>
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate('Recetas')}
            >
                <Banner />
            </TouchableOpacity>
            <SegmentedControlTab
                activeTabStyle={{ backgroundColor: secondary }}
                tabStyle={{ borderColor: '#F2F2F2', marginBottom: 5 }}
                values={["Plan alimenticio", "Registro dietético"]}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIntex(index)}
            />
            {
                selectedIndex == 0
                    ? <AlimentosContainer
                        navigation={props.navigation}
                    />
                    :
                    <RegistroContainer />
            }
        </ScrollView>
    )
}

export default RegistroDieteticoContainer

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignItems: 'center',
        fontSize: 24,
        fontWeight: '500',
        marginLeft: '3%',
        marginBottom: '-5%'
    }
})
