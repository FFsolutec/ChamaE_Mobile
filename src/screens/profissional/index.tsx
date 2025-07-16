import { router } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

import AppBarHeader from "components/AppBarHeader";
import ServiceCard from "components/cards/ServiceCard";
import { servicosDisponiveis } from "hooks/servicosDisponiveis";

export default function HomeProfissionalScreen() {
  const [services, setServices] = useState([]);

  const profissionalCategorias = ["Elétrica"];

  useEffect(() => {
    const filteredServices = servicosDisponiveis.filter((servico) =>
      profissionalCategorias.includes(servico.categoria)
    );
    setServices(filteredServices as any);
  }, []);

  const handleViewDetails = (service: any) => {
    router.push({
      pathname: "/(profissional)/service/[id]",
      params: { id: service.id },
    });
  };

  return (
    <FlatList
      data={services}
      renderItem={({ item }) => (
        <ServiceCard service={item} onPress={() => handleViewDetails(item)} />
      )}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      ListHeaderComponent={<AppBarHeader title="Serviços Disponíveis" />}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Nenhum serviço disponível na sua categoria no momento.
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 80,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
    textAlign: "center",
  },
});
