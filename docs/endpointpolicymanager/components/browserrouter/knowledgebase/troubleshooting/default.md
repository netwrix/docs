---
title: "Why is Browser Router not showing up as the OS Default Browser since Feb24/March24 Monthly windows patches KB5035845?"
description: "Why is Browser Router not showing up as the OS Default Browser since Feb24/March24 Monthly windows patches KB5035845?"
sidebar_position: 300
---

# Why is Browser Router not showing up as the OS Default Browser since Feb24/March24 Monthly windows patches KB5035845?

**Updated 9/12/2024**: Starting from CSE version 24.9 and later this problem has been overcome. If
you're using CSE version 24.9 and later, there is no need to follow these steps. Only use these
steps if you're using a CSE before version 24.9.

Netwrix Endpoint Policy Manager (formerly PolicyPak) Browser Router and Endpoint Policy Manager File
Associations Manager will generally still work as expected. However, since the Feb24/March24 Monthly
windows patches KB5035845, Edge appears to “take over and won’t let go” of:

- File Association PDF
- Protocol: HTTP
- Protocol: HTTPS

What will work:

- Browser to Browser Routing
- File Associations for everything except PDF

What won’t work:

- Browser Router won’t be registered as “Endpoint Policy Manager Browser Router Agent” within the
  OS. You’ll see Edge.
- Browser Router “Default Policy” type is not honored as expected and anything set to “Default
  Browser” will be passed onward to Edge (instead of what you might have set it to, say, Firefox,
  Chrome, etc). Use this article to understand “Endpoint Policy Manager Browser Router Default
  Policy” type
  [What is meant by "Default Browser" within Endpoint Policy Manager Browser router?](/docs/endpointpolicymanager/components/browserrouter/knowledgebase/tipsandtricks/defined.md)
- Delivering File Associations specifically for PDF for Endpoint Policy Manager File Associations
  Manager

You will also get the same experience if you attempt to use PolicyPak File Associations Manager to
change HTTP or HTTPS, even if you’re not using PolicyPak Browser Router. See the
[Can I use Endpoint Policy ManagerBrowser Router and/or Endpoint Policy Manager File Associations Manager to set the default browser?](/docs/endpointpolicymanager/components/fileassociationsmanager/knowledgebase/troubleshooting/defaultbrowser.md)
topic for additional information.

Troubleshooting:

Here’s an example log output:

The `ppSwitched_onLogon` log file shows “Default Browser: MicrosoftEdge.EXE

Agent Display Name: 'Managed by your organization (Browser Name)

Use actual default browser icon: true

Later in that file it shows an error:

Updating system settings and registry entries

```
{
    Loaded browser router policies state for user 'sxr'. Active: true
    Loaded browser router policies state for any user. Active: true
    Updating 'Browser Router' browser settings
    {
      Going to apply user side settings.
      Going to save default browser selected by user.
      Default browser selected by user: 'MSEdgeHTM'
      Default browser selected by user: 'MSEdgeHTM'
      Changing program associations
      {
        Error: Couldn't write association for 'http'. ProgId: 'PPBRNURL', Error code: 5
        Error: Couldn't write association for 'https'. ProgId: 'PPBRNURL', Error code: 5
      } // End of Changing program associations, elapsed time: 00:00:00.078 

```

However, there is a workaround for both scenarios if your computers are DOMAIN JOINED.

You can Revert to Legacy methods which have some detractors. Read the Explain/Help text for each of
these two policy settings to decide if you want to revert back one or both products to Legacy
method.

:::warning
The Legacy methods will not work if your endpoints are only using PolicyPak Cloud or
only using an MDM service like Intune. Legacy mode only works when the machine is domain joined.
:::


:::note
After setting these settings and the policy refresh occurs to get these policies,
endpoints may still need two logoffs and/or reboots for this to kick in.
:::


![1326_1_2c5259c2472101dd55c56da8d1dbdb33](/images/endpointpolicymanager/troubleshooting/browserrouter/1326_1_2c5259c2472101dd55c56da8d1dbdb33.webp)

![1326_2_8f4ae9cf7f0bba8ddccb128640467c25](/images/endpointpolicymanager/troubleshooting/browserrouter/1326_2_8f4ae9cf7f0bba8ddccb128640467c25.webp)

Update 4/8/2024:

It was identified that UCPD.sys driver is causing the issue with default file association for .PDF
and protocol association for HTTP/HTTPS.

UCPD.sys affects the following registry paths responsible for the associations to file extensions
and protocols:

Workaround 1 using Endpoint Policy Manager Scripts & Triggers

To fix the issue, you need to perform two steps:

**Step 1 –** Create a Powershell script which will disable the UCPD.sys driver via registry.

- `New-ItemProperty -Path “HKLM:\SYSTEM\CurrentControlSet\Services\UCPD” -Name “Start” -Value 4 -PropertyType DWORD -Force`

  - This script is setting value 4 to UCPD service to be disabled

- `Unregister-ScheduledTask -TaskName "UCPD velocity"`

  - This part will unregister the scheduled task to check and re-deploy UCPD service at startup

- Disable UCPD.sys driver

  ```
  New-ItemProperty -Path “HKLM:\SYSTEM\CurrentControlSet\Services\UCPD” -Name “Start” -Value 4 -PropertyType DWORD -Force
  Unregister-ScheduledTask -TaskName "UCPD velocity"
  Unregister-ScheduledTask -TaskName "Pre-staged app cleanup"
  ```

**Step 2 –** Deploy the script via Endpoint Policy Manager Scripts Manager using the hints from the
screen shot below.

![1326_3_3e0331eadab3e6c272573b5c3b67e23c](/images/endpointpolicymanager/troubleshooting/browserrouter/1326_3_3e0331eadab3e6c272573b5c3b67e23c.webp)

Workaround 2 using fsLogix (Microsoft Tools)

You may also use Microsoft fsLogix if already installed on servers or workstations. You may use the
following redirect rules which should overcome the concern.

:::note
Do not use both Workaround 1 and 2 at the same time.
:::


![1326_4_3a4d59894f3cd6623b958202447b1136](/images/endpointpolicymanager/troubleshooting/browserrouter/1326_4_3a4d59894f3cd6623b958202447b1136.webp)


