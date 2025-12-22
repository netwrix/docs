---
title: "Reviewing Script Performance and Errors"
description: "Reviewing Script Performance and Errors"
sidebar_position: 30
---

# Reviewing Script Performance and Errors

There are several tools included in Platform Governance for NetSuite that enable analysis of the
script data.

## Performance Data

1. **Critical Scripts Execution History**: provides broad execution data about all scripts.
2. **Critical Script Utilization Overview**: select **View Overview** to display the number of
   subsidiaries, departments, employees using the script and the number of customizations related to
   script to enable deeper analysis.
3. **Script Customization Record**: Script performance metrics are also available on the
   Customization Record for that script. These include:

    - Script Average Run Time
    - \# of Daily Script Users
    - \# of Daily Script Executions

You can create saved searches to analyze those metrics as required.

To reset the **Script Average Run Time** so you can see the impact of any changes without past data,
you can use a Mass update to zero out the field called **Script Average Run Time** just like any
other NetSuite field. If you want to archive the results you can create a saved search with that
field and export.

## Error Reporting

Script error reporting requires the scripts to be in at least Audit mode.

**Error Report**: Summary of all the available errors logged in the system for various scripts.
Errors are summarized into types by excluding specific data such as line numbers, ids and, where
detectable, execution data. The result is a manageable number of errors. Error data expires over
time. This should not be viewed as a continuing or reliable view of all errors over time.

**Yesterday’s Script Errors**: Summary of all the available errors logged in the system for various
scripts for the previous day.
