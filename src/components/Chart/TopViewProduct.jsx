import React from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Samsung Refigerator", "Lenovo Desktop", "Nikon Camera"],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};

function TopViewProduct() {
  return (
    <div>
      <h4>Top 3 Products</h4>
      <hr className="bg-warning mb-3" />
      <Doughnut data={data} width={20} height={20} />
    </div>
  );
}

export default TopViewProduct;
