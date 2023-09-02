import React from "react";
import ExpenseDate from "./ExpenseDate";

const ListItem = ({ item }) => {
  return (
    <div className="ListItem">
      <h2>{item.name}</h2>
      <span>{item.price}원</span>
      <span>{item.category}</span>
      <ExpenseDate item={item} />
      {item.checkedmemo && <span>{item.memo}</span>}
    </div>
  );
};

export default ListItem;
