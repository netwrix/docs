---
title: "Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?"
description: "Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?"
sidebar_position: 30
---

# Why am I prompted about a Digitally Signed Driver for Endpoint Policy Manager CSE (and how do I work around it)?

When installing the Netwrix Endpoint Policy Manager (formerly PolicyPak) CSE, you get the following
message, even though all Endpoint Policy Manager files are digitally signed:

```
"Windows requires a digitally signed driver … PPProcessFilter.sys "
```

![351_1_sdgghjl](/images/endpointpolicymanager/troubleshooting/install/351_1_sdgghjl.webp)

Install the KB 3033929 Windows 7 update from Microsoft
for[https://www.microsoft.com/en-us/download/details.aspx?id=46148](https://www.microsoft.com/en-us/download/details.aspx?id=46148)
or[https://www.microsoft.com/en-us/download/details.aspx?id=46078](https://www.microsoft.com/en-us/download/details.aspx?id=46078).

This will enable Windows 7 to honor 256-hash signed files.

As you can see here, all Endpoint Policy Manager files are signed with SHA256.

![351_2_image002](/images/endpointpolicymanager/troubleshooting/install/351_2_image002.webp)

