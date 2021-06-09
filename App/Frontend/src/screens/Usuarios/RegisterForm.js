import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  PixelRatio,
  Switch,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import { CheckBox } from "native-base";
import { Input, Icon, Button } from "react-native-elements";
import { size, isEmpty } from "lodash";
//import * as firebase from "firebase";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
//import RNPickerSelect from "react-native-picker-select";
import Constants from "expo-constants";

import Registro from "./UserForm/Registro";
//SocialStack
import Generales from "./UserForm/Generales";
import SobreTi from "./UserForm/SobreTi";
//complementoHist
import HistorialCli from "./UserForm/HistorialCli";
//import Pantalla from "./UserForm/Pantalla";
import SocioEconomico from "./UserForm/SocioEconomico";
import Alimentacion from "./UserForm/Alimentacion";

export default function RegisterForm(props) {
  //console.log(props);
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setshowRepeat] = useState(false);

  //const [formData, setformData] = useState(defaultFormValue());

  const buttonTextStyle = { color: "#FFFFFF" };
  const nButtonStyle = {
    marginTop: 40,
    width: "200%",
    backgroundColor: "#00a680",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  };
  const pButtonStyle = {
    marginTop: 40,
    marginLeft: -60,
    width: "400%",
    backgroundColor: "#00a680",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  };
  /*
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState(false);
  
  
  onNextStep = () => {
    console.log(formData);

    //console.log(validateEmail(formData.email)) //devuelve true si el correo esta bien
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      //console.log("todos los campos son olbigatorios")
      toastRef.current.show("Todos los campos son obligatorios");
      setErrors(true);
    } else if (!validateEmail(formData.email)) {
      //console.log("El email no es correcto");
      toastRef.current.show("El email no es correcto");
      setErrors(true);
    } else if (formData.password !== formData.repeatPassword) {
      //console.log("Las contraseñas deben de ser iguales")
      toastRef.current.show("Las contraseñas deben de ser iguales");
      setErrors(true);
    } else if (size(formData.password) < 6) {
      //console.log("La contraseña debe tener al menos 6 caracteres")
      toastRef.current.show("La contraseña debe tener al menos 6 caracteres");
      setErrors(true);
    } else {

      --firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          toastRef.current.show("El email ya esta en uso, pruebe con otro");
          //console.log(err);
        });--
      setErrors(false);
    }
    
  };

nextBtnStyle={nButtonStyle}
          nextBtnTextStyle={buttonTextStyle}
          onNext={onNextStep}
          errors={errors}
          
  nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
          onNext={onNextStep}

           nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          nextBtnTextStyle={buttonTextStyle}
          previousBtnTextStyle={buttonTextStyle}
  */
  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ProgressSteps>
        <ProgressStep
          label="Registro"
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
        >
          <View>
            <Registro />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Generales"
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View>
            <Generales />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Sobre ti.."
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View>
            <SobreTi />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Historia Clinica"
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View>
            <HistorialCli />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Nivel Socioeconómico"
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View>
            <SocioEconomico />
          </View>
        </ProgressStep>
        <ProgressStep
          label="Alimentación"
          nextBtnTextStyle={buttonTextStyle}
          nextBtnStyle={nButtonStyle}
          previousBtnStyle={pButtonStyle}
          previousBtnTextStyle={buttonTextStyle}
        >
          <View>
            <Alimentacion />
          </View>
        </ProgressStep>
      </ProgressSteps>
    </View>
  );
  /*
  function defaultFormValue() {
    return {
      email: "",
      password: "",
      repeatPassword: "",
    };
  }
  */
}
