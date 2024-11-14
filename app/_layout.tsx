import { setupDatabase } from "@/database/db";
import { Stack } from "expo-router";
import { setStatusBarStyle } from "expo-status-bar";
import { useEffect } from "react";


export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle("light");
      
       // Initialize the database
      setupDatabase();
    }, 0);
  }, []);

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
    </Stack>
  );
}
