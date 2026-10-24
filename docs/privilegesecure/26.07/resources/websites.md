---
title: "Websites"
description: "Add a website resource to Privilege Secure, define the URLs it matches, and add the managed user accounts that activities use to sign in."
sidebar_position: 80
---

# Websites

A website resource lets Netwrix Privilege Secure for Access Management (Privilege Secure) grant access to a web application. You list the URLs that belong to the site and, if needed, add managed user accounts that activities sign in with.

## Add a website

1. Select **Resources** in the left navigation.
1. Select **Add** and select **New Website**.
1. In **Enter Website Name**, enter the name that appears in the resource list, for example `Salesforce`.
1. Check that **Platform** shows **Website**. You can't change it.
1. Enter the **Logon URL**, the main sign-in page for the site, for example `https://login.example.com`. Privilege Secure uses it only when an activity doesn't specify a URL.
1. Optional: In **Associated Resource**, select a server that Privilege Secure manages and that hosts the website. Active Directory account operations then run on the domain controller that the resource is bound to.
1. Select **Save**.

{/* TODO screenshot: New Website page with the fields filled in. */}
{/* TODO verify: whether the New Website page offers Associated Domain Controller and Service Account fields. The 26.03 page listed them, but the 26.07 lab form showed only the name, Platform, Logon URL, and Associated Resource. */}

## Website details

The details page shows the name, **Platform**, **Logon URL**, and **Associated Resource**. The arrow next to **Associated Resource** opens the associated resource. When you change a setting, **Save** and **Cancel** appear. The trash can icon removes the website from Privilege Secure after you confirm.

{/* TODO verify: Save and Cancel appear after an edit on a saved website; the lab saw no Save button before editing. */}

The page has five tabs: **URLs**, **Users**, **Sessions**, **Access Policies**, and **History**.

## Manage website URLs

The **URLs** tab lists the URLs that Privilege Secure treats as part of the website. The browser extension uses the list when it starts an activity. A site that isn't listed can fail to sign in because it isn't an authorized site.

For example, `https://company.lightning.force.com` and `https://salesforce.com` can both belong to one website.

### Add a URL

1. Open the website from **Resources**, then select the **URLs** tab.
1. Select **Add**.
1. Enter the **URL** or string to match, for example `https://login.example.com`.
1. Select a **Match Type**. The default is **Domain**.
1. Select **Save**.

To change or delete a URL, select it and select **Edit** or **Remove**.

| Match Type | A URL matches when |
| --- | --- |
| **Domain** | The domain name matches. |
| **Exact** | The URL is identical to the value. |
| **Never** | Never. Privilege Secure doesn't match the URL. |
| **Starts With** | The URL starts with the value. |
| **Regex** | The URL matches the regular expression. |
| **Host** | The host name (FQDN) matches. |

{/* TODO verify: that the Add Website URL window has no Cancel button, only Save and a close icon, and the exact label of the Starts With value in the window. */}

## Manage website users

The **Users** tab lists the accounts that activities use to sign in to the website. Privilege Secure doesn't discover these accounts. You add them by hand.

The **Username** must match the format in the **Login Account Template** field of the activity, for example `corp\jsmith` or `jsmith@example.com`. See [Login account templates](/docs/privilegesecure/26_07/configuration/activities/login-account-templates).

### Add a managed user

1. Open the website from **Resources**, then select the **Users** tab.
1. Select **Add**.
1. Enter a **Display Name**, for example `Marketing admin`.
1. Enter the **Username** in the format the activity expects.
1. Enter the **Password**. Select the eye icon to show what you typed.
1. Select **Okay**.

To change an account, select it and select **Edit**. To remove it, select it and select **Delete**, then confirm.

The table shows **Name**, **Username**, **Comment**, and **Created**.

{/* TODO verify: the field labels in the Add a Managed User window, including whether it has a Comment field. They come from 26.03, and the lab didn't open the window. */}

## Sessions, Access Policies, and History tabs

- **Sessions** lists sessions on the website. The table shows **Requested**, **Requested By**, **Login Account**, **Activity**, **Start**, **End**, and **Status**. Select a session and select **View Logs** to open its log. See [Session logs](/docs/privilegesecure/26_07/admin/sessions/session-logs).
- **Access Policies** lists the access policies that include the website, with **Name** and **Description**.
- **History** lists events for the website, with a **View Logs** button for the selected session.

Each tab has **Search** and **Refresh**.
