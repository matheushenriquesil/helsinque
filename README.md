
# Alerta+ — Front-end

Aplicativo móvel desenvolvido com React Native, Expo e TypeScript para facilitar o acesso a contatos de confiança e serviços de emergência.

## Tecnologias
- React Native
- Expo
- TypeScript
- Expo Router
- AsyncStorage
- Supabase
- API REST com FastAPI

## Funcionalidades
- Cadastro e login de usuários.
- Cadastro, consulta, edição e exclusão de até três contatos.
- Atalhos para Polícia (190), SAMU (192) e Bombeiros (193).
- Abertura de conversas pelo WhatsApp.
- Criação e armazenamento local de mensagens personalizadas.

## Como executar

### 1. Clonar o repositório
```bash
git clone https://github.com/matheushenriquesil/helsinque.git
```

### 2. Acessar a pasta
```bash
cd helsinque
```

### 3. Instalar dependências
```bash
npm install
```

### 4. Configurar a API

No arquivo responsável pelas requisições, configure o endereço da API:

```typescript
const API_URL = "http://IP_DO_COMPUTADOR:8000";
```

Substitua `IP_DO_COMPUTADOR` pelo IPv4 da máquina que está executando o back-end.

Para consultar o IP no Windows:
```bash
ipconfig
```

O celular e o computador precisam estar na mesma rede Wi-Fi. Não utilize `localhost` no celular físico.

### 5. Iniciar o projeto
```bash
npx expo start
```

Para limpar o cache:
```bash
npx expo start -c
```

Depois, leia o QR Code pelo Expo Go ou abra o projeto em um emulador Android.

## Integração

O front-end utiliza a API do Alerta+ para autenticação e gerenciamento dos contatos. Portanto, o back-end precisa estar em execução para que essas funcionalidades funcionem corretamente.
