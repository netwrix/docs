---
title: "Creating a Change Request with the Old Form"
description: "Creating a Change Request with the Old Form"
sidebar_position: 100
---

# Creating a Change Request with the Old Form

These are the steps to create a Change Request using the old form. Refer to
[Creating a Change Request](/docs/platgovnetsuite/changemanagement/creating_change_request.md) for the new form. Refer to
[Setting Preferred Forms](/docs/platgovnetsuite/customization/setting_preferred_forms.md) for information on
designating your preferred Change Request form.

Before making any changes, it is important to understand the scope of the planned change, potential
impacts and the level of change required.

To do this, in your **production** account:

1. Open **Strongpoint** > **Change Management Tools** > **Change Request** > **New**
2. Fill in the following fields in the **Main** section of the change request:

    - **Name**: Add a name to the change request.
    - **Change Type**: Add the kind of change you want to make. ( For categorization purposes.)
    - **Owner**: Add who created the change request.
    - **External Change Request Number (optional)**: Add a number of the change request in any
      external change tracking system.
    - **External Link (optional)**: Add a link to any external record relevant to the change such as
      an external change management record.
    - **Completion Status (optional)**: Add the stage of completion for the change request.
    - **Parent Change Request (optional)**: link to other change requests.

    ![changerequestmain1](/images/platgovnetsuite/change_management/changerequestmain1.webp)

3. Fill in the following fields in the **Scope** section of the change request:

    - **Change Overview**: Add a summary of the desired change.
    - To add customizations you can use the Customization field and/or the Proposed Customization
      field or you can add the Affected Bundle ID:
        - **Customizations**: Use this field if you are changing objects that already exist in your
          account. (Can be used in conjunction with proposed customizations.)
        - **Proposed Customizations**: Use this field when you are adding customizations that do not
          yet exist in your account. You can add multiple Script IDs by separating them with commas.
          (Can be used in conjunction with customizations that already exist.)
        - **Affected Bundle ID**: If you are using a bundle to move objects from sandbox to
          production, use this field to add the bundle ID.

    ![scope-1](/images/platgovnetsuite/change_management/scope-1.webp)

    ![scope-3](/images/platgovnetsuite/change_management/scope-3.webp)

4. **Save** the Change Request.
5. In the upper right hand corner, see the **Change Control Level Required** and choose either:

- **Log Only**: you are planning on changing only Saved Searches that have no dependencies, so they
  are safe to change.
- **Change Request:** you are planning on changing objects that require approval to change.

6. Click on **Impact Analysis**. This will show you how objects are connected to other things.
7. Scroll down to the bottom of the page and click on the **Impact Analysis** tab.This shows you
   which customization record(s) can or cannot be safely modified as well as customizations that are
   inactive. You see a list of the customization record(s) that have been included, and warnings for
   impacted customization record(s) that need to be investigated before you make a change.

    ![impactanalysissubtab](/images/platgovnetsuite/change_management/impactanalysissubtab.webp)

:::note
If you want to see if the change would have an impact in your sandbox, you can also create a change
request in your sandbox account.
:::
