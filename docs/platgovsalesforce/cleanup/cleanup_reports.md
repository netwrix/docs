---
title: "Running Clean Up Reports"
description: "Running Clean Up Reports"
sidebar_position: 10
---

# Running Clean Up Reports

Platform Governance for Salesforce provides predefined reports to help you clean up your Salesforce
Instance. The reports are available by opening **Netwrix Dashboard** > **Reports** > **Clean Up**
and selecting a report:

- Default Clean Up List View
- Open Clean Up Status
- Clean Up Waiting for Info
- Customizations Excluded from Clean Up
- Unused Fields
- Unused Apex Code
- Unused Reports
- Customizations with Inactive Owners
- Customizations without Related Processes
- Custom Fields without Help Text
- Custom Fields without Description

## Using the Reports

- **Filters**: Open the filters to see the criteria used for the report. You can modify the unlocked
  filters to narrow the focus of the results.
- **Column Sort Order**: Use the toggler in the column heads to change the sort order of the results
  based on the selected column.
- **Links**: Use the linked fields to open details about the customization or user.

### Default Clean Up List View

The results list all customizations of Record type **Objects & Fields**, starting with API Name
**Account**, Salesforce Type **CustomField** and used less than **180 Days Ago**.

### Open Clean Up Status

This report enables you to find customizations that have been identified and noted for clean up.

### Clean Up Waiting for Info

The results list customizations flagged with clean up status **Send Request Info Emails.**

### Customizations Excluded from Clean Up

The results list active customizations flagged with clean up status **Ignore**.

### Unused Fields

The results list all of the unused custom fields.

### Unused Apex Code

The results list Apex code not used in the past 6 months.

### Unused Reports

The results list all of the unused reports.

### Customizations with Inactive Owners

Ownership of customizations is important for clean up and accountability in the system.

The results list customizations with owners who are either:

- Not active in Salesforce
- Do not have access to Platform Governance for Salesforce

### Customizations without Related Processes

The results list all customizations with no process assigned.

### Custom Fields without Help Text

Help and Descriptions enable users to more efficiently use the system. The results list
customizations missing help.

To fix, open the customization, click **Update Description and Help Text**.

### Custom Fields without Description

Help and Descriptions enable users to more efficiently use the system. The results list
customizations missing descriptions.

To fix, open the customization, click **Update Description and Help Text**.
