---
title: "Why do I get \">Endpoint Policy ManagerBrowser Router couldn't connect to Endpoint Policy Manager extension service. Please contact support\"?"
description: "Why do I get \">Endpoint Policy ManagerBrowser Router couldn't connect to Endpoint Policy Manager extension service. Please contact support\"?"
sidebar_position: 50
---

# Why do I get ">Endpoint Policy ManagerBrowser Router couldn't connect to Endpoint Policy Manager extension service. Please contact support"?

If your users get this message, this means that the Netwrix Endpoint Policy Manager (formerly
PolicyPak) Helper Service has crashed. Typically, the service will automatically restart. But if it
doesn’t, and then Endpoint Policy Manager Browser Router is used, you might see a problem like this.

![378_1_img-01-image002](/images/endpointpolicymanager/troubleshooting/378_1_img-01-image002.webp)

That being said, that message is old, and has been replaced in more recent CSEs. The first order of
business is to update the Client Side Extension to the LATEST version.

If the problem still occurs, you would see a message similar to this. Note in this version, users
are instructed to contact you, and not
[Netwrix Support.](https://www.netwrix.com/sign_in.html?rf=tickets.html#netwrix-support)

![378_3_img-02-image004](/images/endpointpolicymanager/troubleshooting/378_3_img-02-image004.webp)

Again, what specifically causes this error is when the Endpoint Policy Manager Helper Service is
stopped like what's seen here.
If you want to open an investigation on WHY a machine's Endpoint Policy Manager Helper Service is
crashing, open a support ticket and prepare to generate both user and admin logs for investigation.

![378_5_img-03-image009_950x1116](/images/endpointpolicymanager/troubleshooting/378_5_img-03-image009_950x1116.webp)

