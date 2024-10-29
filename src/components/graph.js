import React from "react";
import { Line } from "react-chartjs-2";
import { parseISO, format } from "date-fns";
import "./graph.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
const Graph = ({ product }) => {
  if (!product) return null;

  const formatToMonth = (dateStr) => format(parseISO(dateStr), "MMM");
  const monthlySales = product.sales.reduce((acc, sale) => {
    const month = formatToMonth(sale.weekEnding).toUpperCase();
    if (!acc[month]) acc[month] = { retailSales: 0, wholesaleSales: 0 };
    acc[month].retailSales += sale.retailSales;
    acc[month].wholesaleSales += sale.wholesaleSales;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(monthlySales),
    datasets: [
      {
        label: "Retail Sales",
        data: Object.values(monthlySales).map((sale) => sale.retailSales),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
      {
        label: "Wholesale Sales",
        data: Object.values(monthlySales).map((sale) => sale.wholesaleSales),
        borderColor: "#28a745",
        backgroundColor: "rgba(40, 167, 69, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: { grid: { display: false } },
      y: { display: false, grid: { display: false } },
    },
    plugins: { legend: { display: false } },
  };

  return (
    <div className="graph">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default Graph;
