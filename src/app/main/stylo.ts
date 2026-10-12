
import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({

  // CONTAINER PRINCIPAL

  container: {
    flex: 1,
    backgroundColor: "#0f0f10",
  },

  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 45,
    paddingBottom: 50,
  },


  // TÍTULO DO APLICATIVO

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffffff",
    textAlign: "center",
    marginBottom: 8,
    letterSpacing: 1,
  },

  subtitulo: {
    fontSize: 15,
    color: "#b8b8b8",
    textAlign: "center",
    marginBottom: 30,
    lineHeight: 22,
  },


  // SEÇÃO DE EMERGÊNCIA

  secaoSOS: {
    backgroundColor: "#1b1b1d",
    borderRadius: 16,
    padding: 18,
    marginBottom: 30,

    borderWidth: 1,
    borderColor: "#2f2f35",

    gap: 14,
  },

  secaoTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },


  // ESTILO BASE DOS BOTÕES DE EMERGÊNCIA

  botao: {
    backgroundColor: "#d62828",

    minHeight: 60,
    paddingVertical: 16,
    paddingHorizontal: 12,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",

    elevation: 3,
  },

  textobotao: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    letterSpacing: 0.5,
  },


  // CORES INDIVIDUAIS DOS SERVIÇOS

  botaoPolicia: {
    backgroundColor: "#2455a4",
  },

  botaoSamu: {
    backgroundColor: "#b91c1c",
  },

  botaoBombeiros: {
    backgroundColor: "#c65a16",
  },


  // CABEÇALHO DOS CONTATOS

  cabecalhoContatos: {
    marginBottom: 18,
  },

  botaoEditar: {
    backgroundColor: "#242428",

    borderWidth: 1,
    borderColor: "#3a3a42",

    minHeight: 50,

    paddingVertical: 12,
    paddingHorizontal: 14,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",

    marginTop: 12,
  },

  textoBotaoEditar: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },


  // CARDS DOS CONTATOS

  cardContato: {
    backgroundColor: "#1b1b1d",

    borderRadius: 16,
    padding: 18,

    marginBottom: 16,

    borderWidth: 1,
    borderColor: "#2f2f35",

    elevation: 2,
  },

  contatoInfo: {
    marginBottom: 16,
  },

  contatoNome: {
    color: "#ffffff",
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 6,
  },

  contatoNumero: {
    color: "#b8b8b8",
    fontSize: 16,
  },

  textoStatusMensagem: {
    color: "#b8b8b8",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 20,
  },


  // AÇÕES DOS CONTATOS

  contatoAcoes: {
    flexDirection: "row",
    gap: 10,
  },

  botaoAcaoSecundaria: {
    flex: 1,

    backgroundColor: "#303036",

    borderWidth: 1,
    borderColor: "#45454d",

    minHeight: 52,

    paddingVertical: 12,
    paddingHorizontal: 8,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  textoAcaoSecundaria: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },

  botaoAcaoPrimaria: {
    flex: 1,

    backgroundColor: "#d62828",

    minHeight: 52,

    paddingVertical: 12,
    paddingHorizontal: 8,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  textoAcaoPrimaria: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "bold",
  },


  // FUNDO DO MODAL

  fundoModal: {
    flex: 1,

    justifyContent: "center",

    padding: 20,

    backgroundColor: "rgba(0,0,0,0.80)",
  },


  // CAIXA DO MODAL

  caixaModal: {
    backgroundColor: "#1b1b1d",

    padding: 22,

    borderRadius: 18,

    borderWidth: 1,
    borderColor: "#3a3a42",

    gap: 16,
  },

  tituloModal: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffffff",
  },

  destinatarioModal: {
    color: "#b8b8b8",
    fontSize: 16,
  },


  // CAMPO DE MENSAGEM

  campoMensagem: {
    minHeight: 140,

    backgroundColor: "#242428",

    borderWidth: 1,
    borderColor: "#45454d",

    borderRadius: 12,

    padding: 14,

    color: "#ffffff",

    fontSize: 16,
    lineHeight: 23,
  },


  // BOTÃO SALVAR MENSAGEM

  botaoSalvarMensagem: {
    backgroundColor: "#d62828",

    minHeight: 54,

    paddingVertical: 14,

    borderRadius: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  botaoSalvarDesabilitado: {
    opacity: 0.6,
  },

  textoBotaoSalvar: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },


  // BOTÃO CANCELAR

  botaoCancelar: {
    minHeight: 48,

    padding: 12,

    alignItems: "center",
    justifyContent: "center",
  },

  textoCancelar: {
    color: "#b8b8b8",
    fontSize: 16,
    fontWeight: "500",
  },

});