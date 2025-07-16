import { Ionicons } from "@expo/vector-icons";
import { useHeaderHeight } from "@react-navigation/elements";
import { useEffect, useRef, useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Appbar, Avatar } from "react-native-paper";

const ChatProfessionalScreen = ({
  user,
}: {
  user: { name: string; initials: string };
}) => {
  const [messages, setMessages] = useState([
    { id: "1", text: "Olá, em que posso te ajudar?", from: "other" },
    {
      id: "2",
      text: "Estou com um problema na instalação elétrica.",
      from: "me",
    },
  ]);
  const [text, setText] = useState("");
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    if (messages.length) {
      flatListRef.current?.scrollToOffset({ animated: true, offset: 0 });
    }
  }, [messages]);

  const headerHeight = useHeaderHeight();

  const handleSend = () => {
    if (text.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: Date.now().toString(), text, from: "me" },
      ]);
      setText("");
    }
  };

  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.header}>
        <Avatar.Text
          size={36}
          label={user.initials}
          style={{ marginRight: 8 }}
        />
        <Appbar.Content title={user.name} titleStyle={styles.headerTitle} />
      </Appbar.Header>

      <KeyboardAvoidingView
        style={styles.keyboardAvoidingContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={headerHeight}
      >
        <FlatList
          ref={flatListRef}
          data={[...messages].reverse()}
          keyExtractor={(item) => item.id}
          inverted
          style={styles.messageListContainer}
          contentContainerStyle={styles.messageListContent}
          renderItem={({ item }) => (
            <View
              style={[
                styles.messageBubble,
                item.from === "me" ? styles.myMessage : styles.otherMessage,
              ]}
            >
              <Text
                style={item.from === "me" ? styles.myText : styles.otherText}
              >
                {item.text}
              </Text>
            </View>
          )}
          keyboardShouldPersistTaps="handled"
        />

        <View style={styles.inputContainer}>
          <TextInput
            value={text}
            onChangeText={setText}
            placeholder="Digite sua mensagem..."
            style={styles.input}
            multiline
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
            <Ionicons name="send" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default ChatProfessionalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECE5DD",
  },
  header: {
    backgroundColor: "#1976D2",
  },
  headerTitle: {
    color: "#fff",
    fontWeight: "bold",
  },
  keyboardAvoidingContainer: {
    flex: 1,
  },
  messageListContainer: {
    flex: 1,
  },
  messageListContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  messageBubble: {
    maxWidth: "80%",
    padding: 12,
    borderRadius: 16,
    marginTop: 10,
  },
  myMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
    borderTopRightRadius: 4,
  },
  otherMessage: {
    backgroundColor: "#FFF",
    alignSelf: "flex-start",
    borderTopLeftRadius: 4,
  },
  myText: {
    color: "#000",
  },
  otherText: {
    color: "#000",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderTopWidth: 1,
    borderColor: "#DDD",
    marginTop: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,

    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    borderRadius: 25,
    maxHeight: 120,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#1976D2",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
