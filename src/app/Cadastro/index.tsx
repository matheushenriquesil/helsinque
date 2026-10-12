import {StyleSheet, Text, View, TextInput, Button} from 'react-native';
import React from 'react';
import { styles } from './style';

export default function CriarConta() {
  return (
    <View>
        <View>
            <Text>Criar Conta</Text>
        </View>

        <View>
            <TextInput placeholder='Nome' />
        </View>
        
        <View>
            <View>
                <TextInput placeholder='Email' />
            </View>
        
            <View>
                <TextInput placeholder='Senha' />
            </View>
        
            <View>
                <TextInput placeholder='Confirmar Senha' />
            </View>
        
            <View>
                <Button title='Criar Conta' />
            </View>
        </View>

    </View>
  );
}