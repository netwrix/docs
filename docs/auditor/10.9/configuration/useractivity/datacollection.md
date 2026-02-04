---
title: "Configure Data Collection Settings"
description: "Configure Data Collection Settings"
sidebar_position: 20
---

# Configure Data Collection Settings

To successfully track user activity, make sure that the following settings are configured on the
audited computers and on the computer where Netwrix Auditor Server is installed:

- The **Windows Management Instrumentation** and the **Remote Registry** services are running and
  their **Startup Type** is set to _"Automatic"_. See the Check the Windows Services Status topic
  for additional information.
- The **File and Printer Sharing** and the **Windows Management Instrumentation** features are
  allowed to communicate through Windows Firewall. See the Windows Features Communication topic for
  additional information.
- Local TCP Port 9004 is opened for inbound connections on the computer where Netwrix Auditor Server
  is installed. This is done automatically on the product installation. See the Open Local TCP Port
  9004 topic for additional information.
- Local TCP Port 9003 is opened for inbound connections on the audited computers. See the Open Local
  TCP Port 9003 topic for additional information.
- Remote TCP Port 9004 is opened for outbound connections on the audited computers. See the Open
  Remote TCP Port 9004 topic for additional information.

## Check the Windows Services Status

Follow the steps to check the status and startup type of Windows services.

**Step 1 –** Navigate to Start > Windows Administrative Tools > Services.

**Step 2 –** In the **Services** snap-in, locate the **Remote Registry** service and make sure that
its status is _"Started"_ (on pre-Windows Server 2012 versions) and _"Running"_ (on Windows Server
2012 and above). If it is not, right-click the service and select Start from the pop-up menu.

**Step 3 –** Check that the **Startup Type** is set to _"Automatic"_. If it is not, double-click the
service. In the **Remote Registry Properties** dialog, in the **General** tab, select _"Automatic"_
from the drop-down list.

**Step 4 –** Perform the steps above for the **Windows Management Instrumentation** service.

## Windows Features Communication

Follow the steps to allow Windows features to communicate through Firewall.

**Step 1 –** Navigate to **Start → Control Panel** and select **Windows Firewall.**

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Allow a
program or feature through Windows Firewall** on the left.

**Step 3 –** In the Allow an app or feature through Windows Firewall page that opens, locate the
**File and Printer Sharing** feature and make sure that the corresponding checkbox is selected under
Domain.

**Step 4 –** Repeat step 3 for the **Windows Management Instrumentation (WMI)** feature.

## Open Local TCP Port 9004

Follow the steps to open Local TCP Port 9004 for inbound connections.

**Step 1 –** On the computer where Netwrix Auditor is installed, navigate to **Start → Control
Panel** and select **Windows Firewall.**

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

**Step 4 –** Click New Rule. In the New Inbound Rule wizard, complete the steps as described below:

- On the Rule Type step, select Program.
- On the Program step, specify the path: %Netwrix Auditor installation folder%/Netwrix Auditor/User
  Activity Video Recording/UAVRServer.exe.
- On the Action step, select the Allow the connection action.
- On the Profile step, make sure that the rule applies to Domain.
- On the Name step, specify the rule's name, for example UA Server inbound rule.

**Step 5 –** Double-click the newly created rule and open the Protocols and Ports tab.

**Step 6 –** In the Protocols and Ports tab, complete the steps as described below:

- Set Protocol type to _"TCP"_.
- Set Local port to _"Specific Ports"_ and specify to _"9004"_.

## Open Local TCP Port 9003

Follow the steps to open Local TCP Port 9003 for inbound connections.

**Step 1 –** On a target computer navigate to **Start → Control Panel** and select **Windows
Firewall.**

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Inbound Rules on the
left.

**Step 4 –** Click New Rule. In the New Inbound Rule wizard, complete the steps as described below.

| Option    | Setting                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Rule Type | Program                                                                                                                            |
| Program   | Specify the path to the Core Service. By default, _%ProgramFiles% (x86)\Netwrix Auditor\User Activity Core Service\UAVRAgent.exe_. |
| Action    | Allow the connection                                                                                                               |
| Profile   | Applies to Domain                                                                                                                  |
| Name      | Rule name, for example UA Core Service inbound rule.                                                                               |

**Step 5 –** Double-click the newly created rule and open the Protocols and Ports tab.

**Step 6 –** In the Protocols and Ports tab, complete the steps as described below:

- Set Protocol type to _"TCP"_.
- Set Local port to _"Specific Ports"_ and specify to _"9003"_.

## Open Remote TCP Port 9004

Follow the steps to open Remote TCP Port 9004 for outbound connections.

**Step 1 –** On a target computer, navigate to **Start → Control Panel** and select **Windows
Firewall.**

**Step 2 –** In the **Help Protect your computer with Windows Firewall** page, click **Advanced
settings** on the left.

**Step 3 –** In the Windows Firewall with Advanced Security dialog, select Outbound Rules on the
left.

**Step 4 –** Click New Rule. In the New Outbound Rule wizard, complete the steps as described below.

| Option    | Setting                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| Rule Type | Program                                                                                                                            |
| Program   | Specify the path to the Core Service. By default, _%ProgramFiles% (x86)\Netwrix Auditor\User Activity Core Service\UAVRAgent.exe_. |
| Action    | Allow the connection                                                                                                               |
| Profile   | Applies to Domain                                                                                                                  |
| Name      | Rule name, for example UA Core Service outbound rule.                                                                              |

**Step 5 –** Double-click the newly created rule and open the Protocols and Ports tab.

**Step 6 –** In the Protocols and Ports tab, complete the steps as described below:

- Set Protocol type to _"TCP"_.
- Set Remote port to _"Specific Ports"_ and specify to _"9004"_.
