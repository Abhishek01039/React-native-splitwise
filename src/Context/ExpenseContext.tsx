import { Expense } from "@/model/ExpenseModel";
import { createContext, useState } from "react";

export const ExpenseContext = createContext<{
  expenses: Expense[];
  addExpense: (expense: Expense) => void;
  deleteExpense: (id: string) => void;
  updateExpense: (id: string, updatedExpense: Expense) => void;
}>({
  expenses: [],
  addExpense: () => {},
  deleteExpense: () => {},
  updateExpense: () => {},
});

export default function ExpenseProvider({ children }: { children: React.ReactNode }) {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  const addExpense = (expense: Expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  const deleteExpense = (id: string) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const updateExpense = (id: string, updatedExpense: Expense) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) => (expense.id === id ? updatedExpense : expense)),
    );
  };

  return (
    <ExpenseContext.Provider value={{ expenses, addExpense, deleteExpense, updateExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}
