---
title: "How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?"
description: "How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?"
sidebar_position: 40
---

# How often is Endpoint Policy Manager updated? And, must I update to the latest version? Are all versions supported?

There are several parts to Netwrix Endpoint Policy Manager (formerly PolicyPak)
[What items and components are licensed, and what components are free?](/docs/endpointpolicymanager/licensing/knowledgebase/miscquestions/components_1.md)

When people ask us how often Endpoint Policy Manager is updated, they usually want to know when Paks
and/or the CSE are updated.

The Paks are updated as needed. See
[AppSets: What is the official support policy for the pre-configured AppSets?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/preconfiguredappsets/supportpolicy.md)

The CSE is updated for emergency bug fixes right away. The CSE is updated for low-priority bug fixes
about 3 to 4 times a year. We typically launch new features at the same time.

You don't need to update to other parts of Endpoint Policy Manager, like the MMC snap in, GPOTouch
utility, and License Utility. These are also updated as needed.

From a Endpoint Policy Manager supportability perspective, we only ever truly support the currently
shipping version.

That being said, you're welcome to use the version you want until one of three things occurs:

- There's a feature you want to take advantage of that's only in a newer version
- A bug that's fixed that's only on the CSE
- A bug / feature that's only fixed when both the Pak and CSE are updated

So, if you found a bug which could only be fixed inside the CSE, we would simply update the latest
shipping CSE version and put out the next shipping version for all customerswith the bug fix.

In this way, the closer you are to latest version the easier the transition to the latest version
will be, should the need arise.

