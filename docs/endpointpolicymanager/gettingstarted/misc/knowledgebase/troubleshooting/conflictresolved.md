---
title: "What is the processing order of all policies and how are conflicts resolved (and how can I see the final RsOP) of those policies (between GPO, Cloud, XML, etc)?"
description: "What is the processing order of all policies and how are conflicts resolved (and how can I see the final RsOP) of those policies (between GPO, Cloud, XML, etc)?"
sidebar_position: 40
---

# What is the processing order of all policies and how are conflicts resolved (and how can I see the final RsOP) of those policies (between GPO, Cloud, XML, etc)?

When you attempt to deliver policies from multiple sources, for example Group Policy and Netwrix
Endpoint Policy Manager (formerly PolicyPak) Cloud everything is merely combined together for a
final RSoP (resultant set of policy.)

Other sources are XML files placement; which happens automatically when you use:

1. Endpoint Policy Manager Cloud or
2. Endpoint Policy Manager with an MDM service and/or you use
3. Endpoint Policy Manager Exporter utility to re-wrap XML files and deliver them via MSI.

Those policy XML files get unwrapped to` c:\programData\PolicyPak\XMLData` into various folders seen
here: Cloud, Computer, Groups, Users.

![717_1_img-01](/images/endpointpolicymanager/troubleshooting/717_1_img-01.webp)

Again the only time you have to really worry about conflicts is when you attempt to set the EXACT
same value would you have a problem. For instance, you decide to create an RDP File on the desktop
called `RDP123.RDP `.. and you use both Group Policy and Endpoint Policy Manager Cloud at the same
time, to make the exact same file, with different contents. This is ill-advised in the first place,
but if you do, there is a precedence order.

You can think about the precedence order like a "weighted system" where some policies have higher
weight than others.

|                                                              |               |
| ------------------------------------------------------------ | ------------- |
| Policy Source                                                | Weighed Value |
| Unknown source                                               | 0             |
| Endpoint Policy Manager Cloud                                | 5             |
| XML File placed in` \programdata\policypak\xmldata\GROUPS`   | 10            |
| XML File placed in \```programdata\policypak\xmldata\USER``` | 20            |
| XML File placed in` \programdata\policypak\xmldata\COMPUTER` | 30            |
| GPO on User Side                                             | 40            |
| GPO "Switched" (on Computer side, but PER USER)              | 50            |
| GPO specifically for Computer                                | 60            |

One special case involves Microsoft Security Settings which are treated as a "block" and not as
individual policies. As such you might see an undesired "flip flop" behavior when Microsoft

Security Settings are delivered from multiple sources like Group Policy and Endpoint Policy Manager
Cloud. For details on this particular problem see this existing KB:
[Why do I sometimes see Endpoint Policy Manager Cloud security settings and sometimes see on-prem GPO security settings?](/docs/endpointpolicymanager/components/admintemplatesmanager/knowledgebase/exportinggrouppolicysecurity/onpremisecloud.md)

