import React, { useState, useEffect, useCallback } from "react";
import FilterItem from "./FilterItem";
import ExpenseList from "./ExpenseList";

const Expenses = ({ items, options }) => {
  const [filteredItems, setFilteredItems] = useState(items);

  const [activeFilters, setActiveFilters] = useState({
    sortingCategory: "",
    sortingCriteria: "default",
    startDate: "",
    endDate: "",
  });

  // 정렬 기준별 함수
  const sortItems = (items, criteria) => {
    if (criteria === "nameAsc") {
      return items.slice().sort((a, b) => a.name.localeCompare(b.name));
    } else if (criteria === "nameDesc") {
      return items.slice().sort((a, b) => b.name.localeCompare(a.name));
    } else if (criteria === "priceHigh") {
      return items.slice().sort((a, b) => b.price - a.price);
    } else if (criteria === "priceLow") {
      return items.slice().sort((a, b) => a.price - b.price);
    } else if (criteria === "dateOld") {
      return items.slice().sort((a, b) => a.date - b.date);
    } else if (criteria === "dateRecent") {
      return items.slice().sort((a, b) => b.date - a.date);
    } else {
      return items;
    }
  };

  // 기간 필터링 함수
  const filterItemsByDate = (items, startDate, endDate) => {
    return items.filter(
      (item) =>
        (!startDate || new Date(item.date) >= new Date(startDate)) &&
        (!endDate || new Date(item.date) <= new Date(endDate))
    );
  };

  //   const handleFilterChange = ({
  //     sortingCategory,
  //     sortingCriteria,
  //     startDate,
  //     endDate,
  //   }) => {
  //     const sortedItems = sortItems(items, sortingCriteria);
  //     const filteredByDate = filterItemsByDate(sortedItems, startDate, endDate);

  //     if (sortingCategory) {
  //       const filteredByCategory = filteredByDate.filter(
  //         (item) => item.category === sortingCategory
  //       );
  //       setFilteredItems(filteredByCategory);
  //     } else {
  //       setFilteredItems(filteredByDate);
  //     }
  //   };

  const handleFilterChange = useCallback(
    ({ sortingCategory, sortingCriteria, startDate, endDate }) => {
      setActiveFilters({
        sortingCategory,
        sortingCriteria,
        startDate,
        endDate,
      });
    },
    []
  );

  useEffect(() => {
    const sortedItems = sortItems(items, activeFilters.sortingCriteria);
    const filteredByDate = filterItemsByDate(
      sortedItems,
      activeFilters.startDate,
      activeFilters.endDate
    );

    if (activeFilters.sortingCategory) {
      const filteredByCategory = filteredByDate.filter(
        (item) => item.category === activeFilters.sortingCategory
      );
      setFilteredItems(filteredByCategory);
    } else {
      setFilteredItems(filteredByDate);
    }
  }, [items, activeFilters]);

  return (
    <div className="Expenses">
      <FilterItem onFilterChange={handleFilterChange} options={options} />
      <ExpenseList items={filteredItems} />
    </div>
  );
};

export default Expenses;
