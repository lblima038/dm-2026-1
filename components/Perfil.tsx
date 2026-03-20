import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    Alert,
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const IMAGE_1 =
  "https://plus.unsplash.com/premium_photo-1688572454849-4348982edf7d?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
const IMAGE_2 =
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300";

const Profile: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [name, setName] = useState("");
  const [currentImage, setCurrentImage] = useState(IMAGE_1);
  const [isAltImage, setIsAltImage] = useState(false);

  const handleSave = () => {
    if (!name.trim()) {
      Alert.alert("Atenção", "Preencha o nome antes de salvar.");
      return;
    }
    Alert.alert("Perfil salvo", `Nome: ${name}`);
  };

  const toggleImage = () => {
    const next = isAltImage ? IMAGE_1 : IMAGE_2;
    setCurrentImage(next);
    setIsAltImage(!isAltImage);
  };

  const toggleTheme = () => setDarkMode((prev) => !prev);

  const background = darkMode ? "#0f172a" : "#f8fafc";
  const textColor = darkMode ? "#f8fafc" : "#0f172a";

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor: background }]}>
      <StatusBar barStyle={darkMode ? "light-content" : "dark-content"} />
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Pressable style={styles.flex} onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.content}
            keyboardShouldPersistTaps="handled"
          >
            <TouchableOpacity
              style={styles.themeSwitchBtn}
              onPress={toggleTheme}
            >
              <Text style={styles.themeSwitchText}>
                {darkMode ? "Modo claro" : "Modo escuro"}
              </Text>
            </TouchableOpacity>
            <Text style={[styles.title, { color: textColor }]}>
              Perfil Rápido
            </Text>

            <View style={styles.avatarWrapper}>
              <Image
                source={{ uri: currentImage }}
                style={styles.avatar}
                resizeMode="cover"
              />
            </View>

            <TouchableOpacity style={styles.switchBtn} onPress={toggleImage}>
              <Ionicons name="images" size={18} color="#fff" />
              <Text style={styles.switchBtnText}>Trocar imagem</Text>
            </TouchableOpacity>

            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              placeholderTextColor="#999"
              value={name}
              onChangeText={setName}
              maxLength={40}
            />

            <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
              <Text style={styles.saveBtnText}>Salvar</Text>
            </TouchableOpacity>
          </ScrollView>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },
  flex: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    marginBottom: 24,
    color: "#111827",
  },
  avatarWrapper: {
    width: 160,
    height: 160,
    borderRadius: 90,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "#2563eb",
    marginBottom: 16,
  },
  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 80,
  },
  switchBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2563eb",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 24,
  },
  switchBtnText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "700",
  },
  input: {
    width: "100%",
    maxWidth: 420,
    height: 56,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    fontSize: 16,
    marginBottom: 18,
    color: "#111827",
  },
  saveBtn: {
    width: "100%",
    maxWidth: 420,
    height: 56,
    borderRadius: 14,
    backgroundColor: "#10B981",
    justifyContent: "center",
    alignItems: "center",
  },
  saveBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "800",
  },
  themeSwitchBtn: {
    flexDirection: "row",
    alignItems: "flex-end",
    backgroundColor: "#2563eb",
    borderRadius: 999,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginBottom: 24,
  },
  themeSwitchText: {
    color: "#fff",
    fontSize: 14,
    marginLeft: 8,
    fontWeight: "700",
  },
});

export default Profile;
