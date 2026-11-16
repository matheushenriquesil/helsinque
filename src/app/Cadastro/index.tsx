
import React, { useState, useEffect, useRef } from "react";

import {
  Text,
  TextInput,
  Pressable,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Animated,
  View,
} from "react-native";

import { router } from "expo-router";

import { cadastrarUsuario } from "../Cadastro/function";
import { styles } from "../Cadastro/style";

export default function CriarConta() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Animação de entrada
  const entrada = useRef(new Animated.Value(0)).current;

  // Animação do botão
  const escalaBotao = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(entrada, {
      toValue: 1,
      duration: 700,
      useNativeDriver: true,
    }).start();
  }, []);

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

  async function handleCadastro() {
    if (carregando) return;

    if (!nome.trim() || !email.trim() || !senha || !confirmarSenha) {
      Alert.alert("Atenção", "Preencha todos os campos.");
      return;
    }

    if (senha !== confirmarSenha) {
      Alert.alert("Atenção", "As senhas não são iguais.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert(
        "Atenção",
        "A senha precisa ter pelo menos 6 caracteres."
      );
      return;
    }

    try {
      setCarregando(true);

      await cadastrarUsuario(nome, email, senha);

      Alert.alert(
        "Conta criada! 🎉",
        "Seu cadastro foi realizado com sucesso!\n\nConfirme seu endereço de e-mail e depois faça login no Alerta+ para continuar.",
        [
          {
            text: "Ir para login",
            onPress: () => router.replace("/login"),
          },
        ]
      );
    } catch (erro) {
      console.error("Erro no cadastro:", erro);

      Alert.alert(
        "Erro no cadastro",
        erro instanceof Error
          ? erro.message
          : "Não foi possível criar sua conta."
      );
    } finally {
      setCarregando(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.conteudo}
        keyboardShouldPersistTaps="handled"
      >
        <Animated.View style={animacaoEntrada}>

          <Text
            style={styles.titulo}
            accessibilityRole="header"
          >
            Criar Conta
          </Text>

          <Text style={styles.subtitulo}>
            Faça seu cadastro para começar a usar o Alerta+.
          </Text>

          <View style={styles.grupoCampo}>
            <Text style={styles.label}>
              Nome completo
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome completo"
              placeholderTextColor="#B8C2CC"
              value={nome}
              onChangeText={setNome}
              autoCapitalize="words"
              autoCorrect={false}
              accessibilityLabel="Nome completo"
              accessibilityHint="Digite seu nome completo"
              returnKeyType="next"
            />
          </View>

          <View style={styles.grupoCampo}>
            <Text style={styles.label}>
              E-mail
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#B8C2CC"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              accessibilityLabel="Endereço de e-mail"
              accessibilityHint="Digite seu endereço de e-mail"
              returnKeyType="next"
            />
          </View>

          <View style={styles.grupoCampo}>
            <Text style={styles.label}>
              Senha
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Crie uma senha"
              placeholderTextColor="#B8C2CC"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              accessibilityLabel="Senha"
              accessibilityHint="Crie uma senha com pelo menos seis caracteres"
              returnKeyType="next"
            />
          </View>

          <View style={styles.grupoCampo}>
            <Text style={styles.label}>
              Confirmar senha
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Digite novamente sua senha"
              placeholderTextColor="#B8C2CC"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              accessibilityLabel="Confirmar senha"
              accessibilityHint="Digite novamente a senha criada"
              returnKeyType="done"
              onSubmitEditing={handleCadastro}
            />
          </View>

          <Animated.View
            style={{ transform: [{ scale: escalaBotao }] }}
          >
            <Pressable
              style={[
                styles.botao,
                carregando && styles.botaoDesabilitado,
              ]}
              onPress={handleCadastro}
              onPressIn={pressionarBotao}
              onPressOut={soltarBotao}
              disabled={carregando}
              accessibilityRole="button"
              accessibilityLabel="Criar conta"
              accessibilityHint="Realiza seu cadastro no Alerta Mais"
              accessibilityState={{ disabled: carregando, busy: carregando }}
            >
              {carregando ? (
                <View style={styles.conteudoBotao}>
                  <ActivityIndicator color="#FFFFFF" />
                  <Text style={styles.textoBotao}>
                    Criando sua conta...
                  </Text>
                </View>
              ) : (
                <Text style={styles.textoBotao}>
                  Criar Conta
                </Text>
              )}
            </Pressable>
          </Animated.View>

          <Pressable
            onPress={() => router.replace("/login")}
            disabled={carregando}
            style={styles.botaoLogin}
            accessibilityRole="button"
            accessibilityLabel="Já tem uma conta? Fazer login"
            accessibilityHint="Volta para a tela de login"
          >
            <Text style={styles.textoLogin}>
              Já tem uma conta? Faça login
            </Text>
          </Pressable>

        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
