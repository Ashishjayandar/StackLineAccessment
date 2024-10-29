// src/App.js
import React from "react";
import { useSelector } from "react-redux";
import { selectProductData } from "./redux/store/productSlice";
import Graph from "./components/graph";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Table from "./components/table";

function App() {
  const products = useSelector(selectProductData);
  const selectedProduct = products[0];

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column", backgroundColor: '#f6f8fa' }}>
      <Header />
      <div
        style={{ display: "flex", flex: 1, padding: "1rem", flexBasis: "25%" }}
      >
        <Sidebar product={selectedProduct} />

        {/* Main content container for chart and table */}
        <div
          style={{
            marginLeft: "1rem",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            height: "100%", // Ensures full height for this container
            gap: "1rem", // Space between Graph and Table
          }}
        >
          <div style={{ flex: 1}}>
            <Graph product={selectedProduct} />
          </div>
          <div style={{ flex: 1}}>
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
