---
title: "Ransomware Dashboard"
description: "Ransomware Dashboard"
sidebar_position: 20
---

# Ransomware Dashboard

The Ransomware Dashboard for QRadar shows a list of suspected ransomware events.

![Ransomware Dashboard for Stealthbits Activivty Monitor App for QRadar](/images/activitymonitor/7.1/siem/qradar/dashboard/ransomwaredashboard.webp)

The Ransomware dashboard contains the following cards:

- Offenses – List of offenses detected within QRadar from the file activity data as a potential
  ransomware attack

    - See the
      [Table Card Features ](/docs/activitymonitor/7.1/siem/qradar/app/app.md#table-card-features)
      topic for additional information.

- Details of Ransomware Attack – Tabular format of all file activity events for the selected offense
  which occurred over the specified time interval

    - Only visible after clicking Search on an offense
    - See the
      [Table Card Features ](/docs/activitymonitor/7.1/siem/qradar/app/app.md#table-card-features)
      topic for additional information.

- Breakdown of File Types – Pie chart of the top eight file extensions of the affected files for the
  selected offense

    - Only visible after clicking Search on an offense

The Stealthbits: Ransomware Detected rule, which is packaged with this application, generates the offenses
that appear in QRadar. To adjust this rule to better suit an organization’s needs, refer to the IBM QRadar
[Rule management](https://www.ibm.com/support/knowledgecenter/SS42VS_7.2.6/com.ibm.qradar.doc/c_qradar_rul_mgt.html)
article on how to modify rules.
