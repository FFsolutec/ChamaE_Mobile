import { mockProfessionals } from "@/types/mockProfessionals";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Avatar, Chip, Icon } from "react-native-paper";

export default function ProfessionalsScreen() {
  const renderItem = ({ item }: any) => {
    const initials = item.name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase();

    return (
      <View style={styles.card}>
        <View style={styles.row}>
          {item.image ? (
            <Image source={{ uri: item.image }} style={styles.avatarImage} />
          ) : (
            <Avatar.Text label={initials} size={56} style={styles.avatar} />
          )}

          <View style={styles.info}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>{item.name}</Text>
              {item.verified && (
                <Icon source="check-circle" size={16} color="#1976D2" />
              )}
            </View>

            <Text style={styles.profession}>{item.profession}</Text>

            <View style={styles.detailsRow}>
              <View style={styles.detailItem}>
                <Icon source="star" size={16} color="#F9A825" />
                <Text style={styles.ratingText}>
                  {item.rating.toFixed(1)}{" "}
                  <Text style={styles.reviewCount}>({item.reviewCount})</Text>
                </Text>
              </View>

              <View style={styles.detailItem}>
                <Icon source="map-marker" size={16} color="#777" />
                <Text style={styles.locationText}>
                  {item.location} ({item.distance})
                </Text>
              </View>
            </View>

            <View style={styles.tags}>
              {item.tags.map((tag: string, i: number) => (
                <Chip key={i} style={styles.tag}>
                  {tag}
                </Chip>
              ))}
            </View>

            <View style={styles.bottomRow}>
              <Text style={styles.responseTime}>
                Responde em{" "}
                <Text style={{ fontWeight: "bold" }}>{item.responseTime}</Text>
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Ver Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={mockProfessionals}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
    elevation: 2,
  },
  row: {
    flexDirection: "row",
  },
  avatar: {
    backgroundColor: "#1976D2",
  },
  avatarImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#ccc",
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#222",
  },
  profession: {
    color: "#555",
    marginBottom: 6,
  },
  detailsRow: {
    flexDirection: "row",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 8,
    alignItems: "center",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  ratingText: {
    color: "#222",
    fontWeight: "500",
    marginLeft: 4,
  },
  reviewCount: {
    color: "#777",
  },
  locationText: {
    color: "#555",
    marginLeft: 4,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    paddingHorizontal: 10,
    height: 30,
    justifyContent: "center",
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  responseTime: {
    fontSize: 13,
    color: "#777",
  },
  button: {
    backgroundColor: "#1976D2",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
