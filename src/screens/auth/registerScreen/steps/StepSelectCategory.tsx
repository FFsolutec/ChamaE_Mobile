import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";

const categories = [
  "Construção e Reforma",
  "Elétrica",
  "Hidráulica",
  "Marcenaria e Carpintaria",
  "Limpeza e Manutenção",
  "Téc. Refrigeração",
];

interface Props {
  category: string | null;
  onSelect: (value: string) => void;
  onBack: () => void;
}

export default function StepSelectCategory({
  category,
  onSelect,
  onBack,
}: Props) {
  return (
    <View>
      <Text style={styles.title}>Escolha uma categoria:</Text>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          onPress={() => onSelect(cat)}
          style={[styles.option, category === cat && styles.selected]}
        >
          <Text>{cat}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttons}>
        <Button onPress={onBack} mode="outlined">
          Voltar
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 16, marginBottom: 12 },
  option: {
    padding: 12,
    backgroundColor: "#eee",
    borderRadius: 6,
    marginBottom: 8,
  },
  selected: { backgroundColor: "#90caf9" },
  buttons: { marginTop: 16 },
});
