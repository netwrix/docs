---
title: "Integration with Other Netwrix Products"
description: "Integration with Other Netwrix Products"
sidebar_position: 60
---

# Integration with Other Netwrix Products

You can configure the following Netwrix products to send data to Threat Manager:

- [Netwrix Activity Monitor Integration](/docs/threatmanager/3.3/install/integration/activitymonitor.md) – You can configure Activity Monitor to
  send file system data and/or Active Directory data to Threat Manager.
    - The Active Directory data stream requires you to generate a unique App Token within Threat
      Manager.
- [Netwrix Threat Prevention Integration](/docs/threatmanager/3.3/install/integration/threatprevention/threatprevention.md) – You can configure Threat Prevention
  to send file system data and/or Active Directory data to Threat Manager.
    - Requires you to generate a unique App Token within Threat Manager.
- [Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.3/install/integration/accessanalyzer.md) – Access
  Analyzer, formerly Netwrix StealthAUDIT, sends File System Sensitive Data to
  Threat Manager when you configure it
    - Requires you to generate a unique App Token within Threat Manager.

Configure the product you want to feed data into the Threat Manager Console. Depending upon the data
source, you may need to generate a Threat Manager app token. See the
[App Tokens Page](/docs/threatmanager/3.3/administration/configuration/integrations/apptoken.md) topic for additional
information.
