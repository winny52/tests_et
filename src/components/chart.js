import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

function Chart({ entertain, transport, food, shopping, bill }) {
  // Parse the input values as integers
  const parsedEntertain = parseFloat(entertain);
  const parsedTransport = parseFloat(transport);
  const parsedFood = parseFloat(food);
  const parsedShopping = parseFloat(shopping);
  const parsedBill = parseFloat(bill);

  const data = {
    labels: ['Transport', 'Food', 'Entertain', 'Shopping', 'Bill'],
    datasets: [
      {
        data: [parsedTransport, parsedFood, parsedEntertain, parsedShopping, parsedBill],
        backgroundColor: ['aqua', 'orange', 'purple', 'red', 'green'],
      },
    ],
  };

  const options = {}; // You can customize chart options here
  const total = (parsedTransport + parsedEntertain + parsedFood + parsedShopping + parsedBill).toFixed(2);

  return (
    <div className='text-lg ml-24'>
      <div className='bg-blue-400 text-white p-2 mb-4 rounded-lg'>
        <p>Amount spent this week</p>
        <p>Ksh {total}</p>
      </div>
      <div className='bg-blue-400 w-96 h-96 rounded-md'>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}

export default Chart;
