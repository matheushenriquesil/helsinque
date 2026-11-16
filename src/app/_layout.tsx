
import { useEffect } from "react";
import { Stack } from "expo-router";
import { ContatosProvider } from "../context/ContatosContext";
import { verificarSessao } from "../../functions/session";

export default function RootLayout() {
  useEffect(() => {
    verificarSessao();
  }, []);

  return (
    <ContatosProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: "#0F0F10",
          },
        }}
      />
    </ContatosProvider>
  );
}
