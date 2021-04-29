import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native'
//import { Picker } from '@react-native-picker/picker';
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromNewMenu } from '../../../Redux/actions/newMenu'
import menusBaseStyles from './menusBaseStyles'

const MenusBase = (props) => {


    //const test = props?.route?.params;
    //console.log(test?.value);
    const test = useSelector(state => state.newMenu);
    const [name, onChangeName] = useState('');
    const [food, setFood] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        setFood(test)
        return () => {
            setFood([])
        }
    }, [])

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
                        food?.length > 0
                            ? <>
                                {
                                    food.map(item => (
                                        <TouchableOpacity
                                            onPress={() => dispatch(removeFromNewMenu(item))}
                                            style={menusBaseStyles.badgeFood}>
                                            <Text style={menusBaseStyles.badgeFoodText}>
                                                {item}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                                <TouchableOpacity
                                    style={menusBaseStyles.addFood}
                                    onPress={() => navigation.navigate('GrupoDeAlimentos')}
                                >
                                    <Text>Agregar</Text>
                                </TouchableOpacity>
                            </>
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
