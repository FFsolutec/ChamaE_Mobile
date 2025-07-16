import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Appbar, Avatar } from "react-native-paper";

const conversations = [
  {
    id: "1",
    name: "Carlos Lima",
    lastMessage: "Tudo certo para amanhã?",
    time: "14:20",
  },
  {
    id: "2",
    name: "Mariana Silva",
    lastMessage: "Obrigado pelo orçamento!",
    time: "12:05",
  },
];

export default function ChatListScreen({ navigation }: any) {
  const handleOpenChat = (id: string) => {
    router.push(`/(profissional)/chat/${id}`);
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Conversas" titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.chatItem}
            onPress={() => handleOpenChat(item.id)}
          >
            <Avatar.Text
              size={44}
              label={item.name.slice(0, 2).toUpperCase()}
            />
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{item.name}</Text>
              <Text style={styles.chatMessage} numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>
            <Text style={styles.chatTime}>{item.time}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F7" },
  header: {
    backgroundColor: "#1976D2",
    elevation: 0,
    shadowOpacity: 0,
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  chatInfo: {
    flex: 1,
    marginLeft: 12,
  },
  chatName: {
    fontWeight: "600",
    fontSize: 16,
  },
  chatMessage: {
    color: "#555",
    marginTop: 2,
  },
  chatTime: {
    fontSize: 12,
    color: "#888",
  },
});
