import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { CheckBox } from "native-base";
import AntecedentesP from "./AntecedentesP";

export default function AntecedentesH(props) {
  const [ah1, setAh1] = useState(false);
  const [ah2, setAh2] = useState(false);
  const [ah3, setAh3] = useState(false);
  const [ah4, setAh4] = useState(false);
  const [ah5, setAh5] = useState(false);
  const [ah6, setAh6] = useState(false);
  const [ah7, setAh7] = useState(false);
  const [ah8, setAh8] = useState(false);
  const [ah9, setAh9] = useState(false);
  const [ah10, setAh10] = useState(false);
  const [ah11, setAh11] = useState(false);
  const [ah12, setAh12] = useState(false);
  const [ah13, setAh13] = useState(false);
  const [ah14, setAh14] = useState(false);
  const [shouldShowE, setShouldShowE] = useState(false);
  const [shouldShowE1, setShouldShowE1] = useState(false);
  const [shouldShowE2, setShouldShowE2] = useState(false);
  const [shouldShowE3, setShouldShowE3] = useState(false);
  const [shouldShowE4, setShouldShowE4] = useState(false);
  const [shouldShowE5, setShouldShowE5] = useState(false);
  const [shouldShowE6, setShouldShowE6] = useState(false);
  const [shouldShowE7, setShouldShowE7] = useState(false);
  const [shouldShowE8, setShouldShowE8] = useState(false);
  const [shouldShowE9, setShouldShowE9] = useState(false);
  const [shouldShowE10, setShouldShowE10] = useState(false);
  const [shouldShowE11, setShouldShowE11] = useState(false);
  const [shouldShowE12, setShouldShowE12] = useState(false);
  const [shouldShowE13, setShouldShowE13] = useState(false);
  const [shouldShowE14, setShouldShowE14] = useState(false);
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Familiares:</Text>
      <View style={styles.item}>
        <CheckBox
          checked={ah1}
          color="#4EE801"
          onPress={() => setShouldShowE(!shouldShowE) & setAh1(!ah1)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah1 ? "#4EE801" : "gray",
            fontWeight: ah1 ? "bold" : "normal",
          }}
        >
          Padre
        </Text>
      </View>
      {shouldShowE ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah2}
          color="#4EE801"
          onPress={() => setShouldShowE1(!shouldShowE1) & setAh2(!ah2)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah2 ? "#4EE801" : "gray",
            fontWeight: ah2 ? "bold" : "normal",
          }}
        >
          Madre
        </Text>
      </View>
      {shouldShowE1 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah3}
          color="#4EE801"
          onPress={() => setShouldShowE2(!shouldShowE2) & setAh3(!ah3)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah3 ? "#4EE801" : "gray",
            fontWeight: ah3 ? "bold" : "normal",
          }}
        >
          Hermano
        </Text>
      </View>
      {shouldShowE2 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah4}
          color="#4EE801"
          onPress={() => setShouldShowE3(!shouldShowE3) & setAh4(!ah4)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah4 ? "#4EE801" : "gray",
            fontWeight: ah4 ? "bold" : "normal",
          }}
        >
          Hermana
        </Text>
      </View>
      {shouldShowE3 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah5}
          color="#4EE801"
          onPress={() => setShouldShowE4(!shouldShowE4) & setAh5(!ah5)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah5 ? "#4EE801" : "gray",
            fontWeight: ah5 ? "bold" : "normal",
          }}
        >
          Abuelo Paterno
        </Text>
      </View>
      {shouldShowE4 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah6}
          color="#4EE801"
          onPress={() => setShouldShowE5(!shouldShowE5) & setAh6(!ah6)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah6 ? "#4EE801" : "gray",
            fontWeight: ah6 ? "bold" : "normal",
          }}
        >
          Abuela Paterna
        </Text>
      </View>
      {shouldShowE5 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah7}
          color="#4EE801"
          onPress={() => setShouldShowE6(!shouldShowE6) & setAh7(!ah7)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah7 ? "#4EE801" : "gray",
            fontWeight: ah7 ? "bold" : "normal",
          }}
        >
          Abuelo Materno
        </Text>
      </View>
      {shouldShowE6 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah8}
          color="#4EE801"
          onPress={() => setShouldShowE7(!shouldShowE7) & setAh8(!ah8)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah8 ? "#4EE801" : "gray",
            fontWeight: ah8 ? "bold" : "normal",
          }}
        >
          Abuela Materna
        </Text>
      </View>
      {shouldShowE7 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah9}
          color="#4EE801"
          onPress={() => setShouldShowE8(!shouldShowE8) & setAh9(!ah9)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah9 ? "#4EE801" : "gray",
            fontWeight: ah9 ? "bold" : "normal",
          }}
        >
          Tio Paterno
        </Text>
      </View>
      {shouldShowE8 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah10}
          color="#4EE801"
          onPress={() => setShouldShowE9(!shouldShowE9) & setAh10(!ah10)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah10 ? "#4EE801" : "gray",
            fontWeight: ah10 ? "bold" : "normal",
          }}
        >
          Tia Paterna
        </Text>
      </View>
      {shouldShowE9 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah11}
          color="#4EE801"
          onPress={() => setShouldShowE10(!shouldShowE10) & setAh11(!ah11)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah11 ? "#4EE801" : "gray",
            fontWeight: ah11 ? "bold" : "normal",
          }}
        >
          Tio Materno
        </Text>
      </View>
      {shouldShowE10 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah12}
          color="#4EE801"
          onPress={() => setShouldShowE11(!shouldShowE11) & setAh12(!ah12)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah12 ? "#4EE801" : "gray",
            fontWeight: ah12 ? "bold" : "normal",
          }}
        >
          Tia Materna
        </Text>
      </View>
      {shouldShowE11 ? <AntecedentesP /> : null}
      <View style={styles.item}>
        <CheckBox
          checked={ah13}
          color="#4EE801"
          onPress={() => setShouldShowE12(!shouldShowE12) & setAh13(!ah13)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: ah13 ? "#4EE801" : "gray",
            fontWeight: ah13 ? "bold" : "normal",
          }}
        >
          Otro
        </Text>
      </View>
      {shouldShowE12 ? (
        <Input
          placeholder="Ingrese el nombre"
          containerStyle={styles.inputForm}
          keyboardType="numeric"
          type="number"
          onChange={(e) => onChange(e, "edad")}
          rightIcon={
            <Icon
              type="material-community"
              name="weight-kilogram"
              iconStyle={styles.iconRight}
            />
          }
        />
      ) : null}
    </View>
  );
}
const styles = StyleSheet.create({
  inputContainerStyle: {
    marginTop: 16,
    width: "100%",
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
  iconRight: {
    color: "#c1c1c1",
  },
  /*container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },*/
  header: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#364f6b",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    color: "#364f6b",
    alignItems: "center",
  },
  item: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  checkBoxTxt: {
    marginLeft: 20,
  },
  submit: {
    width: "100%",
    backgroundColor: "#4EE801",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginTop: 40,
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
