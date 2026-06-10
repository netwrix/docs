---
title: "Charts and Data Export"
description: "View interactive charts and export data from AI Chat responses."
sidebar_position: 30
---

# Charts and Data Export

The AI Chat assistant can render interactive charts directly within chat responses. You can also
export chart data to CSV files for further analysis.

## Chart Types

The assistant can generate the following chart types when responding to data-oriented questions:

- **Bar charts** -- Compare values across categories, such as risk scores by
  organization.
- **Line charts** -- Display trends over time, such as compliance percentages.

{/* TODO: Screenshot of an inline bar chart in a chat response */}

## View Charts

Charts appear inline within the assistant's response. The following suggestion cards from the
welcome screen produce chart responses:

| Card | Chart Type | Description |
| --- | --- | --- |
| Risk Scores | Bar chart | Current risk scores by org |
| Compliance Trend | Line chart | Compliance % over time |

You can also ask your own questions that request chart visualizations, and the assistant will
render a chart when the data supports it.

## Export Chart Data

Each chart includes an **Export CSV** button. Click **Export CSV** to download the chart data as
a CSV file.

The CSV file contains the data points used to render the chart, suitable for importing into
spreadsheet applications or other analysis tools.

:::note
The **Export CSV** button is available on each chart. If a response contains multiple
charts, each chart has its own export button.
:::
