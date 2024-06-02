# Security Alerts Dashboard

This project is a security alerts dashboard built using React, Tailwind CSS, and Chart.js. The dashboard visualizes security alert data with various charts, providing insights into different aspects of the alerts.

## Features

- **Alerts by Category**: Bar chart showing the number of alerts for each category.
- **Alerts by Severity**: Line chart showing the number of alerts by severity.
- **Alerts Over Time**: Line chart showing the number of alerts over time.
- **Alerts by Source IP**: Bar chart showing the number of alerts from each source IP.
- **Alerts by Hour of Day**: Bar chart showing the number of alerts occurring at each hour of the day.

## Dark Theme

The dashboard uses a dark theme for better visibility and aesthetics, styled with Tailwind CSS.

## Data Format

The data should be provided in a JSON file named `eve.json` in the `src` directory. The expected format of each alert entry is:

```json
[
  {
    "timestamp": "2023-01-01T12:00:00Z",
    "alert": {
      "category": "Malware",
      "severity": "High"
    },
    "src_ip": "192.168.1.1",
    "dst_ip": "192.168.1.2"
  },
  ...
]
