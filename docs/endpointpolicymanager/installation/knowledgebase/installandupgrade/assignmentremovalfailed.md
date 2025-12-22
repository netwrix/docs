---
title: "The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed"
description: "The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed"
sidebar_position: 60
---

# The removal of the assignment of application Endpoint Policy Manager Client-Side Extension (32bit) from policy failed

When using Group Policy Software Deployment to install the Policy Pak CSE the following error
message is generated in the System Event log:

```
"The removal of the assignment of application Policypak Client-Side Extension (32bit) from policy … failed. The error was : %%2"
```

![336_1_image-20200111180227-1_950x451](/images/endpointpolicymanager/troubleshooting/336_1_image-20200111180227-1_950x451.webp)

To resolve this error, uncheck "Make this 32-bit X86 application available to Win64 computers"
checkbox for the 32bit Endpoint Policy Manager Client-Side Extension in the Group Policy Software
Deployment policy.

