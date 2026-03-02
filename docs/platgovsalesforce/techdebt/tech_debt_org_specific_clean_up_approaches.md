---
title: "Specific Clean Up Approaches"
description: "Specific Clean Up Approaches"
sidebar_position: 60
---

# Specific Clean Up Approaches

Cleaning up an org is driven by your priorities. Platform Governance for Salesforce documentation is
very flexible, to help you clean up objects quickly and effectively.

Here are some guidelines to specific clean up problems:

- Unused, Risky
- Unused Automation
- Unused Test Classes
- Entire Object or Group of Parent / Child Objects
- Layouts and List Views
- Value-based Clean Up

These guidelines assume you set up your List Views the same way as described
[Step 1: Identify and Prioritize Targets](/docs/platgovsalesforce/techdebt/tech_debt_org_clean_up_example.md).

## Unused, Risky

DLU is populated older than X but there are some dependencies (Role, Code, Workflow):

1. Create a Clean Up List View filtered for Customizations where:

    - DLU is populated and older than X and
    - Scripted, Filter, SOQL, and/or Profile checkboxes are checked.

2. Set the **Clean Up Status** to **Under Investigation** and add appropriate **Clean Up Notes**.

## Unused Automation

Code and Other Critical Objects with dependencies on Unused Fields and Objects:

1. Create a report, such as the Unused Scripts Report, using the **Customizations with
   Dependencies** Report Type filtered for customizations with:

    - Salesforce Type you are focused on (for example, APEX Class)
    - The Customization's Date Last Used and/or the Dependency: Date Last Used is populated and
      older than X.
    - Optional: Filter out objects from a managed package:
        - Exclude all Packages: filter on Packages equals \{blank\}
        - Exclude specific Packages: filter on Packages not equal to
          `\{names of package you want to exclude\}  `
        - Exclude all Managed Packages: filter on Manageable State equals **unmanaged**

2. Open each relevant Customization in a new tab and set the **Clean Up Status** to **Under
   Investigation** and add appropriate **Clean Up Notes**.
3. While investigating, flag any Unused Test Classes you no longer need. They are identified with
   the Test Class check box.

## Unused Test Classes

Cleaning up tests that are no longer necessary can significantly improve your release cycles. There
are two reasons that a test class may be unused:

1. The code it tests is no longer used. To clean these up:

    1. Create a new Report based on the **Customizations with Dependencies** type.
    2. Filter for:

        - Salesforce Type equals **Apex Class**
        - Test Class equals **True**
        - Customization's Date Last Used and/or the Dependency: Date Last Used is populated and older
      than X
        - Optional: Filter out objects from a managed package.

    3. Add **Clean Up Notes** that the code it tests is no longer in use.

2. The assertions in the Test Class relate to fields no longer in use. To identify these:

    1. Create a new Report based on the **Customizations with Dependencies** report type.
    2. The following filters identify test classes referencing fields that have not been used in the
   past six months:

        - Salesforce Type equals **Apex Class**
        - Test Class equals **True**
        - Dependency: Salesforce Type equals **CustomField**
        - Dependency: Date Last Used less than **180 DAYS AGO**

    3. Add **Clean Up Notes** that the Test Class assertions relate to fields no longer in use.

## Entire Object or Group of Parent / Child Objects

Cleaning up a group of custom parent - child objects or an entire object (including the object
itself):

1. Create a Clean Up List View
2. Use the API Name as a filter set to either:

    - Equals the API Name of the parent or
    - Starts with the API Name of the parent object **plus " \_ \_. "**. (example **API Name starts
      with Record\_ \_.**) The period is required to ensure you just match that record and its
      children. You get all fields and children under the parent.

3. Set the **Clean Up Status** to **Under Investigation** and add appropriate **Clean Up Notes**.

## Layouts and List Views

These customizations do not have a reliable **Date Last Used**. We are working to narrow this gap.
For now, be extra careful when investigating these items.

## Value-based Clean Up

Sometimes we want to clean up values not just Customizations. For example:

- Cleaning up as someone leaves the company
- Identifying hard-coded dependencies on users
- Identifying where a record type or list value is used

You have already seen some clues to how you might do this in preceding cases. For most objects,
simply:

1. Create a Clean Up List View showing all Customizations.
2. Include the XML/Code field and any other specific fields you are interested in, for example:
   Report Formulas.
3. Search in the **Search this list** field (Only Available in Lightning) for:

    - Email address
    - Name
    - Email root (for example, `@netwrix.com`)
    - Record type or list value you are looking to isolate
    - Anything else that could appear in the metadata

Points to consider:

- Restricting the List View to one Record Type enables you to edit records directly from the List
  View.
- Search carefully if using multiple terms - quotes
  can be useful to enforce just the string you are looking for. **"Search Term"** (in quotes) finds
  objects with that phrase whereas **Search Term** (unquoted) finds anything with **Search** and
  **Term** even if they are in different fields in the List View.
- Even good searches can result in false positive matches if the same value appears in multiple
  lists or record types or is a commonly-used term in Salesforce's XML or is a common
  company-specific term.

**Next Technical Debt Topic:** [Ongoing Monitoring ](/docs/platgovsalesforce/techdebt/tech_debt_org_ongoing_monitoring.md)
