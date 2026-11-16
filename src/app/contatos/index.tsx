
import React, { useEffect, useState, useRef } from "react";

import {
  Alert,
  View,
  Text,
  TextInput,
  ScrollView,
  Pressable,
  ActivityIndicator,
  Animated,
} from "react-native";

import { router } from "expo-router";
import { useContatos } from "../../context/ContatosContext";
import { style } from "./style";

export default function Contatos() {
  const {
    contatos,
    salvarContatos,
    atualizarContatos,
    carregandoContatos,
  } = useContatos();

  const [nome1, setNome1] = useState("");
  const [num1, setNum1] = useState("");

  const [nome2, setNome2] = useState("");
  const [num2, setNum2] = useState("");

  const [nome3, setNome3] = useState("");
  const [num3, setNum3] = useState("");

  const [salvando, setSalvando] = useState(false);
  const [atualizando, setAtualizando] = useState(true);

  const editando = contatos.length > 0;

  // Animações
  const entrada = useRef(new Animated.Value(0)).current;
  const escalaBotao = useRef(new Animated.Value(1)).current;

  // Busca os contatos novamente quando a tela é aberta
  useEffect(() => {
    async function carregarDados() {
      try {
        await atualizarContatos();
      } catch (erro) {
        console.error("Erro ao atualizar contatos:", erro);

        Alert.alert(
          "Atenção",
          "Não foi possível carregar seus contatos do servidor. Verifique sua conexão e tente novamente."
        );
      } finally {
        setAtualizando(false);
      }
    }

    carregarDados();
  }, []);

  // Preenche os campos depois que a busca termina
  useEffect(() => {
    if (carregandoContatos || atualizando) return;

    setNome1(contatos[0]?.nome ?? "");
    setNum1(contatos[0]?.numero ?? "");

    setNome2(contatos[1]?.nome ?? "");
    setNum2(contatos[1]?.numero ?? "");

    setNome3(contatos[2]?.nome ?? "");
    setNum3(contatos[2]?.numero ?? "");

    Animated.timing(entrada, {
      toValue: 1,
      duration: 650,
      useNativeDriver: true,
    }).start();
  }, [carregandoContatos, atualizando, contatos]);

  const animacaoEntrada = {
    opacity: entrada,
    transform: [
      {
        translateY: entrada.interpolate({
          inputRange: [0, 1],
          outputRange: [18, 0],
        }),
      },
    ],
  };

  function pressionarBotao() {
    Animated.spring(escalaBotao, {
      toValue: 0.97,
      useNativeDriver: true,
    }).start();
  }

  function soltarBotao() {
    Animated.spring(escalaBotao, {
      toValue: 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }

  async function handleSalvar() {
    if (salvando) return;

    const lista = [
      {
        id: contatos[0]?.id,
        nome: nome1.trim(),
        numero: num1.trim(),
      },
      {
        id: contatos[1]?.id,
        nome: nome2.trim(),
        numero: num2.trim(),
      },
      {
        id: contatos[2]?.id,
        nome: nome3.trim(),
        numero: num3.trim(),
      },
    ];

    const algumIncompleto = lista.some(
      (contato) => !contato.nome || !contato.numero
    );

    if (algumIncompleto) {
      Alert.alert(
        "Atenção",
        "Preencha o nome e o telefone dos três contatos."
      );
      return;
    }

    try {
      setSalvando(true);

      await salvarContatos(lista);

      Alert.alert(
        "Sucesso",
        "Seus contatos foram salvos com sucesso!"
      );

      router.replace("/main");
    } catch (erro) {
      console.error("Erro ao salvar contatos:", erro);

      Alert.alert(
        "Erro",
        erro instanceof Error
          ? erro.message
          : "Não foi possível salvar os contatos."
      );
    } finally {
      setSalvando(false);
    }
  }

  if (carregandoContatos || atualizando) {
    return (
      <View
        style={style.container}
        accessibilityRole="progressbar"
        accessibilityLabel="Carregando seus contatos"
      >
        <ActivityIndicator size="large" color="#FF5C5C" />

        <Text style={style.subtitulo}>
          Carregando seus contatos...
        </Text>
      </View>
    );
  }

  return (
    <View style={style.container}>
      <ScrollView
        contentContainerStyle={style.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View style={animacaoEntrada}>
          <Text
            style={style.titulo}
            accessibilityRole="header"
          >
            Alerta+
          </Text>

          <Text style={style.subtitulo}>
            {editando
              ? "Edite seus contatos de emergência."
              : "Cadastre seus 3 contatos de emergência para continuarmos."}
          </Text>

          {/* CONTATO 1 */}
          <View style={style.cardContato}>
            <Text
              style={style.cardTitulo}
              accessibilityRole="header"
            >
              Contato 1
            </Text>

            <Text style={style.label}>Nome do contato</Text>

            <TextInput
              style={style.input}
              placeholder="Digite o nome"
              placeholderTextColor="#B8C7D3"
              value={nome1}
              onChangeText={setNome1}
              autoCapitalize="words"
              accessibilityLabel="Nome do primeiro contato"
              accessibilityHint="Digite o nome da primeira pessoa de emergência"
              returnKeyType="next"
            />

            <Text style={style.label}>Telefone com DDD</Text>

            <TextInput
              style={style.input}
              placeholder="Exemplo: 11999999999"
              placeholderTextColor="#B8C7D3"
              value={num1}
              onChangeText={setNum1}
              keyboardType="phone-pad"
              accessibilityLabel="Telefone do primeiro contato"
              accessibilityHint="Digite o número de telefone com DDD"
              returnKeyType="next"
            />
          </View>

          {/* CONTATO 2 */}
          <View style={style.cardContato}>
            <Text
              style={style.cardTitulo}
              accessibilityRole="header"
            >
              Contato 2
            </Text>

            <Text style={style.label}>Nome do contato</Text>

            <TextInput
              style={style.input}
              placeholder="Digite o nome"
              placeholderTextColor="#B8C7D3"
              value={nome2}
              onChangeText={setNome2}
              autoCapitalize="words"
              accessibilityLabel="Nome do segundo contato"
              accessibilityHint="Digite o nome da segunda pessoa de emergência"
              returnKeyType="next"
            />

            <Text style={style.label}>Telefone com DDD</Text>

            <TextInput
              style={style.input}
              placeholder="Exemplo: 11999999999"
              placeholderTextColor="#B8C7D3"
              value={num2}
              onChangeText={setNum2}
              keyboardType="phone-pad"
              accessibilityLabel="Telefone do segundo contato"
              accessibilityHint="Digite o número de telefone com DDD"
              returnKeyType="next"
            />
          </View>

          {/* CONTATO 3 */}
          <View style={style.cardContato}>
            <Text
              style={style.cardTitulo}
              accessibilityRole="header"
            >
              Contato 3
            </Text>

            <Text style={style.label}>Nome do contato</Text>

            <TextInput
              style={style.input}
              placeholder="Digite o nome"
              placeholderTextColor="#B8C7D3"
              value={nome3}
              onChangeText={setNome3}
              autoCapitalize="words"
              accessibilityLabel="Nome do terceiro contato"
              accessibilityHint="Digite o nome da terceira pessoa de emergência"
              returnKeyType="next"
            />

            <Text style={style.label}>Telefone com DDD</Text>

            <TextInput
              style={style.input}
              placeholder="Exemplo: 11999999999"
              placeholderTextColor="#B8C7D3"
              value={num3}
              onChangeText={setNum3}
              keyboardType="phone-pad"
              accessibilityLabel="Telefone do terceiro contato"
              accessibilityHint="Digite o número de telefone com DDD"
              returnKeyType="done"
            />
          </View>

          {/* BOTÃO SALVAR */}
          <Animated.View
            style={{ transform: [{ scale: escalaBotao }] }}
          >
            <Pressable
              style={[
                style.botaoSalvar,
                salvando && style.botaoDesabilitado,
              ]}
              onPress={handleSalvar}
              onPressIn={pressionarBotao}
              onPressOut={soltarBotao}
              disabled={salvando}
              accessibilityRole="button"
              accessibilityLabel={
                editando
                  ? "Salvar alterações dos contatos"
                  : "Salvar contatos e ir para o início"
              }
              accessibilityHint="Salva os três contatos de emergência"
              accessibilityState={{
                disabled: salvando,
                busy: salvando,
              }}
            >
              {salvando ? (
                <View style={style.conteudoBotao}>
                  <ActivityIndicator color="#FFFFFF" />

                  <Text style={style.textoBotao}>
                    Salvando contatos...
                  </Text>
                </View>
              ) : (
                <Text style={style.textoBotao}>
                  {editando
                    ? "Salvar alterações"
                    : "Salvar e ir para o início"}
                </Text>
              )}
            </Pressable>
          </Animated.View>
        </Animated.View>
      </ScrollView>
    </View>
  );
}
