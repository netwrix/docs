---
title: Troubleshooting
description: Common issues and resolutions for PolicyPak Secure Download Manager on Windows.
sidebar_position: 30
---

# Troubleshooting

## Policy Isn't Applying

**Symptom:** Files downloaded from the browser execute normally even after you configure the policy.

**Steps to resolve:**

1. Confirm the GPO is linked to the correct OU and that the target computer object is in that OU.
   Global Settings are Computer-side only — confirm the policy is under
   **Computer Configuration | PolicyPak | Secure Download Manager**, not under User Configuration.
2. Run `gpresult /h report.html` on the affected machine and open the report. Verify the
   Secure Download Manager GPO appears under **Applied GPOs**.
3. Confirm **Enable Secure Download Manager** is set to **YES** in Global Settings
   (**Specify Global Settings P...** in the Actions panel, **General** tab).
4. Confirm the PolicyPak CSE is installed on the endpoint: open **Settings | Apps** and look
   for **PolicyPak Client-Side Extension**.
5. Run `gpupdate /force` and test again.
6. Confirm the browser is in the supported list: Google Chrome, Microsoft Edge, Opera, or
   Mozilla Firefox. Secure Download Manager doesn't affect other browsers.

:::note
If `gpresult` shows the GPO under **Denied GPOs**, review the GPO's **Security Filtering** and
**WMI Filter** settings to confirm the target computer object isn't excluded.
:::

## Block Notification Doesn't Appear

**Symptom:** Execution is blocked, but the user sees no notification dialog.

**Steps to resolve:**

1. Open **Specify Global Settings P...** and confirm **Show Management Notifications** is set
   to **YES** on the **General** tab.
2. If **Block notification should close in seconds** is set to a very short value, for example
   1–2 seconds, the notification may close before the user notices it. Increase the
   timeout or uncheck the option to require manual dismissal.
3. Confirm the PolicyPak notification service is running. On the endpoint, open **Services**
   (`services.msc`) and look for **PolicyPak Notification Service**. Start it if stopped.

## An Excluded Website Is Still Blocked

**Symptom:** Files downloaded from a site configured in an Exclusions Policy are still blocked.

**Steps to resolve:**

1. Open the Exclusions Policy Editor and check the **URL Pattern** field for typos.
2. Some download links redirect through a CDN or intermediate domain. The URL evaluated by
   Secure Download Manager is the actual download URL, not the landing page. Check the
   browser's download history for the exact file URL and use that in **URL Pattern**.
   Wildcards (`*`) can help, for example `*cdn.vendor.com/*`.
3. Confirm the Exclusions Policy **State** is set to **Enabled**.
4. Run `gpupdate /force` on the endpoint and test again.
5. Enable **Enable logging for this policy** in the Exclusions Policy Editor, reproduce the
   issue, and review the PolicyPak event log to confirm whether the exclusion is being matched.

## Item Level Targeting Isn't Filtering as Expected

**Symptom:** An Exclusions Policy with Item Level Targeting applies to machines or users it
shouldn't, or doesn't apply where expected.

**Steps to resolve:**

1. Open the Exclusions Policy Editor, click **Item Level Targeting**, and review the targeting
   conditions. Confirm each condition targets the intended attribute (security group, IP range,
   OS version, and so on).
2. Run `gpresult /h report.html` on an affected endpoint and confirm the GPO is being received.
   Item Level Targeting is evaluated client-side — the GPO must reach the endpoint first.
3. Global Settings don't support Item Level Targeting. Only Exclusions Policies
   support it. If you need different Global Settings behavior per machine, use separate GPOs.

## Email Alerts Aren't Being Received

**Symptom:** The **Email** tab in Global Settings is configured, but no alerts arrive.

**Steps to resolve:**

1. Confirm **Enable Secure Download Manager** is set to **YES** on the **General** tab. Email
   settings are only evaluated when the component itself is enabled.
2. Check **Open the message in Notepad instead** temporarily and test a block event. If a
   Notepad file opens with alert content, the issue is with email delivery, not with PolicyPak.
3. Confirm **Use of email** isn't set to **Not Configured**.
4. Confirm **Send To** contains valid addresses separated by semicolons (`;`).
5. Confirm outbound SMTP traffic from the endpoint isn't blocked by a firewall rule.

## ADM Report Doesn't Show Secure Download Manager Settings

**Symptom:** The ADM report is missing Global Settings or Exclusions Policy entries.

**Steps to resolve:**

1. Confirm the PolicyPak Admin Console MSI is up to date. ADM report support for Secure
   Download Manager requires a version that includes this component.
2. Confirm at least one Global Settings or Exclusions Policy exists and is **Enabled** in the
   collection. Empty or fully disabled collections may not generate report entries.
3. Re-run the ADM report after applying `gpupdate /force` on the target endpoint.

## Collecting Diagnostic Information

When contacting Netwrix Support, include the following:

- PolicyPak CSE version (visible in **Settings | Apps**)
- Browser name and version
- Output of `gpresult /h report.html` from the affected endpoint
- PolicyPak event log: open **Event Viewer | Applications and Services Logs | PolicyPak**
  and export the log
- A description of the file type and source URL involved in the issue
