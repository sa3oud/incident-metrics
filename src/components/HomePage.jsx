import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { ErrorRateCalculator, ResponseTimeCalculator, ThroughputCalculator } from './Calculator';
import { Activity, AlertCircle, Server } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="p-8">
      <Card className="mb-8 bg-white/80 backdrop-blur-sm border-pink-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-700">
            Metrics Nomenclature and Explanations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 bg-pink-50/50 rounded-lg">
              
              <h3 className="font-bold text-pink-600 mb-3">Application Metrics</h3>
              <div className="space-y-4">
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Error Rate</h4>
                  <p className="text-gray-600">
                    The error rate is calculated as the percentage of error requests over the total requests.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>(Errors / Total Requests) × 100%</strong>
                  </p>
                  <ErrorRateCalculator />
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Response Time</h4>
                  <p className="text-gray-600">
                    The average response time is calculated as the total response time divided by the number of requests.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>Total Response Time / Number of Requests</strong>
                  </p>
                  <ResponseTimeCalculator />
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Throughput</h4>
                  <p className="text-gray-600">
                    Throughput is calculated as the number of successful requests per unit time.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>Successful Requests / Time Period</strong>
                  </p>
                  <ThroughputCalculator />
                </div>
              </div>
            </div>

            <div className="p-4 bg-pink-50/50 rounded-lg">
              <h3 className="font-bold text-pink-600 mb-3">System Metrics</h3>
              <div className="space-y-4">
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Availability</h4>
                  <p className="text-gray-600">
                    Availability is calculated as the percentage of time the system is operational excluding scheduled maintenance and unplanned downtime.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>((Service Hours - Scheduled Maintenance - Emergency Maintenance - Unplanned Downtime) / (Service Hours - Scheduled Maintenance)) × 100%</strong>
                  </p>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">Reliability</h4>
                  <p className="text-gray-600">
                    Reliability is calculated as the proportion of successful operational attempts over the total attempts.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>(Successful Ops / Total Ops) × 100%</strong>
                  </p>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <h4 className="font-bold text-pink-800 mb-2">MTBF</h4>
                  <p className="text-gray-600">
                    Mean Time Between Failures (MTBF) is calculated as the total operational time divided by the number of failures.
                  </p>
                  <p className="text-gray-600">
                    Formula: <strong>Total Operational Time / Number of Failures</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-wrap gap-4 justify-center">
        <button
          onClick={() => onNavigate('application')}
          className="flex items-center space-x-3 px-6 py-4 rounded-lg bg-white text-pink-600 hover:bg-pink-50
                   border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 transform hover:scale-105"
        >
          <Activity className="h-5 w-5" />
          <span className="font-semibold">Application Metrics</span>
        </button>
        
        <button
          onClick={() => onNavigate('system')}
          className="flex items-center space-x-3 px-6 py-4 rounded-lg bg-white text-pink-600 hover:bg-pink-50
                   border-2 border-pink-200 hover:border-pink-300 transition-all duration-300 transform hover:scale-105"
        >
          <Server className="h-5 w-5" />
          <span className="font-semibold">System Metrics</span>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
