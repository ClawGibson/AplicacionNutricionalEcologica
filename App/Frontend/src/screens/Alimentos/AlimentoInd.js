import React from 'react'
import { View, Text } from 'react-native'

const AlimentoInd = (props) => {

    const { item } = props;
    console.log(`PROPS EN DETALLES: ${props.nombreAlimento}`);
    //console.log(`Detalles: ${item.nombreAlimento}`);

    return (
        <View>
            <Text>Caca</Text>
        </View>
    )
}

export default AlimentoInd
