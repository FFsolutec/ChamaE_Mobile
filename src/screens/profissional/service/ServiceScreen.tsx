import QuoteFormModal from "@/components/modal";
import { router, Stack } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Appbar, Button, Card, Chip, Divider, Icon } from "react-native-paper";

const { width } = Dimensions.get("window");
const CARD_HORIZONTAL_PADDING = 16;
const IMAGE_WIDTH = width - CARD_HORIZONTAL_PADDING * 2;

export default function ServiceDetailsScreen({ service }: any) {
  const [isModalVisible, setModalVisible] = useState(false);
  const handleOpenModal = () => setModalVisible(true);
  const handleDismissModal = () => setModalVisible(false);
  const handleSubmitQuote = (quoteData: any) => {
    console.log(`Orçamento para o serviço ID ${service.id}:`, quoteData);
    alert("Proposta de orçamento enviada com sucesso!");
    handleDismissModal();
  };

  const renderImage = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.carouselImage} />
  );

  if (!service) {
    return (
      <View style={styles.centered}>
        <Text>Serviço não encontrado.</Text>
      </View>
    );
  }

  const hasImages = service.imagens && service.imagens.length > 0;

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          header: () => (
            <Appbar.Header style={{ backgroundColor: "#1976D2" }}>
              <Appbar.BackAction onPress={() => router.back()} color="#fff" />
              <Appbar.Content
                title="Detalhes do Serviço"
                titleStyle={{ color: "#fff", fontWeight: "bold" }}
              />
            </Appbar.Header>
          ),
        }}
      />

      <ScrollView contentContainerStyle={styles.scroll}>
        <Card style={styles.card}>
          {hasImages && (
            <View style={styles.carouselContainer}>
              <FlatList
                data={service.imagens}
                renderItem={renderImage}
                keyExtractor={(item, index) => `${item}-${index}`}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                style={styles.flatlist}
              />
            </View>
          )}

          <Card.Title
            title={service.titulo}
            titleStyle={styles.title}
            subtitle={`Postado por ${service.cliente.nome}`}
            style={{ marginTop: hasImages ? 0 : 16 }}
          />
          <Card.Content>
            <Divider style={styles.divider} />
            <Text style={styles.label}>Descrição</Text>
            <Text style={styles.description}>{service.descricao}</Text>

            <View style={styles.infoRow}>
              <Chip icon="tag" mode="outlined">
                {service.categoria}
              </Chip>
              <Chip icon="alert-circle" style={{ backgroundColor: "#FFC107" }}>
                {service.urgencia}
              </Chip>
            </View>
            <Divider style={styles.divider} />
            <View style={styles.infoRow}>
              <Icon source="map-marker" size={20} />
              <Text style={styles.infoText}>{service.localizacao}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon source="calendar" size={20} />
              <Text style={styles.infoText}>Criado em: {service.criadoEm}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon source="calendar-clock" size={20} />
              <Text style={styles.infoText}>Prazo final: {service.prazo}</Text>
            </View>
            <View style={styles.infoRow}>
              <Icon source="check-circle" size={20} color="#1976D2" />
              <Text
                style={[
                  styles.infoText,
                  { color: "#1976D2", fontWeight: "bold" },
                ]}
              >
                {service.status}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <Button
          mode="contained"
          icon="file-document-edit-outline"
          style={styles.actionButton}
          labelStyle={{ fontSize: 16 }}
          onPress={handleOpenModal} // 3. CORRIGIR O ONPRESS
        >
          Enviar Orçamento
        </Button>
      </ScrollView>

      <QuoteFormModal
        visible={isModalVisible}
        onDismiss={handleDismissModal}
        onSubmit={handleSubmitQuote}
      />
    </View>
  );
}

// Adicione os novos estilos ao seu StyleSheet
const styles = StyleSheet.create({
  // ... seus estilos existentes
  container: {
    flex: 1,
    maxHeight: "80%",
  },
  scroll: {
    padding: 16,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    // Remova o padding do card para a imagem ocupar todo o espaço
    padding: 0,
    overflow: "hidden", // Garante que a imagem com borda arredondada funcione
  },
  carouselContainer: {
    height: 220, // Altura fixa para o carrossel
    backgroundColor: "#e0e0e0", // Cor de fundo enquanto a imagem carrega
  },
  flatlist: {
    width: IMAGE_WIDTH,
    alignSelf: "center", // Centraliza o FlatList no Card
  },
  carouselImage: {
    width: IMAGE_WIDTH,
    height: "100%",
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#555",
    marginTop: 16,
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: "#666",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
    gap: 8,
  },
  infoText: {
    fontSize: 15,
    color: "#444",
  },
  divider: {
    marginVertical: 12,
  },
  actionButton: {
    marginTop: 24,
    paddingVertical: 8,
    borderRadius: 30,
  },
});
