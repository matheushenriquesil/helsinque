import React from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { estilos } from "./stylo";
import { useScript } from "./script";
import { useContatos } from "../../context/ContatosContext";

export default function Main() {
  const { numero, setNumero, mandarWhatsApp } = useScript();
  const { contatos } = useContatos();

  const handleProgramar = (nome: string) => {
    Alert.alert(
      "Programar Mensagem",
      `Agendamento de mensagem para ${nome} em desenvolvimento.`
    );
  };

  const handleEnviar = (nome: string, telefone: string) => {
    Alert.alert(
      "Enviar Mensagem",
      `Envio direto de mensagem para ${nome} (${telefone}) em desenvolvimento.`
    );
  };

  return (
    <View style={estilos.container}>
      <ScrollView
        contentContainerStyle={estilos.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={estilos.titulo}>Alerta +</Text>
        <Text style={estilos.subtitulo}>
          Painel de Emergência e Disparo Rápido
        </Text>

        {/* Seção do Botão SOS */}
        <View style={estilos.secaoSOS}>
          <TextInput
            style={estilos.entrada}
            placeholder="Digite o número de telefone para SOS"
            placeholderTextColor="#8a8a8a"
            value={numero}
            onChangeText={setNumero}
            keyboardType="phone-pad"
          />

          <Pressable style={estilos.botao} onPress={mandarWhatsApp}>
            <Text style={estilos.textobotao}>DISPARAR SOS</Text>
          </Pressable>
        </View>

        {/* Seção de Contatos Cadastrados */}
        <Text style={estilos.secaoTitulo}>Contatos de Emergência</Text>

        {contatos.map((contato) => (
          <View key={contato.id} style={estilos.cardContato}>
            <View style={estilos.contatoInfo}>
              <Text style={estilos.contatoNome}>{contato.nome}</Text>
              <Text style={estilos.contatoNumero}>{contato.numero}</Text>
            </View>

            <View style={estilos.contatoAcoes}>
              <Pressable
                style={estilos.botaoAcaoSecundaria}
                onPress={() => handleProgramar(contato.nome)}
              >
                <Text style={estilos.textoAcaoSecundaria}>Programar msg</Text>
              </Pressable>

              <Pressable
                style={estilos.botaoAcaoPrimaria}
                onPress={() => handleEnviar(contato.nome, contato.numero)}
              >
                <Text style={estilos.textoAcaoPrimaria}>Enviar</Text>
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}