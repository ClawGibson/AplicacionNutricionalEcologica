import React, { useState, useEffect } from 'react'
import { ScrollView, FlatList } from 'react-native'
import EjerciciosList from './EjerciciosList';
import CategoriaFilter from './CategoriaFilter'

const examples = require('../../assets/data/ejercicios.json')
const categorias = require('../../assets/data/categorias.json');

const Ejercicios = () => {

    const [active, setActive] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(() => {
        setActive(-1);
        setCategory(categorias);
        return () => {
            setActive([]);
            setCategory([]);
        }
    }, [])

    const chageCat = (ctg) => {
        ctg === 'Todos' ? console.log('Todos') : console.log(ctg)
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
                data={examples}
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
