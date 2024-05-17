import { AreaChart } from "@tremor/react";
import { useSelector } from "react-redux";

const dataFormatter = (number) =>
  `$${Intl.NumberFormat("us").format(number).toString()}`;

const Charts = () => {
  const { sales, purchases } = useSelector((state) => state.stock);

  const salesData = sales?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("pl-PL"),
    amount: item.amount,
  }));

  const purchasesData = purchases?.map((item) => ({
    date: new Date(item.createdAt).toLocaleDateString("pl-PL"),
    amount: item.amount,
  }));
  console.log(salesData);
  return (
    <div className="flex flex-col gap-5">
      {" "}
      <AreaChart
        className="h-80"
        data={salesData}
        index="date"
        categories={["amount"]}
        colors={["indigo"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
      <AreaChart
        className="h-80"
        data={purchasesData}
        index="date"
        categories={["amount"]}
        colors={["red"]}
        valueFormatter={dataFormatter}
        yAxisWidth={60}
      />
    </div>
  );
};
export default Charts;
