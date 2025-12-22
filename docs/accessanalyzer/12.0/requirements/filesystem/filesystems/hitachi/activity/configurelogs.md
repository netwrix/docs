---
title: "Configure Audit Logs on HNAS"
description: "Configure Audit Logs on HNAS"
sidebar_position: 10
---

# Configure Audit Logs on HNAS

Follow the steps to configure access to the HNAS audit logs on the Hitachi device.

**Step 1 –** Open a browser and enter the IP Address for HNAS in the address bar to launch the
Hitachi Storage Navigator (SN). Enter the username and password.

**Step 2 –** At the Storage Navigator home page, click File Services.

**Step 3 –** On the File Services screen, click Enable File Service.

**Step 4 –** On the Enable File Services screen, verify that the CIFS/Windows service is selected.

**Step 5 –** On the File Services screen, click File System Security.

**Step 6 –** Click Switch Mode and set the default file system security mode to Mixed (Windows and
UNIX) for all virtual file systems.

**Step 7 –** Configure the Hitachi NAS Platform audit policy by returning to the File Services page.

**Step 8 –** Click File System Audit Policies.

**Step 9 –** Select the correct EVS and click details for the file system to enable auditing.

**Step 10 –** In the Access via Unsupported Protocols section, select Allow Access (without
auditing). In the Audit Log section, set the maximum log file size to a value of at least 8 MB. It
is recommended to set it to 16 MB. In the Log roll over policy section, select New. The product does
not support the Wrap policy. Click OK to close.

Once access has been configured on the Hitachi device, it is necessary to configure access to the
HNAS audit logs on the Windows server. See the
[Configure Access to HNAS Audit Logs on Activity Agent Server](/docs/accessanalyzer/12.0/requirements/filesystem/filesystems/hitachi/activity/configureaccesstologs.md) topic for
additional information.
