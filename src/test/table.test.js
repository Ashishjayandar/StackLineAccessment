import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Table from "../components/table";
import sortingReducer, {
  setSortColumn,
  toggleSortDirection,
} from "../redux/store/sortingSlice";

const mockProduct = {
  sales: [
    {
      weekEnding: "2023-01-07",
      retailSales: 1000,
      wholesaleSales: 800,
      unitsSold: 100,
      retailerMargin: 200,
    },
    {
      weekEnding: "2023-02-14",
      retailSales: 1500,
      wholesaleSales: 1200,
      unitsSold: 150,
      retailerMargin: 300,
    },
  ],
};

describe("Table Component", () => {
  let store;
  let dispatchSpy;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        sorting: sortingReducer,
      },
      preloadedState: {
        sorting: { sortColumn: null, sortDirection: "asc" },
      },
    });

    // Spy on the store's dispatch method
    dispatchSpy = jest.spyOn(store, "dispatch");
  });

  test("renders table with product sales data", () => {
    render(
      <Provider store={store}>
        <Table product={mockProduct} />
      </Provider>
    );

    // Check if sales data rows are rendered
    expect(screen.getByText("2023-01-07")).toBeInTheDocument();
    expect(screen.getByText("$1,000")).toBeInTheDocument();
    expect(screen.getByText("$800")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("$200")).toBeInTheDocument();
  });

  test("does not render table when product is null", () => {
    const { container } = render(
      <Provider store={store}>
        <Table product={null} />
      </Provider>
    );
    expect(container.firstChild).toBeNull();
  });

  test("dispatches sorting actions when column headers are clicked", () => {
    render(
      <Provider store={store}>
        <Table product={mockProduct} />
      </Provider>
    );
  
    const retailSalesHeader = screen.getByText("Retail Sales");
  
    // First click should dispatch setSortColumn
    fireEvent.click(retailSalesHeader);
    expect(dispatchSpy).toHaveBeenCalledWith(setSortColumn("retailSales"));
  
    // Update the state after first dispatch
    store.dispatch(setSortColumn("retailSales"));
  
    // Second click should dispatch toggleSortDirection
    fireEvent.click(retailSalesHeader);
    expect(dispatchSpy).toHaveBeenCalledWith(toggleSortDirection());
  });
  
});
