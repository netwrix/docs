---
title: "Activities"
description: "Learn what an activity is in Netwrix Privilege Secure, which activity types and login accounts it offers, and how activities differ from activity groups."
sidebar_position: 10
---

# Activities

An activity defines what happens when a user starts a privileged session. It sets the account that the session uses to log in, the type of session, and the actions that run before, during, and after the session. An [access policy](/docs/privilegesecure/26.07/configuration/access-policies/overview.md) then gives users the right to run the activity on specific resources.

Open the **Activities** page from the left navigation pane. The page lists every activity. The list has a search box and a green **+** button that starts a new activity. Hover over an activity to show the copy icon, which clones the activity, and the trash can icon, which deletes it after you confirm. A number badge beside an activity name shows that access policies use the activity.

Netwrix Privilege Secure installs with 11 activities and 2 activity groups. Your list can contain more, because administrators add their own. To build one, see [Create an activity](/docs/privilegesecure/26.07/configuration/activities/create-activity.md).

![The Activities page with the activity list on the left and the details of the selected activity on the right.](/images/privilegesecure/26.07/configuration/activities-page.webp)

## Activity settings

Select an activity in the list to show its settings.

| Setting | What it controls |
|---|---|
| **Name** and **Description** | How the activity appears in the list and in access policies. |
| **Platform** | The type of resource that the activity runs on. |
| **Login Account** | The account that the session uses to log in to the resource. See [Login account types](#login-account-types). |
| **Activity Type** | The kind of session. See [Activity types](#activity-types). |
| Actions | The steps that run in the **Pre-Session (Grant)**, **Session (Connect)**, and **Post-Session (Remove)** groups. See [Add actions to an activity](/docs/privilegesecure/26.07/configuration/activities/actions.md). |

Other fields appear depending on the login account and the activity type. [Create an activity](/docs/privilegesecure/26.07/configuration/activities/create-activity.md) describes each field.

## Activity types

The **Activity Type** list offers three types.

| Activity type | Use it when |
|---|---|
| Interactive | The requester logs on to a host desktop or command-line interface, either directly or through the proxy. |
| Interactive App Launch | The session launches an application on the requested resource, rather than a full desktop. |
| Task Automation | The activity runs an automated script and needs no interaction from the user. |

Privilege Secure also has two built-in activity types, Credential Release and File Release. They belong to the built-in Credential Release and File Release activities that credential-based access policies use, and you can't select them when you create an activity. See [Create a credential-based access policy](/docs/privilegesecure/26.07/configuration/access-policies/credential-based-policy.md).

## Login account types

The login account decides which account the user connects with on the resource.

| Login account | How the session logs in |
|---|---|
| Requester | The user's own account. The user logs on to the resource directly or through the proxy, and needs a matching account on the resource and its password. Use it to avoid a separately managed account. |
| Managed | An account that Privilege Secure manages. The account persists on the resource after it is created. When the session ends or is canceled, Privilege Secure rotates the password and disables the account, or deletes it when **Delete After Use** is selected. Use it when the user's desktop experience, such as the profile, must persist across sessions. The user can see the password in the Privilege Secure Console during an active session. |
| Activity Token | A unique, time-limited account that Privilege Secure creates when the activity starts and removes when it completes. Use it when each session needs a clean profile, for example for vendors and contractors. [Activity token complexity](/docs/privilegesecure/26.07/configuration/access-policies/activity-token-complexity.md) controls the generated account name. |
| Vault | An account that Privilege Secure checks out of a vault connector. The password is available to the user in the Privilege Secure Console during an active session. When the session ends or is canceled, Privilege Secure checks the password back in. |
| Resource | An account that you manage manually on a website resource. Available only when **Platform** is Website. |

:::note
The Requester login account always uses the signed-in user's own account name. A local Privilege Secure user can't log on to a domain-joined Windows resource with a Requester activity unless an account with the same name exists on the resource. There is no option to enter a different user name when the user connects. To change how the name is formatted, see [Login account templates](/docs/privilegesecure/26.07/configuration/activities/login-account-templates.md).
:::

## Activities and activity groups

An activity targets one platform. An activity group collects activities so that one access policy entry covers several platforms, such as granting local administrator access on both Windows and Linux. See [Activity groups](/docs/privilegesecure/26.07/configuration/activities/activity-groups.md).

Privilege Secure includes two activity groups, **Domain Administrator Access** and **Local Administrator Access**.

:::warning
Before you upgrade from a release earlier than 26.07.3, don't delete and re-create the **Domain Administrator Access** or **Local Administrator Access** activity group. See [Upgrade Privilege Secure](/docs/privilegesecure/26.07/install/upgrade.md).
:::

## Related topics

- [Create an activity](/docs/privilegesecure/26.07/configuration/activities/create-activity.md)
- [Login account templates](/docs/privilegesecure/26.07/configuration/activities/login-account-templates.md)
- [Add actions to an activity](/docs/privilegesecure/26.07/configuration/activities/actions.md)
- [Action types reference](/docs/privilegesecure/26.07/configuration/activities/action-types.md)
- [Grant group or role membership without a resource](/docs/privilegesecure/26.07/configuration/activities/group-role-activities.md)
