
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

const API_URL = "http://192.168.1.82:8000";

export async function verificarSessao() {
  try {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      router.replace("/login");
      return;
    }

    const resposta = await fetch(`${API_URL}/contatos/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!resposta.ok) {
      await AsyncStorage.removeItem("token");
      await AsyncStorage.removeItem("refresh_token");

      router.replace("/login");
      return;
    }

    const contatos = await resposta.json();

    if (Array.isArray(contatos) && contatos.length >= 3) {
      router.replace("/main");
    } else {
      router.replace("/contatos");
    }

  } catch (erro) {
    console.log("Erro ao verificar sessão:", erro);
    router.replace("/login");
  }
}
