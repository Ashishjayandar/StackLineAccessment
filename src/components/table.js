import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortColumn, toggleSortDirection } from "../redux/store/sortingSlice";
import "./table.css";

const Table = ({ product }) => {
  const dispatch = useDispatch();
  const sortColumn = useSelector((state) => state.sorting.sortColumn);
  const sortDirection = useSelector((state) => state.sorting.sortDirection);

  const handleSort = (column) => {
    if (sortColumn === column) {
      dispatch(toggleSortDirection()); // Toggle sort direction only if the column is set meaning it's already sorted
    } else {
      dispatch(setSortColumn(column));// New click on any other column
    }
  };

  if (!product || !product.sales) return null;

  const sortedSales = [...product.sales].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    return sortDirection === "asc" ? (valueA > valueB ? 1 : -1) : (valueA < valueB ? 1 : -1);
  });

  const renderSortArrow = (column) => (
    <span
      style={{
        display: "inline-block",
        transition: "transform 0.3s ease",
        transform: sortColumn === column && sortDirection === "asc" ? "rotate(180deg)" : "rotate(0deg)",
      }}
    >
      ▼
    </span>
  );

  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("weekEnding")}>Week Ending {renderSortArrow("weekEnding")}</th>
            <th onClick={() => handleSort("retailSales")}>Retail Sales {renderSortArrow("retailSales")}</th>
            <th onClick={() => handleSort("wholesaleSales")}>Wholesale Sales {renderSortArrow("wholesaleSales")}</th>
            <th onClick={() => handleSort("unitsSold")}>Units Sold {renderSortArrow("unitsSold")}</th>
            <th onClick={() => handleSort("retailerMargin")}>Retailer Margin {renderSortArrow("retailerMargin")}</th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr key={index}>
              <td>{sale.weekEnding}</td>
              <td>{`$${sale.retailSales.toLocaleString()}`}</td>
              <td>{`$${sale.wholesaleSales.toLocaleString()}`}</td>
              <td>{sale.unitsSold.toLocaleString()}</td>
              <td>{`$${sale.retailerMargin.toLocaleString()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
