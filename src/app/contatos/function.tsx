import { Alert } from 'react-native';

export default function SalvarContatos(
  nome1: string,
  nome2: string,
  nome3: string
) {
  Alert.alert(
    'Contatos',
    `Contato 1: ${nome1}\nContato 2: ${nome2}\nContato 3: ${nome3}`
  );
}
