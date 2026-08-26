import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24, backgroundColor: "#0f0f10" },

  titulo: { fontSize: 32, fontWeight: "bold", color: "#ffffff", textAlign: "center", marginBottom: 10 },

  subtitulo: { fontSize: 16, color: "#b8b8b8", textAlign: "center", marginBottom: 24 },

  entrada: { backgroundColor: "#1b1b1d", borderWidth: 1, borderColor: "#2f2f35", color: "#ffffff", borderRadius: 14, paddingHorizontal: 16, paddingVertical: 14, marginBottom: 18, fontSize: 16 },

  botao: { backgroundColor: "#d62828", paddingVertical: 16, borderRadius: 14, alignItems: "center", shadowColor: "#000", shadowOpacity: 0.35, shadowRadius: 8, elevation: 4 },

  textobotao: { color: "#ffffff", fontSize: 20, fontWeight: "bold", letterSpacing: 1 },
});