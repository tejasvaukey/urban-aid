// import React, { useState } from 'react';

// const WalletHistory = () => {
//   const [transactions, setTransactions] = useState([
//     {
//       id: 1,
//       service: 'Plumbing Service',
//       provider: 'John’s Plumbing',
//       amount: 50,
//       date: '2024-11-22',
//       status: 'Completed',
//       type: 'Debit',
//     },
//     {
//       id: 2,
//       service: 'Electrical Repair',
//       provider: 'Electrician Pro',
//       amount: 75,
//       date: '2024-11-20',
//       status: 'Pending',
//       type: 'Debit',
//     },
//     {
//       id: 3,
//       service: 'House Cleaning',
//       provider: 'CleanPro Services',
//       amount: 40,
//       date: '2024-11-19',
//       status: 'Completed',
//       type: 'Credit',
//     },
//     {
//       id: 4,
//       service: 'Gardening Service',
//       provider: 'GreenThumb Services',
//       amount: 60,
//       date: '2024-11-18',
//       status: 'Failed',
//       type: 'Debit',
//     },
//   ]);

//   const statusColors = {
//     Completed: 'text-green-600 bg-green-100',
//     Pending: 'text-yellow-600 bg-yellow-100',
//     Failed: 'text-red-600 bg-red-100',
//   };

//   return (
//     <div className="max-w-7xl mx-auto p-6">
//       {/* Header */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold text-gray-700">Wallet & Payment History</h1>
//         <div className="flex items-center space-x-4">
//           <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Refill Wallet</button>
//           <p className="text-gray-600">Balance: $150.00</p>
//         </div>
//       </div>

//       {/* Wallet Overview (Balance Bar) */}
//       <div className="bg-gray-100 rounded-lg shadow-lg p-6 mb-8 flex items-center justify-between">
//         <div className="flex items-center space-x-4">
//           <div className="text-xl font-medium text-gray-800">Current Balance</div>
//           <div className="text-3xl font-bold text-blue-600">$150.00</div>
//         </div>
//         <div className="w-full h-2 bg-gray-300 rounded-full relative">
//           <div className="absolute top-0 left-0 w-1/2 h-full bg-blue-500 rounded-full"></div>
//         </div>
//       </div>

//       {/* Filters */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mb-8 flex justify-between items-center">
//         <input
//           type="text"
//           placeholder="Search by Service or Provider"
//           className="border border-gray-300 rounded-lg px-4 py-2 w-2/5 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <div className="flex space-x-6">
//           <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option value="">Filter by Type</option>
//             <option value="Debit">Debit</option>
//             <option value="Credit">Credit</option>
//           </select>
//           <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
//             <option value="">Filter by Status</option>
//             <option value="Completed">Completed</option>
//             <option value="Pending">Pending</option>
//             <option value="Failed">Failed</option>
//           </select>
//         </div>
//       </div>

//       {/* Transaction History */}
//       <div className="space-y-6">
//         {transactions.map((transaction) => (
//           <div
//             key={transaction.id}
//             className="bg-white shadow-md rounded-lg p-6 flex justify-between items-center"
//           >
//             <div>
//               <h3 className="text-xl font-medium">{transaction.service}</h3>
//               <p className="text-gray-600">
//                 Provider: <span className="font-medium">{transaction.provider}</span>
//               </p>
//               <p className="text-gray-600">Date: {transaction.date}</p>
//             </div>
//             <div className="text-right">
//               <div className="text-xl font-semibold text-gray-800">
//                 {transaction.type === 'Debit' ? '-' : '+'}${transaction.amount}
//               </div>
//               <span
//                 className={`inline-block px-3 py-1 rounded-full text-sm font-medium mt-2 ${statusColors[transaction.status]}`}
//               >
//                 {transaction.status}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Summary Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
//         <h2 className="text-2xl font-medium text-gray-800 mb-4">Transaction Summary</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Total Transactions:</span>
//             <span className="font-medium">{transactions.length}</span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Total Credits:</span>
//             <span className="font-medium">
//               ${transactions.filter((t) => t.type === 'Credit').reduce((acc, curr) => acc + curr.amount, 0)}
//             </span>
//           </div>
//           <div className="flex justify-between items-center">
//             <span className="text-gray-600">Total Debits:</span>
//             <span className="font-medium">
//               ${transactions.filter((t) => t.type === 'Debit').reduce((acc, curr) => acc + curr.amount, 0)}
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Payment Methods Section */}
//       <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
//         <h2 className="text-2xl font-medium text-gray-800 mb-4">Payment Methods</h2>
//         <ul className="space-y-4">
//           <li className="flex justify-between items-center">
//             <span className="text-gray-600">Visa **** 1234</span>
//             <button className="text-blue-500 hover:underline">Remove</button>
//           </li>
//           <li className="flex justify-between items-center">
//             <span className="text-gray-600">PayPal</span>
//             <button className="text-blue-500 hover:underline">Remove</button>
//           </li>
//         </ul>
//         <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Add Payment Method</button>
//       </div>
//     </div>
//   );
// };

