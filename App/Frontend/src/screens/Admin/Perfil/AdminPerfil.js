import React from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { standardAvatar } from '../../../assets/data/cloud'
import Next from 'react-native-vector-icons/MaterialIcons'
import styles from './adminPerfilStyles'

const AdminPerfil = () => {

    const imagen = ''
    const navigation = useNavigation();

    return (
        <View>
            <ScrollView>
                <View style={styles.titlesContainer}>
                    <Text style={styles.title}>Información personal</Text>
                    <TouchableOpacity>
                        <Text style={styles.edit}>Editar</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.mainContainer}>
                    <View style={styles.cardContainer}>
                        <Image
                            style={styles.image}
                            resizeMode='cover'
                            source={{ uri: imagen ? imagen : standardAvatar }}
                        />
                        <View style={styles.cardInfoContainer}>
                            <Text style={styles.userName}>Gamaliel Bernal</Text>
                            <Text>email@email.com</Text>
                            <View style={{ marginTop: 5, marginBottom: 4, borderBottomColor: 'black', borderBottomWidth: 1 }} />
                            <Text>23 años</Text>
                            <View style={{ marginTop: 5, marginBottom: 4, borderBottomColor: 'black', borderBottomWidth: 1 }} />
                            <Text>Lorem ipsum dolor sit amet</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.options, { marginTop: 10 }]}>
                        <Text style={styles.optionsText}>Recordatorios</Text>
                        <Next name='navigate-next' size={34} color={'#000'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.options}
                        onPress={() => navigation.navigate('NuevoMenuBase')}
                    >
                        <Text style={styles.optionsText}>Nuevo menú base</Text>
                        <Next name='navigate-next' size={34} color={'#000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.optionsText}>Ver menús base</Text>
                        <Next name='navigate-next' size={34} color={'#000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.optionsText}>Recetas</Text>
                        <Next name='navigate-next' size={34} color={'#000'} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.options}>
                        <Text style={styles.optionsText}>Videos</Text>
                        <Next name='navigate-next' size={34} color={'#000'} />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default AdminPerfil
