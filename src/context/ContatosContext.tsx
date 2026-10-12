import { View, Text, TextInput, ScrollView, Pressable, Alert } from "react-native";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Contato {
  id: string;
  nome: string;
  numero: string;
}

interface ContatosContextType {
  contatos: Contato[];
  carregandoContatos: boolean;
  salvarContatos: (novosContatos: Contato[]) => Promise<void>;
}

const CHAVE_CONTATOS = "@alerta_plus/contatos";

const contatosPadrao: Contato[] = [
  { id: "1", nome: "Contato 1", numero: "(11) 99999-0001" },
  { id: "2", nome: "Contato 2", numero: "(11) 99999-0002" },
  { id: "3", nome: "Contato 3", numero: "(11) 99999-0003" },
];

const ContatosContext =
  createContext<ContatosContextType | undefined>(undefined);

export function ContatosProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contatos, setContatos] =
    useState<Contato[]>(contatosPadrao);

  const [carregandoContatos, setCarregandoContatos] =
    useState(true);

  useEffect(() => {
    async function carregarContatos() {
      try {
        const dados = await AsyncStorage.getItem(CHAVE_CONTATOS);

        if (dados !== null) {
          const contatosSalvos: unknown = JSON.parse(dados);

          if (
            Array.isArray(contatosSalvos) &&
            contatosSalvos.length === 3 &&
            contatosSalvos.every(
              (item) =>
                item &&
                typeof item.id === "string" &&
                typeof item.nome === "string" &&
                typeof item.numero === "string"
            )
          ) {
            setContatos(contatosSalvos as Contato[]);
          }
        }
      } catch (erro) {
        console.error("Erro ao carregar contatos:", erro);
      } finally {
        setCarregandoContatos(false);
      }
    }

    carregarContatos();
  }, []);

  const salvarContatos = async (novosContatos: Contato[]) => {
    // Primeiro grava no armazenamento. Só atualiza o estado
    // se a gravação der certo.
    await AsyncStorage.setItem(
      CHAVE_CONTATOS,
      JSON.stringify(novosContatos)
    );

    setContatos(novosContatos);
  };

  return (
    <ContatosContext.Provider
      value={{
        contatos,
        carregandoContatos,
        salvarContatos,
      }}
    >
      {children}
    </ContatosContext.Provider>
  );
}

export function useContatos() {
  const context = useContext(ContatosContext);

  if (!context) {
    throw new Error(
      "useContatos deve ser usado dentro de um ContatosProvider"
    );
  }

  return context;
}