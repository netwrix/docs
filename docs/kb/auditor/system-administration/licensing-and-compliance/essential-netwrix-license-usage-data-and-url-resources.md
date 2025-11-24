---
description: >-
  Describes what license usage data Netwrix Auditor sends to Netwrix and which
  URLs to whitelist if a server has limited Internet access.
keywords:
  - license usage
  - Netwrix Auditor
  - whitelist URLs
  - license.nwxcorp
  - stats.netwrix.com
  - updates.netwrix.com
  - netwrix.com
products:
  - auditor
sidebar_label: Essential Netwrix License Usage Data and URL Resou
tags: []
title: "Essential Netwrix License Usage Data and URL Resources"
knowledge_article_id: kA04u0000000H4NCAU
---

# Essential Netwrix License Usage Data and URL Resources

## Questions

1. What license usage data is sent to Netwrix?
2. What resources should be whitelisted in case of limited Internet connection?

## Answers

Each data source that Netwrix Auditor audits is associated with a license. For example, Active Directory auditing is associated with an Active Directory license. The license count is determined for each data source and reported under the **Settings** > **Licenses** tab. For Active Directory, the count of enabled users is tracked and displayed as a part of the license usage data. Each licensed instance of Netwrix Auditor reports the corresponding total license usage to the Netwrix company.

> **Note:** License usage data does not include any sensitive information. See the following screenshot for an example of what data Netwrix receives:

![User-added image]./../0-images/ka04u00000116GR_0EM4u000002PWPR.png)

If a Netwrix server in your environment has limited Internet access, whitelist the following URLs so Netwrix can collect license usage data:

```text
https://license.nwxcorp.com/
http://updates.netwrix.com/
http://www.netwrix.com/
https://stats.netwrix.com/
```

