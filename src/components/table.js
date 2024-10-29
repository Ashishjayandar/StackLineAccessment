import React from "react";

const Table = ({ product }) => {
  if (!product || !product.sales) {
    return null; // Handle missing data
  }
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
            <th style={headerStyle}>Week Ending</th>
            <th style={headerStyle}>Retail Sales</th>
            <th style={headerStyle}>Wholesale Sales</th>
            <th style={headerStyle}>Units Sold</th>
            <th style={headerStyle}>Retailer Margin</th>
          </tr>
        </thead>
        <tbody>
          {product.sales.map((sale, index) => (
            <tr key={index}>
              <td style={cellStyle}>{sale.weekEnding}</td>
              <td
                style={cellStyle}
              >{`$${sale.retailSales.toLocaleString()}`}</td>
              <td
                style={cellStyle}
              >{`$${sale.wholesaleSales.toLocaleString()}`}</td>
              <td style={cellStyle}>{sale.unitsSold.toLocaleString()}</td>
              <td style={cellStyle}>{`$${sale.retailerMargin.toLocaleString()}`}</td>
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
  };
  
  const cellStyle = {
    padding: "0.75rem",
    textAlign: "left",
    borderBottom: "1px solid #ddd",
  };

export default Table;
