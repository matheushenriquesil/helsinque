
import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { router } from "expo-router";
import { style } from "./style";
import { fazerLogin } from "./function";

export default function Index() {
  const handleLogin = () => {
    fazerLogin();
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
        <View style={style.conteudo}>
          <View style={style.logoContainer}>
            <View style={style.logoCirculo}>
              <Text style={style.logoCruz}>+</Text>
            </View>
          </View>

          <Text style={style.titulo}>
            Alerta <Text style={style.tituloDestaque}>+</Text>
          </Text>

          <Text style={style.subtitulo}>
            Sua segurança em primeiro lugar.
          </Text>

  
          <View style={style.formulario}>
            <Text style={style.label}>E-mail</Text>

            <TextInput
              style={style.textosInput}
              placeholder="Digite seu e-mail"
              placeholderTextColor="#88888f"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <Text style={style.label}>Senha</Text>

            <TextInput
              style={style.textosInput}
              placeholder="Digite sua senha"
              placeholderTextColor="#88888f"
              secureTextEntry
              autoCapitalize="none"
            />

          
            <Pressable
              style={style.botaoEntrar}
              onPress={handleLogin}
            >
              <Text style={style.textoBotaoEntrar}>
                Entrar
              </Text>
            </Pressable>

            
            <View style={style.areaCadastro}>
              <Text style={style.naotemconta}>
                Ainda não tem uma conta?
              </Text>

              <Pressable
                style={style.botaoCadastro}
                onPress={() => router.push("/Cadastro")}
              >
                <Text style={style.textoBotaoCadastro}>
                  Criar minha conta
                </Text>
              </Pressable>
            </View>
          </View>

          <Text style={style.rodape}>
            ALERTA + • PROTEÇÃO E SEGURANÇA
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}