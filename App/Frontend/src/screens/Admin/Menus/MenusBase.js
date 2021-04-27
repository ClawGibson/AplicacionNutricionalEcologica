import React, { useState } from 'react'
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native'
//import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'
import menusBaseStyles from './menusBaseStyles'

const MenusBase = () => {

    const [name, onChangeName] = useState('');
    const [food, setFood] = useState([]);
    const [categorySelected, setCategorySelected] = useState('');
    const navigation = useNavigation();

    return (
        <ScrollView>
            <View style={menusBaseStyles.mainContainer}>
                <View style={menusBaseStyles.boxContainer}>
                    <Text style={menusBaseStyles.title}>Nombre</Text>
                    <TextInput
                        style={menusBaseStyles.input}
                        onChangeText={onChangeName}
                        value={name}
                    />
                </View>
                <View style={[menusBaseStyles.boxContainer, { height: Dimensions.get('screen').height * 0.5 }]}>
                    <Text style={menusBaseStyles.title}>Ingredientes</Text>
                    {
                        food.length > 0
                            ? <View><Text>Toronjas</Text></View>
                            : <TouchableOpacity
                                style={menusBaseStyles.addFood}
                                onPress={() => navigation.navigate('GrupoDeAlimentos')}
                            >
                                <Text>Agregar</Text>
                            </TouchableOpacity>
                    }
                </View>
                <View style={menusBaseStyles.boxContainer}>
                    <Text style={menusBaseStyles.title}>Categoria</Text>
                </View>
                <View style={menusBaseStyles.button}>
                    <Text style={menusBaseStyles.buttonText}>Guardar</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default MenusBase
