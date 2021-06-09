/*import React from 'react'
import { View, Text } from 'react-native'

const ComunidadContainer = () => {
    return (
        <View style={{ marginTop: 250 }}>
            <Text style={{ textAlign: 'center' }}>
                Comunidad
            </Text>
        </View>
    )
}

export default ComunidadContainer
*/
import React, { useState } from "react";
import { View, Picker, StyleSheet } from "react-native";

const App = () => {
  const [selectedValue, setSelectedValue] = useState("java");
  return (
    <View style={styles.container}>
      <Picker
        style={styles.inputForm}
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    width: "100%",
  },
  inputForm: {
    width: "50%",
    marginTop: 20,
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
  },
});

export default App;
