import RequestCard from "@/components/cards/RequestCard";
import { useAuth } from "@/context/AuthContext";
import { allRequests } from "hooks/allRequests";
import { useState } from "react";
import {
  FlatList,
  TextInput as RNTextInput,
  StyleSheet,
  View,
} from "react-native";
import { Appbar, Button, Chip, Text } from "react-native-paper";

const STATUS_TABS = ["Todos", "Em Andamento", "Finalizados"];
const STATUS_MAP: Record<string, string[]> = {
  Todos: [],
  "Em Andamento": ["Aceito", "Em Execução", "Em Andamento"],
  Finalizados: ["Finalizado", "Cancelado"],
};

export default function MyRequestsScreen() {
  const [activeTab, setActiveTab] = useState("Todos");
  const [search, setSearch] = useState("");

  const { user } = useAuth();

  const isCLient = user?.role === "cliente";

  const filteredRequests = allRequests.filter((r) => {
    const matchSearch = r.titulo.toLowerCase().includes(search.toLowerCase());

    const matchStatus =
      activeTab === "Todos" || STATUS_MAP[activeTab].includes(r.status);

    return matchSearch && matchStatus;
  });

  return (
    <View style={styles.wrapper}>
      <Appbar.Header style={styles.appbar}>
        <Appbar.Content
          title="Meus Pedidos de Serviço"
          titleStyle={styles.title}
          subtitle="Gerencie e acompanhe seus pedidos"
        />
      </Appbar.Header>

      <FlatList
        data={filteredRequests}
        renderItem={({ item }) => <RequestCard data={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <>
            {isCLient && (
              <Button
                mode="contained"
                icon="plus"
                style={styles.newButton}
                // onPress={() => router.push("/(cliente)/my-requests/new")}
              >
                Novo Pedido
              </Button>
            )}

            <RNTextInput
              placeholder="Buscar pedidos..."
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
            />

            <View style={styles.tabs}>
              {STATUS_TABS.map((tab) => (
                <Chip
                  key={tab}
                  selected={activeTab === tab}
                  onPress={() => setActiveTab(tab)}
                  style={[styles.tab, activeTab === tab && styles.activeTab]}
                >
                  {tab}
                </Chip>
              ))}
            </View>
          </>
        }
        ListEmptyComponent={
          <Text style={styles.emptyText}>Nenhum pedido encontrado.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  appbar: { backgroundColor: "#1976D2" },
  title: { color: "#fff", fontWeight: "bold" },
  content: { padding: 16, gap: 10 },
  newButton: { marginBottom: 16 },
  searchInput: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  tabs: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    marginBottom: 16,
  },
  tab: {
    borderRadius: 20,
    backgroundColor: "#f0f0f0",
  },
  activeTab: {
    backgroundColor: "#1976D2",
  },
  emptyText: {
    textAlign: "center",
    color: "#888",
    marginTop: 32,
  },
});
