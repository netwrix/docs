---
title: "I'm using redirected folders and get un-expected results."
description: "I'm using redirected folders and get un-expected results."
sidebar_position: 100
---

# I'm using redirected folders and get un-expected results.

Netwrix Endpoint Policy Manager (formerly PolicyPak) always tries to do it's "work" as SYSTEM first.
In the case of Redirected Folders, the system doesn't have WRITE rights where you're redirecting to.

ppUSER.log might show Error creating folder \fabrikam.comHome: [object Error]

This is indicative of Folder Redirection in use.

Try to change the Pak properties so it runs as USER as seen here:

![484_1_2015-02-20_1513](/images/endpointpolicymanager/troubleshooting/applicationsettings/484_1_2015-02-20_1513.webp)


