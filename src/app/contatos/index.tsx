import React, { useEffect, useState } from "react";
import {
  Alert,
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import { useContatos } from "../../context/ContatosContext";
import { style } from "./style";

export default function Contatos() {
  const {
    contatos,
    salvarContatos,
    carregandoContatos,
  } = useContatos();

  const [nome1, setNome1] = useState("");
  const [num1, setNum1] = useState("");
  const [nome2, setNome2] = useState("");
  const [num2, setNum2] = useState("");
  const [nome3, setNome3] = useState("");
  const [num3, setNum3] = useState("");

  useEffect(() => {
    if (carregandoContatos) return;

    setNome1(contatos[0]?.nome ?? "");
    setNum1(contatos[0]?.numero ?? "");
    setNome2(contatos[1]?.nome ?? "");
    setNum2(contatos[1]?.numero ?? "");
    setNome3(contatos[2]?.nome ?? "");
    setNum3(contatos[2]?.numero ?? "");
  }, [carregandoContatos, contatos]);

  const handleSalvar = async () => {
    const lista = [
      {
        id: contatos[0]?.id ?? "1",
        nome: nome1.trim() || "Contato 1",
        numero: num1.trim(),
      },
      {
        id: contatos[1]?.id ?? "2",
        nome: nome2.trim() || "Contato 2",
        numero: num2.trim(),
      },
      {
        id: contatos[2]?.id ?? "3",
        nome: nome3.trim() || "Contato 3",
        numero: num3.trim(),
      },
    ];

    try {
      await salvarContatos(lista);
      router.replace("/main");
    } catch {
      Alert.alert(
        "Erro",
        "Não foi possível salvar os contatos."
      );
    }
  };

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={style.titulo}>Alerta +</Text>
        <Text style={style.subtitulo}>
          Cadastre seus 3 contatos de emergência para continuarmos.
        </Text>

        <View style={style.cardContato}>
          <Text style={style.cardTitulo}>Contato 1</Text>
          <TextInput
            style={style.input}
            placeholder="Nome do contato"
            placeholderTextColor="#8a8a8a"
            value={nome1}
            onChangeText={setNome1}
          />
          <TextInput
            style={style.input}
            placeholder="Número de telefone (com DDD)"
            placeholderTextColor="#8a8a8a"
            value={num1}
            onChangeText={setNum1}
            keyboardType="phone-pad"
          />
        </View>

        <View style={style.cardContato}>
          <Text style={style.cardTitulo}>Contato 2</Text>
          <TextInput
            style={style.input}
            placeholder="Nome do contato"
            placeholderTextColor="#8a8a8a"
            value={nome2}
            onChangeText={setNome2}
          />
          <TextInput
            style={style.input}
            placeholder="Número de telefone (com DDD)"
            placeholderTextColor="#8a8a8a"
            value={num2}
            onChangeText={setNum2}
            keyboardType="phone-pad"
          />
        </View>

        <View style={style.cardContato}>
          <Text style={style.cardTitulo}>Contato 3</Text>
          <TextInput
            style={style.input}
            placeholder="Nome do contato"
            placeholderTextColor="#8a8a8a"
            value={nome3}
            onChangeText={setNome3}
          />
          <TextInput
            style={style.input}
            placeholder="Número de telefone (com DDD)"
            placeholderTextColor="#8a8a8a"
            value={num3}
            onChangeText={setNum3}
            keyboardType="phone-pad"
          />
        </View>

        <Pressable style={style.botaoSalvar} onPress={handleSalvar}>
          <Text style={style.textoBotao}>Salvar e ir para o início</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
