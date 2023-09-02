import React from "react";
import ListItem from "./ListItem";
import "./ExpenseList.css";

const ExpenseList = ({ items }) => {
  return (
    <div className="ExpensList">
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ExpenseList;
