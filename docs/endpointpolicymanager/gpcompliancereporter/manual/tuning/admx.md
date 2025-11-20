---
title: "Using ADMX Files to Tune the Auditor"
description: "Using ADMX Files to Tune the Auditor"
sidebar_position: 10
---

# Using ADMX Files to Tune the Auditor

Inside the Endpoint Policy Manager GPCR download is the PPGPCR Diagnostics ADMX.ZIP. When unpacked
from the ZIP file, you can use the ADMX files to manage and tune Endpoint Policy Manager GPCR or for
troubleshooting if necessary. To use the ADMX files, do the following:

- If you have a Group Policy Central store, copy the PolicyDefinitions folder into

  ```
  \\<DC>\sysvol\<domain>\Policies
  ```

- If you do not have a Group Policy Central store, copy the PolicyDefinitions folder to

  ```
  c:\PolicyDefinitions
  ```

You can see what copying those files to a Group Policy Central store looks like in Figure 58.

![tuning_and_troubleshooting_624x274](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning/tuning_and_troubleshooting_624x274.webp)

Figure 58. Copying the ADMX files to the PolicyDefinitions folder.

Now when you edit Group Policy Objects (GPOs), you will see Endpoint Policy Manager GPCR policy
settings under `Computer Configuration\Policies\Administrative Templates\PolicyPak`. The settings to
tune `PPGPCR.Auditor.exe` on endpoints can be seen in the Auditor Endpoints folder, as shown in
Figure 59.

![tuning_and_troubleshooting_1_624x272](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning/tuning_and_troubleshooting_1_624x272.webp)

Figure 59. The policy settings for endpoints.

The settings and their functions are each presented in the sections that follow. Note that they are
not presented in the same order as found in the figure above.

## Maximum Check-Ins Per Day

The "Maximum check-ins per day" setting allows you to limit how many times per day
`PPGPCR.Auditor.exe` will run on an endpoint automatically. The default maximum is 20 audits in a
calendar day (not 24 hours from when the computer is started).

:::note
If you were to run `PPGPCR.Auditor.exe` with the /force switch to manually start the
auditing process, it would not count toward this maximum number. The` PPGPCR.Auditor.exe` can only
run with the /force switch when run as SYSTEM (not as an admin).
:::


## Time Period Allowed to Run

The "Time period allowed to run" setting allows you to limit the hours that the auditor will run.
This can be useful during times when it is not needed, such as outside of normal business hours. It
can also be used if you only want the auditor to run outside of business hours to save bandwidth.
The following options are available for the setting:

- Default/Not Configured: Runs at all hours
- Enabled: Runs from 10 AM to 4 PM according to the time zone of the endpoint and is changeable
- Disabled: Runs at all hours

## Run Auditor on Logon

The "Run Auditor on logon" setting controls whether the auditor can run on user login and consume
bandwidth during that startup and login process. When allowed, this can cause massive network flow
at the start of working hours and can also slow the user's login time. Our recommended approach is
to keep the default setting, which will only send Endpoint Policy Manager GPCR auditor data in the
background (after the login process). The following options are available for the setting:

- Default/Not Configured: Does not run at login
- Enabled: Runs at login
- Disabled: Does not run at login

When enabled, the auditor will also trigger and send data when the following GP events occur:

- 8000 Successful computer end event
- 8001 Successful user end event

## Prevent Auditor from Running

To save bandwidth it is recommended to only run the auditor during background events. This is the
Default/Not Configured recommendation. You can also prevent the auditor from running during
background events by changing the "Prevent Auditor from running upon Group Policy background events"
setting to "Disabled." If this policy is set to "Disabled," then you will likely need to enable
"PPGPCR Auditor Endpoints: Run Auditor on logon" or you will have no data from the auditor (unless
manually run with the `/force` command). The following options are available for the setting:

- Not Configured/Enabled: Runs during background events
- Disabled: Does not run during background events

When disabled, the auditor will no longer trigger for the following event IDs for background events:

- 8006 Successful computer periodic refresh event
- 8007 Successful user periodic refresh event

## Run Auditor Upon Network Change

The setting "Run Auditor upon network change" controls whether the auditor runs on a network change.
This might be useful when computers are offline for a period of time, and then re-connect over
wireless or a VPN connection. We recommend you leave this off by default, and acquire auditing data
in the background, which will occur during the next background refresh cycle of Group Policy. The
following options are available for the setting:

- Not Configured/Default: Does not run on a network change
- Enabled: Runs on a network change
- Disabled: Does not run on a network change

If enabled, the auditor will trigger for the following event IDs:

- 8002 Successful computer network change event
- 8003 Successful user network change event

## Run Auditor Upon Manual GPUpdate

The setting "Run Auditor upon manual gpupdate" controls whether the auditor runs when a user
manually runs GPUpdate. This is enabled by default because, typically, end-users do not run
GPUpdate; it is usually run by admins. Therefore, the default is that an Admin would run GPUpdate,
which would automatically run the Endpoint Policy Manager GPCR auditor and deliver latest data to
the server. The following options are available for the setting:

- Default: Auditor will trigger when GPUpdate is run manually
- Enabled: Same as Default / auditor will run upon manual GPUpdate
- Disabled: Does not trigger the auditor when GPUpdate is run manually

When disabled, the following event IDs are ignored:

- 8004 Successful computer manual refresh event
- 8005 Successful user manual refresh event

## Run Auditor Immediately

The setting "Run Auditor immediately when Scheduled Task configuring Auditor is applied" controls
whether or not the auditor will run when a scheduled task it applied. We recommend using the default
setting as running the auditor immediately can create massive network flow just after configuring
auditor. The following options are available for the setting:

- Default: Does not immediately run when the scheduled task is applied
- Enabled/Not Configured: Does not run immediately after the scheduled task is applied
- Disabled: Runs immediately on any machine after the scheduled task configuring the auditor is
  applied

The behavior of the auditor is not affected at the occurrence of any event IDs.

## Only Run Group Policy Compliance Reporter Auditor on Computer Side

The setting "Only run PPGPCR Auditor on computer side, but only when a user is actually logged in"
controls whether the auditor runs when no user is logged in to a PC. You might want to set this
setting to "Enabled" to only capture auditing data when someone is actually logged in to save
bandwidth. The following options are available for the setting:

- Default/Not configured: Runs on the computer side regardless of whether a user is logged in or not
- Enabled: Only runs on the computer side when a user is logged in
- Disabled: Runs on the computer side regardless of whether a user is logged in or not

