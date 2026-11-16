
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
  },

  conteudo: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 35,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 12,
  },

  subtitulo: {
    color: "#D1D9E0",
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 30,
  },

  grupoCampo: {
    marginBottom: 20,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 9,
  },

  input: {
    backgroundColor: "#1D2A35",
    color: "#FFFFFF",
    borderWidth: 1.5,
    borderColor: "#718394",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 17,
    minHeight: 58,
    fontSize: 17,
  },

  botao: {
    backgroundColor: "#D62828",
    minHeight: 58,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  botaoDesabilitado: {
    opacity: 0.65,
  },

  conteudoBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
  },

  textoBotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoLogin: {
    minHeight: 52,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 18,
    padding: 8,
  },

  textoLogin: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
    textDecorationLine: "underline",
  },
});
