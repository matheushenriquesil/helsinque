import { Stack } from "expo-router";
import { ContatosProvider } from "../context/ContatosContext";

export default function RootLayout() {
  return (
    <ContatosProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </ContatosProvider>
  );
}

