import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import styles from '../../styles/registroContainer'

const SelectorHorario = (props) => {

    const [time, setTime] = useState('');
    const [showPicker, setShowPicker] = useState(false);

    const showDatePicker = () => {
        setShowPicker(true);
    };

    const hideDatePicker = () => {
        setShowPicker(false);
    };

    const handleConfirm = (date) => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        hours > 12
            ? setTime(`${hours}:${minutes} pm`)
            : setTime(`${hours}:${minutes} am`)
        hideDatePicker();
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.name}</Text>
            <TouchableOpacity style={styles.inputTime} onPress={showDatePicker}>
                <Text style={styles.timeFormat}>{time ? time : 'Horario'}</Text>
                <DateTimePickerModal
                    isVisible={showPicker}
                    mode="time"
                    locale="en_GB"
                    is24Hour={false}
                    display='spinner'
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </TouchableOpacity>
        </View>
    )
}

export default SelectorHorario
