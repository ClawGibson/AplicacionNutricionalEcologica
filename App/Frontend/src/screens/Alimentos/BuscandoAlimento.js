import React from 'react'
import { View, Dimensions, Image } from 'react-native'
import { Content, ListItem, Thumbnail, Text, Left, Body } from 'native-base'
import { useNavigation } from '@react-navigation/native'
import { notFound } from "../../assets/data/cloud";

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
                                    navigation.navigate('AlimentoIndAdd', { item: item })
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
                        <Image
                            style={{ height: width / 2, width: width / 2, alignSelf: 'center' }}
                            resizeMode='stretch'
                            source={{ uri: notFound ? notFound : null }}
                        />
                    </View>
            }
        </Content>
    )
}

export default BuscandoAlimento
