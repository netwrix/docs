---
title: "Process Issues"
description: "Process Issues"
sidebar_position: 5
---

# Using Process Issues

The Process issue ticketing system:

- Enables anyone one with permission and access to NetSuite to initiate a ticket.
- Enables management and IT staff to triage issues and enhancements to determine if a change request
  should be created.
- Attaches Customization and Process Records to automatically determine how risky the change is and
  what level of change process is required for compliance.
- Can be linked to subsequent Change Requests to provide end to end reporting of changes for audit
  purposes.

This is an optional part of the process. If you have an established ticketing system, you can
continue to use that and reference the external ticket in the Change Request.

## Initiate a Process Issue

1. Open **Strongpoint** > **Process Issue** > **New**

    ![Initiate a Process Issue](/images/platgovnetsuite/processes/process_issue.webp)

2. Select a **Custom Form** or use the default **Process Issue Form**.
3. Assign a **Number** for the Process Issue. This is any alphanumeric code you use to identify this
   process issue.
   A Unique **ID** is generated after the Process Issue is created.
4. Enter a meaningful **Name** for the Process Issue.
5. Select a **Parent Issue** if applicable. This field is used to group issues. You can either type
   part of the name and press Tab, or use the drop down icon and select from a list.
6. Change the **Owner** if needed.
7. Select a **Type** for the issue. **Type** is used for sorting and organizing issues. You can set
   up types to trigger alerts to object owners and managers. You can use the predefined types or use
   **New** to create your own. Here are basic definitions:

    - **Question**: question about a feature, function or process.
    - **Suggestion**: idea for improving functionality or process.
    - **Broken Process**: problem with a process, but not blocking productivity or performance.
    - **Waste**: steps or work that is not necessary.
    - **Control Log**: An automatically created process if you have the **Strongpoint Controls**
      package.
    - **Script Error**: error within a script causing it not to function as expected.
    - **Material Risk**: risk to threaten the success of an enterprise in any material way.
    - **Requirement**: a documented, actionable, measurable, testable, traceable task or
      functionality related to identified system need.

8. Select an optional **Severity** for the issue. **Severity** is used for sorting and organizing
   issues.

    - **Low Importance**: minimal business impact for a production system, with no impact to
      quality, performance, or functionality
    - **Medium Importance**: partial non-critical functionality loss, time-sensitive issue for long
      term productivity not causing an immediate work stoppage.
    - **Urgent Issue**: critical business impact, loss of service, or data loss or corruption.

9. Best practice is to enter a meaningful **Issue Description** to make it easy to identify the
   issue in a list or report.
10. Select the **Process** affected by the issue.
11. Add one or more **Customizations** affected by the issue. Platform Governance for NetSuite
    analyzes the customization records, attaches them to appropriate policies and determines the
    Change Control Level required.
12. Check **Do Not ReSpider Automatically** if you prefer not to automatically run the spider when
    the **Status** is set to **Closed**.
13. Click **Add Proposed Customization** to create a customization for this Process Issue. Select
    the **Type** and complete the **Script ID** or **Name**, depending on the **Type**. Click **+Add
    more proposed customizations** to add another, or **Add Proposed Customization(s)** to continue.
14. Assign a **Status** to help track the issue. Do not assign as **Completed As Process Issue** or
    **Closed** until all work has been done, and all change requests are completed, deployed and
    verified.

    - **Not Started** is the default.
    - **In Progress**: work or investigation has started.
    - **Completed As Process Issue**: work has been completed, all changes and change requests are
      complete, deployed and verified.
    - **Converted to Change Request**: a change request has been created for the issue.
    - **Next Review**: indicates the issue will be looked at again the next time process issues are
      reviewed.
    - **Closed**: either the process issue is closed with no action, or the same criteria as
      **Completed As A Process Issue**. The Spider is automatically run when the **Status** is set
      to **Closed** unless **Do Not ReSpider Automatically** is checked.

15. Select one or more additional **Approvers**. Mandated approvers are set by the appropriate
    policy.
16. Enter an optional **External Ticket Number** and **External Ticket Link** to cross reference
    processes with an external ticket system.
17. Assign an **Approval Status** based on the investigation and change request activities. The
    Spider is automatically run when the **Approval Status** is set to **Approved**
18. Add additional details on the **Implementation** tab. For example, you can assign the process
    issue, or add existing Change Request information.
19. **Save** the Process Issue.

Once a Process Issue is saved, you can open it and use the **New Task** and **New Meeting**
functionality, or edit the issue to update status information.

Use the ERD tab to visually view the records and see the relationships.

![processissue4](/images/platgovnetsuite/processes/processissue4.webp)

## View Process Issues

You can manage your Process Issues through reports:

Open **Strongpoint** > **Process Issues** > **Process Issue Overview**

You can enter filters to sort the issues and click on the column heads to change the sort order.
Reports can be exported to CSV, Excel, PDF, printed or emailed using the icons.

You can also edit some fields inline:

1. Click on **EDIT** in the report tool bar. When enabled, it is green with a check mark.
2. Click on the red pencil icon in the column head. Columns without the pencil icon cannot be
   edited.
3. Click in the column to open a text box.

![Process Issue Reports](/images/platgovnetsuite/processes/process_issue_overview.webp)
