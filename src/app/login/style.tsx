
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f10",
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 35,
  },

  conteudo: {
    width: "100%",
    maxWidth: 420,
    alignSelf: "center",
  },

  logoContainer: {
    alignItems: "center",
    marginBottom: 18,
  },

  logoCirculo: {
    width: 86,
    height: 86,
    borderRadius: 26,
    backgroundColor: "#1b1b1d",
    borderWidth: 1,
    borderColor: "#3a3a42",
    alignItems: "center",
    justifyContent: "center",
  },

  logoCruz: {
    color: "#d62828",
    fontSize: 58,
    fontWeight: "bold",
    lineHeight: 66,
  },

  titulo: {
    color: "#ffffff",
    fontSize: 34,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  tituloDestaque: {
    color: "#d62828",
  },

  subtitulo: {
    color: "#b8b8b8",
    fontSize: 15,
    textAlign: "center",
    marginTop: 8,
    marginBottom: 34,
  },

  formulario: {
    backgroundColor: "#1b1b1d",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#2f2f35",
    padding: 20,
  },

  label: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 9,
  },

  textosInput: {
    backgroundColor: "#242428",
    borderWidth: 1,
    borderColor: "#3a3a42",
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 14,
    color: "#ffffff",
    fontSize: 15,
    marginBottom: 20,
  },

  botaoEntrar: {
    backgroundColor: "#d62828",
    paddingVertical: 15,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
    elevation: 3,
  },

  textoBotaoEntrar: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },

  areaCadastro: {
    borderTopWidth: 1,
    borderTopColor: "#2f2f35",
    marginTop: 24,
    paddingTop: 20,
    alignItems: "center",
  },

  naotemconta: {
    color: "#b8b8b8",
    fontSize: 14,
    marginBottom: 12,
  },

  botaoCadastro: {
    width: "100%",
    paddingVertical: 13,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: "#d62828",
    alignItems: "center",
  },

  textoBotaoCadastro: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },

  rodape: {
    color: "#66666e",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1.2,
    marginTop: 28,
  },
});