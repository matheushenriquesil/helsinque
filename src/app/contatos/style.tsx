import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
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
    fontSize: 26,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 14,
    color: "#b8b8b8",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  cardContato: {
    backgroundColor: "#1b1b1d",
    borderRadius: 14,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#2f2f35",
  },
  cardTitulo: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#242428",
    borderWidth: 1,
    borderColor: "#3a3a42",
    color: "#ffffff",
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
  },
  botaoSalvar: {
    backgroundColor: "#d62828",
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
    elevation: 3,
  },
  textoBotao: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

