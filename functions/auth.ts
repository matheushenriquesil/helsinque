import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const API_URL = "http://172.30.1.222:8000";

export async function fazerLogin(email: string, senha: string) {
  try {
    if (!email.trim() || !senha) {
      throw new Error("Preencha o e-mail e a senha.");
    }

    console.log("Iniciando login...");
    console.log("Servidor:", API_URL);

    const resposta = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        senha,
      }),
    });

    const textoResposta = await resposta.text();

    let dados: any;

    try {
      dados = JSON.parse(textoResposta);
    } catch {
      throw new Error("A API retornou uma resposta inválida.");
    }

    console.log("STATUS LOGIN:", resposta.status);

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
    } else {
      await AsyncStorage.removeItem("refresh_token");
    }

    // Confirma o armazenamento do token
    const tokenSalvo = await AsyncStorage.getItem("token");

    if (!tokenSalvo) {
      throw new Error("Não foi possível salvar o token.");
    }

    console.log("TOKEN SALVO?", Boolean(tokenSalvo));

    // Busca os contatos do usuário autenticado
    const respostaContatos = await fetch(`${API_URL}/contatos/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${tokenSalvo}`,
        Accept: "application/json",
      },
    });

    console.log("STATUS CONTATOS:", respostaContatos.status);

    const textoContatos = await respostaContatos.text();

    let contatos: any;

    try {
      contatos = JSON.parse(textoContatos);
    } catch {
      throw new Error("A API retornou uma resposta inválida ao buscar contatos.");
    }

    if (!respostaContatos.ok) {
      throw new Error(
        contatos.detail || "Não foi possível carregar seus contatos."
      );
    }

    // Decide para qual tela o usuário vai
    if (Array.isArray(contatos) && contatos.length >= 3) {
      console.log("Usuário já possui contatos. Indo para /main.");
      router.replace("/main");
    } else {
      console.log("Cadastro de contatos incompleto. Indo para /contatos.");
      router.replace("/contatos");
    }

  } catch (erro: any) {
    console.log("ERRO NO LOGIN:", erro?.message || erro);

    // Evita manter uma sessão incompleta
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("refresh_token");

    throw erro instanceof Error
      ? erro
      : new Error("Não foi possível conectar ao servidor.");
  }
}
