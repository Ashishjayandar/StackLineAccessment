import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProductData, selectProductData } from "./redux/store/productSlice";
import Graph from "./components/graph";
import Header from "./components/header";
import Sidebar from "./components/sideBar";
import Table from "./components/table";
import "./App.css";

const App= () => {
  const dispatch = useDispatch();
  const products = useSelector(selectProductData);
  const loadingStatus = useSelector((state) => state.product.status);

  useEffect(() => {
    dispatch(fetchProductData());
  }, [dispatch]);

  if (loadingStatus === "loading") return <p>Loading...</p>;

  const selectedProduct = products[0];

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <div className="app-sidebar">
          <Sidebar product={selectedProduct} />
        </div>

        <div className="app-main-content">
          <div className="app-graph">
            <Graph product={selectedProduct} />
          </div>
          <div className="app-table">
            <Table product={selectedProduct} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
