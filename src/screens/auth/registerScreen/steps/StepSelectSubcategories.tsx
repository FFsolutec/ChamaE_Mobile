import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";

const categories = [
  {
    name: "Construção e Reforma",
    services: ["Pedreiro", "Pintor", "Gesseiro", "Telhadista"],
  },
  {
    name: "Elétrica",
    services: ["Eletricista Residencial", "Instalação", "Manutenção"],
  },
  {
    name: "Hidráulica",
    services: ["Encanador", "Desentupimento", "Instalação"],
  },
  {
    name: "Marcenaria e Carpintaria",
    services: ["Móveis sob Medida", "Reparos", "Instalações"],
  },
  {
    name: "Limpeza e Manutenção",
    services: ["Limpeza Residencial", "Limpeza Comercial", "Jardinagem"],
  },
  {
    name: "Téc. Refrigeração",
    services: ["Instalação", "Manutenção", "Limpeza"],
  },
];

interface Props {
  category: string | null;
  selected: string[];
  onSelect: (values: string[]) => void;
  onBack: () => void;
  onFinish: () => void;
}

export default function StepSelectSubcategories({
  category,
  selected,
  onSelect,
  onBack,
  onFinish,
}: Props) {
  const data = categories.find((c) => c.name === category);

  const toggle = (service: string) => {
    if (selected.includes(service)) {
      onSelect(selected.filter((s) => s !== service));
    } else {
      onSelect([...selected, service]);
    }
  };

  return (
    <View>
      <Text style={styles.title}>Escolha suas especialidades:</Text>
      {data?.services.map((service) => (
        <TouchableOpacity
          key={service}
          onPress={() => toggle(service)}
          style={[styles.option, selected.includes(service) && styles.selected]}
        >
          <Text>{service}</Text>
        </TouchableOpacity>
      ))}
      <View style={styles.buttons}>
        <Button onPress={onBack} mode="outlined">
          Voltar
        </Button>
        <Button onPress={onFinish} mode="contained">
          Criar Conta
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
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});
