import { Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function RootLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue', headerShown: false }}>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }} 
      />
      <Tabs.Screen 
        name="news" 
        options={{ 
          title: 'Notícias',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="newspaper-o" color={color} />,
        }} 
      />
    </Tabs>
  );
}