import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function ExpenseForm({ addExpense,user }) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the expense data to the list of expenses
    fetch(`https://expense-tracker-7yjh.onrender.com//${user}/expenses`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData), // Send the form data
})
  .then((resp)=>resp.json)
  .then((data)=>addExpense(data))
    

    // Clear the form fields
    setFormData({
      name: '',
      amount: '',
      date: '',
      category: '',
    });
    navigate('/homepage');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-100">
      <div className="bg-blue-800 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl mb-4">Add Expense</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-blue-200 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
        
          <div className="mb-4">
            <label htmlFor="amount" className="block text-blue-200 mb-2">Amount</label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-blue-200 mb-2">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-blue-200 text-blue-800"
            />
          </div>
          <div className="mb-4">
  <label htmlFor="category" className="block text-blue-200 mb-2">
    Category
  </label>
  <select
    id="category"
    name="category"
    value={formData.category}
    onChange={handleChange}
    className="w-full p-2 border rounded bg-blue-200 text-blue-800"
  >
    <option value="">Select a category</option>
    <option value="Transportation">Transportation</option>
    <option value="Food">Food</option>
    <option value="Bill">Bill</option>
    <option value="Shopping">Shopping</option>
    <option value="Entertainment">Entertainment</option>
  </select>
</div>

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
}

export default ExpenseForm;
