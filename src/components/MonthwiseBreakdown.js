import React from 'react';

const MonthwiseBreakdown = ({ breakdown }) => {
  return (
    <div className="mt-8 p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-lg transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 text-center">Month-wise Breakdown</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-left bg-transparent">
          <thead className="bg-gray-700">
            <tr className="text-white">
              <th className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-base uppercase tracking-wider">Month</th>
              <th className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-base uppercase tracking-wider">EMI</th>
              <th className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-base uppercase tracking-wider">Interest Paid</th>
              <th className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-base uppercase tracking-wider">Principal Paid</th>
              <th className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-base uppercase tracking-wider">Remaining Balance</th>
            </tr>
          </thead>

          <tbody>
            {breakdown.map((month, index) => (
              <tr
                key={index}
                className="hover:bg-gray-700 transition-colors duration-200 text-white border-b border-gray-600 even:bg-gray-800"
              >
                <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-lg">{month.month}</td>
                <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-lg">₹ {month.emi.toLocaleString()}</td>
                <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-lg">₹ {month.interest.toLocaleString()}</td>
                <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-lg">₹ {month.principal.toLocaleString()}</td>
                <td className="px-4 sm:px-6 py-3 text-xs sm:text-sm lg:text-lg">₹ {month.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MonthwiseBreakdown;
