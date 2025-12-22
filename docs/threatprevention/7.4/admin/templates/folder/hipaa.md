---
title: "HIPAA Folder Templates"
description: "HIPAA Folder Templates"
sidebar_position: 30
---

# HIPAA Folder Templates

The HIPAA folder contains the following templates:

**164.306 – Security Standards Folder**

| Template                                | Description                | TAGS |
| --------------------------------------- | -------------------------- | ---- |
| HIPAA: AD Computer Object Modifications | No customizations required | None |
| HIPAA: AD Group Type Modifications      | No customizations required | None |
| HIPAA: GPO Creations                    | No customizations required | None |

**164.308 (a)(1)(i) – Security Management Process Folder**

| Template                            | Description                | TAGS |
| ----------------------------------- | -------------------------- | ---- |
| HIPAA: AD Computer Object Creations | No customizations required | None |
| HIPAA: AD Computer Object Deletions | No customizations required | None |
| HIPAA: AD Group Creations           | No customizations required | None |
| HIPAA: AD Group Deletions           | No customizations required | None |
| HIPAA: AD User Creations            | No customizations required | None |
| HIPAA: GPO Creations                | No customizations required | None |
| HIPAA: GPO Deletions                | No customizations required | None |
| HIPAA: OU Creations                 | No customizations required | None |
| HIPPA: OU Deletions                 | No customizations required | None |

**164.308 (a)(1)(ii) – Implementation Specifications Folder**

| Template                           | Description                | TAGS |
| ---------------------------------- | -------------------------- | ---- |
| HIPAA: AD Group Membership Changes | No customizations required | None |
| HIPAA: GPO Link Changes            | No customizations required | None |
| HIPAA: OU Moves or Renames         | No customizations required | None |
| HIPAA: OU Security Modifications   | No customizations required | None |

**164.308 (a)(3)(i) – Workforce Security Folder**

| Template                            | Description                | TAGS |
| ----------------------------------- | -------------------------- | ---- |
| HIPAA: AD Computer Object Creations | No customizations required | None |
| HIPAA: AD Group Creations           | No customizations required | None |
| HIPAA: AD Group Membership Changes  | No customizations required | None |
| HIPAA: AD User Creations            | No customizations required | None |

**164.308 (a)(3)(ii) – Authorization and Supervision Folder**

| Template                 | Description            | TAGS |
| ------------------------ | ------------------- | ---- |
| HIPAA: WinFS PHI Audit Modifications      | Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Owner Modifications      | Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Permission Modifications | Specify the files and/or folders to be monitored | None |

**164.308 (a)(4) – Information Access Management Folder**

| Template       | Description         | TAGS |
| ----------- | -------------------------- | ---- |
| HIPAA: WinFS PHI Creates | Specify the files and/or folders to be monitored                                | None |
| HIPAA: WinFS PHI Deletes | Specify the files and/or folders to be monitored                                | None |
| HIPAA: WinFS PHI Reads   | USE CAUTION WITH THIS TEMPLATE <br />Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Renames | Specify the files and/or folders to be monitored                                | None |
| HIPAA: WinFS PHI Writes  | Specify the files and/or folders to be monitored                                | None |

**164.308 (a)(5)(ii)(C) – Log-In Monitoring Folder**

| Template         | Description           | TAGS |
| ---------- | -------------- | ---- |
| HIPAA: AD Account Logons                  | No customizations required. Make sure the Configuration > Event Filtering > Exclude 'Noise' Events option is Off for this policy        | None |
| HIPAA: Successful Account Authentications | Gathers successful AD authentications. <br />Utilizes built-In “Successful Authentications” – Include Perpetrators Collection to define which accounts will be monitored for successful authentications. Add accounts to be monitored to this collection | None |

**164.308 (a)(5)(ii)(D) – Password Management Folder**

| Template                            | Description                | TAGS |
| ----------------------------------- | -------------------------- | ---- |
| HIPAA: AD User Account Password Set | No customizations required | None |

**164.312 (a)(1) – Access Control Folder**

| Template            | Description            | TAGS |
| -------------- | ------------ | ---- |
| HIPAA: AD Group Membership Changes        | No customizations required                       | None |
| HIPAA: WinFS PHI Owner Modifications      | Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Permission Modifications | Specify the files and/or folders to be monitored | None |

**164.312 (b) – Audit Controls Folder**

| Template         | Description            | TAGS |
| ------------ | ------------ | ---- |
| HIPAA: WinFS PHI Audit Modifications | Specify the files and/or folders to be monitored | None |

**164.312 (c) – Integrity Folder**

| Template                 | Description                                      | TAGS |
| ------------------------ | ------------------------------------------------ | ---- |
| HIPAA: WinFS PHI Creates | Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Deletes | Specify the files and/or folders to be monitored | None |
| HIPAA: WinFS PHI Renames | Specify the files and/or folders to be monitored | None |

**164.312 (d) – Authentication Folder**

| Template       | Description         | TAGS |
| -------------- | ---------------- | ---- |
| HIPAA: AD PHI User Account Logons                | No customizations required. Make sure the Configuration > Event Filtering > Exclude 'Noise' Events option is Off for this policy         | None |
| HIPAA: Successful AD PHI Account Authentications | Gathers Successful AD Authentications. <br />Utilizes built-In “Successful HIPAA PHI Account Authentications” – Include Perpetrators Collection to define which accounts will be monitored for successful authentications. Add accounts to be monitored to this collection | None |
