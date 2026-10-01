import "react-native-gesture-handler";

import ExpenseProvider from "@/Context/ExpenseContext";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ExpenseProvider>
        <Stack>
          <Stack.Screen
            options={{
              headerShown: false,
            }}
            name="(tabs)"
          />
          <Stack.Screen
            name="AddExpense/[id]"
            options={{
              title: "Add Expense",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
        </Stack>
      </ExpenseProvider>
    </GestureHandlerRootView>
  );
}
