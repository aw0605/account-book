import React from "react";
import ListItem from "./ListItem";

const ExpenseList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ExpenseList;
