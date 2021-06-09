import React, { Component, useState } from "react";
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  CheckBox,
} from "native-base";
import { View, Text, StyleSheet } from "react-native";
export default function Generales(params) {
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
    <View>
      <Text style={styles.titulo}>¿Eres alergico a algún alimento?</Text>
      <View style={styles.item}>
        <CheckBox checked={a1} color="#4EE801" onPress={() => setA1(!a1)} />
        <Text
          style={{
            ...styles.checkBoxTxt,
            color: a1 ? "#4EE801" : "gray",
            fontWeight: a1 ? "bold" : "normal",
          }}
        >
          Lactosa
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
          Martiscos
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
          Gluten
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
          Fresas
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
          Nueces
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
          Cacahuates
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
          type="text"
          onChange={(e) => onChange(e, "edad")}
        />
      ) : null}
      {/*
      <TouchableOpacity style={styles.submit}>
        <Text style={{ color: "white" }}>SUBMIT</Text>
      </TouchableOpacity>*/}

      <Label style={styles.titulo}>
        Principal lugar de compra de alimentos
      </Label>
      <Label style={styles.subtitulo}>Enumere las opciones</Label>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Tianguis </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Mercado </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>SuperMercado Menudeo </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>SuperMercado Mayoreo </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Carniceria </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Cremeria </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Fruteria </Label>
      </Item>
      <Item fixedLabel last>
        <Input style={styles.entradas} />
        <Label style={styles.etiqueta}>Otros</Label>
      </Item>

      <Label style={styles.titulo}>
        ¿Quien cocina los alimentos que consumes?
      </Label>
      <Label style={styles.subtitulo}>Enumere las opciones</Label>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Yo </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Mamá </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Papá </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Los compro en concina economica </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Los compro en restaurantes </Label>
      </Item>
      <Item fixedLabel>
        <Input style={styles.entradas} keyboardType="numeric" />
        <Label style={styles.etiqueta}>Me la regalan </Label>
      </Item>
      <Item fixedLabel last>
        <Input style={styles.entradas} />
        <Label style={styles.etiqueta}>Otros</Label>
      </Item>
    </View>
  );
}
const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    marginBottom: 5,
    marginTop: 10,
  },
  subtitulo: {
    fontSize: 14,
    marginBottom: 15,
  },
  entradas: {
    flex: 0.2,
    backgroundColor: "#ACFC9C",
    width: "-100%",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderRadius: 0,
  },
  etiqueta: {
    marginLeft: 18,
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
});
