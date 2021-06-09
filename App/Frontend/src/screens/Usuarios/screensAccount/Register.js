import React, { useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-easy-toast";
//import RegisterForm from "../RegisterForm";
import Registro from "../UserForm/Registro";

export default function Register() {
  const toastRef = useRef();

  return (
    <KeyboardAwareScrollView>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        resizeMode="contain"
        style={styles.logo}
      />
      <View style={styles.viewform}>
        <Registro toastRef={toastRef} />
      </View>
      <Toast
        ref={toastRef}
        position="center"
        opacity={0.9}
        useNativeDriver={true}
      />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 150,
    marginTop: 20,
  },
  viewform: {
    marginRight: 40,
    marginLeft: 40,
  },
});
