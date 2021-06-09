import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { CheckBox } from "native-base";

export default function AntecedentesP(props) {
  const [a1, setA1] = useState(false);
  const [a2, setA2] = useState(false);
  const [a3, setA3] = useState(false);
  const [a4, setA4] = useState(false);
  const [a5, setA5] = useState(false);
  const [a6, setA6] = useState(false);
  const [a7, setA7] = useState(false);
  const [a8, setA8] = useState(false);
  const [a9, setA9] = useState(false);
  const [a10, setA10] = useState(false);
  const [a11, setA11] = useState(false);
  const [a12, setA12] = useState(false);
  const [a13, setA13] = useState(false);
  const [a14, setA14] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Enfermedades:</Text>
      <View style={styles.item}>
        <CheckBox checked={a1} color="#4EE801" onPress={() => setA1(!a1)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a1 ? "#4EE801" : "gray",
            fontWeight: a1 ? "bold" : "normal",
          }}
        >
          Diabetes tipo 2
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a2} color="#4EE801" onPress={() => setA2(!a2)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a2 ? "#4EE801" : "gray",
            fontWeight: a2 ? "bold" : "normal",
          }}
        >
          Hipertensión arterial
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a3} color="#4EE801" onPress={() => setA3(!a3)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a3 ? "#4EE801" : "gray",
            fontWeight: a3 ? "bold" : "normal",
          }}
        >
          Triglicéridos elevados
        </Text>
      </View>

      <View style={styles.item}>
        <CheckBox checked={a4} color="#4EE801" onPress={() => setA4(!a4)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a4 ? "#4EE801" : "gray",
            fontWeight: a4 ? "bold" : "normal",
          }}
        >
          Colesterol elevado
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a5} color="#4EE801" onPress={() => setA5(!a5)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a5 ? "#4EE801" : "gray",
            fontWeight: a5 ? "bold" : "normal",
          }}
        >
          Colitis nerviosa
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a6} color="#4EE801" onPress={() => setA6(!a6)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a6 ? "#4EE801" : "gray",
            fontWeight: a6 ? "bold" : "normal",
          }}
        >
          Gastritis
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a7} color="#4EE801" onPress={() => setA7(!a7)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a7 ? "#4EE801" : "gray",
            fontWeight: a7 ? "bold" : "normal",
          }}
        >
          Cáncer
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a8} color="#4EE801" onPress={() => setA8(!a8)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a8 ? "#4EE801" : "gray",
            fontWeight: a8 ? "bold" : "normal",
          }}
        >
          Hipotiroidismo
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a9} color="#4EE801" onPress={() => setA9(!a9)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a9 ? "#4EE801" : "gray",
            fontWeight: a9 ? "bold" : "normal",
          }}
        >
          Hipertiroidismo
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a10} color="#4EE801" onPress={() => setA10(!a10)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a10 ? "#4EE801" : "gray",
            fontWeight: a10 ? "bold" : "normal",
          }}
        >
          Artritis reumatoide
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a11} color="#4EE801" onPress={() => setA11(!a11)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a11 ? "#4EE801" : "gray",
            fontWeight: a11 ? "bold" : "normal",
          }}
        >
          Insuficiencia Renal Crónica
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a12} color="#4EE801" onPress={() => setA12(!a12)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a12 ? "#4EE801" : "gray",
            fontWeight: a12 ? "bold" : "normal",
          }}
        >
          Cardiopatía
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={a13} color="#4EE801" onPress={() => setA13(!a13)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a13 ? "#4EE801" : "gray",
            fontWeight: a13 ? "bold" : "normal",
          }}
        >
          Depresión
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={a14}
          color="#4EE801"
          onPress={() => setShouldShow(!shouldShow) & setA14(!a14)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a14 ? "#4EE801" : "gray",
            fontWeight: a14 ? "bold" : "normal",
          }}
        >
          Otra(s)
        </Text>
      </View>

      {shouldShow ? (
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
      {/*
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>SUBMIT</Text>
      </TouchableOpacity>*/}
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
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#364f6b",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 16,
    color: "#364f6b",
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
    width: "80%",
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
