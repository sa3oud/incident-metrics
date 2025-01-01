import React, { useState } from 'react';
import MetricCard from './MetricCard';

const SystemMetrics = () => {
  const [metrics, setMetrics] = useState({
    availability: null,
    reliability: null,
    mtbf: null
  });

  const calculateSystemAvailability = (inputs) => {
    const {
      totalPeriod,
      serviceHoursPerDay,
      preventiveMaintenance,
      systemUpdates,
      emergencyMaintenance,
      unplannedDowntime
    } = inputs;

    // Calculate service hours and maintenance
    const serviceHours = (totalPeriod / 24) * serviceHoursPerDay;
    const scheduledMaintenance = preventiveMaintenance + systemUpdates;
    const actualUptime = serviceHours - scheduledMaintenance - emergencyMaintenance - unplannedDowntime;
    const requiredUptime = serviceHours - scheduledMaintenance;
    
    return (actualUptime / requiredUptime) * 100;
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-pink-700 mb-8">System Metrics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <MetricCard
          title="System Availability"
          value={metrics.availability}
          equation={`System Availability = (Actual Uptime / Required Uptime) × 100%

Where:
- Service Hours = (Total Period / 24) × Service Hours per Day
- Scheduled Maintenance = Preventive + Updates
- Actual Uptime = Service Hours - Scheduled Maintenance - Emergency Maintenance - Unplanned Downtime
- Required Uptime = Service Hours - Scheduled Maintenance`}
          description="True system availability considering service hours and all types of maintenance"
          inputs={[
            { 
              name: 'totalPeriod', 
              label: 'Total Time Period (hours)', 
              placeholder: '720', 
              min: 0,
              hint: 'e.g., 720 for one month'
            },
            { 
              name: 'serviceHoursPerDay', 
              label: 'Service Hours per Day', 
              placeholder: '24', 
              min: 0,
              max: 24,
              hint: 'e.g., 24 for 24/7, 8 for business hours'
            },
            { 
              name: 'preventiveMaintenance', 
              label: 'Preventive Maintenance (hours)', 
              placeholder: '8', 
              min: 0,
              hint: 'Regular planned maintenance'
            },
            { 
              name: 'systemUpdates', 
              label: 'System Updates/Patches (hours)', 
              placeholder: '4', 
              min: 0,
              hint: 'Planned update windows'
            },
            { 
              name: 'emergencyMaintenance', 
              label: 'Emergency Maintenance (hours)', 
              placeholder: '2', 
              min: 0,
              hint: 'Urgent but planned fixes'
            },
            { 
              name: 'unplannedDowntime', 
              label: 'Unplanned Downtime (hours)', 
              placeholder: '1', 
              min: 0,
              hint: 'Complete system outages'
            }
          ]}
          onCalculate={(inputs) => {
            try {
              if (inputs.totalPeriod <= 0) {
                throw new Error('Total period must be greater than 0');
              }
              if (inputs.serviceHoursPerDay <= 0 || inputs.serviceHoursPerDay > 24) {
                throw new Error('Service hours per day must be between 1 and 24');
              }

              const serviceHours = (inputs.totalPeriod / 24) * inputs.serviceHoursPerDay;
              const totalDowntime = 
                inputs.preventiveMaintenance + 
                inputs.systemUpdates + 
                inputs.emergencyMaintenance + 
                inputs.unplannedDowntime;

              if (totalDowntime > serviceHours) {
                throw new Error('Total downtime cannot exceed service hours');
              }

              const availability = calculateSystemAvailability(inputs);
              
              if (isNaN(availability) || !isFinite(availability)) {
                throw new Error('Invalid calculation result');
              }

              setMetrics(prev => ({ ...prev, availability }));
            } catch (error) {
              console.error('Calculation error:', error);
              throw error;
            }
          }}
          unit="%"
        />
      </div>
    </div>
  );
};

export default SystemMetrics;
