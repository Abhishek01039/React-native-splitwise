import { Expense } from "@/model/ExpenseModel";
import { router } from "expo-router";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import ReanimatedSwipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export default function ExpenseList({
  recentExpenses,
  deleteExpense,
}: {
  recentExpenses: Expense[];
  deleteExpense: (id: string) => void;
}) {
  return (
    <FlatList
      data={recentExpenses}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ReanimatedSwipeable
          renderRightActions={() => (
            <View
              style={[
                styles.expenseItem,
                {
                  justifyContent: "center",
                  marginLeft: 0,
                },
              ]}
            >
              <Pressable
                onPress={() => {
                  router.push({
                    pathname: "/AddExpense/[id]",
                    params: { id: item.id },
                  });
                }}
              >
                <Text>Edit</Text>
              </Pressable>
              <View style={{ width: 10 }}></View>
              <View
                style={{
                  height: "auto",
                }}
              >
                <Pressable
                  onPress={() => {
                    deleteExpense(item.id);
                  }}
                >
                  <Text style={{ color: "red" }}>Delete</Text>
                </Pressable>
              </View>
            </View>
          )}
        >
          <View style={styles.expenseItem}>
            <Text style={styles.expenseTitle}>{item.title}</Text>
            <Text style={styles.expenseAmount}>${item.amount.toFixed(2)}</Text>
            <Text style={styles.expenseDate}>{item.date.toLocaleDateString()}</Text>
          </View>
        </ReanimatedSwipeable>
      )}
    />
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f9f9f9",
    margin: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  expenseTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  expenseAmount: {
    fontSize: 16,
    color: "#888",
  },
  expenseDate: {
    fontSize: 14,
    color: "#888",
  },
});
