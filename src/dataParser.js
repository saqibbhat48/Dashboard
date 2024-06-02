import data from './eve.json';

export const parseData = () => {
  const parsedData = {
    alertsByCategory: {},
    alertsBySeverity: {},
    alertsOverTime: {},
    alertsBySourceIP: {},
    alertsByHourOfDay: Array(24).fill(0)
  };

  data.forEach(entry => {
    if (entry.alert) { // Check if the alert property exists
      const { category, severity } = entry.alert;
      const timestamp = new Date(entry.timestamp);
      const dateStr = timestamp.toLocaleDateString();
      const hour = timestamp.getHours();
      const sourceIP = entry.src_ip || 'Unknown';

      // Count by category
      if (parsedData.alertsByCategory[category]) {
        parsedData.alertsByCategory[category] += 1;
      } else {
        parsedData.alertsByCategory[category] = 1;
      }

      // Count by severity
      if (parsedData.alertsBySeverity[severity]) {
        parsedData.alertsBySeverity[severity] += 1;
      } else {
        parsedData.alertsBySeverity[severity] = 1;
      }

      // Count over time
      if (parsedData.alertsOverTime[dateStr]) {
        parsedData.alertsOverTime[dateStr] += 1;
      } else {
        parsedData.alertsOverTime[dateStr] = 1;
      }

      // Count by source IP
      if (parsedData.alertsBySourceIP[sourceIP]) {
        parsedData.alertsBySourceIP[sourceIP] += 1;
      } else {
        parsedData.alertsBySourceIP[sourceIP] = 1;
      }

      // Count by hour of day
      parsedData.alertsByHourOfDay[hour] += 1;
    }
  });

  return parsedData;
};
