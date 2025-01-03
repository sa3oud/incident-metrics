import React, { useState } from 'react';

const ErrorRateCalculator = () => {
  const [errors, setErrors] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [result, setResult] = useState(null);

  const calculateErrorRate = () => {
    setResult(((errors / totalRequests) * 100).toFixed(2));
  };

  return (
    <div className="p-4 bg-white/60 rounded-lg">
      <h4 className="font-bold text-pink-800 mb-2">Error Rate Calculator</h4>
      <input
        type="number"
        placeholder="Errors"
        value={errors}
        onChange={(e) => setErrors(e.target.value)}
        className="mr-2 p-1 border"
      />
      <input
        type="number"
        placeholder="Total Requests"
        value={totalRequests}
        onChange={(e) => setTotalRequests(e.target.value)}
        className="mr-2 p-1 border"
      />
      <button onClick={calculateErrorRate} className="p-2 bg-pink-600 text-white rounded">
        Calculate
      </button>
      {result !== null && (
        <div className="mt-2 text-pink-800">Error Rate: {result}%</div>
      )}
    </div>
  );
};

const ResponseTimeCalculator = () => {
  const [totalTime, setTotalTime] = useState(0);
  const [totalRequests, setTotalRequests] = useState(0);
  const [result, setResult] = useState(null);

  const calculateResponseTime = () => {
    setResult((totalTime / totalRequests).toFixed(2));
  };

  return (
    <div className="p-4 bg-white/60 rounded-lg">
      <h4 className="font-bold text-pink-800 mb-2">Response Time Calculator</h4>
      <input
        type="number"
        placeholder="Total Response Time"
        value={totalTime}
        onChange={(e) => setTotalTime(e.target.value)}
        className="mr-2 p-1 border"
      />
      <input
        type="number"
        placeholder="Number of Requests"
        value={totalRequests}
        onChange={(e) => setTotalRequests(e.target.value)}
        className="mr-2 p-1 border"
      />
      <button onClick={calculateResponseTime} className="p-2 bg-pink-600 text-white rounded">
        Calculate
      </button>
      {result !== null && (
        <div className="mt-2 text-pink-800">Average Response Time: {result} ms</div>
      )}
    </div>
  );
};

const ThroughputCalculator = () => {
  const [successfulRequests, setSuccessfulRequests] = useState(0);
  const [timePeriod, setTimePeriod] = useState(0);
  const [result, setResult] = useState(null);

  const calculateThroughput = () => {
    setResult((successfulRequests / timePeriod).toFixed(2));
  };

  return (
    <div className="p-4 bg-white/60 rounded-lg">
      <h4 className="font-bold text-pink-800 mb-2">Throughput Calculator</h4>
      <input
        type="number"
        placeholder="Successful Requests"
        value={successfulRequests}
        onChange={(e) => setSuccessfulRequests(e.target.value)}
        className="mr-2 p-1 border"
      />
      <input
        type="number"
        placeholder="Time Period (seconds)"
        value={timePeriod}
        onChange={(e) => setTimePeriod(e.target.value)}
        className="mr-2 p-1 border"
      />
      <button onClick={calculateThroughput} className="p-2 bg-pink-600 text-white rounded">
        Calculate
      </button>
      {result !== null && (
        <div className="mt-2 text-pink-800">Throughput: {result} req/sec</div>
      )}
    </div>
  );
};

export { ErrorRateCalculator, ResponseTimeCalculator, ThroughputCalculator };
