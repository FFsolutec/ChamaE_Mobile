import { StyleSheet } from "react-native";
import { Appbar } from "react-native-paper";

export default function AppBarHeader({ title }: { title: string }) {
  return (
    <Appbar.Header
      style={[styles.appbar, { height: 40 }]}
      mode="center-aligned"
    >
      <Appbar.Content
        title="Serviços Disponíveis"
        titleStyle={styles.appbarTitle}
        style={{ justifyContent: "flex-start", paddingBottom: 10 }} // <-- aqui
      />
    </Appbar.Header>
  );
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: "#1976D2",
    height: 48, // altura reduzida
  },
  appbarTitle: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 25, // opcional: reduzir também o tamanho da fonte
  },
});
