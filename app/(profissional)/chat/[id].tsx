import ChatProfessionalScreen from "@/screens/profissional/chat/ChatProfessionalScreen";
import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// MOCK de chats para exemplo
const conversasDisponiveis = [
  {
    id: "1",
    nome: "Carlos Lima",
  },
  {
    id: "2",
    nome: "Mariana Silva",
  },
];

const ChatProfessional = () => {
  const { id } = useLocalSearchParams();

  const conversa = conversasDisponiveis.find((c) => c.id === id);

  if (!conversa) {
    return (
      <View style={styles.centered}>
        <Text>Conversa não encontrada.</Text>
      </View>
    );
  }

  const user = {
    name: conversa.nome,
    initials: conversa.nome.slice(0, 2).toUpperCase(),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ChatProfessionalScreen user={user} />
      </View>
    </SafeAreaView>
  );
};

export default ChatProfessional;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  content: {
    flex: 1,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
