import { useState } from "react";
import "./App.css";
import ExpenseInsert from "./components/ExpenseInsert";
import Expenses from "./Expenses";

function App() {
  const [items, setItems] = useState([
    {
      id: Math.random().toString(),
      name: "Item One",
      price: 23000,
      category: "식료품",
      date: new Date(2022, 2, 5),
      checkedmemo: false,
      memo: "",
      repurchase: "no",
    },
    {
      id: Math.random().toString(),
      name: "Item Two",
      price: 34000,
      category: "의료비",
      date: new Date(2022, 3, 14),
      checkedmemo: true,
      memo: "병원비",
      repurchase: "no",
    },
    {
      id: Math.random().toString(),
      name: "Item Three",
      price: 45000,
      category: "문화비",
      date: new Date(2023, 8, 25),
      checkedmemo: true,
      memo: "영화비",
      repurchase: "yes",
    },
  ]);

  const options = [
    { value: "groceries", name: "식료품" },
    { value: "necessaries", name: "생필품" },
    { value: "medical", name: "의료비" },
    { value: "cultural", name: "문화비" },
    { value: "etc", name: "기타" },
  ];

  const getExpenseInsertData = (data) => {
    setItems([
      {
        id: Math.random().toString(),
        name: data.name,
        price: data.price,
        category: data.category,
        date: new Date(data.date),
        checkedmemo: data.checkedmemo,
        memo: data.memo,
        repurchase: data.repurchase,
      },
      ...items,
    ]);
  };

  return (
    <>
      <ExpenseInsert
        getExpenseInsertData={getExpenseInsertData}
        options={options}
      />
      <Expenses items={items} options={options} />
    </>
  );
}

export default App;
