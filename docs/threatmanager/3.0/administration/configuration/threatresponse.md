---
title: "Threat Response Page"
description: "Threat Response Page"
sidebar_position: 20
---

# Threat Response Page

The Threat Response page provides the ability to create playbooks and add steps which contain
actions that can be executed in response to detected threats. Threat Manager provides preconfigured
actions for different targets.

Playbooks are a collection of steps that run sequentially in response to a threat. Each step
contains an action that is designated for the threat response. These steps typically integrate with
existing resources in the organization such as email and helpdesk platforms, Active Directory, file
systems, and custom PowerShell scripts. Playbooks can be executed automatically or ad-hoc by a
Threat Manager Administrator when a threat is detected.

![threatresponse](/images/threatmanager/3.0/administration/configuration/threatresponse.webp)

:::note
Custom playbooks can be created using the PowerShell Script action. However, this feature
requires advanced scripting knowledge.
:::


## Preconfigured Actions

Threat Manager provides the following out-of-the-box actions:

### Active Directory Target Actions

Threat Manager has the following preconfigured Active Directory target actions:

- Active Directory Group Membership – Adds or removes Active Directory group membership
- Change Password at Next Logon – Forces the user to change their password the next time the user
  logs on
- Disable Active Directory Account – Disables the specified account
- Disable Active Directory Computer – Disables the specified computer object in Active Directory
- Reset Password – Resets the password of the specified account
- Revert Permission Change – Reverts a permission change on an Active Directory Object

### Microsoft Entra ID Target Actions

Threat Manager has the following preconfigured Entra ID target actions:

- Entra ID Group Membership – Manages an Entra ID group's membership
- Flag Entra ID User as Confirmed Compromised – Marks a user as confirmed compromised in an Entra
  ID tenant
- Disable Entra ID User – Disables a user in an Entra ID tenant
- Reset Entra ID Password – Resets an Entra ID user's password to a specified password
- Revoke Entra ID Sessions – Terminate all active sessions for the perpetrator or affected user to
  prevent unauthorized access

### Local Host Target Actions

Threat Manager has the following preconfigured Local Host target actions:

- PowerShell Script – Executes a specified PowerShell script
- Send Email – Sends an email
- Stop Process – Stops a process running locally on the host associated with the threat
- End User Session – Attempts to log the specified user out of any active RDP sessions on the target
  client

### Threat Manager Target Actions

Threat Manager has the following preconfigured Threat Manager target action:

- Tag Object – Adds Threat Manager tags to objects associated with a threat
- Manage Blocking Policy – Adds or removes a user from a blocking policy

### Windows File System Target Actions

Threat Manager has the following preconfigured Windows File System target actions:

- Delete File – Deletes the file associated with the threat
- Revert Permission Change – Reverts a permission change on a folder
- Save File Hash – Saves the file hash to the properties of the threat

### Windows Server Target Actions

Threat Manager has the following preconfigured Windows Server target actions:

- Close SMB Session – closes any active SMB sessions for the threat perpetrator on a target host
- Disable user remote desktop access – Disconnects the user from the host and disables their login
  rights
- Create Windows Firewall Rule – Adds a Windows Firewall Rule to block inbound or outbound network
  protocol traffic for specified hosts

### Third-Party Applications Target Actions

Threat Manager has the following preconfigured third-party applications target actions:

- Create ServiceNow®Incident – Creates an Incident in ServiceNow
- Duo Authentication Push – Sends an Authentication Push to the Duo API
- RADIUS Authentication – Utilizes RADIUS profiles to authenticate user activity
- Microsoft Teams – Posts messages to a Microsoft Teams channel
- Send SYSLOG – Sends a Syslog message to a server
- Set Forescout Property On Host – Adds a property to a Forescout host record
- Slack – Sends a message to Slack
- Twilio® SMS Message – Sends an SMS message through Twilio
- VirusTotal® Report – Scans the file hashes against the VirusTotal API and emails the results
- WebHook – Executes a webhook

See the [Action Configuration for Playbook Steps](/docs/threatmanager/3.0/administration/playbooks/action/overview.md) topic for
additional information.
