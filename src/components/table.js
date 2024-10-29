import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSortColumn } from "../redux/store/sortingSlice";

const Table = ({ product }) => {
  const dispatch = useDispatch();
  const sortColumn = useSelector((state) => state.sorting.sortColumn);
  const sortDirection = useSelector((state) => state.sorting.sortDirection);

  const handleSort = (column) => {
    dispatch(setSortColumn({ column }));
  };

  if (!product || !product.sales) {
    return null; // Handle missing data
  }
  const sortedSales = [...product.sales].sort((a, b) => {
    if (!sortColumn) return 0;
    const valueA = a[sortColumn];
    const valueB = b[sortColumn];

    if (sortDirection === "asc") {
      return valueA > valueB ? 1 : -1;
    } else {
      return valueA < valueB ? 1 : -1;
    }
  });

  // Function to render arrow based on sort direction
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
    <div
      style={{
        height: "50vh",
        maxwidth: "100%",
        backgroundColor: "#ffffff",
        padding: "1rem",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
        overflowX: "auto",
      }}
    >
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={headerStyle} onClick={() => handleSort("weekEnding")}>
              Week Ending {renderSortArrow("weekEnding")}
            </th>
            <th style={headerStyle} onClick={() => handleSort("retailSales")}>
              Retail Sales {renderSortArrow("retailSales")}
            </th>
            <th
              style={headerStyle}
              onClick={() => handleSort("wholesaleSales")}
            >
              Wholesale Sales {renderSortArrow("wholesaleSales")}
            </th>
            <th style={headerStyle} onClick={() => handleSort("unitsSold")}>
              Units Sold {renderSortArrow("unitsSold")}
            </th>
            <th
              style={headerStyle}
              onClick={() => handleSort("retailerMargin")}
            >
              Retailer Margin {renderSortArrow("retailerMargin")}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedSales.map((sale, index) => (
            <tr key={index}>
              <td style={cellStyle}>{sale.weekEnding}</td>
              <td
                style={cellStyle}
              >{`$${sale.retailSales.toLocaleString()}`}</td>
              <td
                style={cellStyle}
              >{`$${sale.wholesaleSales.toLocaleString()}`}</td>
              <td style={cellStyle}>{sale.unitsSold.toLocaleString()}</td>
              <td
                style={cellStyle}
              >{`$${sale.retailerMargin.toLocaleString()}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const headerStyle = {
  backgroundColor: "#f4f4f4",
  padding: "0.75rem",
  textAlign: "left",
  fontWeight: "bold",
  borderBottom: "1px solid #ddd",
  cursor: "pointer",
  userSelect: "none",
};

const cellStyle = {
  padding: "0.75rem",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

export default Table;
