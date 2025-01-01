import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Activity, AlertCircle, Server } from 'lucide-react';

const HomePage = ({ onNavigate }) => {
  return (
    <div className="p-8">
      <Card className="mb-8 bg-white/80 backdrop-blur-sm border-pink-100 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-pink-700">
            Metrics Nomenclature
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 bg-pink-50/50 rounded-lg">
              <h3 className="font-bold text-pink-600 mb-3">Application Metrics</h3>
              <div className="grid gap-4">
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">Error Rate:</span>
                  <span className="text-gray-600 ml-2">(Errors / Total Requests) × 100%</span>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">Response Time:</span>
                  <span className="text-gray-600 ml-2">Total Response Time / Number of Requests</span>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">Throughput:</span>
                  <span className="text-gray-600 ml-2">Successful Requests / Time Period</span>
                </div>
              </div>
            </div>

            <div className="p-4 bg-pink-50/50 rounded-lg">
              <h3 className="font-bold text-pink-600 mb-3">System Metrics</h3>
              <div className="grid gap-4">
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">Availability:</span>
                  <span className="text-gray-600 ml-2">((Service Hours - Scheduled Maintenance - Emergency Maintenance - Unplanned Downtime) / (Service Hours - Scheduled Maintenance)) × 100%</span>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">Reliability:</span>
                  <span className="text-gray-600 ml-2">(Successful Ops / Total Ops) × 100%</span>
                </div>
                <div className="p-2 bg-white/60 rounded-lg">
                  <span className="font-medium text-pink-800">MTBF:</span>
                  <span className="text-gray-600 ml-2">Total Operational Time / Number of Failures</span>
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
