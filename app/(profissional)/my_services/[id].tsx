import ServiceDetailsScreen from "@/screens/profissional/service/ServiceScreen";
import { useLocalSearchParams } from "expo-router";
import { allRequests } from "hooks/allRequests";
import { StyleSheet, Text, View } from "react-native";

export default function MyServiceDetailsPage() {
  const { id } = useLocalSearchParams();

  const service = allRequests.find((s) => s.id.toString() === id);

  if (!service) {
    return (
      <View style={styles.centered}>
        <Text>Serviço não encontrado.</Text>
      </View>
    );
  }

  return <ServiceDetailsScreen service={service} />;
}

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
