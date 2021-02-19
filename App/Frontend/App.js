import React from "react";
import { Text, View, TouchableOpacity, SafeAreaView } from "react-native";
import AlimentoCard from './src/components/AlimentoCard'

const cara = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcreazilla-store.fra1.digitaloceanspaces.com%2Femojis%2F43030%2Fsmiling-face-with-smiling-eyes-emoji-clipart-md.png&f=1&nofb=1';
const cara2 = 'https://creazilla-store.fra1.digitaloceanspaces.com/emojis/42283/beaming-face-with-smiling-eyes-emoji-clipart-md.png';

const manzana = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.pngkey.com%2Fpng%2Ffull%2F932-9328480_apples-png-image-red-apple-fruit.png&f=1&nofb=1';
const pera = 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fsouagro.com.br%2Fwp-content%2Fuploads%2F2018%2F03%2Fpera_298111103.jpg&f=1&nofb=1';
export default function App() {
  return (
    <SafeAreaView>
      <AlimentoCard foodImage={manzana} foodName={'Manzana roja'} face1={cara} face2={cara2} counter={5} />
    </SafeAreaView>
  );
}
