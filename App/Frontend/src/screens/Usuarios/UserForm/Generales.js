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
//import RNPickerSelect from "react-native-picker-select";
import Constants from "expo-constants";
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from "react-native-country-picker-modal";
import RNDatePicker from "react-native-datepicker";
import App from "./ComplementoDate/DateN";

export default function Generales(props) {
  const [date, setDate] = useState("24-03-2021");
  const [selectedLanguage, setSelectedLanguage] = useState();
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };
  /*
  const genero = [
    { label: "Mujer", value: "mujer" },
    { label: "Hombre", value: "hombre" },
  ];*/
  const [selectedG, setSelectedG] = useState("Hombre");
  /*
  const estados = [
    { label: "Aguascalientes", value: "aguascalientes" },
    { label: "Baja California", value: "baja California" },
    { label: "Baja California Sur", value: "baja California Sur" },
    { label: "Campeche", value: "campeche" },
    { label: "Chiapas", value: "chiapas" },
    { label: "Chihuahua", value: "chihuahua" },
    { label: "Ciudad de México ", value: "ciudad de México " },
    { label: "Coahuila", value: "coahuila" },
    { label: "Colima", value: "colima" },
    { label: "Durango ", value: "durango " },
    { label: "Estado de México", value: "estado de México" },
    { label: "Guanajuato", value: "guanajuato" },
    { label: "Guerrero", value: "guerrero" },
    { label: "Hidalgo", value: "hidalgo" },
    { label: "Jalisco", value: "jalisco" },
    { label: "Michoacán", value: "michoacán" },
    { label: "Morelos", value: "morelos" },
    { label: "Nayarit", value: "nayarit" },
    { label: "Nuevo León ", value: "nuevo León " },
    { label: "Oaxaca", value: "oaxaca" },
    { label: "Puebla", value: "puebla" },
    { label: "Querétaro", value: "querétaro" },
    { label: "Quintana Roo ", value: "quintana Roo " },
    { label: "San Luis Potosí ", value: "san Luis Potosí " },
    { label: "Sinaloa ", value: "sinaloa " },
    { label: "Sonora", value: "sonora" },
    { label: "Tabasco", value: "tabasco" },
    { label: "Tamaulipas", value: "tamaulipas" },
    { label: "Tlaxcala", value: "tlaxcala" },
    { label: "Veracruz", value: "veracruz" },
    { label: "Zacatecas", value: "zacatecas," },
  ];
*/
  const [selectedE, setSelectedE] = useState("Jalisco");
  /*
  const tiempoCasa = [
    { label: "Menos de 1 mes", value: "menosDe1" },
    { label: "1 a 6 meses", value: "menosDe6" },
    { label: "1 a 3 años", value: "menosDe3A" },
    { label: "3 a 6 años", value: "menosDe6A" },
    { label: "6 a 9 años", value: "menosDe9A" },
    { label: "Toda la vida", value: "toda" },
  ];
*/
  const [selectedT, setSelectedT] = useState("Menos de 1 mes");
  return (
    <View style={styles.formContainer}>
      <Text>Apellido Paterno: </Text>
      <Input
        placeholder="Ingrese Apellido paterno"
        containerStyle={styles.pic}
        onChange={(e) => onChange(e, "apellidoPaterno")}
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Apellido Materno: </Text>
      <Input
        placeholder="Ingrese Apellido Materno"
        containerStyle={styles.pic}
        onChange={(e) => onChange(e, "apellidoMaterno")}
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Nombre(s): </Text>
      <Input
        placeholder="Ingrese su(s) Nombre(s)"
        containerStyle={styles.pic}
        onChange={(e) => onChange(e, "nombre")}
        rightIcon={
          <Icon
            type="material-community"
            name="account"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Edad: </Text>
      <Input
        placeholder="Ingrese su Edad"
        containerStyle={styles.pic}
        keyboardType="numeric"
        type="number"
        onChange={(e) => onChange(e, "edad")}
        rightIcon={
          <Icon
            type="material-community"
            name="numeric"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Celular: </Text>
      <Input
        placeholder="Ingrese su Celular"
        containerStyle={styles.pic}
        keyboardType="numeric"
        type="number"
        onChange={(e) => onChange(e, "celular")}
        rightIcon={
          <Icon
            type="material-community"
            name="phone"
            iconStyle={styles.iconRight}
          />
        }
      />
      <SafeAreaView style={styles.calendar}>
        <View style={styles.container}>
          <Text>Fecha de nacimiento:</Text>
          <RNDatePicker
            style={styles.datePickerStyle}
            date={date} // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-1950"
            maxDate="24-03-2021"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: "absolute",
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}
          />
        </View>
      </SafeAreaView>
      <Text>sexo: </Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedG}
        onValueChange={(itemValue, itemIndex) => setSelectedG(itemValue)}
        rightIcon={
          <Icon
            type="material-community"
            name="gender-male-female"
            iconStyle={styles.iconRight}
          />
        }
      >
        <Picker.Item label="Mujer" value="mujer" />
        <Picker.Item label="Hombre" value="hombre" />
      </Picker>
      <Text>Pais:</Text>
      <CountryPicker
        containerButtonStyle={styles.picPais}
        withEmoji={true}
        withCountryNameButton={true}
        withFilter={true}
        withCallingCode={true}
      />
      <Text>Estado:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedE}
        onValueChange={(itemValue, itemIndex) => setSelectedE(itemValue)}
      >
        <Picker.Item label="Aguascalientes" value="aguascalientes" />
        <Picker.Item label="Baja California" value="baja California" />
        <Picker.Item label="Baja California Sur" value="baja California Sur" />
        <Picker.Item label="Campeche" value="campeche" />
        <Picker.Item label="Chiapas" value="chiapas" />
        <Picker.Item label="Chihuahua" value="chihuahua" />
        <Picker.Item label="Ciudad de México " value="ciudad de México " />
        <Picker.Item label="Coahuila" value="coahuila" />
        <Picker.Item label="Colima" value="colima" />
        <Picker.Item label="Durango " value="durango " />
        <Picker.Item label="Estado de México" value="estado de México" />
        <Picker.Item label="Guanajuato" value="guanajuato" />
        <Picker.Item label="Guerrero" value="guerrero" />
        <Picker.Item label="Hidalgo" value="hidalgo" />
        <Picker.Item label="Jalisco" value="jalisco" />
        <Picker.Item label="Michoacán" value="michoacán" />
        <Picker.Item label="Morelos" value="morelos" />
        <Picker.Item label="Nayarit" value="nayarit" />
        <Picker.Item label="Nuevo León " value="nuevo León " />
        <Picker.Item label="Oaxaca" value="oaxaca" />
        <Picker.Item label="Puebla" value="puebla" />
        <Picker.Item label="Querétaro" value="querétaro" />
        <Picker.Item label="Quintana Roo " value="quintana Roo " />
        <Picker.Item label="San Luis Potosí " value="san Luis Potosí " />
        <Picker.Item label="Sinaloa " value="sinaloa " />
        <Picker.Item label="Sonora" value="sonora" />
        <Picker.Item label="Tabasco" value="tabasco" />
        <Picker.Item label="Tamaulipas" value="tamaulipas" />
        <Picker.Item label="Tlaxcala" value="tlaxcala" />
        <Picker.Item label="Veracruz" value="veracruz" />
        <Picker.Item label="Zacatecas" value="zacatecas" />
      </Picker>
      <Text>Ciudad de residencia:</Text>
      <Input
        placeholder="Ingrese Ciudad de Residencia"
        containerStyle={styles.pic}
        onChange={(e) => onChange(e, "residencia")}
        rightIcon={
          <Icon
            type="material-community"
            name="map-marker-minus-outline"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Tiempo:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedT}
        onValueChange={(itemValue, itemIndex) => setSelectedT(itemValue)}
      >
        <Picker.Item label="Menos de 1 mes" value="menosDe1" />
        <Picker.Item label="1 a 6 meses" value="menosDe6" />
        <Picker.Item label="1 a 3 años" value="menosDe3A" />
        <Picker.Item label="3 a 6 años" value="menosDe6A" />
        <Picker.Item label="6 a 9 años" value="menosDe9A" />
        <Picker.Item label="Toda la vida" value="toda" />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pic: {
    flex: 1,
    alignContent: "center",
  },
  picPais: {
    flex: 1,
    alignContent: "center",
    marginBottom: 15,
    marginTop: 10,
  },
  calendar: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
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
