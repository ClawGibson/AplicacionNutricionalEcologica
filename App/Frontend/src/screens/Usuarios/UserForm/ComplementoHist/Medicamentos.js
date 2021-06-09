import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { CheckBox } from "native-base";

export default function Medicamentos(props) {
  const [m1, setM1] = useState(false);
  const [m2, setM2] = useState(false);
  const [m3, setM3] = useState(false);
  const [m4, setM4] = useState(false);
  const [m5, setM5] = useState(false);
  const [m6, setM6] = useState(false);
  const [m7, setM7] = useState(false);
  const [m8, setM8] = useState(false);
  const [m9, setM9] = useState(false);
  const [m10, setM10] = useState(false);
  const [m11, setM11] = useState(false);
  const [m12, setM12] = useState(false);
  const [m13, setM13] = useState(false);
  const [m14, setM14] = useState(false);
  const [m15, setM15] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Medicamentos: </Text>
      <View style={styles.item}>
        <CheckBox checked={m1} color="#4EE801" onPress={() => setM1(!m1)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m1 ? "#4EE801" : "gray",
            fontWeight: m1 ? "bold" : "normal",
          }}
        >
          Amoxicilina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m2} color="#4EE801" onPress={() => setM2(!m2)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m2 ? "#4EE801" : "gray",
            fontWeight: m2 ? "bold" : "normal",
          }}
        >
          Ampicilina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m3} color="#4EE801" onPress={() => setM3(!m3)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m3 ? "#4EE801" : "gray",
            fontWeight: m3 ? "bold" : "normal",
          }}
        >
          Bezafibrato
        </Text>
      </View>

      <View style={styles.item}>
        <CheckBox checked={m4} color="#4EE801" onPress={() => setM4(!m4)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m4 ? "#4EE801" : "gray",
            fontWeight: m4 ? "bold" : "normal",
          }}
        >
          Cefalexina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m5} color="#4EE801" onPress={() => setM5(!m5)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m5 ? "#4EE801" : "gray",
            fontWeight: m5 ? "bold" : "normal",
          }}
        >
          Ciprofloxacino
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m6} color="#4EE801" onPress={() => setM6(!m6)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m6 ? "#4EE801" : "gray",
            fontWeight: m6 ? "bold" : "normal",
          }}
        >
          Claritromicina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m7} color="#4EE801" onPress={() => setM7(!m7)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m7 ? "#4EE801" : "gray",
            fontWeight: m7 ? "bold" : "normal",
          }}
        >
          Fluoxetina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m8} color="#4EE801" onPress={() => setM8(!m8)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m8 ? "#4EE801" : "gray",
            fontWeight: m8 ? "bold" : "normal",
          }}
        >
          Insulina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m9} color="#4EE801" onPress={() => setM9(!m9)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m9 ? "#4EE801" : "gray",
            fontWeight: m9 ? "bold" : "normal",
          }}
        >
          Levotiroxina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m10} color="#4EE801" onPress={() => setM10(!m10)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m10 ? "#4EE801" : "gray",
            fontWeight: m10 ? "bold" : "normal",
          }}
        >
          Lozartan
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m11} color="#4EE801" onPress={() => setM11(!m11)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m11 ? "#4EE801" : "gray",
            fontWeight: m11 ? "bold" : "normal",
          }}
        >
          Metformina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m12} color="#4EE801" onPress={() => setM12(!m12)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m12 ? "#4EE801" : "gray",
            fontWeight: m12 ? "bold" : "normal",
          }}
        >
          Omeprazol
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m13} color="#4EE801" onPress={() => setM13(!m13)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m13 ? "#4EE801" : "gray",
            fontWeight: m13 ? "bold" : "normal",
          }}
        >
          Pravastatina
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox checked={m14} color="#4EE801" onPress={() => setM14(!m14)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m14 ? "#4EE801" : "gray",
            fontWeight: m14 ? "bold" : "normal",
          }}
        >
          Telmisartan
        </Text>
      </View>
      <View style={styles.item}>
        <CheckBox
          checked={m15}
          color="#4EE801"
          onPress={() => setShouldShow(!shouldShow) & setM15(!m15)}
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: m15 ? "#4EE801" : "gray",
            fontWeight: m15 ? "bold" : "normal",
          }}
        >
          Otro(s)
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
