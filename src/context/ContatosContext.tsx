
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Contato {
  id?: string;
  nome: string;
  numero: string;
}

interface ContatosContextType {
  contatos: Contato[];
  carregandoContatos: boolean;
  salvarContatos: (novosContatos: Contato[]) => Promise<void>;
  atualizarContatos: () => Promise<void>;
}

const API_URL = "http://192.168.1.82:8000";
const CHAVE_CONTATOS = "@alerta_plus/contatos";

const ContatosContext =
  createContext<ContatosContextType | undefined>(undefined);

export function ContatosProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [contatos, setContatos] = useState<Contato[]>([]);
  const [carregandoContatos, setCarregandoContatos] = useState(true);

  // Busca os contatos diretamente na API
  async function buscarContatos(): Promise<Contato[]> {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticação não encontrado.");
    }

    const resposta = await fetch(`${API_URL}/contatos/`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!resposta.ok) {
      const erro = await resposta.text();
      console.error("Erro ao buscar contatos:", erro);

      throw new Error("Não foi possível buscar os contatos na API.");
    }

    const dados = await resposta.json();

    return dados.map((item: any) => ({
      id: String(item.id),
      nome: item.nome,
      numero: item.telefone,
    }));
  }

  // Atualiza os contatos na tela e no armazenamento local
  async function atualizarContatos() {
    const lista = await buscarContatos();

    setContatos(lista);

    await AsyncStorage.setItem(
      CHAVE_CONTATOS,
      JSON.stringify(lista)
    );
  }

  // Carrega os contatos quando o contexto inicia
  useEffect(() => {
    async function carregarContatos() {
      try {
        await atualizarContatos();
      } catch (erro) {
        console.error("Erro ao carregar contatos da API:", erro);

        // Não reutiliza IDs locais como se fossem IDs do banco
        setContatos([]);

        await AsyncStorage.removeItem(CHAVE_CONTATOS);
      } finally {
        setCarregandoContatos(false);
      }
    }

    carregarContatos();
  }, []);

  // Cadastra ou atualiza os contatos
  async function salvarContatos(novosContatos: Contato[]) {
    const token = await AsyncStorage.getItem("token");

    if (!token) {
      throw new Error("Token de autenticação não encontrado.");
    }

    for (const contato of novosContatos) {
      const nome = contato.nome.trim();
      const telefone = contato.numero.trim();

      if (!nome || !telefone) {
        throw new Error(
          "Preencha o nome e o telefone dos três contatos."
        );
      }

      const existeNoBanco = Boolean(contato.id);

      const url = existeNoBanco
        ? `${API_URL}/contatos/${contato.id}`
        : `${API_URL}/contatos/`;

      const resposta = await fetch(url, {
        method: existeNoBanco ? "PUT" : "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          telefone,
        }),
      });

      if (!resposta.ok) {
        const erro = await resposta.text();

        console.error(
          `Erro ao ${existeNoBanco ? "atualizar" : "cadastrar"} contato:`,
          erro
        );

        throw new Error(
          `Não foi possível ${existeNoBanco ? "atualizar" : "cadastrar"} o contato ${nome}.`
        );
      }
    }

    // Busca os IDs reais gerados pelo Supabase
    await atualizarContatos();
  }

  return (
    <ContatosContext.Provider
      value={{
        contatos,
        carregandoContatos,
        salvarContatos,
        atualizarContatos,
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
