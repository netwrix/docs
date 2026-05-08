---
title: "Configure Access to HNAS Audit Logs on Activity Agent Server"
description: "Configure Access to HNAS Audit Logs on Activity Agent Server"
sidebar_position: 20
---

# Configure Access to HNAS Audit Logs on Activity Agent Server

Follow the steps to configure access to the HNAS audit logs on the Windows server hosting the
Activity Monitor activity agent.

**Step 1 –** On the Windows computer, go to Run and type `compmgmt.msc`.

**Step 2 –** In the right-hand panel, select More Actions > Connect to another computer.

**Step 3 –** In the Select Computer dialog box, enter the IP Address for EVS for HNAS and then click
OK.

**Step 4 –** In the Computer Management window, go to Computer Management > System tools > Shared
Folders > Shares.

**Step 5 –** Select the Security tab and click Advanced.

**Step 6 –** In the Advanced Security Settings dialog box, select the Audit tab. Click Add or Edit
to select the users and groups to be audited and add the desired user or group.

**Step 7 –** Select All for Type, and Full Control for Basic permissions.

Once access has been configured on both the Hitachi device and the Activity Agent server, it is time
to configure and enable monitoring with the Activity Monitor Console.
