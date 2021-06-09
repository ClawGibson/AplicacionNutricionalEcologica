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
import { Input, Icon, Button } from "react-native-elements";
import { validateEmail } from "../utils/Validations";
import { size, isEmpty } from "lodash";
//import * as firebase from "firebase";

export default function Registro(props) {
  const { toastRef } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeat, setshowRepeat] = useState(false);
  const [formData, setformData] = useState(defaultFormValue());
  const onSubmit = () => {
    console.log(formData);

    //console.log(validateEmail(formData.email)) //devuelve true si el correo esta bien
    if (
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.repeatPassword)
    ) {
      //console.log("todos los campos son olbigatorios")
      toastRef.current.show("Todos los campos son obligatorios");
    } else if (!validateEmail(formData.email)) {
      //console.log("El email no es correcto");
      toastRef.current.show("El email no es correcto");
    } else if (formData.password !== formData.repeatPassword) {
      //console.log("Las contraseñas deben de ser iguales")
      toastRef.current.show("Las contraseñas deben de ser iguales");
    } else if (size(formData.password) < 6) {
      //console.log("La contraseña debe tener al menos 6 caracteres")
      toastRef.current.show("La contraseña debe tener al menos 6 caracteres");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          toastRef.current.show("El email ya esta en uso, pruebe con otro");
          //console.log(err);
        });
    }
  };

  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };

  return (
    <View style={styles.formContainer}>
      <Text>Correo electronico:</Text>
      <Input
        placeholder="Ingrese Correo Electronico"
        containerStyle={styles.pic}
        onChange={(e) => onChange(e, "email")}
        rightIcon={
          <Icon
            type="material-community"
            name="at"
            iconStyle={styles.iconRight}
          />
        }
      />
      <Text>Contraseña:</Text>
      <Input
        placeholder="Contraseña"
        containerStyle={styles.pic}
        password={true}
        secureTextEntry={showPassword ? false : true}
        onChange={(e) => onChange(e, "password")}
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setShowPassword(!showPassword)}
          />
        }
      />
      <Text>Repertir contraseña:</Text>
      <Input
        placeholder="Repetir Contraseña"
        containerStyle={styles.pic}
        password={true}
        secureTextEntry={showRepeat ? false : true}
        onChange={(e) => onChange(e, "repeatPassword")}
        rightIcon={
          <Icon
            type="material-community"
            name={showRepeat ? "eye-off-outline" : "eye-outline"}
            iconStyle={styles.iconRight}
            onPress={() => setshowRepeat(!showRepeat)}
          />
        }
      />

      <Button
        title="Unirse"
        containerStyle={styles.btnContainerRegister}
        buttonStyle={styles.btnRegister}
        onPress={onSubmit}
      />
    </View>
  );
}

function defaultFormValue() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}
const styles = StyleSheet.create({
  pic: {
    flex: 1,
    alignContent: "center",
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
