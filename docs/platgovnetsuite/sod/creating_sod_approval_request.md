---
title: "Creating an SoD Approval Request"
description: "Creating an SoD Approval Request"
sidebar_position: 30
---

# Creating an SoD Approval Request

You can create a custom change request form for an SoD Approval Request. Refer to
[Using Custom Change Request Forms](/docs/platgovnetsuite/changemanagement/use_custom_cr_forms.md) for information on
implementing your custom form.

To create an SoD Approval request:

1. Open **SoD** > **SoD Change Management** > **New SoD Approval**
2. Select the SoD Exemption Type. The **Scope** selections are different depending on the type.

    - **Cross Role Exemption** (default) is set on the employee level.
    - **Role Exemption** is set on the role level. With Role based exemptions, you have the option
      to apply to current and/or future employees to streamline onboarding.

3. Select information for **Main**:

    - **Name**: Enter a name for the request.
    - **Priority Level**: Select the priority level for the request. Select **New** to add a custom
      level.
    - **Reason or Compensating Control for SoD Exemption**: Enter the information supporting the
      approval request.

4. Enter information for **Scope**:

    - For **Cross Role Exemption**, select one or more of the **Affected Employee(s)**, **Affected
      Rule(s)** or **Affected Role(s)**.
    - For **Role Exemption**

        - Select one or more of the **Affected Employee(s)** and **Affected Rule(s)**.
        - Select one or more options for applying the exemption. If you choose **Select Current
          Employees**, the **Affected Employee** entry is enabled.

5. Click **In Progress** in the status bar to indicate you are working on the request.
6. **Save** the Change Request.
7. The Approval section is now available. Click **Edit** to add **Additional Approvers** or
   **Approver Notes**. Click **Save** if you make changes. Refer to
   [Create a Change Request](/docs/platgovnetsuite/changemanagement/creating_change_request.md) for more details about
   the status bar.

## Adding Employees to an Approved SoD Exemption

Employees can be added to an Approved and Open SoD Approval request. The **Add Employees to
SoD Exemption** button is available after the request is Approved.

![Add Employees to Approved SoD Exemption](/images/platgovnetsuite/sod/sod_add_employee.webp)

1. Click **Add Employees to SoD Exemption**.
2. Select one or more **Affected Employee(s)** to add.

    ![Select Affected Employees](/images/platgovnetsuite/sod/sod_add_employee_select.webp)

3. Click **Request Approval**. Approvers must be
   [licensed](/docs/platgovnetsuite/installation/license_manager.md) Platform Governance for NetSuite users
   and have the correct [role permissions](/docs/platgovnetsuite/installation/setting_permissions.md) if they
   are using a custom (non-Strongpoint) role.
   A new request is created with **Add to SoD Exemption** prepended to the Name of the original
   request. The new request is set to **Pending Approval**.

    ![New Request created from Add Employee to SoD Exemption button](/images/platgovnetsuite/sod/sod_add_employee_new.webp)

When the new Request is approved, the employees are added to the **Open** and **Approved** parent
Change Request and the new Request is **Closed**. If the parent request status has changed, the
status of the new Request is unchanged.
