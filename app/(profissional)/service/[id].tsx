import ServiceDetailsScreen from "@/screens/profissional/service/ServiceScreen";
import { useLocalSearchParams } from "expo-router";
import { servicosDisponiveis } from "hooks/servicosDisponiveis"; // Seu mock de dados
import { StyleSheet, Text, View } from "react-native";

export default function ServiceDetailsPage() {
  const { id } = useLocalSearchParams();

  // Lógica para buscar os dados
  const service = servicosDisponiveis.find((s) => s.id.toString() === id);

  // Se o serviço não for encontrado, exibe uma mensagem
  if (!service) {
    return (
      <View style={styles.centered}>
        <Text>Serviço não encontrado.</Text>
      </View>
    );
  }

  // Renderiza o componente de tela, passando os dados encontrados como prop
  return <ServiceDetailsScreen service={service} />;
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