// export default WalletHistory;


import React, { useState } from 'react';

const WalletHistory = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      service: 'Plumbing Service',
      provider: 'John’s Plumbing',
      amount: 50,
      date: '2024-11-22',
      status: 'Completed',
      type: 'Debit',
    },
    {
      id: 2,
      service: 'Electrical Repair',
      provider: 'Electrician Pro',
      amount: 75,
      date: '2024-11-20',
      status: 'Pending',
      type: 'Debit',
    },
    {
      id: 3,
      service: 'House Cleaning',
      provider: 'CleanPro Services',
      amount: 40,
      date: '2024-11-19',
      status: 'Completed',
      type: 'Credit',
    },
    {
      id: 4,
      service: 'Gardening Service',
      provider: 'GreenThumb Services',
      amount: 60,
      date: '2024-11-18',
      status: 'Failed',
      type: 'Debit',
    },
  ]);

  const statusColors = {
    Completed: 'text-green-600 bg-green-100',
    Pending: 'text-yellow-600 bg-yellow-100',
    Failed: 'text-red-600 bg-red-100',
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Wallet/Payment History</h1>

      {/* Wallet Balance Summary */}
      <div className="bg-white p-6 shadow-md rounded-lg mb-8">
        <h2 className="text-lg font-bold mb-4">Wallet Balance: $150.00</h2>
        <div className="flex justify-between items-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Refill Wallet</button>
          <p className="text-gray-600">Last Refilled: 2024-11-10</p>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by service or provider"
          className="border border-gray-300 rounded-lg px-4 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option value="">Filter by Transaction Type</option>
          <option value="Debit">Debit</option>
          <option value="Credit">Credit</option>
        </select>
      </div>

      {/* Transaction History List */}
      <div className="space-y-4">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white shadow-md rounded-lg p-4 flex justify-between items-center"
          >
            {/* Transaction Info */}
            <div>
              <h2 className="text-lg font-bold">{transaction.service}</h2>
              <p className="text-gray-600">
                Provider: <span className="font-medium">{transaction.provider}</span>
              </p>
              <p className="text-gray-600">
                Date: {transaction.date} | Amount: ${transaction.amount}
              </p>
            </div>

            {/* Transaction Status */}
            <div className="text-right">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${statusColors[transaction.status]}`}
              >
                {transaction.status}
              </span>
              <div className="mt-2 space-x-2">
                <button className="text-blue-500 hover:underline">View Details</button>
                {transaction.status === 'Pending' && (
                  <button className="text-red-500 hover:underline">Cancel</button>
                )}
                <button className="text-gray-500 hover:underline">Download Receipt</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="bg-gray-100 rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-2">Transaction Summary</h2>
        <p>Total Transactions: {transactions.length}</p>
        <p>
          Total Credits: ${transactions.filter((t) => t.type === 'Credit').reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
        <p>
          Total Debits: ${transactions.filter((t) => t.type === 'Debit').reduce((acc, curr) => acc + curr.amount, 0)}
        </p>
      </div>

      {/* Rewards / Bonus Points Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-4">Rewards and Bonus Points</h2>
        <p className="text-gray-600">
          Earned Points: <span className="font-medium">150 points</span>
        </p>
        <p className="text-gray-600">Next Reward Level: 200 points</p>
        <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-lg">
          Redeem Points
        </button>
      </div>

      {/* Refunds and Adjustments Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-4">Refunds & Adjustments</h2>
        <p className="text-gray-600">Refund Requests: 1 Pending</p>
        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg">
          Request Refund
        </button>
      </div>

      {/* Payment Methods Section */}
      <div className="bg-white shadow-md rounded-lg p-4 mt-8">
        <h2 className="text-lg font-bold mb-4">Payment Methods</h2>
        <ul>
          <li className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Visa **** 1234</span>
            <button className="text-blue-500 hover:underline">Remove</button>
          </li>
          <li className="flex justify-between items-center mb-4">
            <span className="text-gray-600">PayPal</span>
            <button className="text-blue-500 hover:underline">Remove</button>
          </li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Add Payment Method</button>
      </div>
    </div>
  );
};

export default WalletHistory;

