
import { Alert, Linking } from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";

import AsyncStorage from "@react-native-async-storage/async-storage";

import type { Contato } from "../../context/ContatosContext";

const CHAVE_MENSAGENS = "@alerta_plus/mensagens";

type Mensagens = Record<string, string>;

export function useScript() {

  // ESTADOS

  const [mensagens, setMensagens] = useState<Mensagens>({});

  const [carregandoMensagens, setCarregandoMensagens] =
    useState(true);

  const [contatoSelecionado, setContatoSelecionado] =
    useState<Contato | null>(null);

  const [textoMensagem, setTextoMensagem] = useState("");

  const [modalVisivel, setModalVisivel] = useState(false);

  const [salvando, setSalvando] = useState(false);


  // CARREGAR MENSAGENS SALVAS

  useEffect(() => {

    async function carregarMensagens() {

      try {

        const dados = await AsyncStorage.getItem(CHAVE_MENSAGENS);

        if (dados) {

          const resultado: unknown = JSON.parse(dados);

          if (
            resultado !== null &&
            typeof resultado === "object" &&
            !Array.isArray(resultado)
          ) {

            setMensagens(resultado as Mensagens);

          }

        }

      } catch {

        Alert.alert(
          "Erro",
          "Não foi possível carregar as mensagens."
        );

      } finally {

        setCarregandoMensagens(false);

      }

    }

    carregarMensagens();

  }, []);


  // ABRIR DISCADOR DE EMERGÊNCIA

  const ligarEmergencia = async (numero: string) => {

    try {

      const url = `tel:${numero}`;

      await Linking.openURL(url);

    } catch {

      Alert.alert(
        "Erro",
        "Não foi possível abrir o discador neste dispositivo."
      );

    }

  };


  // ABRIR WHATSAPP

  const abrirWhatsApp = async (
    telefoneOriginal: string,
    mensagem = ""
  ) => {

    let telefone = telefoneOriginal.replace(/\D/g, "");

    if (telefone.length < 10) {

      Alert.alert(
        "Número inválido",
        "Confira o telefone e o DDD."
      );

      return;

    }

    if (!telefone.startsWith("55")) {

      telefone = `55${telefone}`;

    }

    const url =
      `https://wa.me/${telefone}` +
      (mensagem ? `?text=${encodeURIComponent(mensagem)}` : "");

    try {

      await Linking.openURL(url);

    } catch {

      Alert.alert(
        "Erro",
        "Não foi possível abrir o WhatsApp."
      );

    }

  };


  // ENVIAR MENSAGEM PARA CONTATO

  const handleEnviar = async (contato: Contato) => {

    if (carregandoMensagens) {

      Alert.alert(
        "Aguarde",
        "As mensagens ainda estão carregando."
      );

      return;

    }

    await abrirWhatsApp(
      contato.numero,
      mensagens[contato.id] ?? ""
    );

  };


  // ABRIR MODAL PARA EDITAR MENSAGEM

  const handleProgramar = (contato: Contato) => {

    if (carregandoMensagens) {

      Alert.alert(
        "Aguarde",
        "As mensagens ainda estão carregando."
      );

      return;

    }

    setContatoSelecionado(contato);

    setTextoMensagem(mensagens[contato.id] ?? "");

    setModalVisivel(true);

  };


  // SALVAR MENSAGEM PERSONALIZADA

  const handleSalvarMensagem = async () => {

    if (!contatoSelecionado || salvando) return;

    const novasMensagens = {

      ...mensagens,

      [contatoSelecionado.id]: textoMensagem.trim(),

    };

    try {

      setSalvando(true);

      await AsyncStorage.setItem(
        CHAVE_MENSAGENS,
        JSON.stringify(novasMensagens)
      );

      setMensagens(novasMensagens);

      setModalVisivel(false);

      Alert.alert(
        "Sucesso",
        "Mensagem personalizada salva com sucesso!"
      );

    } catch {

      Alert.alert(
        "Erro",
        "Não foi possível salvar a mensagem."
      );

    } finally {

      setSalvando(false);

    }

  };


  // EDITAR CONTATOS

  const handleEditarContatos = () => {

    router.push("/contatos");

  };


  // RETORNO DAS FUNÇÕES E ESTADOS

  return {

    mensagens,

    carregandoMensagens,

    contatoSelecionado,

    textoMensagem,

    setTextoMensagem,

    modalVisivel,

    setModalVisivel,

    salvando,

    ligarEmergencia,

    handleEnviar,

    handleProgramar,

    handleSalvarMensagem,

    handleEditarContatos,

  };

}