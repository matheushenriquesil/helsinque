import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

const API_URL = "http://172.30.1.222:8000";

export async function fazerLogin(email: string, senha: string) {
  try {
    if (!email.trim() || !senha) {
      alert("Preencha o e-mail e a senha.");
      return;
    }

    const resposta = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        senha: senha,
      }),
    });

    const dados = await resposta.json();

    if (!resposta.ok) {
      alert(dados.detail || "E-mail ou senha incorretos.");
      return;
    }

    if (!dados.access_token) {
      alert("A API não retornou o token de acesso.");
      return;
    }

    // Salva o token para utilizar nas próximas requisições
    await AsyncStorage.setItem("token", dados.access_token);

    // Salva também os dados básicos do usuário
    await AsyncStorage.setItem(
      "usuario",
      JSON.stringify(dados.usuario)
    );

    console.log("Login realizado com sucesso!");

    router.replace("/contatos");

  } catch (erro) {
    console.log("Erro no login:", erro);
    alert("Não foi possível conectar ao servidor.");
  }
}
