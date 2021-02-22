import React from "react";
import { SafeAreaView } from "react-native";

// Components
import AlimentosContainer from './src/screens/Alimentos/AlimentosContainer'
import Banner from './src/components/Banner'



export default function App() {
  return (
    <SafeAreaView>
      <Banner />
      <AlimentosContainer />
    </SafeAreaView>
  );
}
