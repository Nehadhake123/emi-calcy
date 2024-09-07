import React from 'react';

const EmiResult = ({ result }) => {
  return (
    <div className="mt-6 p-8 sm:p-10 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500 transform hover:scale-105 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-wider">
        EMI Calculation Results
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg sm:text-xl text-white">
        <div className="bg-gray-700 bg-opacity-30 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-colors duration-300">
          <p className="font-semibold">Monthly EMI</p>
          <p className="text-blue-400 text-3xl font-bold mt-2">
            ₹ {result.emi}
          </p>
        </div>

        <div className="bg-gray-700 bg-opacity-30 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-colors duration-300">
          <p className="font-semibold">Total Interest Payable</p>
          <p className="text-red-400 text-3xl font-bold mt-2">
            ₹ {result.totalInterest}
          </p>
        </div>

        <div className="bg-gray-700 bg-opacity-30 p-6 rounded-xl shadow-lg hover:bg-gray-600 transition-colors duration-300 col-span-1 sm:col-span-2">
          <p className="font-semibold">Total Payment (Principal + Interest)</p>
          <p className="text-green-400 text-3xl font-bold mt-2">
            ₹ {result.totalPayment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmiResult;
