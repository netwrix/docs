---
title: "Best Practices Templates"
description: "Best Practices Folder Templates"
sidebar_position: 20
---

# Best Practices Folder Templates

The Best Practices folder contains the following templates:

**Active Directory Folder**

| Template                | Description     | TAGS |
| ----------------------- | ------------------ | ---- |
| All AD Changes          | Gathers all AD changes. <br />Utilizes the built-in “Exclude Class” – Classes Collection and “Exclude Attribute” – Attributes Collection to restrict unwanted events. Add classes and attributes which will NOT be monitored to these collections | None |
| All GPO Setting Changes | No customizations required to monitor all GPO setting changes      | None |

**Exchange Folder**

:::warning
Use cation with _all Lockdown/Blocking Templates_! Blank filters result in _everything_
being locked down or blocked!
:::


| Template         | Description        | TAGS |
| ------------------------ | ------------- | ---- |
| Non-Owner Logon Lockdown | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Specify the Exchange Mailboxes and Containers to lockdown. Optionally, add Exchange Perpetrators to be allowed or denied. | None |

**File System Folder**

| Template               | Description       | TAGS |
| ---------------------- | ------------------------------- | ---- |
| File Owner Changes     | Specify the files and/or folders to be monitored. Optionally, add any AD Perpetrators to be included or excluded.        | None |
| File System Monitoring | Specify the files and/or folders to be monitored. Optionally, add any AD Perpetrators to be included or excluded. <br />Reads are left out due to the potential high volume of data that could be gathered; recommended only for highly sensitive content. | None |

**Object Lockdown Folder**

:::warning
Use cation with _all Lockdown/Blocking Templates_! Blank filters result in _everything_
being locked down or blocked!
:::


| Template           | Description      | TAGS |
| ----------------- | -------------------- | ---- |
| AD Object Permissions Lockdown                                  | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “Object Permissions - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired Objects to protect.                       | None |
| AD Root Object Lockdown                                         | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “Root Object - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired Objects to protect.                        | None |
| Critical GPO Lockdown                                           | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “Critical GPO - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired GPOs to protect.                              | None |
| DNS Record Lockdown                  | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “DNS Records - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, and fill in the built-in collection.                      | None |
| Group Lockdown of Delete, Move, Rename, and Membership Events   | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “Group Lockdown - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired Groups to protect.                         | None |
| Group, User, and OU Lockdown of Delete, Move, and Rename Events | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “Group User OU Object Delete and Move - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired Objects to protect.      | None |
| OU Structure Lockdown              | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “OU Structure - >Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, fill in the built-in collection, and add the desired OUs to protect.                 | None |
| User Lockdown of Delete, Move, Rename and Modify Events         | USE CAUTION WITH ALL LOCKDOWN TEMPLATES <br />Utilizes the built-in “User Lockdown - Allow Perpetrators” – Lockdown Perpetrators Collection. <br />Change the AD Perpetrator tab to ALLOW instead of BLOCK, and fill in the built-in Allow Lockdown Perpetrator Collection, and add the desired Users to protect. | None |

