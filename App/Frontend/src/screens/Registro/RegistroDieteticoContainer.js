import React, { useState, useEffect } from 'react'
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native'
import AlimentosContainer from '../Alimentos/AlimentosContainer'
import SegmentedControlTab from "react-native-segmented-control-tab"
import Banner from '../../components/Banner'
import { secondary } from '../../styles/palette'

const imagen = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148039/chems_n0glyv.png';
const imageNoAvailable = 'https://res.cloudinary.com/dwjv6orjf/image/upload/v1615148366/noAvailable_frihp8.png';

const RegistroDieteticoContainer = (props) => {

    const [selectedIndex, setSelectedIntex] = useState(0)

    useEffect(() => {
        setSelectedIntex(0);
        return () => {
            setSelectedIntex(0)
        }
    }, []);

    return (
        <ScrollView>
            <View>
                <Text style={styles.title}>Recetas</Text>
            </View>
            <Banner />
            <SegmentedControlTab
                activeTabStyle={{ backgroundColor: secondary }}
                tabStyle={{ borderColor: '#F2F2F2', marginBottom: 5 }}
                values={["Plan alimenticio", "Registro dietético"]}
                selectedIndex={selectedIndex}
                onTabPress={(index) => setSelectedIntex(index)}
            />
            {
                selectedIndex == 0 ?
                    <AlimentosContainer
                        navigation={props.navigation}
                    /> :
                    <Image
                        style={{
                            width: '110%',
                            height: 513,
                            marginLeft: '-4%'
                        }}
                        source={{ uri: imagen ? imagen : imageNoAvailable }} />
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
