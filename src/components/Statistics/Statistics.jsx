import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localstorage";

const Statistics = () => {
  const data = useLoaderData();
  const [donate, setDonate] = useState([]);

  useEffect(() => {
    const storedDonateId = getStoredDonation();

    if (data.length > 0) {
      const donated = data.filter((donate) =>
        storedDonateId.includes(parseInt(donate.id))
      );

      console.log(data, storedDonateId, donated);
      setDonate(donated);
    }
  }, [data]);

  console.log(donate);

  // Extracting values from the data arrays
  const labels = donate.map((item) => item.category);
  const values = donate.map((item) => item.price);

  console.log(labels.length, values);

  const chartData = [
    ["Label", "Value"],
    ...donate.map((item) => [item.category, item.price]),
  ];

  return (
    <div className="pie-chart">
      <Chart
        width={"100%"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={chartData}
        options={{
          title: "Pie Chart",
        }}
      />
    </div>
  );
};

export default Statistics;
