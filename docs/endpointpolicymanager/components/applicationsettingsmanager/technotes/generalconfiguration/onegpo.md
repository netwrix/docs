---
title: "Should I put lots of Paks (or other PP directives into one GPO?)"
description: "Should I put lots of Paks (or other PP directives into one GPO?)"
sidebar_position: 250
---

# Should I put lots of Paks (or other PP directives into one GPO?)

[How many Endpoint Policy Manager policies can I create within one Group Policy Object?](/docs/endpointpolicymanager/components/applicationsettingsmanager/technotes/generalconfiguration/limitations.md)

Then, as a suggestion, the best practice for Netwrix Endpoint Policy Manager (formerly PolicyPak) is
to have one GPO for each "thing" you want to do.

For instance, if you wanted to manage Chrome, you could create ONE GPO and then use Item Level
Targeting to specify the conditions of WHO would get the settings WHEN.

Here is an example:

![345_1_2015-09-01_1047](/images/endpointpolicymanager/troubleshooting/applicationsettings/345_1_2015-09-01_1047.webp)

Then you would do the same for another GPO, say, for Firefox, and another GPO for Internet Explorer
settings, and so on.


