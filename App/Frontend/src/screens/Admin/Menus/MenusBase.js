import React, { useState, useEffect } from 'react'
import { View, Text, Dimensions, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromNewMenu } from '../../../Redux/actions/newMenu'
import { RadioButtons } from 'react-native-radio-buttons'
import menusBaseStyles from './menusBaseStyles'

const options = [
    "Desayuno",
    "Colación1",
    "Comida",
    "Colación2",
    "Cena"
];

const MenusBase = (props) => {


    //const test = props?.route?.params;
    //console.log(test?.value);
    const test = useSelector(state => state.newMenu);
    const [name, onChangeName] = useState('');
    const [food, setFood] = useState([]);
    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [selectedOption, setSelectedOption2] = useState();

    useEffect(() => {
        setFood(test)
        return () => {
            setFood([])
        }
    }, [])

    function setSelectedOption(option) {
        setSelectedOption2(option)
    }

    function renderOption(option, selected, onSelect, index) {
        const style = selected
            ? {
                height: 25,
                alignSelf: 'center',
                backgroundColor: '#439776',
                fontWeight: 'bold',
                color: '#fff',
                margin: 2.5,
                width: Dimensions.get('screen').width * 0.6,
                textAlign: 'center',
                textAlignVertical: 'center'
            }
            : {
                height: 25,
                alignSelf: 'center',
                backgroundColor: '#C1CF3A',
                margin: 2.5,
                borderRadius: 5,
                color: '#000',
                width: Dimensions.get('screen').width * 0.6,
                textAlign: 'center',
                textAlignVertical: 'center'
            };

        return (
            <TouchableOpacity onPress={onSelect} key={index}>
                <Text style={style}>{option}</Text>
            </TouchableOpacity>
        );
    }

    function renderContainer(optionNodes) {
        return <View>{optionNodes}</View>;
    }

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
                    <RadioButtons
                        options={options}
                        onSelection={setSelectedOption.bind(this)}
                        selectedOption={selectedOption}
                        renderOption={renderOption}
                        renderContainer={renderContainer}
                    />
                </View>
                <TouchableOpacity style={menusBaseStyles.button}>
                    <Text style={menusBaseStyles.buttonText}>Guardar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default MenusBase
