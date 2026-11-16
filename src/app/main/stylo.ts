
import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 50,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 1,
  },

  subtitulo: {
    fontSize: 17,
    color: "#D1D9E0",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 25,
  },

  secaoSOS: {
    backgroundColor: "#1D2A35",
    borderRadius: 16,
    padding: 18,
    marginBottom: 30,
    borderWidth: 1,
    borderColor: "#526474",
    gap: 14,
  },

  secaoTitulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },

  botao: {
    backgroundColor: "#D62828",
    minHeight: 60,
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  textobotao: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.3,
  },

  botaoPolicia: {
    backgroundColor: "#2455A4",
  },

  botaoSamu: {
    backgroundColor: "#B91C1C",
  },

  botaoBombeiros: {
    backgroundColor: "#C65A16",
  },

  cabecalhoContatos: {
    marginBottom: 18,
  },

  botaoEditar: {
    backgroundColor: "#263746",
    borderWidth: 1,
    borderColor: "#718394",
    minHeight: 52,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },

  textoBotaoEditar: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "center",
  },

  cardContato: {
    backgroundColor: "#1D2A35",
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#526474",
    elevation: 3,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },

  contatoInfo: {
    marginBottom: 16,
  },

  contatoNome: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },

  contatoNumero: {
    color: "#D1D9E0",
    fontSize: 17,
  },

  textoStatusMensagem: {
    color: "#D1D9E0",
    fontSize: 15,
    marginTop: 10,
    lineHeight: 22,
  },

  contatoAcoes: {
    flexDirection: "row",
    gap: 10,
  },

  botaoAcaoSecundaria: {
    flex: 1,
    backgroundColor: "#263746",
    borderWidth: 1,
    borderColor: "#718394",
    minHeight: 54,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  textoAcaoSecundaria: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoAcaoPrimaria: {
    flex: 1,
    backgroundColor: "#D62828",
    minHeight: 54,
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  textoAcaoPrimaria: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },

  fundoModal: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "rgba(0,0,0,0.85)",
  },

  caixaModal: {
    backgroundColor: "#1D2A35",
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#718394",
    gap: 16,
  },

  tituloModal: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#FFFFFF",
  },

  destinatarioModal: {
    color: "#D1D9E0",
    fontSize: 17,
    lineHeight: 24,
  },

  campoMensagem: {
    minHeight: 140,
    backgroundColor: "#263746",
    borderWidth: 1,
    borderColor: "#8296A7",
    borderRadius: 12,
    padding: 14,
    color: "#FFFFFF",
    fontSize: 17,
    lineHeight: 25,
  },

  botaoSalvarMensagem: {
    backgroundColor: "#D62828",
    minHeight: 56,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  botaoSalvarDesabilitado: {
    opacity: 0.6,
  },

  conteudoBotao: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  textoBotaoSalvar: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 17,
    textAlign: "center",
  },

  botaoCancelar: {
    minHeight: 50,
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  textoCancelar: {
    color: "#D1D9E0",
    fontSize: 17,
    fontWeight: "600",
  },
});
