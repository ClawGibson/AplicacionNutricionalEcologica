import React from 'react'
import { TouchableOpacity, ScrollView } from 'react-native'
import { ListItem, Badge, Text, View } from 'native-base'
import diasFilter from '../styles/diasFilter'


const DiasFilter = (props) => {

    return (
        <ScrollView horizontal style={{ flex: -1 }} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <ListItem style={diasFilter.list}>
                <View style={diasFilter.container} >
                    <TouchableOpacity
                        key={1}
                        onPress={() => {
                            props.daySelected('Lunes'), props.setActive(-1)
                        }}
                    >
                        <Badge style={[diasFilter.active, props.active == -1 ? diasFilter.active : diasFilter.inactive]} >
                            <Text>Lunes</Text>
                        </Badge>
                    </TouchableOpacity>
                    {
                        props.day.map((item) => (
                            <TouchableOpacity
                                key={item.id}
                                onPress={() => {
                                    props.daySelected(item),
                                        props.setActive(props.day.indexOf(item))
                                }}
                            >
                                <Badge style={props.active == props.day.indexOf(item) ? diasFilter.active : diasFilter.inactive}>
                                    <Text style={diasFilter.text} >{item.name}</Text>
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

export default DiasFilter
