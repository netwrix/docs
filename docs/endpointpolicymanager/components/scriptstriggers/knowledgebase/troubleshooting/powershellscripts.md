---
title: "How do Endpoint Policy Scripts Manager PowerShell Scripts behave when PowerShell is blocked or disabled using the following methods?"
description: "How do Endpoint Policy Scripts Manager PowerShell Scripts behave when PowerShell is blocked or disabled using the following methods?"
sidebar_position: 60
---

# How do Endpoint Policy Scripts Manager PowerShell Scripts behave when PowerShell is blocked or disabled using the following methods?

## Scenario 1: Blocking / Denying PowerShell with Least Privilege Manager

In Netwrix Endpoint Policy Manager (formerly PolicyPak) version 2790 and lower if you use the
Endpoint Policy Manager provided block PowerShell guidance XML, running PowerShell scripts will be
blocked.
Result: Endpoint Policy Manager Logs will show similar error messages to below when Endpoint Policy
Manager attempts to run a PowerShell script.

![867_1_image-20210721211958-1](/images/endpointpolicymanager/scriptstriggers/867_1_image-20210721211958-1.webp)

:::note
Endpoint Policy Manager Scripts and Triggers Manager logs can be found here on the
endpoint(s):
:::


- `%programdata%\Policypak\Policypak Scripts Manager`
- `%localappdata%\Policypak\ Policypak Scripts Manager`

In Endpoint Policy Manager version 2791 and higher if you use the Endpoint Policy Manager provided
block PowerShell guidance XML, running PowerShell scripts will be NOT be blocked, unless you ENABLE
the following Endpoint Policy Manager ADMX setting.
"Endpoint Policy Manager ADMX Settings > Client-Side Extensions > Least Privilege Manager > Block
Processes created by Endpoint Policy Manager Scripts Manager"

![867_2_image-20210721211958-2](/images/endpointpolicymanager/scriptstriggers/867_2_image-20210721211958-2.webp)

## Scenario 2: PowerShell is disabled via a Software Restriction policy using Group Policy on User Configuration side as in image below.

![867_3_image-20210721211958-3](/images/endpointpolicymanager/scriptstriggers/867_3_image-20210721211958-3.webp)

:::note
If you have a Software Restriction policy in place that blocks PowerShell.
:::


Result: Any Endpoint Policy Manager Scripts & Triggers Manager policies will still be able to
execute PowerShell Scripts successfully, and the Endpoint Policy Manager Logs will show a successful
run message similar to below when Endpoint Policy Manager runs a PowerShell script.

![867_4_image-20210721211958-4](/images/endpointpolicymanager/scriptstriggers/867_4_image-20210721211958-4.webp)

:::note
Endpoint Policy Manager Scripts and Triggers Manager logs can be found here on the
endpoint(s):
:::


- `%programdata%\Policypak\Policypak Scripts Manager`
- `%localappdata%\Policypak\Policypak Scripts Manager`

## Scenario 3: PowerShell is disabled via a Software Restriction Policy (SRP) using Group Policy on Computer Configuration side as in the image below.

![867_5_image-20210721211958-5](/images/endpointpolicymanager/scriptstriggers/867_5_image-20210721211958-5.webp)

If you have a Software Restriction Policy in place that blocks PowerShell.
Result: Any Endpoint Policy Manager Scripts & Triggers Manager policies that do not run as SYSTEM
will be blocked from running, and Endpoint Policy Manager Logs for the user will show blocked events
messages similar to below.

![867_6_image-20210721211958-6](/images/endpointpolicymanager/scriptstriggers/867_6_image-20210721211958-6.webp)

:::note
Endpoint Policy Manager Scripts and Triggers Manager logs can be found here on the
endpoint(s):
:::


- `%programdata%\Policypak\Policypak Scripts Manager`
- `%localappdata%\Policypak\Policypak Scripts Manager`

:::note
To ensure the SRP policy is applied properly during testing you can try running PowerShell
manually from CMD as a standard user under either scenario 2 or 3 and if the SRP is applied properly
then PowerShell will be blocked.
:::


![867_7_image-20210721211958-7](/images/endpointpolicymanager/scriptstriggers/867_7_image-20210721211958-7.webp)

![867_8_image-20210721211958-8](/images/endpointpolicymanager/scriptstriggers/867_8_image-20210721211958-8.webp)


