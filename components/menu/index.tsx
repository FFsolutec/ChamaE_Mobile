import { useAuth } from "@/context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FooterMenu() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return null;

  console.log(user);

  const isCliente = user.role === "cliente";

  const tabs = isCliente
    ? [
        { label: "Início", icon: "home", route: "/(cliente)/home" },
        {
          label: "Profissionais",
          icon: "group",
          route: "/(cliente)/profissionais",
        },
        { label: "Pedidos", icon: "list-alt", route: "/(service)/" },
        { label: "Conta", icon: "person", route: "/(perfil)/" },
      ]
    : [
        { label: "Início", icon: "home", route: "/(profissional)/home" },
        {
          label: "Propostas",
          icon: "work",
          route: "/(service)/",
        },
        {
          label: "Chat",
          icon: "chat",
          route: "/(profissional)/chats",
        },
        { label: "Conta", icon: "person", route: "/(perfil)/" },
      ];

  return (
    <View style={styles.container}>
      {tabs.map((tab: any) => (
        <TouchableOpacity
          key={tab.label}
          style={styles.tab}
          onPress={() => router.push(tab?.route)}
        >
          <MaterialIcons name={tab.icon as any} size={24} color="#1976D2" />
          <Text style={styles.label}>{tab.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#ffffff",
    paddingTop: 5,
  },
  tab: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#1976D2",
  },
});
