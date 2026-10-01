import { ExpenseContext } from "@/Context/ExpenseContext";
import DateTimePicker from "@expo/ui/community/datetime-picker";
import { router, useLocalSearchParams } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function AddExpense() {
  const [date, setDate] = useState(new Date());
  const { addExpense, updateExpense, expenses } = useContext(ExpenseContext);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const { id } = useLocalSearchParams();

  useEffect(() => {
    console.log("itemId:", id);
    onInit();
  }, []);

  const onInit = () => {
    if (id) {
      const expenseToEdit = expenses.find((expense) => expense.id === id);
      if (expenseToEdit) {
        setTitle(expenseToEdit.title);
        setAmount(expenseToEdit.amount.toString());
        setDate(expenseToEdit.date);
      }
    }
  };

  const OnUpdateExpense = (id: string | string[]) => {
    if (id && typeof id === "string") {
      updateExpense(id, {
        id: id,
        title: title || "Expense Title",
        amount: parseFloat(amount || "0"),
        date: date,
      });
    }
  };

  const onAddExpense = () => {
    addExpense({
      id: Math.random().toString(),
      title: title || "Expense Title",
      amount: parseFloat(amount || "0"),
      date: date,
    });
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          alignSelf: "center",
        }}
      >
        Add Expense
      </Text>
      <View
        style={{
          height: 50,
        }}
      ></View>
      <TextInput
        placeholder="Enter expense Description"
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <View
        style={{
          height: 25,
        }}
      ></View>
      <TextInput
        placeholder="Enter expense amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />
      <View
        style={{
          height: 25,
        }}
      ></View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={{ flex: 2 }}>Expense Date:</Text>
        <DateTimePicker
          style={{ flex: 3 }}
          value={date}
          onValueChange={(event, selectedDate) => {
            setDate(selectedDate);
          }}
          mode="date"
        />
      </View>
      <View style={{ marginTop: "auto" }}>
        <Button
          color={"#0000FF"}
          title={!id ? "Add Expense" : "Edit Expense"}
          onPress={() => {
            if (id === "new") {
              onAddExpense();
            } else {
              OnUpdateExpense(id);
            }
            router.back();
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "blue",
  },
});
