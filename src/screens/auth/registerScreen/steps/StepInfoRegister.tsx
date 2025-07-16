import React from "react";
import { useForm } from "react-hook-form";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { Button, Divider, Text } from "react-native-paper";

interface Props {
  defaultValues: any;
  onNext: (data: any) => void;
}

export default function StepInfoRegister({ defaultValues, onNext }: Props) {
  const { handleSubmit } = useForm({
    defaultValues,
  });

  return (
    <SafeAreaView style={styles.container}>
      {/* Parte superior */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={require("assets/images/backgroundAppRegister.jpg")}
        />
        <View style={styles.overlay}>
          <Text style={styles.headline}>Serviços sob demanda</Text>
        </View>
      </View>

      {/* Parte inferior */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>
          Encontre o profissional certo na hora certa
        </Text>
        <Text style={styles.description}>
          Com nossa plataforma, você acessa uma rede de profissionais de forma
          rápida, segura e prática.
        </Text>

        <Divider style={{ marginVertical: 16 }} />

        <View style={styles.benefitsContainer}>
          <Text style={styles.benefit}>✅ Atendimento 24h</Text>
          <Text style={styles.benefit}>✅ Planos com cashback</Text>
          <Text style={styles.benefit}>✅ Profissionais verificados</Text>
          <Text style={styles.benefit}>✅ Suporte premium</Text>
        </View>

        <Button
          mode="contained"
          onPress={handleSubmit(onNext)}
          style={styles.button}
          labelStyle={{ fontWeight: "bold" }}
        >
          Começar agora
        </Button>
      </View>
    </SafeAreaView>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f8",
  },
  imageContainer: {
    height: height * 0.45,
    position: "relative",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 20,
    left: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: 12,
    borderRadius: 8,
  },
  headline: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -2 },
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#222",
    textAlign: "center",
  },
  description: {
    fontSize: 15,
    color: "#555",
    textAlign: "center",
    marginTop: 12,
  },
  benefitsContainer: {
    marginTop: 8,
    marginBottom: 24,
  },
  benefit: {
    fontSize: 14,
    color: "#333",
    marginVertical: 4,
  },
  button: {
    alignSelf: "center",
    width: "100%",
    borderRadius: 8,
    paddingVertical: 8,
  },
});
