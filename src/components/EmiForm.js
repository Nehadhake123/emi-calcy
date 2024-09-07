import React, { useState } from 'react';

const EmiForm = ({ onCalculate }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [prepayment, setPrepayment] = useState('');
  const [errors, setErrors] = useState({});

  const validateInputs = () => {
    const newErrors = {};
    if (!loanAmount || loanAmount <= 0) newErrors.loanAmount = 'Loan amount must be a positive number';
    if (!interestRate || interestRate <= 0) newErrors.interestRate = 'Interest rate must be a positive number';
    if (!loanTenure || loanTenure <= 0) newErrors.loanTenure = 'Loan tenure must be a positive number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    
    // If no validation errors, reset the errors state and proceed
    if (Object.keys(validationErrors).length === 0) {
      setErrors({}); // Clear errors
      onCalculate({
        loanAmount: Number(loanAmount),
        interestRate: Number(interestRate),
        loanTenure: Number(loanTenure),
        prepayment: Number(prepayment),
      });
    } else {
      setErrors(validationErrors); // Set errors if any
    }
  };

  const handleInputChange = (e, setter, fieldName) => {
    const value = e.target.value;
    setter(value);
    
    // Remove individual field error if it becomes valid
    if (value > 0) {
      setErrors((prevErrors) => {
        const { [fieldName]: removedError, ...restErrors } = prevErrors;
        return restErrors;
      });
    }
  };

  return (
    <form
      className="bg-gradient-to-br from-gray-700 via-gray-800 to-black shadow-2xl rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 transform transition-all duration-300 hover:shadow-3xl hover:scale-105 max-w-md sm:max-w-lg mx-auto"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8">EMI Calculator</h2>
      
      <div className="relative">
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => handleInputChange(e, setLoanAmount, 'loanAmount')}
          placeholder="Loan Amount"
          className={`w-full bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 rounded-lg py-3 sm:py-4 px-4 sm:px-6 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 transition ${errors.loanAmount ? 'border-red-500' : ''}`}
        />
        {errors.loanAmount && <p className="text-red-500 text-xs mt-1">{errors.loanAmount}</p>}
        <p className="text-gray-400 text-xs mt-1">e.g., 500000</p>
      </div>

      <div className="relative">
        <input
          type="number"
          value={interestRate}
          onChange={(e) => handleInputChange(e, setInterestRate, 'interestRate')}
          placeholder="Interest Rate (%)"
          className={`w-full bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 rounded-lg py-3 sm:py-4 px-4 sm:px-6 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 transition ${errors.interestRate ? 'border-red-500' : ''}`}
        />
        {errors.interestRate && <p className="text-red-500 text-xs mt-1">{errors.interestRate}</p>}
        <p className="text-gray-400 text-xs mt-1">e.g., 7.5</p>
      </div>

      <div className="relative">
        <input
          type="number"
          value={loanTenure}
          onChange={(e) => handleInputChange(e, setLoanTenure, 'loanTenure')}
          placeholder="Loan Tenure (Months)"
          className={`w-full bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 rounded-lg py-3 sm:py-4 px-4 sm:px-6 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 transition ${errors.loanTenure ? 'border-red-500' : ''}`}
        />
        {errors.loanTenure && <p className="text-red-500 text-xs mt-1">{errors.loanTenure}</p>}
        <p className="text-gray-400 text-xs mt-1">e.g., 36</p>
      </div>

      <div className="relative">
        <input
          type="number"
          value={prepayment}
          onChange={(e) => setPrepayment(e.target.value)}
          placeholder="Prepayment Amount (Optional)"
          className="w-full bg-gray-800 bg-opacity-40 text-white placeholder-gray-400 rounded-lg py-3 sm:py-4 px-4 sm:px-6 shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500 transition"
        />
        <p className="text-gray-400 text-xs mt-1">Optional: e.g., 10000</p>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 sm:py-4 rounded-lg shadow-xl hover:scale-105 hover:shadow-2xl transition-transform duration-300"
      >
        Calculate EMI
      </button>
    </form>
  );
};

export default EmiForm;
