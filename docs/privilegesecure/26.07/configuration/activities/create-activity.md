---
title: "Create an activity"
description: "Create an activity in Netwrix Privilege Secure by choosing a platform, login account, and activity type, then completing the fields that each choice reveals."
sidebar_position: 20
---

# Create an activity

Create an activity to define the login account, the session type, and the actions for a kind of privileged session. After you save the activity, add its actions and include it in an access policy.

## Before you begin

- For the **Vault** login account, create a vault connector first. See [Third-party vault connectors](../../integrations/vaults/vault-connectors.md).
- For an **Interactive App Launch** activity on Active Directory, Microsoft SQL Server, or Oracle, add the Remote Desktop Services (RDS) host as a host resource.

## Create the activity

1. In the left navigation pane, click **Activities**.
2. Click the green **+** button in the activity list.
3. Enter a **Name** and a **Description**.
4. Select a **Platform**.
5. Select a **Login Account**.
6. Select an **Activity Type**.
7. Complete the fields that appear for your selections. See [Activity fields](#activity-fields).
8. Click **Save**.

{/* TODO screenshot: the new activity form with Login Account set to Activity Token, showing Login Account Template, Create Account, and Delete After Use */}

When you change any field on an existing activity, the **Save** and **Cancel** buttons appear. Click **Save** to keep the change or **Cancel** to discard it.

After you save, add actions to the **Pre-Session (Grant)**, **Session (Connect)**, and **Post-Session (Remove)** groups. See [Add actions to an activity](actions.md).

### Example

This example creates an activity that gives a user a temporary account on a Linux resource.

| Field | Value |
|---|---|
| **Name** | `Linux administrator (token)` |
| **Platform** | Linux |
| **Login Account** | Activity Token |
| **Activity Type** | Interactive |
| **Login Account Template** | `at.%samaccountname%.appadmin` |
| **Create Account** | Selected |
| **Delete After Use** | Selected |

For a user whose account name is `jsmith`, the template evaluates to `at.jsmith.appadmin`. For an Activity Token, Privilege Secure keeps the first 15 characters (`at.jsmith.appad`) and adds random characters until the name is 20 characters long. When the connection profile sets an activity token complexity policy, Privilege Secure keeps the policy **Length** minus 5 characters and fills up to the policy **Length**. See [Activity token complexity](../access-policies/activity-token-complexity.md).

## Activity fields

The fields in the first table always appear. The fields in the second table appear only for the selections named in the **Appears when** column.

| Field | Description |
|---|---|
| **Name** | The name that appears in the activity list and in access policies. |
| **Description** | A description of the activity. |
| **Platform** | The type of resource that the activity runs on. The platforms defined in Privilege Secure, in alphabetical order after None Specified, for example Active Directory, Linux, Website, and Windows. |
| **Login Account** | Required. Requester, Managed, Activity Token, Resource, or Vault. Resource is available only when **Platform** is Website. See [Login account types](activities.md#login-account-types). |
| **Activity Type** | Required. Interactive, Interactive App Launch, or Task Automation. See [Activity types](activities.md#activity-types). |

| Field | Appears when | Description |
|---|---|---|
| **Requester Login Format** | **Login Account** is Requester | Required. The format that prefills the **Username** field when the user logs on to the resource. It must exactly match the user name on the resource. Options: **Domain\SamAccountName** (default), **SamAccountName**, **UPN (User Principal Name)**, **Email**, and **Custom**. A local Privilege Secure user can't use this login account on a domain-joined Windows resource. See [Login account types](activities.md#login-account-types). |
| **Login Account Template** | **Login Account** is Managed, Activity Token, or Vault, or **Requester Login Format** is Custom | The format of the account name that the session uses. See [Login account templates](login-account-templates.md). The form fills in a default: Managed `%targetdomain%\%samaccountname%-NPS` (Linux `%samaccountname%-NPS@%upn-domain%`); Activity Token `%targetdomain%\%samaccountname%` (Linux `%samaccountname%@%upn-domain%`, Cisco `%samaccountname%`); Vault `%targetdomain%\%samaccountname%`. |
| **Create Account** | **Login Account** is Activity Token or Managed | Creates the account when the activity starts, if it doesn't exist. If it exists, the user connects to it. Always selected and locked for Activity Token. |
| **Delete After Use** | **Login Account** is Activity Token or Managed | Deletes the account when the activity ends. When cleared, Privilege Secure disables the account instead. Always selected and locked for Activity Token. For Managed, you can select it only when **Create Account** is selected. A built-in administrator account can't be deleted or disabled at the end of a session. |
| **Vault Connector** | **Login Account** is Vault | Required. The vault connector that supplies the account. Additional fields can appear depending on the connector you select. |
| **Application to Launch** | **Activity Type** is Interactive App Launch | The application that Privilege Secure launches on the RDS host the user connects to. |
| **Preferred RDS Host** | **Activity Type** is Interactive App Launch and **Platform** is Active Directory, Microsoft SQL Server, or Oracle | The RDS host that launches the application in **Application to Launch**. You pick it from the host resources. |
| **Connect Account** | **Activity Type** is Interactive App Launch and **Platform** is Active Directory, Microsoft SQL Server, or Oracle | A service account that the proxy uses to impersonate the user for Interactive App Launch activities. If you select none, the proxy uses the account from the login account template and doesn't impersonate. |
| **Logon URL** | **Platform** is Entra ID or Website | The primary logon page. A value here overrides the **Logon URL** on the website resource. |

### Variables in Application to Launch

You can use these variables in **Application to Launch**:

| Variable | Value |
|---|---|
| `%loginaccount%` | The login account name that the login account template produces. |
| `%sessionid%` | The Privilege Secure session ID for the activity session. |
| `%token%` | The one-time-use token that the proxy service generates. |

### Vault activities

When you select Vault, Privilege Secure fills the **Pre-Session (Grant)** group with **Check-out Credential** and the **Post-Session (Remove)** group with **Check-in Credential**. The add buttons for those groups are disabled.

To let the user see the password that the vault supplies, select **Allow User to Access Password** in the connection profile of the access policy that grants the activity. See [Connection profiles](../access-policies/connection-profiles.md).

## Copy or delete an activity

- To copy an activity, hover over it in the list and click the copy icon. Privilege Secure adds the copy to the list.
- To delete an activity, hover over it and click the trash can icon, then confirm.
