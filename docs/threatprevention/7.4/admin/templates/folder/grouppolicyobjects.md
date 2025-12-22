---
title: "Group Policy Objects Folder Templates"
description: "Group Policy Objects Folder Templates"
sidebar_position: 70
---

# Group Policy Objects Folder Templates

The **Templates** > **Microsoft** > **Group Policy Objects** folder in the Navigation pane contains
the following templates:

:::warning
Use cation with _all Lockdown/Blocking Templates_! Blank filters result in _everything_
being locked down or blocked.
:::


| Subfolder | Template                             | Description                                                                                                                                                                   | TAGS |
| --------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| Lockdown  | GPO: Lockdown                        | Specify the list of AD Group Policy Objects to be protected and AD Events to be locked down. Optionally, add any AD Attributes and/or AD Perpetrators to be allowed or denied | None |
| Settings  | GPO: Setting Changes                 | Specify the list of AD Group Policy Objects to be monitored. Optionally, add any AD Perpetrators to be included or excluded                                                   | None |
| Usage     | GPO: Creations                       | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded                                                                      | None |
| Usage     | GPO: Deletions                       | No customizations required. Most common modifications: specify AD Perpetrator to be included or excluded                                                                      | None |
| Usage     | GPO: Link Changes                    | No customizations required. Most common modifications: specify AD Context and/or AD Perpetrator to be included or excluded                                                    | None |
| Usage     | GPO: Monitoring Applications of GPOs | No customizations required. Most common modifications: specify AD Context and/or AD Perpetrator to be included or excluded                                                    | None |
