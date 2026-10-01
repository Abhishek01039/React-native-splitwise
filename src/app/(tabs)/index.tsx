import ExpenseList from "@/component/ExpenseList";
import { ExpenseContext } from "@/Context/ExpenseContext";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  // find the recent expense based on date (7 days)
  const recentExpenses = expenses.filter((expense) => {
    const today = new Date();
    const sevenDaysAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
    return expense.date >= sevenDaysAgo;
  });

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginVertical: 10 }}>
        Recent Expenses
      </Text>
      <ExpenseList recentExpenses={recentExpenses} deleteExpense={deleteExpense} />
    </View>
  );
}
