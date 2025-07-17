// import ChatListScreen from "@/screens/profissional/chat";
// import FooterMenu from "components/menu";
// import { StyleSheet, View } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

import ChatListScreen from "@/screens/profissional/chat";

// const ChatProfessional = () => {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.content}>
//         <ChatListScreen />
//       </View>
//       <FooterMenu />
//     </SafeAreaView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFFFFF", // mesma cor do app
//   },
//   content: {
//     flex: 1,
//   },
// });
// export default ChatProfessional;

export default function ChatProfessional() {
  return <ChatListScreen />;
}
