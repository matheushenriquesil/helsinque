import React, { createContext, useContext, useState, ReactNode } from "react";

export interface Contato {
  id: string;
  nome: string;
  numero: string;
}

interface ContatosContextType {
  contatos: Contato[];
  salvarContatos: (novosContatos: Contato[]) => void;
}

const ContatosContext = createContext<ContatosContextType | undefined>(undefined);

export function ContatosProvider({ children }: { children: ReactNode }) {
  const [contatos, setContatos] = useState<Contato[]>([
    { id: "1", nome: "Contato 1", numero: "(11) 99999-0001" },
    { id: "2", nome: "Contato 2", numero: "(11) 99999-0002" },
    { id: "3", nome: "Contato 3", numero: "(11) 99999-0003" },
  ]);

  const salvarContatos = (novosContatos: Contato[]) => {
    setContatos(novosContatos);
  };

  return (
    <ContatosContext.Provider value={{ contatos, salvarContatos }}>
      {children}
    </ContatosContext.Provider>
  );
}

export function useContatos() {
  const context = useContext(ContatosContext);
  if (!context) {
    throw new Error("useContatos deve ser usado dentro de um ContatosProvider");
  }
  return context;
}

