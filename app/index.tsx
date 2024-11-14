import { useRouter } from "expo-router";
import { useEffect } from "react";

export default function App() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/(tabs)/pending");
    }, 0); 

  }, []);

  return null; 
}
