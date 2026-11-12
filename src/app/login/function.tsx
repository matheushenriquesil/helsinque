
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://192.168.1.82:8000";

export async function fazerLogin(email: string, senha: string) {
  try {
    if (!email || !senha) {
      alert("Preencha o e-mail e a senha.");
      return;
    }

    const resposta = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        senha: senha,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      alert(dados.detail || "E-mail ou senha incorretos.");
      return;
    }

    await AsyncStorage.setItem("token", dados.access_token);

    router.replace("/contatos");

  } catch (erro) {
    console.log("Erro no login:", erro);
    alert("Não foi possível conectar ao servidor.");
  }
}
