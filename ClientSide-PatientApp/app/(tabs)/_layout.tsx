import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Tabs, useRouter } from "expo-router";
import Feather from "@expo/vector-icons/Feather";

const TabsLayout = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarActiveTintColor: "#FFA500" }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
