import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { ListItem, Badge, Text, View } from 'native-base'
import diasFilter from '../../styles/diasFilter'

const CategoriasAlimentos = (props) => {
    return (
        <ScrollView horizontal style={{ flex: -1 }} showsVerticalScrollIndicator={false}>
            <ListItem style={diasFilter.list}>
                <View style={diasFilter.container} >
                    <TouchableOpacity
                        key={1}
                        onPress={() => {
                            props.catSelected('Todos'), props.setActive(-1)
                        }}
                    >
                        <Badge style={[diasFilter.active, props.active == -1 ? diasFilter.active : diasFilter.inactive]} >
                            <Text>Todos</Text>
                        </Badge>
                    </TouchableOpacity>
                    {
                        props.cat.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => {
                                    props.catSelected(item),
                                        props.setActive(props.cat.indexOf(item))
                                }}
                            >
                                <Badge style={props.active == props.cat.indexOf(item) ? diasFilter.active : diasFilter.inactive}>
                                    <Text style={diasFilter.text} >{item.cat}</Text>
                                </Badge>
                            </TouchableOpacity>
                        )
                        )
                    }
                </View>
            </ListItem>
        </ScrollView>
    )
}

export default CategoriasAlimentos
