import React, { useState } from 'react';
import MetricCard from './MetricCard';

const ApplicationMetrics = () => {
  const [metrics, setMetrics] = useState({
    errorRate: null,
    responseTime: null,
    throughput: null
  });

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-700 mb-8">Application Metrics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricCard
          title="Error Rate"
          value={metrics.errorRate}
          equation="(Errors / Total Requests) × 100%"
          description="Percentage of failed requests"
          inputs={[
            { name: 'errors', label: 'Number of Errors', placeholder: '50', min: 0 },
            { name: 'totalRequests', label: 'Total Requests', placeholder: '1000', min: 0 }
          ]}
          onCalculate={(inputs) => {
            const rate = (inputs.errors / inputs.totalRequests) * 100;
            setMetrics(prev => ({ ...prev, errorRate: rate }));
          }}
          unit="%"
        />

        <MetricCard
          title="Response Time"
          value={metrics.responseTime}
          equation="Total Response Time / Number of Requests"
          description="Average time to process requests"
          inputs={[
            { name: 'totalTime', label: 'Total Response Time (ms)', placeholder: '5000', min: 0 },
            { name: 'requests', label: 'Number of Requests', placeholder: '100', min: 0 }
          ]}
          onCalculate={(inputs) => {
            const avgTime = inputs.totalTime / inputs.requests;
            setMetrics(prev => ({ ...prev, responseTime: avgTime }));
          }}
          unit=" ms"
        />

        <MetricCard
          title="Throughput"
          value={metrics.throughput}
          equation="Successful Requests / Time Period"
          description="Request processing rate"
          inputs={[
            { name: 'successfulRequests', label: 'Successful Requests', placeholder: '950', min: 0 },
            { name: 'timePeriod', label: 'Time Period (seconds)', placeholder: '60', min: 0 }
          ]}
          onCalculate={(inputs) => {
            const throughput = inputs.successfulRequests / inputs.timePeriod;
            setMetrics(prev => ({ ...prev, throughput: throughput }));
          }}
          unit=" req/s"
        />
      </div>
    </div>
  );
};

export default ApplicationMetrics;
