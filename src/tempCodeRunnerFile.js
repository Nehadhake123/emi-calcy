import React, { useState } from 'react';
import EmiForm from './components/EmiForm';
import EmiResult from './components/EmiResult';
import MonthwiseBreakdown from './components/MonthwiseBreakdown';

const calculateEMI = (loanAmount, interestRate, loanTenure, prepayment) => {
  const monthlyInterestRate = interestRate / (12 * 100);
  const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) / (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
  const totalPayment = emi * loanTenure;
  const totalInterest = totalPayment - loanAmount;

  const breakdown = [];
  let balance = loanAmount;

  for (let i = 1; i <= loanTenure; i++) {
    const interest = balance * monthlyInterestRate;
    const principal = emi - interest;
    balance -= principal;

    breakdown.push({
      month: i,
      emi: emi.toFixed(2),
      interest: interest.toFixed(2),
      principal: principal.toFixed(2),
      balance: balance > 0 ? balance.toFixed(2) : '0.00',
    });
  }

  return {
    emi: emi.toFixed(2),
    totalInterest: totalInterest.toFixed(2),
    totalPayment: totalPayment.toFixed(2),
    breakdown,
  };
};

const App = () => {
  const [result, setResult] = useState(null);

  const handleCalculate = (data) => {
    const emiResult = calculateEMI(data.loanAmount, data.interestRate, data.loanTenure, data.prepayment);
    setResult(emiResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-2xl">
        <EmiForm onCalculate={handleCalculate} />
        {result && (
          <>
            <EmiResult result={result} />
            <MonthwiseBreakdown breakdown={result.breakdown} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
