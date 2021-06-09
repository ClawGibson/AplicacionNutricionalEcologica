import React, { useState, Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  PixelRatio,
  Switch,
  TouchableOpacity,
  Picker,
} from "react-native";
import { Input, Icon, Button } from "react-native-elements";
//import RNPickerSelect from "react-native-picker-select";
//import { Picker } from "react-native";
import Constants from "expo-constants";
import CountryPicker, {
  getAllCountries,
  getCallingCode,
} from "react-native-country-picker-modal";

export default function SobreTi(props) {
  /* 
  const estatu = [];
  for (let index = 1; index < 231; index++) {
    estatu.push({
      label: index.toString() + " cm",
      value: index,
    });
  }
  */
  const [selectedEst, setSelectedEst] = useState("1 cm");

  /*this.state = {
      selected: undefined
    };
  }
  */
  const [selected1, setSelected1] = useState(undefined);

  const onChange = (e, type) => {
    //console.log(type);
    //console.log(e.nativeEvent.text)
    //setformData({[type]: e.nativeEvent.text})
    setformData({ ...formData, [type]: e.nativeEvent.text });
  };
  const [selectedAf, setSelectedAf] = useState("Menos de 3 veces a la semana");
  /*
  const actividadFisica = [
    { label: "Menos de 3 veces a la semana", value: "poco" },
    {
      label:
        "3 o más días de actividad vigorosa de al menos 20 minutos por día",
      value: "vigorosa",
    },
    {
      label:
        "5 o más días de actividad moderada a intensa o caminar al menos 30 minutos por día ",
      value: "intensa",
    },
    {
      label:
        "3 días a la semana de actividad muy vigorosa al menos 60 minutos por día ",
      value: "muyVigorosa",
    },
    {
      label:
        "7 días a la semana de actividad moderada a intensa o incluso caminata de al menos 60 minutos por día",
      value: "diaria",
    },
  ];
  
  const tipoDeActividad = [
    { label: "Caminar", value: "caminar" },
    { label: "Trotar", value: "trotar" },
    { label: "Correr", value: "correr" },
    { label: "Aeróbics, zumba o baile", value: "airobics" },
    { label: "Ciclismo", value: "ciclismo" },
    { label: "Natación", value: "natacion" },
    { label: "Crossfit", value: "crossfit" },
    { label: "Pesas", value: "pesas" },
    { label: "Multifuncional", value: "multifuncional" },
    {
      label:
        "Ejercicios focalizados (escribir cuales, por ejemplo abdominales, sentadillas, lagartijas)",
      value: "focalizados",
    },
  ];
  */
  const [selectedTaf, setSelectedTaf] = useState("Caminar");

  /*
  const intensidad = [
    { label: "Leve", value: "leve" },
    { label: "Moderada", value: "moderada" },
    { label: "Intensa", value: "intensa" },
  ];
  */
  const [selectedI, setSelectedI] = useState("Leve");
  /*
  const vecesXsemana = [];
  for (let index = 1; index < 8; index++) {
    if (index > 1) {
      vecesXsemana.push({
        label: index.toString() + " veces",
        value: index.toString() + "veces",
      });
    } else {
      vecesXsemana.push({
        label: index.toString() + " vez",
        value: index.toString() + "vez",
      });
    }
  }
*/
  const [selectedVxS, setSelectedVxS] = useState("1 vez");

  /*
  const minXdia = [
    { label: "10 minutos", value: "10" },
    { label: "20 minutos", value: "20" },
    { label: "30 minutos", value: "30" },
    { label: "40 minutos", value: "40" },
    { label: "50 minutos", value: "50" },
    { label: "60 minutos", value: "60" },
    { label: "90 minutos", value: "90" },
    { label: "120 minutos", value: "120" },
    { label: "150 minutos", value: "150" },
    { label: "180 minutos", value: "180" },
    { label: "210 minutos", value: "210" },
    { label: "240 o más minutos", value: "240o+" },
  ];
*/
  const [selectedMxD, setSelectedMxD] = useState("10 minutos");
  return (
    <View style={styles.formContainer}>
      <Text style={styles.letrero}>Estatura:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedEst}
        onValueChange={(itemValue, itemIndex) => setSelectedEst(itemValue)}
      >
        <Picker.Item label="1 cm" value="1" />
        <Picker.Item label="2 cm" value="2" />
        <Picker.Item label="3 cm" value="3" />
        <Picker.Item label="4 cm" value="4" />
        <Picker.Item label="5 cm" value="5" />
        <Picker.Item label="6 cm" value="6" />
        <Picker.Item label="7 cm" value="7" />
        <Picker.Item label="8 cm" value="8" />
        <Picker.Item label="9 cm" value="9" />
        <Picker.Item label="10 cm" value="10" />
        <Picker.Item label="11 cm" value="11" />
        <Picker.Item label="12 cm" value="12" />
        <Picker.Item label="13 cm" value="13" />
        <Picker.Item label="14 cm" value="14" />
        <Picker.Item label="15 cm" value="15" />
        <Picker.Item label="16 cm" value="16" />
        <Picker.Item label="17 cm" value="17" />
        <Picker.Item label="18 cm" value="18" />
        <Picker.Item label="19 cm" value="19" />
        <Picker.Item label="20 cm" value="20" />
        <Picker.Item label="21 cm" value="21" />
        <Picker.Item label="22 cm" value="22" />
        <Picker.Item label="23 cm" value="23" />
        <Picker.Item label="24 cm" value="24" />
        <Picker.Item label="25 cm" value="25" />
        <Picker.Item label="26 cm" value="26" />
        <Picker.Item label="27 cm" value="27" />
        <Picker.Item label="28 cm" value="28" />
        <Picker.Item label="29 cm" value="29" />
        <Picker.Item label="30 cm" value="30" />
        <Picker.Item label="31 cm" value="31" />
        <Picker.Item label="32 cm" value="32" />
        <Picker.Item label="33 cm" value="33" />
        <Picker.Item label="34 cm" value="34" />
        <Picker.Item label="35 cm" value="35" />
        <Picker.Item label="36 cm" value="36" />
        <Picker.Item label="37 cm" value="37" />
        <Picker.Item label="38 cm" value="38" />
        <Picker.Item label="39 cm" value="39" />
        <Picker.Item label="40 cm" value="40" />
        <Picker.Item label="41 cm" value="41" />
        <Picker.Item label="42 cm" value="42" />
        <Picker.Item label="43 cm" value="43" />
        <Picker.Item label="44 cm" value="44" />
        <Picker.Item label="45 cm" value="45" />
        <Picker.Item label="46 cm" value="46" />
        <Picker.Item label="47 cm" value="47" />
        <Picker.Item label="48 cm" value="48" />
        <Picker.Item label="49 cm" value="49" />
        <Picker.Item label="50 cm" value="50" />
        <Picker.Item label="51 cm" value="51" />
        <Picker.Item label="52 cm" value="52" />
        <Picker.Item label="53 cm" value="53" />
        <Picker.Item label="54 cm" value="54" />
        <Picker.Item label="55 cm" value="55" />
        <Picker.Item label="56 cm" value="56" />
        <Picker.Item label="57 cm" value="57" />
        <Picker.Item label="58 cm" value="58" />
        <Picker.Item label="59 cm" value="59" />
        <Picker.Item label="60 cm" value="60" />
        <Picker.Item label="61 cm" value="61" />
        <Picker.Item label="62 cm" value="62" />
        <Picker.Item label="63 cm" value="63" />
        <Picker.Item label="64 cm" value="64" />
        <Picker.Item label="65 cm" value="65" />
        <Picker.Item label="66 cm" value="66" />
        <Picker.Item label="67 cm" value="67" />
        <Picker.Item label="68 cm" value="68" />
        <Picker.Item label="69 cm" value="69" />
        <Picker.Item label="70 cm" value="70" />
        <Picker.Item label="71 cm" value="71" />
        <Picker.Item label="72 cm" value="72" />
        <Picker.Item label="73 cm" value="73" />
        <Picker.Item label="74 cm" value="74" />
        <Picker.Item label="75 cm" value="75" />
        <Picker.Item label="76 cm" value="76" />
        <Picker.Item label="77 cm" value="77" />
        <Picker.Item label="78 cm" value="78" />
        <Picker.Item label="79 cm" value="79" />
        <Picker.Item label="80 cm" value="80" />
        <Picker.Item label="81 cm" value="81" />
        <Picker.Item label="82 cm" value="82" />
        <Picker.Item label="83 cm" value="83" />
        <Picker.Item label="84 cm" value="84" />
        <Picker.Item label="85 cm" value="85" />
        <Picker.Item label="86 cm" value="86" />
        <Picker.Item label="87 cm" value="87" />
        <Picker.Item label="88 cm" value="88" />
        <Picker.Item label="89 cm" value="89" />
        <Picker.Item label="90 cm" value="90" />
        <Picker.Item label="91 cm" value="91" />
        <Picker.Item label="92 cm" value="92" />
        <Picker.Item label="93 cm" value="93" />
        <Picker.Item label="94 cm" value="94" />
        <Picker.Item label="95 cm" value="95" />
        <Picker.Item label="96 cm" value="96" />
        <Picker.Item label="97 cm" value="97" />
        <Picker.Item label="98 cm" value="98" />
        <Picker.Item label="99 cm" value="99" />
        <Picker.Item label="100 cm" value="100" />
        <Picker.Item label="101 cm" value="101" />
        <Picker.Item label="102 cm" value="102" />
        <Picker.Item label="103 cm" value="103" />
        <Picker.Item label="104 cm" value="104" />
        <Picker.Item label="105 cm" value="105" />
        <Picker.Item label="106 cm" value="106" />
        <Picker.Item label="107 cm" value="107" />
        <Picker.Item label="108 cm" value="108" />
        <Picker.Item label="109 cm" value="109" />
        <Picker.Item label="110 cm" value="110" />
        <Picker.Item label="111 cm" value="111" />
        <Picker.Item label="112 cm" value="112" />
        <Picker.Item label="113 cm" value="113" />
        <Picker.Item label="114 cm" value="114" />
        <Picker.Item label="115 cm" value="115" />
        <Picker.Item label="116 cm" value="116" />
        <Picker.Item label="117 cm" value="117" />
        <Picker.Item label="118 cm" value="118" />
        <Picker.Item label="119 cm" value="119" />
        <Picker.Item label="120 cm" value="120" />
        <Picker.Item label="121 cm" value="121" />
        <Picker.Item label="122 cm" value="122" />
        <Picker.Item label="123 cm" value="123" />
        <Picker.Item label="124 cm" value="124" />
        <Picker.Item label="125 cm" value="125" />
        <Picker.Item label="126 cm" value="126" />
        <Picker.Item label="127 cm" value="127" />
        <Picker.Item label="128 cm" value="128" />
        <Picker.Item label="129 cm" value="129" />
        <Picker.Item label="130 cm" value="130" />
        <Picker.Item label="131 cm" value="131" />
        <Picker.Item label="132 cm" value="132" />
        <Picker.Item label="133 cm" value="133" />
        <Picker.Item label="134 cm" value="134" />
        <Picker.Item label="135 cm" value="135" />
        <Picker.Item label="136 cm" value="136" />
        <Picker.Item label="137 cm" value="137" />
        <Picker.Item label="138 cm" value="138" />
        <Picker.Item label="139 cm" value="139" />
        <Picker.Item label="140 cm" value="140" />
        <Picker.Item label="141 cm" value="141" />
        <Picker.Item label="142 cm" value="142" />
        <Picker.Item label="143 cm" value="143" />
        <Picker.Item label="144 cm" value="144" />
        <Picker.Item label="145 cm" value="145" />
        <Picker.Item label="146 cm" value="146" />
        <Picker.Item label="147 cm" value="147" />
        <Picker.Item label="148 cm" value="148" />
        <Picker.Item label="149 cm" value="149" />
        <Picker.Item label="150 cm" value="150" />
        <Picker.Item label="151 cm" value="151" />
        <Picker.Item label="152 cm" value="152" />
        <Picker.Item label="153 cm" value="153" />
        <Picker.Item label="154 cm" value="154" />
        <Picker.Item label="155 cm" value="155" />
        <Picker.Item label="157 cm" value="157" />
        <Picker.Item label="158 cm" value="158" />
        <Picker.Item label="159 cm" value="159" />
        <Picker.Item label="160 cm" value="160" />
        <Picker.Item label="161 cm" value="161" />
        <Picker.Item label="162 cm" value="162" />
        <Picker.Item label="163 cm" value="163" />
        <Picker.Item label="164 cm" value="164" />
        <Picker.Item label="165 cm" value="165" />
        <Picker.Item label="166 cm" value="166" />
        <Picker.Item label="167 cm" value="167" />
        <Picker.Item label="168 cm" value="168" />
        <Picker.Item label="169 cm" value="169" />
        <Picker.Item label="170 cm" value="170" />
        <Picker.Item label="171 cm" value="171" />
        <Picker.Item label="172 cm" value="172" />
        <Picker.Item label="173 cm" value="173" />
        <Picker.Item label="174 cm" value="174" />
        <Picker.Item label="175 cm" value="175" />
        <Picker.Item label="176 cm" value="176" />
        <Picker.Item label="177 cm" value="177" />
        <Picker.Item label="178 cm" value="178" />
        <Picker.Item label="179 cm" value="179" />
        <Picker.Item label="180 cm" value="180" />
        <Picker.Item label="181 cm" value="181" />
        <Picker.Item label="182 cm" value="182" />
        <Picker.Item label="183 cm" value="183" />
        <Picker.Item label="184 cm" value="184" />
        <Picker.Item label="185 cm" value="185" />
        <Picker.Item label="186 cm" value="186" />
        <Picker.Item label="187 cm" value="187" />
        <Picker.Item label="188 cm" value="188" />
        <Picker.Item label="189 cm" value="189" />
        <Picker.Item label="190 cm" value="190" />
        <Picker.Item label="191 cm" value="191" />
        <Picker.Item label="192 cm" value="192" />
        <Picker.Item label="193 cm" value="193" />
        <Picker.Item label="194 cm" value="194" />
        <Picker.Item label="195 cm" value="195" />
        <Picker.Item label="196 cm" value="196" />
        <Picker.Item label="197 cm" value="197" />
        <Picker.Item label="198 cm" value="198" />
        <Picker.Item label="199 cm" value="199" />
        <Picker.Item label="200 cm" value="200" />
        <Picker.Item label="201 cm" value="201" />
        <Picker.Item label="201 cm" value="201" />
        <Picker.Item label="202 cm" value="202" />
        <Picker.Item label="203 cm" value="203" />
        <Picker.Item label="204 cm" value="204" />
        <Picker.Item label="205 cm" value="205" />
        <Picker.Item label="206 cm" value="206" />
        <Picker.Item label="207 cm" value="207" />
        <Picker.Item label="208 cm" value="208" />
        <Picker.Item label="209 cm" value="209" />
        <Picker.Item label="210 cm" value="210" />
        <Picker.Item label="221 cm" value="221" />
        <Picker.Item label="222 cm" value="222" />
        <Picker.Item label="223 cm" value="223" />
        <Picker.Item label="224 cm" value="224" />
        <Picker.Item label="225 cm" value="225" />
        <Picker.Item label="226 cm" value="226" />
        <Picker.Item label="227 cm" value="227" />
        <Picker.Item label="228 cm" value="228" />
        <Picker.Item label="229 cm" value="229" />
        <Picker.Item label="230 cm" value="230" />
        <Picker.Item label="231 cm" value="231" />
        <Picker.Item label="232 cm" value="232" />
        <Picker.Item label="233 cm" value="233" />
        <Picker.Item label="234 cm" value="234" />
        <Picker.Item label="235 cm" value="235" />
        <Picker.Item label="236 cm" value="236" />
        <Picker.Item label="237 cm" value="237" />
        <Picker.Item label="238 cm" value="238" />
        <Picker.Item label="239 cm" value="239" />
        <Picker.Item label="240 cm" value="240" />
        <Picker.Item label="241 cm" value="241" />
        <Picker.Item label="242 cm" value="242" />
        <Picker.Item label="243 cm" value="243" />
        <Picker.Item label="244 cm" value="244" />
        <Picker.Item label="245 cm" value="245" />
        <Picker.Item label="246 cm" value="246" />
        <Picker.Item label="247 cm" value="247" />
        <Picker.Item label="248 cm" value="248" />
        <Picker.Item label="249 cm" value="249" />
        <Picker.Item label="250 cm" value="250" />
        <Picker.Item label="251 cm" value="251" />
        <Picker.Item label="252 cm" value="252" />
        <Picker.Item label="253 cm" value="253" />
        <Picker.Item label="254 cm" value="254" />
        <Picker.Item label="255 cm" value="255" />
        <Picker.Item label="256 cm" value="256" />
        <Picker.Item label="257 cm" value="257" />
        <Picker.Item label="258 cm" value="258" />
        <Picker.Item label="259 cm" value="259" />
        <Picker.Item label="260 cm" value="260" />
      </Picker>
      <Text>Peso: </Text>
      <Input
        placeholder="¿Cuanto pesas?"
        containerStyle={styles.pic}
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
      <Text>Frecuencia de actividad fisica:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedAf}
        onValueChange={(itemValue, itemIndex) => setSelectedAf(itemValue)}
      >
        <Picker.Item label="Menos de 3 veces a la semana" value="poco" />
        <Picker.Item
          label="3 o más días de actividad vigorosa de al menos 20 minutos por día"
          value="vigorosa"
        />
        <Picker.Item
          label="5 o más días de actividad moderada a intensa o caminar al menos 30 minutos por día "
          value="intensa"
        />
        <Picker.Item
          label="3 días a la semana de actividad muy vigorosa al menos 60 minutos por día "
          value="muyVigorosa"
        />
        <Picker.Item
          label="7 días a la semana de actividad moderada a intensa o incluso caminata de al menos 60 minutos por día"
          value="diaria"
        />
      </Picker>
      <Text>Tipo de actividad fisica:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedTaf}
        onValueChange={(itemValue, itemIndex) => setSelectedTaf(itemValue)}
      >
        <Picker.Item label="Caminar" value="caminar" />
        <Picker.Item label="Trotar" value="trotar" />
        <Picker.Item label="Correr" value="correr" />
        <Picker.Item label="Aeróbics, zumba o baile" value="airobics" />
        <Picker.Item label="Ciclismo" value="ciclismo" />
        <Picker.Item label="Natación" value="natacion" />
        <Picker.Item label="Crossfit" value="crossfit" />
        <Picker.Item label="Pesas" value="pesas" />
        <Picker.Item label="Multifuncional" value="multifuncional" />
        <Picker.Item
          label="Ejercicios focalizados (escribir cuales, por ejemplo abdominales, sentadillas, lagartijas)"
          value="focalizados"
        />
      </Picker>
      <Text>Intencidad:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedI}
        onValueChange={(itemValue, itemIndex) => setSelectedI(itemValue)}
      >
        <Picker.Item label="Leve" value="leve" />
        <Picker.Item label="Moderada" value="moderada" />
        <Picker.Item label="Intensa" value="intensa" />
      </Picker>
      <Text>veces por semana:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedVxS}
        onValueChange={(itemValue, itemIndex) => setSelectedVxS(itemValue)}
      >
        <Picker.Item label="1 vez" value="1 vez" />
        <Picker.Item label="2 veces" value="2 veces" />
        <Picker.Item label="3 veces" value="3 veces" />
        <Picker.Item label="4 veces" value="4 veces" />
        <Picker.Item label="5 veces" value="5 veces" />
        <Picker.Item label="6 veces" value="6 veces" />
        <Picker.Item label="7 veces" value="7 veces" />
      </Picker>
      <Text>Minutos por dia:</Text>
      <Picker
        style={styles.pic}
        selectedValue={selectedMxD}
        onValueChange={(itemValue, itemIndex) => setSelectedMxD(itemValue)}
      >
        <Picker.Item label="10 minutos" value="10" />
        <Picker.Item label="20 minutos" value="20" />
        <Picker.Item label="30 minutos" value="30" />
        <Picker.Item label="40 minutos" value="40" />
        <Picker.Item label="50 minutos" value="50" />
        <Picker.Item label="60 minutos" value="60" />
        <Picker.Item label="90 minutos" value="90" />
        <Picker.Item label="120 minutos" value="120" />
        <Picker.Item label="150 minutos" value="150" />
        <Picker.Item label="180 minutos" value="180" />
        <Picker.Item label="210 minutos" value="210" />
        <Picker.Item label="240 o más minutos" value="240o+" />
      </Picker>
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
  letrero: {
    flex: 1,
    marginBottom: -3,
    marginTop: 5,
    color: "#000000",
  },
});

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 15,
  },
  scrollContentContainer: {
    paddingTop: 40,
    paddingBottom: 10,
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
