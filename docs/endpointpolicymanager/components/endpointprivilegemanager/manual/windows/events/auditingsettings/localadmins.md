---
title: "Discovery for Elevated Apps with Local Admins"
description: "Discovery for Elevated Apps with Local Admins"
sidebar_position: 10
---

# Discovery for Elevated Apps with Local Admins

When your users still have admin rights, they will automatically be running many items with local
admin rights to overcome UAC prompts. When you enable the Audit applications requiring elevation
setting, you are turning on Discovery most times a user runs an application and transfers their
power to overcome that UAC prompt.

An example can be seen here with TreeSize Free (Administrator). When you run the app as an
administrator, you are prompted with a UAC prompt. When you click **Yes**", the Event 6200 occurs,
as shown here.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/leastprivilege/events/auditingsettings/discovery_for_elevated_apps.webp)

With the auditing information, you can make a Endpoint Policy Manager (formerly PolicyPak) Least
Privilege Manager Elevate rule to overcome this when the user is transitioning from being a local
admin to being a standard user.



