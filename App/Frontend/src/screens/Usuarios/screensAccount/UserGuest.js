import React from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";
import { Button } from "react-native-elements";
import { Value } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

export default function UserGuest() {
  const navigation = useNavigation();

  return (
    <ScrollView centerContent={true} style={styles.viewBody}>
      <Image
        source={require("../../../assets/adaptive-icon.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.tittle}>Consulta tu perfil</Text>
      <Text style={styles.description}>
        Para poder hacer uso pleno de ella, es necesario que sepas que toda la
        información que aquí proporciones es confidencial y esta protegida por
        la Ley Federal de Protección de Datos Personales en Posesión de los
        Particulares.
      </Text>
      <View style={styles.viewBtn}>
        <Button
          title="ver tu perfil"
          buttonStyle={styles.btnStyle}
          containerStyle={styles.btnContainer}
          onPress={() => navigation.navigate("login")}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewBody: {
    marginLeft: 30,
    marginRight: 30,
  },
  image: {
    height: 300,
    width: "100%",
    marginBottom: 40,
  },
  tittle: {
    fontWeight: "bold",
    fontSize: 19,
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    marginBottom: 20,
  },
  viewBtn: {
    flex: 1,
    alignItems: "center",
  },
  btnStyle: {
    backgroundColor: "#00a680",
  },
  btnContainer: {
    width: "70%",
  },
});
