import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  Picker,
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
//import { Picker } from "@react-native-community/picker";
//import { RNPickerSelect as SelectPicker } from "react-native-picker-select";
import Constants from "expo-constants";
import RNDatePicker from "react-native-datepicker";

export default function SocioEconomico(props) {
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  /*
  const estudio = [
    { label: "No estudió", value: "No estudió" },
    { label: "Primaria Inconclusa", value: "Primaria Inconclusa" },
    { label: "Primaria terminada", value: "Primaria terminada" },
    { label: "Secundaria inconclusa", value: "Secundaria inconclusa" },
    { label: "Secundaria terminada", value: "Secundaria terminada" },
    { label: "Preparatoria Inconclusa", value: "Preparatoria Inconclusa" },
    { label: "Preparatoria terminada", value: "Preparatoria terminada" },
    {
      label: "Carrera técnica Inconclusa",
      value: "Carrera técnica Inconclusa",
    },
    {
      label: "Carrera técnica terminada",
      value: "Carrera técnica terminada",
    },
    {
      label: "Estudiante de licenciatura",
      value: "Estudiante de licenciatura",
    },
    { label: "Licenciatura inconclusa ", value: "Licenciatura inconclusa" },
    { label: "Licenciatura terminada ", value: "Licenciatura terminada" },
    {
      label: "Maestría",
      value: "Maestría",
    },
    { label: "Doctorado", value: "Doctorado" },
    { label: "Especialidad", value: "Especialidad" },
  ];
*/
  const [selectedEstudio, setSelectedEstudio] = useState("No estudió");
  const [selectedOc, setSelectedOc] = useState("Funcionario, director o jefe");
  /*
  const ocupacion = [
    {
      label: "Funcionario, director o jefe",
      value: "Funcionario, director o jefe",
    },
    { label: "Profesionista o técnico", value: "Profesionista o técnico" },
    {
      label: "Trabajador auxiliar en actividades administrativas",
      value: "Trabajador auxiliar en actividades administrativas",
    },
    {
      label: "Comerciante, empleado en ventas o agente de ventas",
      value: "Comerciante, empleado en ventas o agente de ventas",
    },
    {
      label: "Trabajadores en servicios personales y de vigilancia",
      value: "Trabajadores en servicios personales y de vigilancia",
    },
    {
      label:
        "Trabajador en actividades agrícolas, ganaderas, forestales, caza o pesca",
      value:
        "Trabajador en actividades agrícolas, ganaderas, forestales, caza o pesca",
    },
    { label: "Trabajador artesanal", value: "Trabajador artesanal" },
    {
      label:
        "Operador de maquinaria industrial, ensambladores, chofer o conductor de transporte",
      value:
        "Operador de maquinaria industrial, ensambladores, chofer o conductor de transporte",
    },
    {
      label: "Trabajadores en actividades elementales y de apoyo",
      value: "Trabajadores en actividades elementales y de apoyo",
    },
    { label: "Ama de casa", value: "Ama de casa" },
    { label: "Estudiante", value: "Estudiante" },
    { label: "Desempleado", value: "Desempleado" },
    { label: "Jubilado", value: "Jubilado" },
    { label: "Otro (especificar):", value: "otro" },
  ];
  */
  const [selectedDxS, setSelectedDxS] = useState("1 vez");
  /*
  const diasXsemana = [
    { label: "1 vez", value: "1" },
    { label: "2 veces", value: "2" },
    { label: "3 veces", value: "3" },
    { label: "4 veces", value: "4" },
    { label: "5 veces", value: "5" },
    { label: "6 veces", value: "6" },
    { label: "7 veces", value: "7" },
  ];
*/
  const [selectedMod, setSelectedMod] = useState("Presencial");
  /*
  const modalidad = [
    { label: "Presencial", value: "Presencial" },
    { label: "En línea", value: "En línea" },
    { label: "Mixta", value: "Mixta" },
    {
      label: "En línea hasta nuevo aviso",
      value: "En línea hasta nuevo aviso",
    },
  ];
*/

  const [selectedEntrada, setSelectedEntrada] = useState("0:00");
  /*
  const entrada = [
    { label: "0:00", value: "0:00" },
    { label: "1:00", value: "1:00" },
    { label: "2:00", value: "2:00" },
    { label: "3:00", value: "3:00" },
    { label: "4:00", value: "4:00" },
    { label: "5:00", value: "5:00" },
    { label: "6:00", value: "6:00" },
    { label: "7:00", value: "7:00" },
    { label: "8:00", value: "8:00" },
    { label: "9:00", value: "9:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
    { label: "13:00", value: "13:00" },
    { label: "14:00", value: "14:00" },
    { label: "15:00", value: "15:00" },
    { label: "16:00", value: "16:00" },
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
    { label: "23:00", value: "23:00" },
  ];
*/
  const [selectedSalida, setSelectedSalida] = useState("0:00");
  /*
  const salida = [
    { label: "0:00", value: "0:00" },
    { label: "1:00", value: "1:00" },
    { label: "2:00", value: "2:00" },
    { label: "3:00", value: "3:00" },
    { label: "4:00", value: "4:00" },
    { label: "5:00", value: "5:00" },
    { label: "6:00", value: "6:00" },
    { label: "7:00", value: "7:00" },
    { label: "8:00", value: "8:00" },
    { label: "9:00", value: "9:00" },
    { label: "10:00", value: "10:00" },
    { label: "11:00", value: "11:00" },
    { label: "12:00", value: "12:00" },
    { label: "13:00", value: "13:00" },
    { label: "14:00", value: "14:00" },
    { label: "15:00", value: "15:00" },
    { label: "16:00", value: "16:00" },
    { label: "17:00", value: "17:00" },
    { label: "18:00", value: "18:00" },
    { label: "19:00", value: "19:00" },
    { label: "20:00", value: "20:00" },
    { label: "21:00", value: "21:00" },
    { label: "22:00", value: "22:00" },
    { label: "23:00", value: "23:00" },
  ];
  */

  const [selectedIM, setSelectedIM] = useState("0 - 2699");
  /*
  const ingresoMensual = [
    { label: "0 - 2,699", value: "0 - 2,699" },
    { label: "2,700 - 6,799", value: "2,700 - 6,799" },
    { label: "6,800 - 11,599", value: "6,800 - 11,599" },
    { label: "11,600 - 34,999", value: "11,600 - 34,999" },
    { label: "35,000 - 84,999", value: "35,000 - 84,999" },
    { label: "+85,000", value: "+85,000" },
  ];
  */
  const [selectedAIXMes, setSelectedAIXMes] = useState("0 - 200");

  /*
  const alimentosIndividualXMes = [
    { label: "0 - 200", value: "0 - 200" },
    { label: "200 - 499", value: "200 - 499" },
    { label: "500 - 799", value: "500 - 799" },
    { label: "800 - 999", value: "800 - 999" },
    { label: "1,000 - 1,499", value: "1,000 - 1,499" },
    { label: "1,500 - 1,999", value: "1,500 - 1,999" },
    { label: "2,000 - 2,499", value: "2,000 - 2,499" },
    { label: "2,500 - 2,999", value: "2,500 - 2,999" },
    { label: "3,000 - 3,499", value: "3,000 - 3,499" },
    { label: "3,500 - 3,999", value: "3,500 - 3,999" },
    { label: "+4,000", value: "+4,000" },
  ];
  */

  const [selectedAHXMes, setSelectedAHXMes] = useState("0 - 499");
  /*
  const alimentosHogarXMes = [
    { label: "0 - 499", value: "0 - 499" },
    { label: "500 - 999", value: "500 - 999" },
    { label: "1,000 - 2,999", value: "1,000 - 2,999" },
    { label: "3,000 - 5,999", value: "3,000 - 5,499" },
    { label: "6,000 - 8,999", value: "6,000 - 8,999" },
    { label: "9,000 - 12,999", value: "9,000 - 12,999" },
    { label: "13,000 - 15,999", value: "13,000 - 15,999" },
    { label: "16,000 - 19,999", value: "16,000 - 19,999" },
    { label: "+20,000", value: "+20,000" },


  ];

  <Picker
        containerStyle={styles.inputForm}
        placeholder={{
          label: "Dinero de Alimentos del hogar al Mes: ",
          value: null,
        }}
        onValueChange={(value) => console.log(value)}
        items={alimentosHogarXMes}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
      />
  */
  return (
    <View style={styles.formContainer}>
      <Text>Nivel de estudios:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedEstudio}
        onValueChange={(itemValue, itemIndex) => setSelectedEstudio(itemValue)}
      >
        <Picker.Item label="No estudió" value="No estudió" />
        <Picker.Item label="Primaria Inconclusa" value="Primaria Inconclusa" />
        <Picker.Item label="Primaria terminada" value="Primaria terminada" />
        <Picker.Item
          label="Secundaria inconclusa"
          value="Secundaria inconclusa"
        />
        <Picker.Item
          label="Secundaria terminada"
          value="Secundaria terminada"
        />
        <Picker.Item
          label="Preparatoria Inconclusa"
          value="Preparatoria Inconclusa"
        />
        <Picker.Item
          label="Preparatoria terminada"
          value="Preparatoria terminada"
        />
        <Picker.Item
          label="Carrera técnica Inconclusa"
          value="Carrera técnica Inconclusa"
        />
        <Picker.Item
          label="Carrera técnica terminada"
          value="Carrera técnica terminada"
        />
        <Picker.Item
          label="Estudiante de licenciatura"
          value="Estudiante de licenciatura"
        />
        <Picker.Item
          label="Licenciatura inconclusa "
          value="Licenciatura inconclusa"
        />
        <Picker.Item
          label="Licenciatura terminada "
          value="Licenciatura terminada"
        />
        <Picker.Item label="Maestría" value="Maestría" />
        <Picker.Item label="Doctorado" value="Doctorado" />
        <Picker.Item label="Especialidad" value="Especialidad" />
      </Picker>
      <Text>Puesto de trabajo:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedOc}
        onValueChange={(itemValue, itemIndex) => setSelectedOc(itemValue)}
      >
        <Picker.Item
          label="Funcionario, director o jefe"
          value="Funcionario, director o jefe"
        />
        <Picker.Item
          label="Profesionista o técnico"
          value="Profesionista o técnico"
        />
        <Picker.Item
          label="Trabajador auxiliar en actividades administrativas"
          value="Trabajador auxiliar en actividades administrativas"
        />
        <Picker.Item
          label="Comerciante, empleado en ventas o agente de ventas"
          value="Comerciante, empleado en ventas o agente de ventas"
        />
        <Picker.Item
          label="Trabajadores en servicios personales y de vigilancia"
          value="Trabajadores en servicios personales y de vigilancia"
        />
        <Picker.Item
          label="Trabajador en actividades agrícolas, ganaderas, forestales, caza o pesca"
          value="Trabajador en actividades agrícolas, ganaderas, forestales, caza o pesca"
        />
        <Picker.Item
          label="Trabajador artesanal"
          value="Trabajador artesanal"
        />
        <Picker.Item
          label="Operador de maquinaria industrial, ensambladores, chofer o conductor de transporte"
          value="Operador de maquinaria industrial, ensambladores, chofer o conductor de transporte"
        />
        <Picker.Item
          label="Trabajadores en actividades elementales y de apoyo"
          value="Trabajadores en actividades elementales y de apoyo"
        />
        <Picker.Item label="Ama de casa" value="Ama de casa" />
        <Picker.Item label="Estudiante" value="Estudiante" />
        <Picker.Item label="Desempleado" value="Desempleado" />
        <Picker.Item label="Jubilado" value="Jubilado" />
        <Picker.Item label="Otro (especificar):" value="otro" />
      </Picker>
      <Text>Dias de trabajo a la Semana:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedDxS}
        onValueChange={(itemValue, itemIndex) => setSelectedDxS(itemValue)}
      >
        <Picker.Item label="1 vez" value="1" />
        <Picker.Item label="2 veces" value="2" />
        <Picker.Item label="3 veces" value="3" />
        <Picker.Item label="4 veces" value="4" />
        <Picker.Item label="5 veces" value="5" />
        <Picker.Item label="6 veces" value="6" />
        <Picker.Item label="7 veces" value="7" />
      </Picker>
      <Text>Modalidad de trabajo:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedMod}
        onValueChange={(itemValue, itemIndex) => setSelectedMod(itemValue)}
      >
        <Picker.Item label="Presencial" value="Presencial" />
        <Picker.Item label="En línea" value="En línea" />
        <Picker.Item label="Mixta" value="Mixta" />
        <Picker.Item
          label="En línea hasta nuevo aviso"
          value="En línea hasta nuevo aviso"
        />
      </Picker>
      <Text>Horario de entrada:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedEntrada}
        onValueChange={(itemValue, itemIndex) => setSelectedEntrada(itemValue)}
      >
        <Picker.Item label="0:00" value="0:00" />
        <Picker.Item label="1:00" value="1:00" />
        <Picker.Item label="2:00" value="2:00" />
        <Picker.Item label="3:00" value="3:00" />
        <Picker.Item label="4:00" value="4:00" />
        <Picker.Item label="5:00" value="5:00" />
        <Picker.Item label="6:00" value="6:00" />
        <Picker.Item label="7:00" value="7:00" />
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="13:00" value="13:00" />
        <Picker.Item label="14:00" value="14:00" />
        <Picker.Item label="15:00" value="15:00" />
        <Picker.Item label="16:00" value="16:00" />
        <Picker.Item label="17:00" value="17:00" />
        <Picker.Item label="18:00" value="18:00" />
        <Picker.Item label="19:00" value="19:00" />
        <Picker.Item label="20:00" value="20:00" />
        <Picker.Item label="21:00" value="21:00" />
        <Picker.Item label="22:00" value="22:00" />
        <Picker.Item label="23:00" value="23:00" />
      </Picker>
      <Text>Horario de salida:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedSalida}
        onValueChange={(itemValue, itemIndex) => setSelectedSalida(itemValue)}
      >
        <Picker.Item label="0:00" value="0:00" />
        <Picker.Item label="1:00" value="1:00" />
        <Picker.Item label="2:00" value="2:00" />
        <Picker.Item label="3:00" value="3:00" />
        <Picker.Item label="4:00" value="4:00" />
        <Picker.Item label="5:00" value="5:00" />
        <Picker.Item label="6:00" value="6:00" />
        <Picker.Item label="7:00" value="7:00" />
        <Picker.Item label="8:00" value="8:00" />
        <Picker.Item label="9:00" value="9:00" />
        <Picker.Item label="10:00" value="10:00" />
        <Picker.Item label="11:00" value="11:00" />
        <Picker.Item label="12:00" value="12:00" />
        <Picker.Item label="13:00" value="13:00" />
        <Picker.Item label="14:00" value="14:00" />
        <Picker.Item label="15:00" value="15:00" />
        <Picker.Item label="16:00" value="16:00" />
        <Picker.Item label="17:00" value="17:00" />
        <Picker.Item label="18:00" value="18:00" />
        <Picker.Item label="19:00" value="19:00" />
        <Picker.Item label="20:00" value="20:00" />
        <Picker.Item label="21:00" value="21:00" />
        <Picker.Item label="22:00" value="22:00" />
        <Picker.Item label="23:00" value="23:00" />
      </Picker>
      <Text>ingreso Mensual:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedIM}
        onValueChange={(itemValue, itemIndex) => setSelectedIM(itemValue)}
      >
        <Picker.Item label="0 - 2,699" value="0 - 2,699" />
        <Picker.Item label="2,700 - 6,799" value="2,700 - 6,799" />
        <Picker.Item label="6,800 - 11,599" value="6,800 - 11,599" />
        <Picker.Item label="11,600 - 34,999" value="11,600 - 34,999" />
        <Picker.Item label="35,000 - 84,999" value="35,000 - 84,999" />
        <Picker.Item label="+85,000" value="+85,000" />
      </Picker>
      <Text>Dinero para su alimentación individual por mes:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedAIXMes}
        onValueChange={(itemValue, itemIndex) => setSelectedAIXMes(itemValue)}
      >
        <Picker.Item label="0 - 200" value="0 - 200" />
        <Picker.Item label="200 - 499" value="200 - 499" />
        <Picker.Item label="500 - 799" value="500 - 799" />
        <Picker.Item label="800 - 999" value="800 - 999" />
        <Picker.Item label="1,000 - 1,499" value="1,000 - 1,499" />
        <Picker.Item label="1,500 - 1,999" value="1,500 - 1,999" />
        <Picker.Item label="2,000 - 2,499" value="2,000 - 2,499" />
        <Picker.Item label="2,500 - 2,999" value="2,500 - 2,999" />
        <Picker.Item label="3,000 - 3,499" value="3,000 - 3,499" />
        <Picker.Item label="3,500 - 3,999" value="3,500 - 3,999" />
        <Picker.Item label="+4,000" value="+4,000" />
      </Picker>
      <Text>Dinero para la alimentación del hogar por mes:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedAHXMes}
        onValueChange={(itemValue, itemIndex) => setSelectedAHXMes(itemValue)}
      >
        <Picker.Item label="0 - 499" value="0 - 499" />
        <Picker.Item label="500 - 999" value="500 - 999" />
        <Picker.Item label="1,000 - 2,999" value="1,000 - 2,999" />
        <Picker.Item label="3,000 - 5,999" value="3,000 - 5,499" />
        <Picker.Item label="6,000 - 8,999" value="6,000 - 8,999" />
        <Picker.Item label="9,000 - 12,999" value="9,000 - 12,999" />
        <Picker.Item label="13,000 - 15,999" value="13,000 - 15,999" />
        <Picker.Item label="16,000 - 19,999" value="16,000 - 19,999" />
        <Picker.Item label="+20,000" value="+20,000" />
      </Picker>
    </View>
  );
}
const styles = StyleSheet.create({
  pic: {
    flex: 1,
    alignContent: "center",
  },
  datePickerStyle: {
    width: 320,
    marginTop: 10,
    marginBottom: 20,
  },
  titte: {
    marginTop: 20,
  },
  formContainer: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  inputForm: {
    width: "100%",
    marginTop: 20,
  },
  btnContainerRegister: {
    marginTop: 20,
    width: "95%",
    alignContent: "center",
  },
  btnRegister: {
    backgroundColor: "#00a680",
    alignContent: "center",
  },
  iconRight: {
    color: "#c1c1c1",
  },
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});
