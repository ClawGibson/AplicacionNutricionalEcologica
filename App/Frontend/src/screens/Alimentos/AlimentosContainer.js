import React, { useState, useEffect } from 'react'
import { ScrollView, View, FlatList, Text, SafeAreaView } from 'react-native'
import AlimentosList from '../../selectors/Alimentos/AlimentosList'
import AddAlimento from '../../components/AddAlimento'

// Test data
const data = require('../../assets/data/alimentos.json');

const data2 = [
    {
        "_id": {
            "id": "c4ca4238a0b923820dcc509a6f75849b"
        },
        "nombreAlimento": "Leche descremada (light)",
        "imagen": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.superama.com.mx%2FContent%2Fimages%2Fproducts%2Fimg_large%2F0750179162192L.jpg&f=1&nofb=1",
        "icono": {
            "iconoNutricional": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F43030%2Fsmiling-face-with-smiling-eyes-emoji-clipart-md.png&f=1&nofb=1",
            "iconoAmbiental": "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42283/beaming-face-with-smiling-eyes-emoji-clipart-md.png"
        }
    },
    {
        "_id": {
            "id": "c81e728d9d4c2f636f067f89cc14862c"
        },
        "nombreAlimento": "Requesón",
        "imagen": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsevilla.abc.es%2Fgurme%2Fwp-content%2Fuploads%2Fsites%2F24%2F2014%2F05%2Frequeson.jpg&f=1&nofb=1",
        "icono": {
            "iconoNutricional": "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44287/astonished-face-emoji-clipart-md.png",
            "iconoAmbiental": "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/44449/slightly-frowning-face-emoji-clipart-md.png"
        }
    },
    {
        "_id": {
            "id": "eccbc87e4b5ce2fe28308fd9f2a7baf3"
        },
        "nombreAlimento": "Queso cotagge",
        "imagen": "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.dairygoodness.ca%2Fvar%2Fezflow_site%2Fstorage%2Fimages%2Fdairy-goodness%2Fhome%2Fcheese%2Fall-you-need-is-cheese%2Frepertoire%2Ffamilies%2Fcottage%2F12498795-3-eng-CA%2Fcottage_large.png&f=1&nofb=1",
        "icono": {
            "iconoNutricional": "https://creazilla-store.fra1.digitaloceanspaces.com/emojis/43795/neutral-face-emoji-clipart-md.png",
            "iconoAmbiental": ""
        }
    }
];

const AlimentosContainer = (props) => {

    const [alimentos, setAlimentos] = useState([]);

    useEffect(() => {
        setAlimentos(data2);
        return () => {
            setAlimentos([]);
        }
    }, []);

    return (
        < ScrollView >
            {
                alimentos.length > 0 ? (
                    <SafeAreaView>
                        {
                            alimentos.map((item) => {
                                return (
                                    <AlimentosList
                                        horizontal={true}
                                        navigation={props.navigation}
                                        key={item._id.id}
                                        item={item}
                                    />
                                )
                            })
                        }
                        {/** 
                            <FlatList
                                horizontal
                                data={alimentos != undefined ? alimentos : 'undefined :c'}
                                renderItem={AlimentosList}
                                navigation={props.navigation}
                                keyExtractor={item => item._id.id}
                            />
                        */}
                    </SafeAreaView>
                ) : (
                        <View>
                            <Text>No hay alimentos registrados :c</Text>
                        </View>
                    )
            }
        </ScrollView >
    )
}

export default AlimentosContainer
