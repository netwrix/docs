---
title: "Denying Standard Applications"
description: "Denying Standard Applications"
sidebar_position: 10
---

# Denying Standard Applications

:::note
For an overview of PolicyPak performing Application control see the
[PolicyPak Application Control with PP Least Privilege Manager](/docs/policypak/components/leastprivilegemanager/videolearningcenter/basicsandgettingstarted/applicationcontrol.md)
video.
:::


To do this, first create a rule type which matches your scenario. Then pick the condition to match.
For instance, you could use a **Signature Condition** to select a file from Mozilla Corporation, as
seen here.

![A screenshot of a computer Description automatically generated](/images/policypak/leastprivilege/deny/denying_standard_applications.webp)

Then select the **Action** type **Deny execution**.

![A screenshot of a computer Description automatically generated](/images/policypak/leastprivilege/deny/denying_standard_applications_1.webp)

The MMC will take action to deny the desired user rights.

![A screenshot of a computer Description automatically generated](/images/policypak/leastprivilege/deny/denying_standard_applications_2.webp)

The result is that Firefox and every other application signed by this publisher would not run on the
endpoint no matter how it made it there (even if it was properly installed). The result of a
**Deny** rule can be seen below.

:::note
You may use PolicyPak Least Privilege Managerr to
deliver custom messages to users, including links to click on URLs for more information on your
corporate policies.
:::


![A screenshot of a computer Description automatically generated](/images/policypak/leastprivilege/deny/denying_standard_applications_3.webp)



