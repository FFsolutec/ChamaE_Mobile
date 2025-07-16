// src/components/ServiceCard.js
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Card, Chip, Icon, Text } from "react-native-paper";

// Mapeamento de urgência para cores
const urgenciaCores: any = {
  Normal: "#4CAF50", // Verde
  Alta: "#FFC107", // Ambar
  Urgente: "#F44336", // Vermelho
};

const ServiceCard = ({ service, onPress }: any) => {
  const corUrgencia = urgenciaCores[service.urgencia] || "#607D8B"; // Cor padrão

  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.header}>
            <Text style={styles.title}>{service.titulo}</Text>
            <Chip
              style={[styles.chip, { backgroundColor: corUrgencia }]}
              textStyle={styles.chipText}
            >
              {service.urgencia}
            </Chip>
          </View>
          <Text style={styles.description} numberOfLines={2}>
            {service.descricao}
          </Text>

          <View style={styles.infoRow}>
            <Icon source="map-marker-outline" size={16} color="#666" />
            <Text style={styles.infoText}>{service.localizacao}</Text>
          </View>

          <View style={styles.infoRow}>
            <Icon source="calendar-clock-outline" size={16} color="#666" />
            <Text style={styles.infoText}>Prazo: {service.prazo}</Text>
          </View>

          <View style={styles.footer}>
            <Chip
              icon="tag-outline"
              mode="outlined"
              style={styles.categoryChip}
            >
              {service.categoria}
            </Chip>
            <Text style={styles.statusText}>{service.status}</Text>
          </View>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

export default ServiceCard;
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    elevation: 2,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    flex: 1, // Garante que o texto não empurre o chip para fora
  },
  chip: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 8,
  },
  chipText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 13,
    color: "#555",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 12,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: "#f0f0f0",
  },
  categoryChip: {
    borderColor: "#1976D2",
    borderWidth: 1,
  },
  statusText: {
    color: "#1976D2",
    fontWeight: "bold",
  },
});
