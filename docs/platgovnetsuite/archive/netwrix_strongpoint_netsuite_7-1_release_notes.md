---
title: "Netwrix Strongpoint for Netsuite 7.1 Release Notes"
description: "Netwrix Strongpoint for Netsuite 7.1 Release Notes"
sidebar_position: 30
---

# Netwrix Strongpoint for Netsuite 7.1 Release Notes

## Core 7.1.2.1

November 30, 2023

- Support links are changing December 1st, the new link is
  [https://www.netwrix.com/support.html](https://www.netwrix.com/support.html)
- NetSuite changes, such a moving an account to a different datacenter, are now treated as a
  Platform change. They do not create a non-compliant Change Log record.
- Improved handling of custom employee center roles across the Strongpoint spiders.
- Bundle updates were enabling **Automatic Synchronization** between Strongpoint and Jira, changing
  settings where **Automatic Synchronization** was disabled. **Automatic Synchronization** defaults
  to enabled for new installations. Refer to [Jira](/docs/platgovnetsuite/ticketingintegrations/jiraintegration/jira_integration.md) topic for
  more information.
- Enhanced handling of nonmaterial changes for fields using html coding. Special symbols ( < > & " )
  in fields do not generate non-compliant change logs.
- Improved handling of the **Date Last Used** script to avoid time limit errors.

## Core 7.1.2

November 2, 2023

- Removed **People Related to Customization** search from the **Strongpoint** > **Customization**
  menu.
- Increased the number of employees and roles for User Provisioning per run. If there are more than
  the limit, multiple runs are processed. The **User Provisioning Error** field reports the Change
  Request is in process until all of the runs are complete.
- Improved handling of Affected Employees if an error occurs during provisioning. The error only
  appears once per employee.
- Eliminated duplicate logs on script **Type** customizations occurring when **Resider Now** was run
  after the Strongpoint Create System Note CL scheduled script.
- Added system notes for changes to the **Company Preference** and **Account Preference**.
- Removed the Token Based Authentication Setup note link from **Environment Compare**.
- Improved ReSpider Now to prevent duplicated change logs.
- Improved handling of Non-material change workflow instances.
- Improved handling of platform changes on the Record type. Non-compliant change logs are not
  generated for permissions and links sublists it the **permittedrole** or **linkcenter** is empty.
  The change is noted in the log.

## Core 7.1.1.1

October 16, 2023

- **Change Log Evaluation**: Change logs related to workflows were labeled with a **Scripted
  Object** change type. The labeling caused discrepancies in the change log evaluation.
- **Search Functionality**: The **Execute as Admin Workflows** search was not displaying data, even
  when executed workflows were present.

## Core 7.1.1

September 20, 2023

- Added **Refresh Changed By** button to refresh change information on Change Logs. If the **Actual
  Change Date** is empty or **Change By** is set to **Could Not Be Determined** or **Pending
  Autospider**, a **Refresh Changed By** button is available. When clicked, it populates **Actual
  Change Date** and **Change By** fields.

    The button is only available for Object types where Strongpoint can retrieve the **Actual Change
    Date** and **Change By** fields.

    ![Refresh Changed By](/images/platgovnetsuite/change_management/change_log_refresh.webp)

- Removed extraneous Customization record link in Search Clean Up notification emails.
  Non-Strongpoint users receive the notification and cannot use the link.

## Core 7.1

August 23, 2023

Every release may contain enhancements behind the scenes and customer-specific bug fixes to keep
Strongpoint running smoothly.

**NetSuite Release 2023.2 Support**

The Strongpoint Searches have been updated to support NetSuite's change of **Formula (Text) Fields**
to the new **Formula (HTML) Fields**. This is a NetSuite security enhancement.

Strongpoint 7.1 must be installed prior to the NetSuite 2023.2 release to ensure a smooth upgrade:

1. Install Strongpoint 7.1 in your Sandbox August 15th.
2. Test Strongpoint 7.1 before August 22nd. Contact your Customer Success Manager if you have
   questions.
3. Strongpoint 7.1 will be pushed to your production environment starting August 23rd.

NetSuite will begin pushing release 2023.2 the end of August.

If you have custom searches, you must update them to support the NetSuite change. To view the list
of saved searches in your account that contain code in **Formula(Text)** fields, open:
**Lists** > **Search** > **Saved Searches with HTML in Formula(Text)**

![Run the Saved Search to view changes](/images/platgovnetsuite/release_notes/formulahtml.webp)

## SoD 1.6.2

November 3, 2023

- Updated the email template to include the Affected Employee details when an SoD Exemption is
  updated to Pending Approval. The approver sees the following details:

    - Any related SOD Exemptions for the Affected Employee where Status = Approved
    - Affected Employee
    - Related Exemption Name
    - Related Exemption Reason for Exemption
    - Related Exemption Affected Rules
    - Related Exemption Affected Roles

## SoD 1.6.1

September 20, 2023

Improved handling of **Proposed User Roles** and **Proposed Global Permissions** in the SoD Approval
Form.

## SoD 1.6

August 23, 2023

NetSuite Release 2023.2 Support

The Strongpoint Searches have been updated to support NetSuite's change of **Formula (Text) Fields**
to the new **Formula (HTML) Fields**. This is a NetSuite security enhancement.

Strongpoint 7.1 and SoD 1.6 must be installed prior to the NetSuite 2023.2 release to ensure a
smooth upgrade:

1. Install Strongpoint 7.1 and SoD 1.6 in your Sandbox August 15th.
2. Test Strongpoint 7.1 and SoD 1.6 before August 22nd. Contact your Customer Success Manager if you
   have questions.
3. Strongpoint 7.1 and SoD 1.6 will be pushed to your production environment starting August 23rd.

NetSuite will begin pushing release 2023.2 the end of August.

## Jira 1.3

November 30, 2023

- Support links are changing December 1st, the new link is
  [https://www.netwrix.com/support.html](https://www.netwrix.com/support.html)

## Jira 1.2.16

September 27, 2023

- Improved handling of the Jira Token field. It is now stored as an API Secret in NetSuite. Refer to
  [https://suiteanswers.custhelp.com/app/answers/detail/a_id/98285](https://suiteanswers.custhelp.com/app/answers/detail/a_id/98285)
  for more information.
- Improved handling of the Change Request owner assignment. **Owner** is now the person who pushed
  the ticket into NetSuite.

## Jira 1.2.15

- Replaced the persistent popup message in the Strongpoint Jira integration when project restricted
  access is in effect. You see a static note in the tab if you do not have access, instead of a more
  intrusive popup message requiring interaction. (Jira On-prem was updated August 2023, Jira Cloud
  updated November 2023)

## Jira 1.2.14

- Added the ability to receive and store images attached in the Jira description by Jira ticket ID.

    ![Strongpoint stores attached Jira images](/images/platgovnetsuite/release_notes/jira_images.webp)

## Jira 1.2.13

Here are the enhancements for the release:

- Change customization name to allow Single quotes (').
- Added **Location** to the **Type** drop down on the **Add Proposed Customization** form.

## Jira 1.2.11

Here are the enhancements for the release:

- Import Customizations from Jira
- Enable Allow NS to Jira Push (must be done prior to creating a ticket from NetSuite to Jira)
- Create Ticket from NetSuite to Jira
- Change customization name to allow Single quotes (').
- Added **Group** to the **Type** drop down on the **Add Proposed Customization** form.

Import Customizations from Jira

An **Import Customization** button has been added to the Jira Strongpoint form. You can import an
xml file exported from a Jira ticket.
![Jira Strongpoint form](/images/platgovnetsuite/release_notes/jira_strongpoint_form.webp)

Enable Allow NS to Jira Push

This feature must be enabled before you can create tickets from NetSuite to Jira.

1. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings**
2. Open the **Jira Integration** tab
3. Check **Allow NS to Jira Push** to enable pushing NetSuite change requests into Jira.

    ![Enable Allow NS to Push to Jira](/images/platgovnetsuite/release_notes/jira_example_integration.webp)

Create Ticket from NetSuite to Jira

Create Ticket from NetSuite to Jira must be enabled before you can create tickets from NetSuite to
Jira.

1. Create or open a change request in Strongpoint.
2. Add your information and customizations.
3. Click **Push to Jira**.
4. Select your Jira project.
   ![Select a Jira Project](/images/platgovnetsuite/release_notes/jira_ns_jira_push2.webp)
5. Click **Push**. A Change Request Pushed message is displayed. Click **Close**.
6. Open the **Related Change Records** tab. The ticket number is added as an **External Change
   Request Number**. **CM-15** in this example.
   ![The ticket number is on the Related Change Records tab](/images/platgovnetsuite/release_notes/jira_create_cr_related_change.webp)
7. Open Jira.
8. Navigate to **CM-15** ticket.
   ![Open the ticket in Jira](/images/platgovnetsuite/release_notes/jira_ns_jira_push3.webp)
9. Click **Strongpoint NetSuite**. The customizations from the change request are added.
   ![Customizations are added to the ticket](/images/platgovnetsuite/release_notes/jira_ns_jira_push4.webp)

## Jira 1.2.10

Here are the enhancements for the release:

- Credentials are now persistent, and do not need to be entered every time.
- Strongpoint Settings page added to Jira

Strongpoint Settings for Jira

The Strongpoint Settings app is accessed through Jira. This is where you create your Token Based
Authentication (TBA) credentials for your account. Once created, they are available to you for easy
selection when performing your tasks.

Token-Based Authentication is set up through NetSuite. Refer to
[Setting up Token-Based Authentication](/docs/platgovnetsuite/ticketingintegrations/jiraintegration/jira_integration.md).

1. Open **Jira**.
2. Open your **Projects** page:

    ![Open your Jira Projects page to find Add-ons](/images/platgovnetsuite/release_notes/jira_projects_menu.webp)

3. Expand **Add-ons**.
4. Select **Strongpoint Settings**.

    ![Jira Strongpoint Settings](/images/platgovnetsuite/release_notes/jira_strongpoint_settings.webp)

5. Click **New Token Based Authentication** to add your credentials. This needs to be done once for
   each of your accounts.

    ![Add tokens for Jira](/images/platgovnetsuite/release_notes/jira_add_token.webp)

6. Enter your credentials and click **Add Token Based Authentication Credential**.

## ServiceNow Integration 1.1.5

November 2, 2023

- Token-based Authentication is now a requirement. The Basic Authentication login form is
  deprecated.
- Improved formatting for **Add Proposed Customization** IDs.

## User Access Review 1.0.2

October 13, 2023

- Added a **GL Impact** field and a **Permission Risk Severity** dropdown to the Permission
  record.
  **GL Impact** field is a **Y/N** choice.
  **Permission Risk Severity** can be **High**, **Medium**, **Low** or **Null** (default).
- Added **GL Impact** and **Permission Risk Severity** filters to the Permission Revews lists.
- Added **GL Impact** and **Permission Risk Severity** columns to the Permission Review.

    ![UAR GL Impact](/images/platgovnetsuite/release_notes/uar_gl_impact.webp)

- Added new roles and permissions for UAR users:

    - Strongpoint UAR Admin
    - Strongpoint UAR Owner
    - Strongpoint UAR Additional Reviewer
    - Strongpoint UAR Auditor
