// components/StepNavigation.tsx
import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

interface StepNavigationProps {
  onNext: () => void;
  onBack?: () => void;
  disableNext?: boolean;
  nextLabel?: string;
  backLabel?: string;
}

export default function StepNavigation({
  onNext,
  onBack,
  disableNext = false,
  nextLabel = "Continuar",
  backLabel = "Voltar",
}: StepNavigationProps) {
  return (
    <View style={styles.container}>
      {onBack && (
        <Button mode="outlined" onPress={onBack} style={styles.button}>
          {backLabel}
        </Button>
      )}
      <Button
        mode="contained"
        onPress={onNext}
        disabled={disableNext}
        style={styles.button}
      >
        {nextLabel}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  button: {
    flex: 1,
    marginHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
  },
});
