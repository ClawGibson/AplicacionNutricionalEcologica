import React from 'react'
import { View, Dimensions } from 'react-native'
import { Content, ListItem, Thumbnail, Text, Left, Body } from 'native-base'
import { useNavigation } from '@react-navigation/native'

const { width } = Dimensions.get('screen')

const BuscandoAlimento = (props) => {

    const navigation = useNavigation();
    const { alimentoBuscado } = props;

    return (
        <Content style={{ width: width }}>
            {
                alimentoBuscado.length > 0
                    ? alimentoBuscado.map((item) => {
                        return (
                            <ListItem
                                onPress={() => {
                                    navigation.navigate('AlimentoInd', { item: item })
                                }}
                                key={item._id.id}
                                avatar
                            >
                                <Left>
                                    <Thumbnail
                                        source={{ uri: item?.imagen ? item.imagen : null }}
                                    />
                                </Left>
                                <Body>
                                    <Text>{item.nombreAlimento}</Text>
                                </Body>
                            </ListItem>
                        )
                    })
                    : <View>
                        <Text style={{ alignSelf: 'center', justifyContent: 'center' }}>
                            No se encontraron resultados válidos para tu búsqueda :c
                        </Text>
                    </View>
            }
        </Content>
    )
}

export default BuscandoAlimento
