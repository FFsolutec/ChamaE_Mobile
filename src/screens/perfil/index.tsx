import { useAuth } from "@/context/AuthContext";
import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Avatar,
  Button,
  Dialog,
  Divider,
  IconButton,
  List,
  Text as PaperText,
  Portal,
} from "react-native-paper";

// Itens do menu
const menuItems = [
  {
    title: "Menssagens",
    icon: "message-outline",
    route: "/messages", // Rota de exemplo
  },
  {
    title: "Dashboard",
    icon: "view-dashboard-outline",
    route: "/dashboard",
  },
  {
    title: "Notificações",
    icon: "bell-outline",
    route: "/notifications",
  },
  {
    title: "Aparencia",
    icon: "palette-outline",
    route: "/appearance",
  },
  {
    title: "Linguaguem",
    icon: "translate",
    route: "/language",
  },
  {
    title: "Politica de privacidade & Segurança",
    icon: "lock-outline",
    route: "/privacy",
  },
];

export default function ProfileScreen() {
  const { user, logout } = useAuth();

  const [isDialogVisible, setDialogVisible] = useState(false);
  const showDialog = () => setDialogVisible(true);
  const hideDialog = () => setDialogVisible(false);

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Seção do Perfil */}
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            {user?.img ? (
              <Avatar.Image size={100} source={{ uri: user.img }} />
            ) : (
              <Avatar.Icon size={100} icon="account" style={styles.avatar} />
            )}
            <IconButton
              icon="pencil"
              size={20}
              style={styles.editButton}
              iconColor="#fff"
              onPress={() => console.log("Edit profile picture")}
            />
          </View>
          <PaperText style={styles.nameText}>
            {user?.userInfo.firstName}
          </PaperText>
          <PaperText style={styles.usernameText}>{user?.username}</PaperText>
        </View>

        {/* Seção do Menu */}
        <List.Section style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <View key={index}>
              <List.Item
                title={item.title}
                left={() => <List.Icon icon={item.icon} />}
                right={() => <List.Icon icon="chevron-right" />}
                onPress={() => {
                  console.log(`Navegando para ${item.route}`);
                  // Descomente para usar a navegação
                  // router.push(item.route);
                }}
                titleStyle={styles.listItemTitle}
              />
              <Divider />
            </View>
          ))}

          {/* Botão de Sair */}
          <List.Item
            title="Sair"
            left={(props) => (
              <List.Icon {...props} icon="logout" color="#E53935" />
            )}
            onPress={showDialog}
            titleStyle={styles.logoutText}
          />
          <Divider />
        </List.Section>
      </ScrollView>

      {/* Diálogo de Confirmação de Logout */}
      <Portal>
        <Dialog visible={isDialogVisible} onDismiss={hideDialog}>
          <Dialog.Title style={styles.dialogTitle}>Sair</Dialog.Title>
          <Dialog.Content>
            <PaperText style={styles.dialogContentText}>
              Tem certeza de que deseja sair? Você precisará fazer login
              novamente para usar o aplicativo.
            </PaperText>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog} textColor="#007AFF">
              Cancelar
            </Button>
            <Button
              onPress={handleLogout}
              buttonColor="#007AFF"
              textColor="#fff"
              style={{ marginLeft: 8 }}
            >
              Sair
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    backgroundColor: "#E0E0E0",
  },
  editButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
    backgroundColor: "#007AFF", // Azul padrão do iOS
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#fff",
  },
  nameText: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 16,
    color: "#8E8E93", // Cinza padrão do iOS
  },
  menuSection: {
    marginTop: 20,
  },
  listItemTitle: {
    fontSize: 17,
  },
  logoutText: {
    color: "#E53935", // Um tom de vermelho
    fontWeight: "bold",
    fontSize: 17,
  },
  dialogTitle: {
    textAlign: "center",
    fontWeight: "bold",
  },
  dialogContentText: {
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
  },
});
