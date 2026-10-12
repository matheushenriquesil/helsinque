
import React from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { estilos } from "./stylo";

import { useScript } from "./script";

import { useContatos } from "../../context/ContatosContext";


export default function Main() {

  // CONTATOS SALVOS NO CONTEXT

  const { contatos } = useContatos();


  // FUNÇÕES DO SCRIPT

  const {

    mensagens,

    contatoSelecionado,

    textoMensagem,

    setTextoMensagem,

    modalVisivel,

    setModalVisivel,

    salvando,

    ligarEmergencia,

    handleEnviar,

    handleProgramar,

    handleSalvarMensagem,

    handleEditarContatos,

  } = useScript();


  // INTERFACE PRINCIPAL

  return (

    <View style={estilos.container}>

      <ScrollView
        contentContainerStyle={estilos.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >

        {/* TÍTULO PRINCIPAL */}

        <Text style={estilos.titulo}>
          Alerta +
        </Text>

        <Text style={estilos.subtitulo}>
          Painel de Emergência e Disparo Rápido
        </Text>


        {/* SERVIÇOS DE EMERGÊNCIA */}

        <View style={estilos.secaoSOS}>

          <Text style={estilos.secaoTitulo}>
            Serviços de Emergência
          </Text>


          {/* POLÍCIA */}

          <Pressable
            style={estilos.botao}
            onPress={() => ligarEmergencia("190")}
            accessibilityRole="button"
            accessibilityLabel="Abrir discador para Polícia 190"
          >

            <Text style={estilos.textobotao}>
              🚓 POLÍCIA - 190
            </Text>

          </Pressable>


          {/* SAMU */}

          <Pressable
            style={estilos.botao}
            onPress={() => ligarEmergencia("192")}
            accessibilityRole="button"
            accessibilityLabel="Abrir discador para SAMU 192"
          >

            <Text style={estilos.textobotao}>
              🚑 SAMU - 192
            </Text>

          </Pressable>


          {/* BOMBEIROS */}

          <Pressable
            style={estilos.botao}
            onPress={() => ligarEmergencia("193")}
            accessibilityRole="button"
            accessibilityLabel="Abrir discador para Bombeiros 193"
          >

            <Text style={estilos.textobotao}>
              🚒 BOMBEIROS - 193
            </Text>

          </Pressable>

        </View>


        {/* CABEÇALHO DOS CONTATOS */}

        <View style={estilos.cabecalhoContatos}>

          <Text style={estilos.secaoTitulo}>
            Contatos de Emergência
          </Text>

          <Pressable
            style={estilos.botaoEditar}
            onPress={handleEditarContatos}
          >

            <Text style={estilos.textoBotaoEditar}>
              ✏️ Editar contatos
            </Text>

          </Pressable>

        </View>


        {/* LISTA DE CONTATOS */}

        {contatos.map((contato) => (

          <View
            key={contato.id}
            style={estilos.cardContato}
          >

            {/* INFORMAÇÕES DO CONTATO */}

            <View style={estilos.contatoInfo}>

              <Text style={estilos.contatoNome}>
                {contato.nome}
              </Text>

              <Text style={estilos.contatoNumero}>
                {contato.numero}
              </Text>

              <Text style={estilos.textoStatusMensagem}>

                {mensagens[contato.id]
                  ? "Mensagem personalizada salva"
                  : "Nenhuma mensagem personalizada"}

              </Text>

            </View>


            {/* BOTÕES DO CONTATO */}

            <View style={estilos.contatoAcoes}>

              <Pressable
                style={estilos.botaoAcaoSecundaria}
                onPress={() => handleProgramar(contato)}
              >

                <Text style={estilos.textoAcaoSecundaria}>
                  Programar msg
                </Text>

              </Pressable>


              <Pressable
                style={estilos.botaoAcaoPrimaria}
                onPress={() => handleEnviar(contato)}
              >

                <Text style={estilos.textoAcaoPrimaria}>
                  Enviar
                </Text>

              </Pressable>

            </View>

          </View>

        ))}

      </ScrollView>


      {/* MODAL DE MENSAGEM PERSONALIZADA */}

      <Modal
        visible={modalVisivel}
        transparent
        animationType="slide"
        onRequestClose={() => {
          if (!salvando) setModalVisivel(false);
        }}
      >

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={estilos.fundoModal}
        >

          <View style={estilos.caixaModal}>

            <Text style={estilos.tituloModal}>
              Editar mensagem
            </Text>

            <Text style={estilos.destinatarioModal}>
              Destinatário: {contatoSelecionado?.nome}
            </Text>


            {/* CAMPO DA MENSAGEM */}

            <TextInput
              value={textoMensagem}
              onChangeText={setTextoMensagem}
              placeholder="Escreva sua mensagem..."
              placeholderTextColor="#8a8a8a"
              multiline
              textAlignVertical="top"
              style={estilos.campoMensagem}
            />


            {/* SALVAR MENSAGEM */}

            <Pressable
              onPress={handleSalvarMensagem}
              disabled={salvando}
              style={[
                estilos.botaoSalvarMensagem,
                salvando && estilos.botaoSalvarDesabilitado,
              ]}
            >

              <Text style={estilos.textoBotaoSalvar}>

                {salvando
                  ? "Salvando..."
                  : "Salvar mensagem"}

              </Text>

            </Pressable>


            {/* CANCELAR */}

            <Pressable
              disabled={salvando}
              onPress={() => setModalVisivel(false)}
              style={estilos.botaoCancelar}
            >

              <Text style={estilos.textoCancelar}>
                Cancelar
              </Text>

            </Pressable>

          </View>

        </KeyboardAvoidingView>

      </Modal>

    </View>

  );

}