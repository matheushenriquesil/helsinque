import React, { useEffect, useRef } from "react";

import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Modal,
  KeyboardAvoidingView,
  Platform,
  Animated,
  ActivityIndicator,
} from "react-native";

import { estilos } from "./stylo";
import { useScript } from "./script";
import { useContatos } from "../../context/ContatosContext";

export default function Main() {
  const {
    contatos,
    atualizarContatos,
    carregandoContatos,
  } = useContatos();

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

  const entrada = useRef(new Animated.Value(0)).current;
  const modalAnimacao = useRef(new Animated.Value(0)).current;

  const botoesEmergencia = useRef(
    Array.from({ length: 3 }, () => new Animated.Value(1))
  ).current;

  const botoesContatos = useRef(
    Array.from({ length: 20 }, () => new Animated.Value(1))
  ).current;

  // ATUALIZAR CONTATOS AO ABRIR A TELA PRINCIPAL
  useEffect(() => {
    async function carregarContatos() {
      try {
        await atualizarContatos();
        console.log("Contatos carregados com sucesso!");
      } catch (erro) {
        console.error("Erro ao carregar contatos:", erro);
      }
    }

    carregarContatos();
  }, []);

  useEffect(() => {
    Animated.timing(entrada, {
      toValue: 1,
      duration: 650,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    Animated.spring(modalAnimacao, {
      toValue: modalVisivel ? 1 : 0,
      speed: 18,
      bounciness: 5,
      useNativeDriver: true,
    }).start();
  }, [modalVisivel]);

  const animarBotao = (
    animacao: Animated.Value,
    pressionado: boolean
  ) => {
    Animated.spring(animacao, {
      toValue: pressionado ? 0.96 : 1,
      useNativeDriver: true,
      speed: 30,
      bounciness: 4,
    }).start();
  };

  const movimentoEntrada = entrada.interpolate({
    inputRange: [0, 1],
    outputRange: [25, 0],
  });

  const escalaModal = modalAnimacao.interpolate({
    inputRange: [0, 1],
    outputRange: [0.92, 1],
  });

  return (
    <View style={estilos.container}>
      <Animated.View
        style={{
          flex: 1,
          opacity: entrada,
          transform: [{ translateY: movimentoEntrada }],
        }}
      >
        <ScrollView
          contentContainerStyle={estilos.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* TÍTULO PRINCIPAL */}
          <Text
            style={estilos.titulo}
            accessibilityRole="header"
          >
            Alerta+
          </Text>

          <Text style={estilos.subtitulo}>
            Painel de Emergência e Disparo Rápido
          </Text>

          {/* SERVIÇOS DE EMERGÊNCIA */}
          <View style={estilos.secaoSOS}>
            <Text
              style={estilos.secaoTitulo}
              accessibilityRole="header"
            >
              Serviços de Emergência
            </Text>

            {[
              { numero: "190", nome: "Polícia", emoji: "🚓" },
              { numero: "192", nome: "SAMU", emoji: "🚑" },
              { numero: "193", nome: "Bombeiros", emoji: "🚒" },
            ].map((servico, index) => (
              <Animated.View
                key={servico.numero}
                style={{
                  transform: [{ scale: botoesEmergencia[index] }],
                }}
              >
                <Pressable
                  style={estilos.botao}
                  onPress={() => ligarEmergencia(servico.numero)}
                  onPressIn={() =>
                    animarBotao(botoesEmergencia[index], true)
                  }
                  onPressOut={() =>
                    animarBotao(botoesEmergencia[index], false)
                  }
                  accessibilityRole="button"
                  accessibilityLabel={`Ligar para ${servico.nome}, número ${servico.numero}`}
                  accessibilityHint="Abre o discador do telefone para realizar a ligação"
                >
                  <Text style={estilos.textobotao}>
                    {servico.emoji} {servico.nome} - {servico.numero}
                  </Text>
                </Pressable>
              </Animated.View>
            ))}
          </View>

          {/* CABEÇALHO DOS CONTATOS */}
          <View style={estilos.cabecalhoContatos}>
            <Text
              style={estilos.secaoTitulo}
              accessibilityRole="header"
            >
              Contatos de Emergência
            </Text>

            <Pressable
              style={estilos.botaoEditar}
              onPress={handleEditarContatos}
              accessibilityRole="button"
              accessibilityLabel="Editar contatos de emergência"
              accessibilityHint="Abre a tela para alterar seus contatos"
            >
              <Text style={estilos.textoBotaoEditar}>
                ✏️ Editar contatos
              </Text>
            </Pressable>
          </View>

          {/* LISTA DE CONTATOS */}
          {carregandoContatos && contatos.length === 0 ? (
            <View style={{ padding: 20, alignItems: "center" }}>
              <ActivityIndicator color="#d62828" size="large" />
              <Text style={{ marginTop: 10 }}>
                Carregando contatos...
              </Text>
            </View>
          ) : contatos.length === 0 ? (
            <Text style={{ textAlign: "center", padding: 20 }}>
              Nenhum contato de emergência cadastrado.
            </Text>
          ) : (
            contatos.map((contato, index) => {
              const animacao =
                botoesContatos[index] ?? botoesContatos[0];

              const temMensagem = Boolean(
                contato.id && mensagens[contato.id]
              );

              return (
                <Animated.View
                  key={contato.id ?? `contato-${index}`}
                  style={{
                    transform: [{ scale: animacao }],
                  }}
                >
                  <View style={estilos.cardContato}>
                    {/* INFORMAÇÕES DO CONTATO */}
                    <View style={estilos.contatoInfo}>
                      <Text
                        style={estilos.contatoNome}
                        accessibilityRole="header"
                      >
                        {contato.nome}
                      </Text>

                      <Text style={estilos.contatoNumero}>
                        {contato.numero}
                      </Text>

                      <Text
                        style={estilos.textoStatusMensagem}
                        accessibilityLabel={
                          temMensagem
                            ? `Mensagem personalizada salva para ${contato.nome}`
                            : `Nenhuma mensagem personalizada salva para ${contato.nome}`
                        }
                      >
                        {temMensagem
                          ? "✓ Mensagem personalizada salva"
                          : "Nenhuma mensagem personalizada"}
                      </Text>
                    </View>

                    {/* BOTÕES DO CONTATO */}
                    <View style={estilos.contatoAcoes}>
                      <Pressable
                        style={estilos.botaoAcaoSecundaria}
                        onPress={() => handleProgramar(contato)}
                        onPressIn={() => animarBotao(animacao, true)}
                        onPressOut={() => animarBotao(animacao, false)}
                        accessibilityRole="button"
                        accessibilityLabel={`Programar mensagem para ${contato.nome}`}
                        accessibilityHint="Abre a edição da mensagem personalizada para este contato"
                      >
                        <Text style={estilos.textoAcaoSecundaria}>
                          Programar mensagem
                        </Text>
                      </Pressable>

                      <Pressable
                        style={estilos.botaoAcaoPrimaria}
                        onPress={() => handleEnviar(contato)}
                        onPressIn={() => animarBotao(animacao, true)}
                        onPressOut={() => animarBotao(animacao, false)}
                        accessibilityRole="button"
                        accessibilityLabel={`Enviar mensagem para ${contato.nome}`}
                        accessibilityHint="Envia a mensagem configurada para este contato"
                      >
                        <Text style={estilos.textoAcaoPrimaria}>
                          Enviar
                        </Text>
                      </Pressable>
                    </View>
                  </View>
                </Animated.View>
              );
            })
          )}
        </ScrollView>
      </Animated.View>

      {/* MODAL DE MENSAGEM PERSONALIZADA */}
      <Modal
        visible={modalVisivel}
        transparent
        animationType="fade"
        onRequestClose={() => {
          if (!salvando) {
            setModalVisivel(false);
          }
        }}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={estilos.fundoModal}
        >
          <Animated.View
            accessibilityViewIsModal
            style={{
              transform: [{ scale: escalaModal }],
              opacity: modalAnimacao,
            }}
          >
            <View style={estilos.caixaModal}>
              <Text
                style={estilos.tituloModal}
                accessibilityRole="header"
              >
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
                placeholderTextColor="#B8C7D3"
                multiline
                textAlignVertical="top"
                style={estilos.campoMensagem}
                accessibilityLabel="Mensagem personalizada"
                accessibilityHint="Digite a mensagem que deseja salvar para este contato"
              />

              {/* SALVAR MENSAGEM */}
              <Pressable
                onPress={handleSalvarMensagem}
                disabled={salvando}
                style={[
                  estilos.botaoSalvarMensagem,
                  salvando && estilos.botaoSalvarDesabilitado,
                ]}
                accessibilityRole="button"
                accessibilityLabel={
                  salvando ? "Salvando mensagem" : "Salvar mensagem"
                }
                accessibilityState={{
                  disabled: salvando,
                  busy: salvando,
                }}
              >
                {salvando ? (
                  <View style={estilos.conteudoBotao}>
                    <ActivityIndicator color="#FFFFFF" />
                    <Text style={estilos.textoBotaoSalvar}>
                      Salvando...
                    </Text>
                  </View>
                ) : (
                  <Text style={estilos.textoBotaoSalvar}>
                    Salvar mensagem
                  </Text>
                )}
              </Pressable>

              {/* CANCELAR */}
              <Pressable
                disabled={salvando}
                onPress={() => setModalVisivel(false)}
                style={estilos.botaoCancelar}
                accessibilityRole="button"
                accessibilityLabel="Cancelar edição da mensagem"
                accessibilityState={{
                  disabled: salvando,
                }}
              >
                <Text style={estilos.textoCancelar}>
                  Cancelar
                </Text>
              </Pressable>
            </View>
          </Animated.View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
}
