import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomImput";

export default function App() {

  const [nombre, setNombre] = useState("");

  return (
    <View style={styles.container}>
      //Implementacion de tarea CustomImput
      <CustomInput
        placeholder="Ingrese su nombre"
        value={nombre}
        onChangeText={setNombre}
      />

      <Text>Texto ingresado: {nombre}</Text>

      //implementacion de componente personalizado
      <CustomButton 
          title={"Boton Primario"} 
          onPress={() => {}} />
      <CustomButton
        title={"Boton Secundario"}
        onPress={() => {}}
        variant="secondary"
      />
      <CustomButton
        title={"Boton Tercero"}
        onPress={() => {}}
        variant="tertiary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});