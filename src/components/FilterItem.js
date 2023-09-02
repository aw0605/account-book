import React, { useState, useEffect } from "react";
import "./FilterItem.css";

const FilterItem = ({ onFilterChange, options }) => {
  const [sortingCategory, setSortingCategory] = useState("");
  const [sortingCriteria, setSortingCriteria] = useState("default");
  const [dateRange, setDateRange] = useState({
    startDate: "",
    endDate: "",
  });

  //   const handleFilterChange = () => {
  //     onFilterChange({
  //       sortingCategory,
  //       sortingCriteria,
  //       startDate: dateRange.startDate,
  //       endDate: dateRange.endDate,
  //     });
  //   };

  // useEffect를 활용하여 필터값이 변경될 때마다 자동으로 필터 적용
  useEffect(() => {
    onFilterChange({
      sortingCategory,
      sortingCriteria,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    });
  }, [sortingCategory, sortingCriteria, dateRange]);

  return (
    <div className="FilterItem">
      <div className="filter-item__category">
        <select
          value={sortingCategory}
          onChange={(e) => setSortingCategory(e.target.value)}
        >
          {options.map((option) => (
            <option value={option.name} key={option.value}>
              {option.name}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-item__sorting">
        <select
          value={sortingCriteria}
          onChange={(e) => setSortingCriteria(e.target.value)}
        >
          <option value="default">정렬 기준</option>
          <option value="nameAsc">A - Z</option>
          <option value="nameDesc">Z - A</option>
          <option value="priceHigh">높은 가격순</option>
          <option value="priceLow">낮은 가격순</option>
          <option value="dateOld">오래된 순</option>
          <option value="dateRecent">최근 순</option>
        </select>
      </div>
      <div className="filter-item__date">
        <div>
          <label>시작 기간</label>
          <input
            type="date"
            value={dateRange.startDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, startDate: e.target.value })
            }
          />
        </div>
        <div>
          <label>끝 기간</label>
          <input
            type="date"
            value={dateRange.endDate}
            onChange={(e) =>
              setDateRange({ ...dateRange, endDate: e.target.value })
            }
          />
        </div>
      </div>
      {/* <button onClick={handleFilterChange}>필터 적용</button> */}
    </div>
  );
};

export default FilterItem;
