
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
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
    marginBottom: 20,
  },

  logoCirculo: {
    width: 92,
    height: 92,
    borderRadius: 26,
    backgroundColor: "#1D2A35",
    borderWidth: 1.5,
    borderColor: "#718394",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor: "#D62828",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },

  logoCruz: {
    color: "#FF5C5C",
    fontSize: 62,
    fontWeight: "bold",
    lineHeight: 72,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  tituloDestaque: {
    color: "#FF5C5C",
  },

  subtitulo: {
    color: "#D1D9E0",
    fontSize: 17,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 34,
    lineHeight: 24,
  },

  formulario: {
    backgroundColor: "#1D2A35",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#526474",
    padding: 20,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  label: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "600",
    marginBottom: 9,
  },

  textosInput: {
    backgroundColor: "#263746",
    borderWidth: 1.5,
    borderColor: "#8296A7",
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 16,
    minHeight: 58,
    color: "#FFFFFF",
    fontSize: 17,
    marginBottom: 22,
  },

  botaoEntrar: {
    backgroundColor: "#D62828",
    minHeight: 60,
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 13,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    elevation: 4,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 7,
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

  textoBotaoEntrar: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  areaCadastro: {
    borderTopWidth: 1,
    borderTopColor: "#526474",
    marginTop: 26,
    paddingTop: 22,
    alignItems: "center",
  },

  naotemconta: {
    color: "#D1D9E0",
    fontSize: 16,
    marginBottom: 14,
    textAlign: "center",
  },

  botaoCadastro: {
    width: "100%",
    minHeight: 56,
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#FF5C5C",
    alignItems: "center",
    justifyContent: "center",
  },

  textoBotaoCadastro: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },

  rodape: {
    color: "#B8C7D3",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    letterSpacing: 1,
    marginTop: 28,
  },
});
