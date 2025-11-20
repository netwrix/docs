---
title: "Using Wildcards with Endpoint Privilege Manager and Certificates"
description: "Using Wildcards with Endpoint Privilege Manager and Certificates"
sidebar_position: 60
---

# Using Wildcards with Endpoint Privilege Manager and Certificates

:::note
See the
[Endpoint Privilege Manager and Wildcards](/docs/endpointpolicymanager/components/endpointprivilegemanager/videolearningcenter/bestpractices/wildcards.md) video
on how to use Endpoint Policy Manager Least Privilege Manager and Certificate Wildcards.
:::


Applications like Zoom, GotoMeeting, Webex and others often have certificates which change from time
to time. So even if you’ve set up the best practice of Certificate + File Info rules (like we
discussed in the [Best Practices](/docs/endpointpolicymanager/components/endpointprivilegemanager/manual/windows/overviewmisc/bestpractices/overview.md) section), those automatic rules can go
out of date quickly.

To allow Endpoint Policy Manager Least Privilege Manager to permit Wildcards in Certificate
matching, select Advanced Mode and then **Allow wildcards in Common Name**. This will flip the
certificate to be permitted to Wildcard mode.

Now you can address the fields you need as Wildcards; in this example, we’ve specified L=\*.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/using_wildcards_with_endpointpolicymanager.webp)

Endpoint Policy Manager Least Privilege Manager will continue to check all the intermediary
certificates along the way before it gets to the one you modified.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/using_wildcards_with_endpointpolicymanager_1.webp)

:::warning
You want to try to be as restrictive as possible when using Wildcards; the more you
open up, the less secure you will be.

:::



