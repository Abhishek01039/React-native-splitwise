import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { router, Tabs } from "expo-router";
import { Pressable } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: "#0000FF",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          headerRight: () => (
            <Pressable
              onPress={() =>
                router.push({
                  pathname: "/AddExpense/[id]",
                  params: { id: "new" },
                })
              }
            >
              <FontAwesomeFreeSolid
                name="plus"
                size={24}
                color="#FFFFFF"
                style={{ marginRight: 10 }}
              />
            </Pressable>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="AllExpenses"
        options={{
          title: "All Expenses",
          headerTitleStyle: {
            color: "#FFFFFF",
          },
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
