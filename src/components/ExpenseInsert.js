import React, { useState } from "react";

const ExpenseInsert = ({ getExpenseInsertData, options }) => {
  const [objectState, setObjectState] = useState({
    id: Math.random().toString(),
    name: "",
    price: 0,
    category: "식료품",
    date: new Date(),
    checkedmemo: false,
    memo: "",
    repurchase: "yes",
  });

  const inputNameHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
  };

  const inputPriceHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      price: e.target.value,
    }));
  };

  const inputCategoryHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  const inputDateHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      date: e.target.value,
    }));
  };

  const inputCheckedMemoHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      checkedmemo: !objectState.checkedmemo,
    }));
  };
  const inputMemoHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      memo: e.target.value,
    }));
  };

  const inputRepurchaseHandler = (e) => {
    setObjectState((prevState) => ({
      ...prevState,
      repurchase: e.target.value,
    }));
  };

  const submitItem = (e) => {
    e.preventDefault();

    getExpenseInsertData(objectState);

    setObjectState({
      id: Math.random().toString(),
      name: "",
      price: 0,
      category: "식료품",
      date: new Date(),
      checkedmemo: false,
      memo: "",
      repurchase: "yes",
    });
  };

  return (
    <form className="ExpenseInsert" onSubmit={submitItem}>
      <div className="name">
        <label>이름</label>
        <input
          type="text"
          value={objectState.name}
          onChange={inputNameHandler}
        />
      </div>
      <div className="price">
        <label>가격</label>
        <input
          type="number"
          value={objectState.price}
          onChange={inputPriceHandler}
        />
      </div>
      <div className="category">
        <label>유형</label>
        <select value={objectState.category} onChange={inputCategoryHandler}>
          {options.map((option) => (
            <option value={option.name} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="date">
        <label>구입 날짜</label>
        <input
          type="date"
          value={objectState.date}
          onChange={inputDateHandler}
        />
      </div>
      <div className="memo">
        <label>메모</label>
        <input
          type="checkbox"
          value={objectState.checkedmemo}
          onChange={inputCheckedMemoHandler}
        />
        {objectState.checkedmemo && (
          <input
            type="text"
            value={objectState.memo}
            onChange={inputMemoHandler}
          />
        )}
      </div>
      <div className="repurchase">
        <label>재구매 의사</label>
        <input
          type="radio"
          value="yes"
          onChange={inputRepurchaseHandler}
          checked={objectState.repurchase === "yes"}
        />
        한다
        <input
          type="radio"
          value="no"
          onChange={inputRepurchaseHandler}
          checked={objectState.repurchase === "no"}
        />
        안한다
      </div>
      <div>
        <button type="submit">항목 추가</button>
      </div>
    </form>
  );
};

export default ExpenseInsert;
