import { View, Text, TextInput, Button } from "react-native";
import { router } from "expo-router";
import { style } from "./style";
import { fazerLogin } from "./function";

export default function Index() {
  const handleLogin = () => {
    fazerLogin();
  };

  return (
    <View style={style.container}>

      <View>
        <Text style={style.textos}>
          Seja Bem Vindo Ao Alerta +
        </Text>
      </View>

      <View style={style.containertext}>
        <TextInput
          style={style.textosInput}
          placeholder="batatatas@gmail.com"
        />
      </View>

      <View>
        <TextInput
          style={style.textosInput}
          placeholder="insira uma senha valida"
          secureTextEntry
        />
      </View>

      <View>
        <Button title="Entrar" color="#d62828" onPress={handleLogin} />
      </View>

      <View>
        <Text>nao tem conta?</Text>

        <Button
          title="Crie uma"
        />
      </View>

    </View>
  );
}