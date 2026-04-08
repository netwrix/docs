---
title: "Configure Enable Persistent Time Stamp Policy"
description: "Configure Enable Persistent Time Stamp Policy"
sidebar_position: 90
---

# Configure Enable Persistent Time Stamp Policy

The Enable Persistent Time Stamp policy must be enabled on the target servers to track the
shutdowns.

## Manual Configuation

This section explains how to configure policies locally with the Local Group Policy Editor snap-in.

To enable the policy

1. On the audited server, open the **Local Group Policy Editor** snap-in: navigate to **Start** →
   Run and type _"gpedit.msc"_.
2. Navigate to Computer Configuration → Administrative Templates → System and locate the policy.

    | Policy Name                      | State       |
    | -------------------------------- | ----------- |
    | **Enable Persistent Time Stamp** | _"Enabled"_ |

## Configuration via Group Policy

To apply settings to the whole domain, you can use Group Policy. Remember to consider the possible
impact on your environment.

To enable the policy

1. Open the Group Policy Management console on the domain controller, browse to Computer
   Configuration → Policies → Administrative Templates → System.
2. Locate the Enable Persistent Time Stamp policy in the right pane, right-click it and select Edit.
3. Switch policy state to Enabled.

When finished, run the `gpupdate /force` command to force group policy update
