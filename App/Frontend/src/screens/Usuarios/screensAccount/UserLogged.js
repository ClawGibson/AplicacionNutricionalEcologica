import React from "react";
import { View, Text } from "react-native";
//import * as firebase from "firebase";
import { Button } from "react-native";

export default function UserLogged() {
  return (
    <View>
      <Text>UserLogged..</Text>
      <Button title="Cerrar sesión" />
    </View>
  );
  //onPress={() => firebase.auth().signOut()}
}
