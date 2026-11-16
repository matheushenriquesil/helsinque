
import React, { useState, useEffect, useRef } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
  ActivityIndicator,
  Animated,
} from "react-native";

import { router } from "expo-router";
import { style } from "./style";
import { fazerLogin } from "../../../functions/auth";

export default function Index() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [carregando, setCarregando] = useState(false);

  // Animação de entrada
  const entrada = useRef(new Animated.Value(0)).current;

  // Animações dos botões
  const escalaEntrar = useRef(new Animated.Value(1)).current;
  const escalaCadastro = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(entrada, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();
  }, []);

  const animacaoEntrada = {
    opacity: entrada,
    transform: [
      {
        translateY: entrada.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  function pressionarBotao(animacao: Animated.Value) {
    Animated.spring(animacao, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  }

  function soltarBotao(animacao: Animated.Value) {
    Animated.spring(animacao, {
      toValue: 1,
      friction: 4,
      tension: 100,
      useNativeDriver: true,
    }).start();
  }

  const handleLogin = async () => {
    if (carregando) return;

    if (!email.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha o e-mail e a senha.");
      return;
    }

    try {
      setCarregando(true);

      await fazerLogin(email.trim().toLowerCase(), senha);

    } catch (erro: any) {
      Alert.alert(
        "Erro ao entrar",
        erro?.message || "Não foi possível realizar o login."
      );
    } finally {
      setCarregando(false);
    }
  };

  return (
    <KeyboardAvoidingView
      style={style.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={style.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <Animated.View style={[style.conteudo, animacaoEntrada]}>

          {/* LOGO */}
          <View style={style.logoContainer}>
            <View
              style={style.logoCirculo}
              accessible
              accessibilityRole="image"
              accessibilityLabel="Símbolo de cruz do Alerta Mais"
            >
              <Text
                style={style.logoCruz}
                accessible={false}
              >
                +
              </Text>
            </View>
          </View>

          {/* TÍTULO */}
          <Text
            style={style.titulo}
            accessibilityRole="header"
          >
            Alerta <Text style={style.tituloDestaque}>+</Text>
          </Text>

          <Text style={style.subtitulo}>
            Sua segurança em primeiro lugar.
          </Text>

          {/* FORMULÁRIO */}
          <View style={style.formulario}>

            <Text style={style.label}>
              E-mail
            </Text>

            <TextInput
              style={style.textosInput}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#B8C7D3"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
              accessibilityLabel="Endereço de e-mail"
              accessibilityHint="Digite o e-mail utilizado no seu cadastro"
              returnKeyType="next"
            />

            <Text style={style.label}>
              Senha
            </Text>

            <TextInput
              style={style.textosInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#B8C7D3"
              secureTextEntry
              autoCapitalize="none"
              value={senha}
              onChangeText={setSenha}
              accessibilityLabel="Senha"
              accessibilityHint="Digite sua senha de acesso"
              returnKeyType="done"
              onSubmitEditing={handleLogin}
            />

            {/* BOTÃO ENTRAR */}
            <Animated.View
              style={{
                transform: [{ scale: escalaEntrar }],
              }}
            >
              <Pressable
                style={[
                  style.botaoEntrar,
                  carregando && style.botaoDesabilitado,
                ]}
                onPress={handleLogin}
                onPressIn={() => pressionarBotao(escalaEntrar)}
                onPressOut={() => soltarBotao(escalaEntrar)}
                disabled={carregando}
                accessibilityRole="button"
                accessibilityLabel="Entrar"
                accessibilityHint="Realiza o acesso à sua conta"
                accessibilityState={{
                  disabled: carregando,
                  busy: carregando,
                }}
              >
                {carregando ? (
                  <View style={style.conteudoBotao}>
                    <ActivityIndicator color="#FFFFFF" />
                    <Text style={style.textoBotaoEntrar}>
                      Entrando...
                    </Text>
                  </View>
                ) : (
                  <Text style={style.textoBotaoEntrar}>
                    Entrar
                  </Text>
                )}
              </Pressable>
            </Animated.View>

            {/* CADASTRO */}
            <View style={style.areaCadastro}>

              <Text style={style.naotemconta}>
                Ainda não tem uma conta?
              </Text>

              <Animated.View
                style={{
                  width: "100%",
                  transform: [{ scale: escalaCadastro }],
                }}
              >
                <Pressable
                  style={style.botaoCadastro}
                  onPress={() => router.push("/Cadastro")}
                  onPressIn={() => pressionarBotao(escalaCadastro)}
                  onPressOut={() => soltarBotao(escalaCadastro)}
                  disabled={carregando}
                  accessibilityRole="button"
                  accessibilityLabel="Criar minha conta"
                  accessibilityHint="Abre a tela de cadastro"
                >
                  <Text style={style.textoBotaoCadastro}>
                    Criar minha conta
                  </Text>
                </Pressable>
              </Animated.View>

            </View>
          </View>

          {/* RODAPÉ */}
          <Text style={style.rodape}>
            ALERTA+ • PROTEÇÃO E SEGURANÇA
          </Text>

        </Animated.View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
