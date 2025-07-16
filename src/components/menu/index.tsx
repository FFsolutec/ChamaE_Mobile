import { useAuth } from "@/src/context/AuthContext";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function FooterMenu() {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) return null;

  const isCliente = user.tipo === "cliente";

  const tabs = isCliente
    ? [
        { label: "Início", icon: "home", route: "/(cliente)/home" },
        { label: "Pedidos", icon: "list-alt", route: "/(cliente)/pedidos" },
        { label: "Conta", icon: "person", route: "/(cliente)/conta" },
      ]
    : [
        { label: "Início", icon: "home", route: "/(profissional)/home" },
        {
          label: "Propostas",
          icon: "work",
          route: "/(profissional)/propostas",
        },
        { label: "Conta", icon: "person", route: "/(profissional)/conta" },
      ];

  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
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
    height: 60,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
  },
  tab: {
    alignItems: "center",
  },
  label: {
    fontSize: 12,
    color: "#1976D2",
  },
});
