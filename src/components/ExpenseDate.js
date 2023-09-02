import React from "react";

const ExpenseDate = ({ item }) => {
  const month = item.date.toLocaleString("ko-KR", { month: "long" });
  const day = item.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = item.date.getFullYear();

  return (
    <span className="expense-date">
      {year}.{month}.{day}
    </span>
  );
};

export default ExpenseDate;
