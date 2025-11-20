---
title: "XML Data Files from Endpoint Policy Feature Manager"
description: "XML Data Files from Endpoint Policy Feature Manager"
sidebar_position: 120
---

# XML Data Files from Endpoint Policy Feature Manager

Endpoint Policy Manager Feature Manager settings can be exported as an XML file. You can export a
single policy, a collection, or the whole node. Feature Manager only supports computer rules. In
this example, we have created an install rule and an uninstall rule, and we are exporting the entire
collection by right-clicking `Computer Configuration | PolicyPak | Feature Manager` for Windows 10
and Windows Server and picking the collection we wish to export.

![deploying_policypak_directives_28](/images/endpointpolicymanager/mdm/xmldatafiles/deploying_endpointpolicymanager_directives_28.webp)

Figure 28. Exporting a whole collection using Endpoint Policy Manager Feature Manager.

Alternatively, we could select a designated setting to export as well. Right-click
`Computer Configuration | PolicyPak | Security Manager`, and select the setting that is available in
the menu, as shown in Figure 29.

![deploying_policypak_directives_29](/images/endpointpolicymanager/mdm/xmldatafiles/deploying_endpointpolicymanager_directives_29.webp)

Figure 29. Exporting a single Endpoint Policy Manager Feature Manager entry.

