
const API_URL = "http://192.168.1.82:8000";

export async function cadastrarUsuario(
  nome: string,
  email: string,
  senha: string
) {
  const resposta = await fetch(`${API_URL}/cadastro`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nome.trim(),
      email: email.trim().toLowerCase(),
      senha,
    }),
  });

  const dados = await resposta.json().catch(() => ({}));

  if (!resposta.ok) {
    throw new Error(
      dados.detail ||
      dados.mensagem ||
      "Não foi possível criar sua conta."
    );
  }

  return dados;
}
