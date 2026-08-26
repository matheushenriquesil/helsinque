import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { estilos } from "./stylo"; 
import { useScript } from "./script"; 

export default function TelaInicial() {
  const { numero, setNumero, mandarWhatsApp } = useScript();

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Alerta +</Text>
      <Text style={estilos.subtitulo}>Digite o número de telefone para enviar a mensagem.</Text>

      <TextInput
        style={estilos.entrada}
        placeholder="Digite o número de telefone"
        placeholderTextColor="#8a8a8a"
        value={numero}
        onChangeText={setNumero}
        keyboardType="phone-pad"
      />

      <Pressable style={estilos.botao} onPress={mandarWhatsApp}>
        <Text style={estilos.textobotao}>SOS</Text>
      </Pressable>
    </View>
  );
}