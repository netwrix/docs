---
title: "Integration with Other Netwrix Products"
description: "Integration with Other Netwrix Products"
sidebar_position: 60
---

# Integration with Other Netwrix Products

The following Netwrix products can be configured to send data to Threat Manager:

- [Netwrix Activity Monitor Integration](/docs/threatmanager/3.4/install/integration/activitymonitor.md) – Activity Monitor can be configured to
  send file system data and/or Active Directory data to Threat Manager.
    - The Active Directory data stream requires a unique App Token that you generate within Threat
      Manager.
- [Netwrix Threat Prevention Integration](/docs/threatmanager/3.4/install/integration/threatprevention/threatprevention.md) – Threat Prevention can be configured
  to send file system data and/or Active Directory data to Threat Manager.
    - Requires a unique App Token that you generate within Threat Manager.
- [Netwrix Access Analyzer (formerly Enterprise Auditor) Integration](/docs/threatmanager/3.4/install/integration/accessanalyzer.md) – You can configure Access
  Analyzer, formerly Netwrix StealthAUDIT, to send File System Sensitive Data to
  Threat Manager
    - Requires a unique App Token that you generate within Threat Manager.

Configure the product you want to feed data into the Threat Manager Console. Depending upon the data
source, you may need to generate a Threat Manager app token. See the
[App Tokens Page](/docs/threatmanager/3.4/administration/configuration/integrations/apptoken.md) topic for additional
information.
