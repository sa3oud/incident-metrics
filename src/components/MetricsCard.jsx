# src/components/MetricCard.jsx

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const MetricCard = ({ title, value, equation, description, inputs, onCalculate, unit = '' }) => {
  const [formInputs, setFormInputs] = useState({});
  const [error, setError] = useState('');

  const handleCalculate = () => {
    try {
      const values = {};
      inputs.forEach(input => {
        const value = formInputs[input.name];
        if (value === undefined || value === null || isNaN(value)) {
          throw new Error(`Please enter a valid value for ${input.label}`);
        }
        values[input.name] = value;
      });
      onCalculate(values);
      setError('');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Card className="bg-white/90">
      <CardHeader>
        <CardTitle className="text-xl text-pink-700">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-pink-50 p-3 rounded">
          <h4 className="font-semibold mb-2">Equation:</h4>
          <code className="text-sm whitespace-pre-wrap">{equation}</code>
        </div>
        
        <div className="space-y-4">
          {inputs.map(input => (
            <div key={input.name}>
              <label className="block text-sm font-medium mb-1">{input.label}</label>
              <input
                type="number"
                placeholder={input.placeholder}
                onChange={(e) => {
                  const value = e.target.value === '' ? null : parseFloat(e.target.value);
                  setFormInputs(prev => ({...prev, [input.name]: value}));
                }}
                className="w-full p-2 border rounded"
                min={input.min}
                max={input.max}
                step={input.step || "any"}
              />
              {input.hint && (
                <p className="text-xs text-gray-500 mt-1">{input.hint}</p>
              )}
            </div>
          ))}
          {error && (
            <div className="text-red-500 text-sm p-2 bg-red-50 rounded">{error}</div>
          )}
          <button 
            onClick={handleCalculate}
            type="button"
            className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
          >
            Calculate
          </button>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-3 rounded">
          <h4 className="font-semibold mb-2">Result:</h4>
          <div className="text-2xl font-bold text-pink-600">
            {value ? `${value.toFixed(2)}${unit}` : '—'}
          </div>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MetricCard;
