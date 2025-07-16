import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Button,
  Card,
  Divider,
  Modal,
  Portal,
  Snackbar,
  Subheading,
  Text,
  TextInput,
  Title,
  useTheme,
} from "react-native-paper";

const QuoteFormModal = ({ visible, onDismiss, onSubmit }: any) => {
  const theme = useTheme();
  const [laborCost, setLaborCost] = useState("");
  const [materialCost, setMaterialCost] = useState("");
  const [notes, setNotes] = useState("");
  const [executionTime, setExecutionTime] = useState("");
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const totalCost =
    (parseFloat(laborCost) || 0) + (parseFloat(materialCost) || 0);

  const handleSendQuote = () => {
    if (!laborCost || parseFloat(laborCost) <= 0) {
      setSnackbarVisible(true);
      return;
    }

    const quoteData = {
      laborCost: parseFloat(laborCost),
      materialCost: parseFloat(materialCost) || 0,
      totalCost,
      notes,
      executionTime,
    };

    onSubmit(quoteData);
    setLaborCost("");
    setMaterialCost("");
    setNotes("");
    setExecutionTime("");
    onDismiss();
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={onDismiss}
        contentContainerStyle={styles.modalContainer}
      >
        <Card style={styles.card}>
          <Card.Title title="Enviar Proposta" titleStyle={styles.title} />
          <Card.Content>
            <ScrollView contentContainerStyle={styles.scrollContent}>
              <Subheading style={styles.sectionTitle}>Custos</Subheading>
              <TextInput
                label="💰 Mão de Obra (R$)"
                value={laborCost}
                onChangeText={setLaborCost}
                keyboardType="numeric"
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="🧱 Materiais (R$) (Opcional)"
                value={materialCost}
                onChangeText={setMaterialCost}
                keyboardType="numeric"
                mode="outlined"
                style={styles.input}
              />

              <Divider style={styles.divider} />

              <Subheading style={styles.sectionTitle}>Detalhes</Subheading>
              <TextInput
                label="🕒 Prazo de Execução"
                value={executionTime}
                onChangeText={setExecutionTime}
                mode="outlined"
                style={styles.input}
              />
              <TextInput
                label="✏️ Observações Adicionais"
                value={notes}
                onChangeText={setNotes}
                mode="outlined"
                multiline
                numberOfLines={3}
                style={styles.input}
              />

              <Divider style={styles.divider} />

              <Card style={[styles.totalCard, { backgroundColor: "#e8f0fe" }]}>
                <Title style={styles.totalTitle}>Total da Proposta</Title>
                <Text
                  style={[styles.totalAmount, { color: theme.colors.primary }]}
                >
                  R$ {totalCost.toFixed(2).replace(".", ",")}
                </Text>
              </Card>

              <View style={styles.buttonContainer}>
                <Button
                  mode="outlined"
                  onPress={onDismiss}
                  style={styles.button}
                >
                  Cancelar
                </Button>
                <Button
                  mode="contained"
                  onPress={handleSendQuote}
                  style={styles.button}
                >
                  Enviar
                </Button>
              </View>
            </ScrollView>
          </Card.Content>
        </Card>
      </Modal>

      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
      >
        Por favor, insira um valor válido para a Mão de Obra.
      </Snackbar>
    </Portal>
  );
};

export default QuoteFormModal;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 500,
    maxHeight: "100%",
    borderRadius: 12,
    elevation: 3,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  sectionTitle: {
    marginBottom: 8,
    fontWeight: "600",
  },
  input: {
    marginBottom: 12,
  },
  divider: {
    marginVertical: 12,
  },
  totalCard: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  totalTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 4,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
  },
  button: {
    flex: 1,
  },
});
