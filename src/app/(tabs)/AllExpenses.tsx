import ExpenseList from "@/component/ExpenseList";
import { ExpenseContext } from "@/Context/ExpenseContext";
import { useContext } from "react";
import { Text, View } from "react-native";

export default function AllExpenses() {
  const { expenses, deleteExpense } = useContext(ExpenseContext);

  return (
    <View>
      <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center", marginVertical: 10 }}>
        All Expenses
      </Text>
      <ExpenseList recentExpenses={expenses} deleteExpense={deleteExpense} />
    </View>
  );
}
