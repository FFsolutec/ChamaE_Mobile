import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar } from "react-native-paper";

const featured = [
  {
    name: "Construção",
    image: {
      uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkXjtwB6S5MakIoR2RgYGZbnOjRwnkWs0YhQ&s",
    },
  },
  {
    name: "Elétrica",
    image: {
      uri: "https://cdn.leroymerlin.com.br/contents/termos_e_nomenclaturas_de_eletrica_entenda_os_significados_dos_vocabularios_dos_manuais_para_instalar_produtos_corretamente_12f5_original.jpg",
    },
  },
  {
    name: "Limpeza",
    image: {
      uri: "https://www.riccel.com.br/blog/wp-content/uploads/2019/07/Topo_Faxineira-1024x574.jpg",
    },
  },
  {
    name: "Hidráulica",
    image: {
      uri: "https://arquitetura.vivadecora.com.br/wp-content/uploads/2019/11/Instalação-hidráulica-projeto-hidráulico.jpg",
    },
  },
];

const categories = [
  {
    name: "Construção e Reforma",
    icon: "👷‍♂️",
    services: ["Pedreiro", "Pintor", "Gesseiro", "Telhadista", "Engenheiro"],
  },
  {
    name: "Elétrica",
    icon: "💡",
    services: ["Eletricista", "Instalação", "Manutenção"],
  },
  {
    name: "Hidráulica",
    icon: "🚿",
    services: ["Encanador", "Desentupimento", "Instalação", "Reparo"],
  },
];

const professionals = [
  {
    id: "1",
    name: "João Silva",
    service: "Eletricista",
    city: "São Paulo, SP",
  },
  {
    id: "2",
    name: "Maria Souza",
    service: "Pintora",
    city: "Rio de Janeiro, RJ",
  },
  {
    id: "3",
    name: "Carlos Mendes",
    service: "Encanador",
    city: "Campinas, SP",
  },
  {
    id: "4",
    name: "Aline Castro",
    service: "Gesseira",
    city: "Belo Horizonte, MG",
  },
  {
    id: "5",
    name: "Diego Rocha",
    service: "Telhadista",
    city: "Curitiba, PR",
  },
];

export default function HomeScreen() {
  const renderHeader = () => (
    <View style={styles.headerWrapper}>
      {/* Destaques */}
      <Text style={styles.sectionTitle}>Destaques</Text>
      <View style={styles.featuredGrid}>
        {featured.map((item, index) => (
          <TouchableOpacity key={index} style={styles.featuredCard}>
            <View style={styles.featuredImageContainer}>
              <Image source={item.image} style={styles.featuredImage} />
            </View>
            <View style={styles.featuredLabelContainer}>
              <Text style={styles.featuredLabel}>{item.name}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Categorias */}
      <Text style={styles.sectionTitle}>Categorias Populares</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12 }} // espaçamento entre os cards
      >
        {categories.map((cat, i) => (
          <View key={i} style={styles.categoryCard}>
            <Text style={styles.categoryTitle}>
              {cat.icon} {cat.name}
            </Text>
            {cat.services.slice(0, 5).map((s, j) => (
              <Text key={j} style={styles.subcategoryText}>
                • {s}
              </Text>
            ))}
            <Text style={styles.findProfessionals}>
              Encontrar profissionais →
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Profissionais */}
      <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
        Profissionais em destaque
      </Text>
    </View>
  );

  return (
    <FlatList
      data={professionals}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.profCard}>
          <Avatar.Text
            size={48}
            label={item.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          />
          <View style={{ marginLeft: 12 }}>
            <Text style={styles.profName}>{item.name}</Text>
            <Text style={styles.profInfo}>
              {item.service} • {item.city}
            </Text>
          </View>
        </View>
      )}
      ListHeaderComponent={renderHeader}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}

const styles = StyleSheet.create({
  headerWrapper: { marginBottom: 20 },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 12,
  },
  featuredGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
    marginBottom: 20,
  },
  featuredCard: {
    width: "48%",
    backgroundColor: "#E3F2FD",
    borderRadius: 12,
    overflow: "hidden", // garante que nada vaze
    aspectRatio: 1, // garante altura proporcional à largura
  },
  featuredImageContainer: {
    flex: 7,
    width: "100%",
  },
  featuredImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  featuredLabelContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  featuredLabel: {
    fontWeight: "bold",
    color: "#1976D2",
  },

  categoryCard: {
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    padding: 16,
    width: 220, // largura fixa
    marginBottom: 16,
  },

  categoryTitle: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 16,
  },
  subcategoryText: {
    fontSize: 14,
    color: "#555",
  },
  findProfessionals: {
    marginTop: 10,
    color: "#1976D2",
    fontWeight: "500",
  },
  profCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  profName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  profInfo: {
    color: "#555",
    marginTop: 2,
  },
});
