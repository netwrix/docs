---
title: "Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration"
description: "Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration"
sidebar_position: 10
---

# Nasuni Edge Appliance Access & Sensitive Data Auditing Configuration

Generate an API Key Name and Passcode for each on-premise Nasuni Edge Appliance
and cloud filer.

## Nasuni Filer Management Interface

Generate a Nasuni API Access Key in the Nasuni Filer Management Interface using the following steps.

**Step 1 –** Within the **Configuration** menu, under **USERS & SECURITY**, select API Access Keys.
The API Access Keys page opens.

**Step 2 –** Click Add API Key button. The Add API Key window opens.

**Step 3 –** Enter a Name for thekey; for example, the name of the application.

**Step 4 –** Click Create Key.

**Step 5 –** In the Successfully Generated API Key window, copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer.
They are used as the credentials in the Enterprise Auditor Connection Profile for 0-FS_Nasuni Job.

:::note
Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.
:::


See the Nasuni
[Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#management-console-guide)
documentation for additional information.

## Nasuni Management Console

Generate a Nasuni API Access Key in the Nasuni Management Console using the following steps.

**Step 1 –** Click Filers and select API Keys from the menu on the left. The Filer API Access Key
Settings page opens.

**Step 2 –** Click New API Key button. The Add API Access Key window opens.

**Step 3 –** From the Filer dropdown menu, select the Nasuni Edge Appliance you want. Then enter a
Name for the key; for example, the name of the application.

**Step 4 –** Click Add API Key.

**Step 5 –** A message appears which includes the Key Passcode; copy the Key Passcode.

Both the Key Name and the Key Passcode are required for each Nasuni Edge Appliance and cloud filer.
They are used as the credentials in the Enterprise Auditor Connection Profile for 0-FS_Nasuni Job.

:::note
Nasuni API key names are case sensitive. When providing them, ensure they are entered in
the exact same case as generated.
:::


See the
[Nasuni Management Console Guide](https://nasuni.my.salesforce.com/sfc/p/#nasuni-management-console-guide)
documentation for additional information.

## Nasuni Best Practices for Access Auditing

Nasuni is a hybrid NAS: a Nasuni Edge Appliance stores actively used data locally, while the UniFS®
global file system stores the authoritative copy of all files and metadata in private or public
cloud object storage platforms. Transferring data between the two incurs egress fees. To minimize
these fees and optimize scan performance, deploy a dedicated Nasuni Edge Appliance with all shares
that Enterprise Auditor scans mounted, and place the Enterprise Auditor console server in the same
region as the authoritative copy.

See the
[External Auditing and Nasuni Best Practices](https://nasuni.my.salesforce.com/sfc/p/#external-auditing-and-nasuni-best-practices)
documentation for additional information.
