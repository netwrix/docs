---
title: "ExchangeMailbox: SDD Criteria"
description: "ExchangeMailbox: SDD Criteria"
sidebar_position: 40
---

# ExchangeMailbox: SDD Criteria

The SDD Criteria page is where criteria to be used for discovering sensitive data are configured. It
is a wizard page for the Mailbox sensitive data discovery category. This page requires the Sensitive
Data Discovery Add-On to be been installed on the Enterprise Auditor Console to define the criteria
and enable the Criteria Editor. See the
[Sensitive Data Discovery Add-On Installation](/docs/accessanalyzer/11.6/install/sensitivedatadiscovery/overview.md)
topic for additional information.

![Exchange Mailbox Data Collector Wizard SDD Criteria page](/images/accessanalyzer/11.6/admin/datacollector/exchangemailbox/sddcriteria.webp)

Select the checkbox for the criteria to be used to search for sensitive data. Criteria can also be
selected using the **Select All** and **Select None** buttons.

The table contains the following types of criteria:

- System Criteria – Lists pre-defined criteria
- User Criteria – Lists user-defined criteria

    :::note
    Until the Sensitive Data Discovery Add-On is installed, only the headers for the
    System Criteria and User Criteria nodes will be visible in the table.
    :::


- Edit – Click this button to access the Criteria Editor where user-defined criteria can be created
  or customized. See the
  [Sensitive Data Criteria Editor](/docs/accessanalyzer/11.6/sensitivedatadiscovery/criteriaeditor/overview.md)
  topic for additional information.
- Store discovered sensitive data – Stores the potentially sensitive data that matches the selected
  criteria in the Enterprise Auditor database. Select this checkbox to store a copy of the criteria
  match data. This copy can be used to check for false positives, data that matches the selected
  criteria but is not actually sensitive.
- Limit stored matches per criteria to [number] – Identifies the number of potentially sensitive
  data matches that are copied to the database. The default is 5 matches. This option is only
  available if the **Store discovered sensitive data** option is selected.
