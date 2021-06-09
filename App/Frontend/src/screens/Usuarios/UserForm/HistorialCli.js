import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { CheckBox } from "native-base";
import AntecedentesP from "./ComplementoHist/AntecedentesP";
import AntecedentesH from "./ComplementoHist/AntecedentesH";
import Medicamentos from "./ComplementoHist/Medicamentos";

export default function HistorialCli(props) {
  //Mostrar demas campos
  const [shouldShow, setShouldShow] = useState(false);
  const [shouldShow2, setShouldShow2] = useState(false);
  const [shouldShow3, setShouldShow3] = useState(false);
  //casiilas SI
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  //Casillas NO
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  const [check6, setCheck6] = useState(false);
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View>
      <Text style={styles.header}>Antecedentes patológicos</Text>
      <Text style={styles.titulo}>¿Padece alguna enfermedad? </Text>
      <View style={styles.item}>
        <CheckBox
          checked={check1}
          color="#4EE801"
          onPress={() =>
            (check4 == true
              ? setCheck4(!check4) &
                setCheck1(!check1) &
                setShouldShow(!shouldShow)
              : "no") &
            (check4 == false
              ? setShouldShow(!shouldShow) & setCheck1(!check1)
              : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check1 ? "#4EE801" : "gray",
            fontWeight: check1 ? "bold" : "normal",
          }}
        >
          Si
        </Text>
        <CheckBox
          checked={check4}
          color="#4EE801"
          onPress={() =>
            (check1 == true
              ? setCheck4(!check4) &
                setCheck1(!check1) &
                setShouldShow(!shouldShow)
              : "no") & (check1 == false ? setCheck4(!check4) : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check4 ? "#4EE801" : "gray",
            fontWeight: check4 ? "bold" : "normal",
          }}
        >
          No
        </Text>
      </View>
      {shouldShow ? <AntecedentesP /> : null}
      <Text style={styles.header}>Antecedentes heredofamiliares </Text>
      <Text style={styles.titulo}>
        ¿Alguien en tu familia padece alguna enfermedad?{" "}
      </Text>
      <View style={styles.item}>
        <CheckBox
          checked={check2}
          color="#4EE801"
          onPress={() =>
            (check5 == true
              ? setCheck5(!check5) &
                setCheck2(!check2) &
                setShouldShow2(!shouldShow2)
              : "no") &
            (check5 == false
              ? setShouldShow2(!shouldShow2) & setCheck2(!check2)
              : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check2 ? "#4EE801" : "gray",
            fontWeight: check2 ? "bold" : "normal",
          }}
        >
          Si
        </Text>
        <CheckBox
          checked={check5}
          color="#4EE801"
          onPress={() =>
            (check2 == true
              ? setCheck5(!check5) &
                setCheck2(!check2) &
                setShouldShow2(!shouldShow2)
              : "no") & (check2 == false ? setCheck5(!check5) : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check4 ? "#4EE801" : "gray",
            fontWeight: check4 ? "bold" : "normal",
          }}
        >
          No
        </Text>
      </View>
      {shouldShow2 ? <AntecedentesH /> : null}
      <Text style={styles.header}>Uso de Medicamentos y/o suplementos</Text>
      <Text style={styles.titulo}>
        ¿Actualmente consumes algún medicamento y/o suplemento?
      </Text>
      <View style={styles.item}>
        <CheckBox
          checked={check3}
          color="#4EE801"
          onPress={() =>
            (check6 == true
              ? setCheck6(!check6) &
                setCheck3(!check3) &
                setShouldShow3(!shouldShow3)
              : "no") &
            (check6 == false
              ? setShouldShow3(!shouldShow3) & setCheck3(!check3)
              : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check3 ? "#4EE801" : "gray",
            fontWeight: check3 ? "bold" : "normal",
          }}
        >
          Si
        </Text>
        <CheckBox
          checked={check6}
          color="#4EE801"
          onPress={() =>
            (check3 == true
              ? setCheck6(!check6) &
                setCheck3(!check3) &
                setShouldShow3(!shouldShow3)
              : "no") & (check3 == false ? setCheck6(!check6) : "no")
          }
        />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: check4 ? "#4EE801" : "gray",
            fontWeight: check4 ? "bold" : "normal",
          }}
        >
          No
        </Text>
      </View>
      {shouldShow3 ? <Medicamentos /> : null}
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#364f6b",
    marginBottom: 15,
  },
  titulo: {
    fontSize: 16,
    color: "#364f6b",
  },
  item: {
    width: "100%",
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
