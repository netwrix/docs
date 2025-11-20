---
title: "GPCR Snapshot fails with error \"System.InvalidOperationException\" when using a remote SQL server and one is a clone of the other"
description: "GPCR Snapshot fails with error \"System.InvalidOperationException\" when using a remote SQL server and one is a clone of the other"
sidebar_position: 40
---

# GPCR Snapshot fails with error "System.InvalidOperationException" when using a remote SQL server and one is a clone of the other

When using a remote SQL server as the database for Netwrix Endpoint Policy Manager (formerly
PolicyPak) Group Policy Compliance Reporter, the snapshot operation may fail with the following
error.

![794_1_image-20200327171540-1](/images/endpointpolicymanager/troubleshooting/error/gpocompilancereporter/669_1_image-20200327172830-2.jpeg)

The Server debug log will contain the following error as well:

```
System.Runtime.InteropServices.COMException: 
The MSDTC transaction manager was unable to pull the transaction from the source transaction manager due to communication problems. Possible causes are: a firewall is present and it doesn't have an exception for the MSDTC process, the two machines cannot find each other by their NetBIOS names, or the support for network transactions is not enabled for one of the two transaction managers. 
(Exception from HRESULT: 0x8004D02B)
```

To enable diagnostic logging, follow the directions in the article
[How do I turn on enhanced logging for Endpoint Policy Manager Group Policy Compliance Reporter if asked to do so?](/docs/endpointpolicymanager/gpcompliancereporter/technotes/troubleshooting/logenhanced.md)g-for-ppgpcr-server-if-asked/

The resulting GPCR Server log can be found in:
`C:\ProgramData\PolicyPak\PolicyPak Group Policy Compliance Reporter Server\Diagnostics`

When a server VM is cloned, the DTC ID remains the unchanged on the new server copy. In this case,
although you have communication with the SQL server, the ability to connect to port 1433, and GPCR
is able to successfully accept workstation audits, attempting a snapshot results in the error above.
When enabling the server debugging log, it shows "communication problems" as the cause.

## Resolution

To resolve the error and allow snapshots to complete successfully, you must re-install MS DTC on one
of the computers

## Re-install DTC

**Step 1 –** Open a command prompt` "… as administrator"`

**Step 2 –** Uninstall `MSDTC: msdtc -uninstall` and hit enter

**Step 3 –** Install `MSDTC: msdtc -install` and hit enter

**Step 4 –** Verify service is installed and running: sc query msdtc and hit enter

:::note
this can also be performed after the uninstall to verify it was removed

:::

