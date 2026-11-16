
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";
import { router } from "expo-router";

const API_URL = "http://192.168.1.82:8000";

export async function fazerLogin(email: string, senha: string) {
  try {
    const resposta = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        senha,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      throw new Error(
        dados.detail || "E-mail ou senha incorretos."
      );
    }

    if (!dados.access_token) {
      throw new Error("A API não retornou o token de acesso.");
    }

    // Salva os tokens da sessão
    await AsyncStorage.setItem("token", dados.access_token);

    if (dados.refresh_token) {
      await AsyncStorage.setItem(
        "refresh_token",
        dados.refresh_token
      );
    }

    // Busca os contatos do usuário autenticado
    const respostaContatos = await fetch(`${API_URL}/contatos/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${dados.access_token}`,
        "Content-Type": "application/json",
      },
    });

    if (!respostaContatos.ok) {
      throw new Error("Não foi possível carregar seus contatos.");
    }

    const contatos = await respostaContatos.json();

    // Decide para qual tela o usuário vai
    if (Array.isArray(contatos) && contatos.length >= 3) {
      router.replace("/main");
    } else {
      router.replace("/contatos");
    }

  } catch (erro: any) {
    // Evita manter uma sessão incompleta
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("refresh_token");

    throw new Error(
      erro?.message || "Não foi possível conectar ao servidor."
    );
  }
}
