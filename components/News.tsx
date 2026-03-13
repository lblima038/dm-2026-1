import { View, Switch, ScrollView, Text, StyleSheet, SafeAreaView, Platform, Image } from "react-native";
import { useState } from "react";

const News: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const dynamicStyles = getDynamicStyles(darkMode);

  return (
    <SafeAreaView style={[styles.container, dynamicStyles.container]}>
      <View style={[styles.header, dynamicStyles.headerBorder]}>
        <Text style={[styles.title, dynamicStyles.text]}>Notícias do Macaco pensante</Text>
        <View style={styles.switchContainer}>
          <Text style={[styles.switchLabel, dynamicStyles.text]}>{darkMode ? "Dark" : "Light"}</Text>
          <Switch
            value={darkMode}
            onValueChange={setDarkMode}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
          />
        </View>
      </View>

      {/* BUG VISUAL PROPOSITAL: Os cards de notícias ficam com texto invisível pois a cor foi hardcoded como preta no título, ignorando o dark mode */}
      <ScrollView style={styles.scroll}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
          <View key={item} style={[styles.card, dynamicStyles.card]}>
            <Image
              source={require('../assets/images/a6a1850740661c26b685506b9e82b60f.jpg')}
              style={styles.cardImage}
              resizeMode="cover"
            />
            <Text style={[styles.cardTitle, dynamicStyles.text]}>Notícia interessante {item}</Text>
            <Text style={dynamicStyles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 40 : 24,
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.5,
    flexShrink: 1,
    marginRight: 10
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(128,128,128,0.1)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    flexShrink: 0
  },
  switchLabel: {
    marginRight: 8,
    fontSize: 14,
    fontWeight: '600'
  },
  scroll: {
    flex: 1,
    padding: 20
  },
  card: {
    padding: 24,
    borderRadius: 16,
    marginBottom: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 4 },
  },
  cardImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#E5E5EA'
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
    letterSpacing: -0.5,
  }
});

function getDynamicStyles(isDark: boolean) {
  return StyleSheet.create({
    container: {
      backgroundColor: isDark ? '#0A0A0A' : '#F7F9FC'
    },
    text: {
      color: isDark ? '#FFFFFF' : '#1A1A1A'
    },
    card: {
      backgroundColor: isDark ? '#1C1C1E' : '#FFFFFF'
    },
    headerBorder: {
      borderBottomColor: isDark ? '#333333' : '#E5E5EA'
    }
  });
}

export default News;