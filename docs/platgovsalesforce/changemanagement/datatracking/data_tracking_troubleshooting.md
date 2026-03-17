---
title: "Data Tracking - Troubleshooting"
description: "Data Tracking - Troubleshooting"
sidebar_position: 4
---

# Data Tracking - Troubleshooting

This section describes common issues and known errors that users may encounter while working with **Data Tracking**. It provides guidance to help identify the cause of a problem and outlines recommended steps to resolve or mitigate it.

The topics below highlight frequently reported scenarios, configuration issues, or system behaviors that may affect normal operation. Reviewing these items can help quickly diagnose problems and reduce troubleshooting time.

---

## Missing Customizations

If you are unable to find a Salesforce object or field to track, this is usually related to missing Customizations.

Although tracking is performed on Salesforce objects and fields, their configuration depends on the **Customization** level. This means that:

- Objects and fields must first exist as Customizations in the system.
- If they are not available, they cannot be selected for tracking or filtering.

### What to check

- Make sure the scanner has been executed for the relevant Salesforce types.
- Verify that the corresponding Customization exists in the system.

This applies to:
- Data Tracking configuration
- Filters used for generating Change Logs

### Solution

If the Customization is missing, you need to run the scanner for the specific Salesforce types.

Refer to the following link for instructions on how to run the scanner for specific Salesforce types:

[**Manual Scanner**](/docs/platgovsalesforce/installingstrongpoint/running_scanner.md)

---

## Deployment Errors

When selecting certain standard Salesforce objects for tracking, you may encounter issues that prevent the trigger and its corresponding test class from being successfully deployed.

Some Salesforce objects have specific characteristics that can affect deployment.

### Known Issue

Objects that do not have a **Name** field (such as `Case` or `WorkOrder`) may behave differently when:

- Automatically generating the test class
- Achieving the required minimum **75% code coverage** for deployment

These cases have already been addressed in the current implementation.

### What to keep in mind

- Other standard objects may still have unique behaviors that could cause deployment conflicts.
- Errors during deployment are often related to how the test class is generated for those objects.

### Suggested Actions

- Review the deployment error message to identify the affected object.
- Check if the object has any structural differences (e.g., missing common fields like `Name`).

If you encounter a new conflicting object, further investigation or customization may be required.

---

## Test Class Dependencies

The test class generated for each tracking trigger is created using a dynamic template. This template includes the necessary structure and relationships required to create valid test records.

### How it works

When a trigger is created, a corresponding test class is automatically generated. This test class:

- Inserts sample records
- Ensures the required **75% code coverage** for deployment

To determine which fields and values are required for these test records, the system relies on:

**Test Class SObject Dependency (Custom Metadata Type)** and its associated records.

### Example

When tracking an Approval Rule object (`sbaa__ApprovalRule__c`), the generated test class follows a predefined structure:

```apex
@isTest
public class SsbaaApprovalRulecTest {
  @isTest
  public static void testTrigger() {
    try {
      
        sbaa__ApprovalRule__c record_1 = new sbaa__ApprovalRule__c();
        record_1.Name = 'test';
        record_1.sbaa__TargetObject__c = 'Opportunity';
        insert record_1;

    } catch(Exception e) {}  
  }
}
```

The required field values used in this test class are defined in the Custom Metadata configuration.

### Configuration Reference

**Test Class SObject Dependency – Custom Metadata Type**

![Test Class SObject Dependency](/images/platgovsalesforce/change_management/data_tracking_test_dependency.webp)

**Example Configuration – ApprovalRule (CPQ) – Tracked Non-Blocking**

![ApprovalRule1](/images/platgovsalesforce/change_management/test_dependency_approval1.webp)
![ApprovalRule2](/images/platgovsalesforce/change_management/test_dependency_approval2.webp)

In this example, the configuration defines that a test record for `sbaa__ApprovalRule__c` must include:

- A value for the `Name` field (e.g., `"test"`)
- A specific value for the `sbaa__TargetObject__c` field (e.g., `"Opportunity"`)

### Common Issue

If the required dependencies are not properly defined:

- The test class may fail during execution
- Deployment may fail due to insufficient code coverage or invalid data

### Suggested Actions

- Verify that the correct dependencies are configured in the **Custom Metadata Type**
- Ensure all required fields and relationships are properly defined
- Update or add missing dependency records if needed

Proper configuration of these dependencies is essential for successful test class generation and deployment.

:::note
The **Test Class SObject Dependency – Custom Metadata Type** is not a protected component. This means you can add or modify dependencies as needed without requiring a new package version.
:::
---