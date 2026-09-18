import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f10",
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 15,
    color: "#b8b8b8",
    textAlign: "center",
    marginBottom: 20,
  },
  secaoSOS: {
    marginBottom: 26,
  },
  entrada: {
    backgroundColor: "#1b1b1d",
    borderWidth: 1,
    borderColor: "#2f2f35",
    color: "#ffffff",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginBottom: 14,
    fontSize: 16,
  },
  botao: {
    backgroundColor: "#d62828",
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  textobotao: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  secaoTitulo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 14,
    marginTop: 10,
  },
  cardContato: {
    backgroundColor: "#1b1b1d",
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#2f2f35",
  },
  contatoInfo: {
    marginBottom: 12,
  },
  contatoNome: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  contatoNumero: {
    color: "#a0a0a8",
    fontSize: 15,
  },
  contatoAcoes: {
    flexDirection: "row",
    gap: 10,
  },
  botaoAcaoSecundaria: {
    flex: 1,
    backgroundColor: "#2a2a30",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  textoAcaoSecundaria: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "600",
  },
  botaoAcaoPrimaria: {
    flex: 1,
    backgroundColor: "#d62828",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  textoAcaoPrimaria: {
    color: "#ffffff",
    fontSize: 13,
    fontWeight: "bold",
  },
});