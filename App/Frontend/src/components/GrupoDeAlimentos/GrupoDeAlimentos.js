import React from 'react'
import { View, FlatList } from 'react-native'
import GrupoCard from './GrupoCard'

const groups = [
    { name: 'Frutas', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WStA7xwOoMfeFbV9MVwUkAHaDj%26pid%3DApi&f=1' },
    { name: 'Verduras', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.9Yj4P-k9W4AS535v7hlSUgHaEc%26pid%3DApi&f=1' },
    { name: 'Cereales', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eavbd_z4Cu2XVGY6aX_qdQHaE8%26pid%3DApi&f=1' },
    { name: 'Leguminosas', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.5Wp2S3AL8kKTKTSXEdHrrQHaFj%26pid%3DApi&f=1' },
    { name: 'Carnes', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.x2lUD_5FRaton9c5zlwvsgHaDt%26pid%3DApi&f=1' },
    { name: 'Lácteos', imagen: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cZTC0ZmfGy1gZzHjlcUQLwHaEj%26pid%3DApi&f=1' }
];

const GrupoDeAlimentos = () => {
    return (
        <View>
            <FlatList
                numColumns={2}
                data={groups}
                keyExtractor={item => `${item.name}`}
                renderItem={({ item }) => <GrupoCard
                    categoria={item.name}
                    imagen={item.imagen}
                />}
            />
        </View>
    )
}

export default GrupoDeAlimentos
