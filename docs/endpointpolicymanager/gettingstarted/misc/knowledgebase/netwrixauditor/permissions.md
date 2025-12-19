---
title: "How can I minimize or eliminate requests to authenticate to Netwrix Auditor (and what permissions are needed to see Endpoint Policy Manager's Netwrix Auditor Reports?)"
description: "How can I minimize or eliminate requests to authenticate to Netwrix Auditor (and what permissions are needed to see Endpoint Policy Manager's Netwrix Auditor Reports?)"
sidebar_position: 20
---

# How can I minimize or eliminate requests to authenticate to Netwrix Auditor (and what permissions are needed to see Endpoint Policy Manager's Netwrix Auditor Reports?)

While using the Netwrix Endpoint Policy Manager (formerly PolicyPak) MMC to view Netwrix Auditor
data, you might be prompted for Username and Password credentials. There are a few things you need
to do to minimize or eliminate these requests. An example authentication request can be seen here.

![969_1_image-20231017185713-1_950x344](/images/endpointpolicymanager/integration/auditor/969_1_image-20231017185713-1_950x344.webp)

:::note
First, note that if your browser is Firefox you must set the "URIS / SPNEGO" settings to
passthru authentication requests. One way to do this is via Endpoint Policy Manager Application
Settings Manager with these instructions:
[Firefox: How do I use the NTLM passthru (URIS) settings in the Firefox / about:config AppSets?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/preconfiguredappsets/ntlmpassthru.md).
You may also use the Firefox ADMX settings to perform a similar option.
:::


If you are using Edge as your default browser, these steps are un-necessary and you will likely not
be prompted for credentials.

However, you might also be denied access to the specific Endpoint Policy Manager report, like what's
seen here.

![969_2_image-20231017185713-2_950x355](/images/endpointpolicymanager/integration/auditor/969_2_image-20231017185713-2_950x355.webp)

**Step 1 –** To correct for this and ensure the highlighted user in the previous screenshot (or
group the person is a member of) has access, you there are a few ways to accomplish the task.

- Way #1: Configure the access for that user or a group to the Netwrix Auditor data as described
  here:
  [Role-Based Access and Delegation (netwrix.com)](https://helpcenter.netwrix.com/bundle/Auditor_10.6/page/Content/Auditor/Admin/MonitoringPlans/Delegation.htm)
- Way #2: Manually adjust SQL Server Reporting Services and grant proper access..

You will need main credentials to SQL Server Reporting Services before beginning.

**Step 2 –** Then from the Home screen, click the three dots next to the Endpoint Policy Manager
reporting folder (note it could have a different name if it was set up in a unique fashion.) Then
click Manage.

![969_3_image-20231017185713-3_950x439](/images/endpointpolicymanager/integration/auditor/969_3_image-20231017185713-3_950x439.webp)

**Step 3 –** Then add in your DOMAIN\GROUP or DOMAIN\USER like what's seen here and select Browser
role and select OK (figure on the left).

The result can be seen in the figure on the right.

![969_4_image-20231017185713-4_950x351](/images/endpointpolicymanager/integration/auditor/969_4_image-20231017185713-4_950x351.webp)

Final result can be seen here where the user is now permitted to see the Endpoint Policy Manager
report.

![969_5_image-20231017185713-5_950x730](/images/endpointpolicymanager/integration/auditor/969_5_image-20231017185713-5_950x730.webp)

