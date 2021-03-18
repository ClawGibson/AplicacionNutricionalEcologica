import React, { useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native'
import EjerciciosList from './EjerciciosList';
import CategoriaFilter from './CategoriaFilter'

const examples = require('../../assets/data/ejercicios.json')
const categorias = require('../../assets/data/categorias.json');

const Ejercicios = () => {

    const [data, setData] = useState([]);
    const [active, setActive] = useState([]);
    const [category, setCategory] = useState([]);
    const [initialState, setInitialState] = useState([]);

    useEffect(() => {
        setData(examples);
        setActive(-1);
        setCategory(categorias);
        setInitialState(examples);
        return () => {
            setData([]);
            setActive([]);
            setCategory([]);
            setInitialState([]);
        }
    }, [])

    const chageCat = (ctg) => {
        ctg === 'Todos' ?
            [setData(initialState)] :
            [setData(initialState.filter((item) => item.cat === ctg.cat), setActive(true))]
    }

    return (
        <ScrollView>
            <CategoriaFilter
                categories={category}
                catSelected={chageCat}
                active={active}
                setActive={setActive}
            />
            <FlatList
                data={data}
                numColumns={2}
                keyExtractor={item => `${item.id}`}
                renderItem={({ item }) =>
                    <EjerciciosList
                        item={item}
                    />
                }
            />
        </ScrollView>
    )
}

export default Ejercicios
