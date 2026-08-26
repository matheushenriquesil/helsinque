import { useState } from "react";
import { Alert, Linking } from "react-native";

export function useScript() {
  const [numero, setNumero] = useState("");
  const [mensagem] = useState("preciso de ajuda me ajude vc e meu contato de emergencia");
  const codigoPais = "55";

  function limparNumero(texto: string) {
    return texto.replace(/\D/g, "");
  }

  function montarNumeroCompleto(numeroDigitado: string) {
    const numeroLimpo = limparNumero(numeroDigitado);
    if (numeroLimpo.startsWith(codigoPais)) return numeroLimpo;
    return codigoPais + numeroLimpo;
  }

  async function mandarWhatsApp() {
    const numeroLimpo = limparNumero(numero);
    
    if (!numeroLimpo) {
      return Alert.alert("Erro", "Digite um número de telefone válido.");
    }

    const numeroCompleto = montarNumeroCompleto(numeroLimpo);
    
    if (numeroCompleto.length < 9) { 
      return Alert.alert("Erro", "Coloque um número válido com DDD.");
    }

    const textoCodificado = encodeURIComponent(mensagem);
    
    // ✅ LINHA CORRIGIDA: Agora com a barra / e o sinal de $ antes da chave
    const url = `https://wa.me/${numeroCompleto}?text=${textoCodificado}`;

    try {
      const podeAbrir = await Linking.canOpenURL(url);
      if (podeAbrir) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Erro", "O WhatsApp não está instalado ou disponível.");
      }
    } catch (erro) {
      Alert.alert("Erro", "Não foi possível abrir o WhatsApp.");
    }
  }

  return { numero, setNumero, mandarWhatsApp };
}
