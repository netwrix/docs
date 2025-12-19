---
title: "When using a remote SQL Server, GPCR Snapshot fails with error \"System.InvalidOperationException\" and \"MSDTC has been disabled\" in Debug log"
description: "When using a remote SQL Server, GPCR Snapshot fails with error \"System.InvalidOperationException\" and \"MSDTC has been disabled\" in Debug log"
sidebar_position: 50
---

# When using a remote SQL Server, GPCR Snapshot fails with error "System.InvalidOperationException" and "MSDTC has been disabled" in Debug log

When using a remote SQL as the database for Netwrix Endpoint Policy Manager (formerly PolicyPak)
Group Policy Compliance Reporter, the snapshot operation may fail with the following error.

![669_1_image-20200327172830-2](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_1_image-20200327172830-2.jpeg)

The Server Log will contain the following error as well:

System.Transactions.TransactionManagerCommunicationException: Network access for Distributed
Transaction Manager (MSDTC) has been disabled. Please enable DTC for network access in the security
configuration for MSDTC using the Component Services Administrative
tool.` ---> System.Runtime.InteropServices.COMException`: The transaction manager has disabled its
support for remote/network transactions. (Exception from HRESULT: 0x8004D024)

To enable diagnostic logging, follow the directions in the article
[How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?](/docs/endpointpolicymanager/gpcompliancereporter/technotes/troubleshooting/logenhanced.md)

The resulting GPCR Server log can be found in:
`C:\ProgramData\PolicyPak\PolicyPak Group Policy Compliance Reporter Server\Diagnostics`

## Resolution

To resolve the error and allow snapshots to complete successfully, you must enable Network DTC
Access and ensure the firewall allows the traffic through.

## Enable DTC

The following is run on both the Endpoint Policy Manager GPCR Client computer (Where the Admin
Console is installed) and the remote SQL Server

**Step 1 –** Open Component Services

1. Open the "run" box (Win-R), type `"dcomcnfg"` and click OK

   ![669_3_image-20200327172830-3](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_3_image-20200327172830-3.webp)

**Step 2 –** Expand Console Root -> Component Services -> Computers -> My Computer -> Distributed
Transaction Coordinator, Right-Click on Local DTC and click Properties

![669_5_image-20200327172830-4](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_5_image-20200327172830-4.webp)

**Step 3 –** On the Security tab -> Security Settings and Configure as follows:

1. Check "Network DTC Access"
2. Check "Allow Inbound" and "Allow Outbound"
3. Select "No Authentication Required"
4. Check "Enable SNA LU 6.2 Transactions"
5. Click OK

   ![669_7_image-20200327172830-5](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_7_image-20200327172830-5.webp)

**Step 4 –** The MSDTC service will need to be restarted for the changes to take affect – Click YES
to restart now or NO to restart manually later.

## Enable Firewall Rules

Enable DTC through the firewall on both Endpoint Policy Manager GPCR Server and the remote SQL
Server

**Step 1 –** Open the Windows Defender Firewall

**Step 2 –** Click on "Allow an app or feature through Windows Defender Firewall"

![669_9_image-20200327172830-6](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_9_image-20200327172830-6.webp)

**Step 3 –** Find "Distributed Transaction Coordinator", check and check the appropriate Network
profile (e.g. Domain).

![669_11_image-20200327172830-7](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_11_image-20200327172830-7.webp)

**Step 4 –** Click OK to save and close

