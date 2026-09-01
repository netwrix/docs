---
title: "Ransomware Dashboard"
description: "Ransomware Dashboard"
sidebar_position: 20
---

# Ransomware Dashboard

The Ransomware Dashboard for QRadar shows a list of suspected ransomware events.

![Ransomware Dashboard for Netwrix Activity Monitor App for QRadar](/images/activitymonitor/9.0/siem/qradar/dashboard/ransomwaredashboard.webp)

The Ransomware dashboard contains the following cards:

- Offenses – List of offenses that QRadar detects from the file activity data as potential
  ransomware attacks

    - See the [Table Card Features ](/docs/activitymonitor/9.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.

- Details of Ransomware Attack – Tabular format of all file activity events for the selected offense
  which occurred over the specified time interval

    - Only visible after clicking Search on an offense
    - See the [Table Card Features ](/docs/activitymonitor/9.0/siem/qradar/app/app.md#table-card-features) topic for additional
      information.

- Breakdown of File Types – Pie chart of the top eight file extensions of the affected files for the
  selected offense

    - Only visible after clicking Search on an offense

QRadar generates the offenses based on the Netwrix: Ransomware Detected rule that
this application includes. To adjust this rule to better suit your organization’s
needs, see the IBM QRadar
[Rule management](https://www.ibm.com/support/knowledgecenter/SS42VS_7.2.6/com.ibm.qradar.doc/c_qradar_rul_mgt.html)
article on how to modify rules.
