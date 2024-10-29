import React from "react";
import { render } from "@testing-library/react";
import Graph from "../components/graph";
import { Line } from "react-chartjs-2";

import "jest-canvas-mock";

jest.mock("react-chartjs-2", () => ({
  Line: jest.fn(() => <div>Mocked Line Chart</div>),
}));

const mockProduct = {
  sales: [
    { weekEnding: "2023-01-07", retailSales: 1000, wholesaleSales: 800 },
    { weekEnding: "2023-02-14", retailSales: 1500, wholesaleSales: 1200 },
  ],
};

describe("Graph Component", () => {
    it("renders with correct data and options", () => {
      render(<Graph product={mockProduct} />);
  
      expect(Line).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            labels: ["JAN", "FEB"],
            datasets: [
              expect.objectContaining({ label: "Retail Sales", data: [1000, 1500] }),
              expect.objectContaining({ label: "Wholesale Sales", data: [800, 1200] }),
            ],
          }),
          options: expect.objectContaining({
            plugins: expect.objectContaining({
              title: expect.objectContaining({ text: "Retail Sales" }),
            }),
          }),
        }),
        {}
      );
    });
  });
