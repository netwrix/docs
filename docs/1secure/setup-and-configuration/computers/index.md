---
title: "Configure The Back Up Files And Directories Policy"
sidebar_label: "Configure The Back Up"
description: "Learn how to configure and manage Netwrix 1Secure for hybrid security. This guide covers setup, monitoring, and analytics to help secure cloud and on prem data"
---

# Configure the Back up Files and Directories Policy

Configure this Back up Files and Directories policy via the **Local Security Policy Snap-in** or
using the **Group Policy Management Console**.

Follow the steps to configure the Back up Files and Directories' policy via the **Local Security
Policy Snap-in**.

**Step 1 –** On any domain controller in the target domain, open the **Local Security Policy**
snap-in: navigate to Start > Administrative Tools (Windows Server 2016 and higher) or Administrative
Tools (Windows 2012) > Local Security Policy.

**Step 2 –** Navigate to Security Settings > Local Policies > User Right Assignment.

**Step 3 –** Locate the **Back up files and directories** policy and double-click it.

**Step 4 –** In the **Back up files and directories Properties** dialog, click **Add User or
Group**, specify the user that you want to define this policy for.

The policy is now configured.

Follow the steps to configure the Back up Files and Directories' policy using the **Group Policy
Management Console**.

**NOTE:** Perform this procedure only if the account selected for data collection is not a member of
the Domain Admins group.

**Step 1 –** Open the Group Policy Management console on any domain controller in the target domain:
navigate to Start > Windows Administrative Tools (Windows Server 2016/2019) or Administrative Tools
(Windows 2012 R2 and below) > Group Policy Management.

**Step 2 –** In the left pane, navigate to Forest: `<forest name>` > Domains > `<domain name>` >
Domain Controllers. Right-click the effective domain controllers policy (by default, it is the
_Default Domain Controllers Policy_), and select Edit .

**Step 3 –** In the Group Policy Management Editor dialog, expand the Computer Configuration node on
the left and navigate to Policies > Windows Settings > Security Settings > Local Policies.

**Step 4 –** On the right, double-click the User Rights Assignment policy.

**Step 5 –** Locate the Back up files and directories policy and double-click it.

**Step 6 –** In the Back up files and directories Properties dialog, click Add User or Group and
specify the user that you want to define this policy for.

**Step 7 –** Navigate to Start > Run and type "_cmd_". Input the `gpupdate /force` command and press
Enter. The group policy will be updated.

**Step 8 –** Type `repadmin /syncall` command and press Enter for replicate GPO changes to other
domain controllers.

**Step 9 –** Ensure that new GPO settings applied on any audited domain controller.

## The policy is now configured.

id: prepare-for-windows-file-server-monitoring
title: "Prepare for Windows File Server Monitoring"
pagination_label: "Prepare for Windows File Server Monitoring"
sidebar_label: "Prepare for Windows File Server Monitoring"
sidebar_position: 130
description: "Learn the requirements, limitations, protocols, and considerations necessary for Windows File Server data collection."

id: file-servers-and-antivirus
title: "File Servers and Antivirus"
pagination_label: "File Servers and Antivirus"
sidebar_label: "File Servers and Antivirus"
sidebar_position: 133
description: "Learn which Netwrix executables to add to your antivirus exclusion list for optimal performance."

id: protocols-and-ports-required-for-monitoring-file-servers
title: "Protocols and Ports Required for Monitoring File Servers"
pagination_label: "Protocols and Ports Required for Monitoring File Servers"
sidebar_label: "Protocols and Ports Required for Monitoring File Servers"
sidebar_position: 137
description: "Review the complete list of protocols and ports required for Netwrix 1Secure file server monitoring."
