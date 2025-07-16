// components/cards/RequestCard.tsx
import { StyleSheet, View } from "react-native";
import { Button, Card, Chip, Text } from "react-native-paper";

export default function RequestCard({ data }: any) {
  return (
    <Card style={styles.card}>
      <Card.Title title={data.titulo} titleStyle={styles.title} />
      <Card.Content>
        <Text style={styles.location}>📍 {data.local}</Text>

        <View style={styles.statusRow}>
          <Chip style={styles.status}>{data.status}</Chip>
          <Chip style={styles.urgency}>{data.urgencia}</Chip>
        </View>

        <Text style={styles.label}>Descrição:</Text>
        <Text style={styles.desc}>{data.descricao}</Text>

        <Text style={styles.label}>Criado em:</Text>
        <Text>📅 {data.criadoEm}</Text>

        <Text style={styles.label}>Prazo:</Text>
        <Text>🕒 {data.prazo}</Text>

        <Text style={styles.statusNote}>
          {data.status === "Em Aberto"
            ? "Aguardando aceitação de um profissional"
            : "Status: " + data.status}
        </Text>

        <Button mode="outlined" style={styles.button} onPress={() => {}}>
          Ver Detalhes
        </Button>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 8,
    borderRadius: 12,
    elevation: 2,
    backgroundColor: "#ffffffff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    marginBottom: 8,
    color: "#666",
  },
  statusRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  status: {
    backgroundColor: "#FFE082",
  },
  urgency: {
    backgroundColor: "#C8E6C9",
  },
  label: {
    fontWeight: "600",
    marginTop: 8,
  },
  desc: {
    marginBottom: 8,
  },
  statusNote: {
    marginTop: 12,
    fontStyle: "italic",
    color: "#777",
  },
  button: {
    marginTop: 12,
  },
});
