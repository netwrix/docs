---
title: "Producing Results Reports with Push Mode"
description: "Producing Results Reports with Push Mode"
sidebar_position: 60
---

# Producing Results Reports with Push Mode

Since computers are always automatically delivering their latest data to the server with push mode,
you can quickly query all computers at once against your desired compliance. All you need to do is
add tests, click "Select RSOP Source," and then select the built-in report of "Computers Reporting
Auditing Data." This will query all computers at once and give you a report. Alternatively, if you
have any sets defined, you may pick a set and see the results of only the computers in that set, as
shown in Figure 57.

![gpcr_server_with_push_mode_21](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_21.webp)

Figure 57. Viewing the results for computers within a specific set.

:::note
You do not need to manually run a snapshot of any set when using push mode, since the data
is always flowing from the endpoint to the server. You can manually pull data from a set, however,
if you wish.

:::

