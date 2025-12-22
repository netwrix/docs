---
title: "SoD Overview"
description: "SoD Overview"
sidebar_position: 170
---

# SoD Overview

Advanced Segregation of Duties (SoD) gives you complete separation of duties and access controls. It
allows you to log violations and block access to critical permissions / access to your system.

## What is Advanced SoD?

Advanced SoD provides:

- **Complete documentation** of Role/Permission assignments.
- **Customizable rules**, where you can either use the default rules or set up your own.
- **Easy role additions or modifications**, where Platform Governance for NetSuite alerts you if you
  break a SoD rule.
- **Blocking controls** that can block critical role assignments such as the “Administrator” role,
  making it only possible to assign such roles if there is a pre-approved change request.
- **Warning messages and email alerts** to let you know when you are in an undesired zone.
- **Custom reports** for documentation, retroactive approvals and continuous access reviews,
  ultimately preserving audit trails.
- The power of **Agent** to fill in gaps, monitor and document activities of “super users” and those
  with positional authority.

## Why use Advanced SoD?

By implementing Advanced SoD you can create flexible and easy to maintain rules.

You can create rules that:

- Are specific to permissions
- Use patterns or roles
- Warn of risks
- Work across multiple roles
- Flag violations for clearance
- Pre-clear violations
- Allow for pre-approvals of exemptions
- Have a blocking option to prevent assignment of critical roles or permissions without
  authorization

## How does Advanced SoD work?

Advanced SoD works through the following System Process Flow:

![SoD Diagram](/images/platgovnetsuite/sod/howsodworks.webp)

Advanced SoD's also works through the following Functional Process Flow:

![logviolations](/images/platgovnetsuite/sod/logviolations.webp)

## SoD Exemption Handling for Onboarding, Offboarding, and Cross Role Conflicts

| **Use Case Causing SoD Conflict**                                                                     | Are SoD Conflicts Addressed by an existing Approved Exemption? | SoD Incident /Change Log Created                                                                                                                                                              | Platform Governance for NetSuite Systematic Updates                                                                                                                                                                                                                                                                                                              |
| ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New Employee Onboarded and one Role assigned                                                          | Role Exemption                                                 | Compliant SoD Incident(s)                                                                                                                                                                     | 1. New Employee added to Affected Employees on the Role Exemption (if **All Current and Future** checkbox is checked, if not it is treated as SoD Conflicts that have no Exemption)<br />2. Role Exemption associated to the SoD Incident(s)                                                                                                                          |
| | Cross Role Exemption                                                                                  | Compliant SoD Incident(s)                                      | 1. Cross Role Exemption associated to the SoD Incident(s)                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                  |
| | SoD Conflicts that have no Exemption                                                                  | Unresolved SoD Incident(s)                                     | 1. No immediate action taken<br />2. If an Exemption is created to resolve the SoD Conflict(s) in arrears, it is associated to the SoD Incident(s) at that time                                    |                                                                                                                                                                                                                                                                                                                                                                  |
| New Employee Onboarded and multiple Roles assigned                                                    | Role Exemption                                                 | Compliant SoD Incident(s) only for single Role SoD Incident(s)                                                                                                                                | 1. New Employee added to Affected Employees on the Role Exemption (if **All Current and Future** checkbox is checked, if not it is treated as SoD Conflicts that have no Exemption)<br />2. Role Exemption associated to the SoD Incident(s)                                                                                                                          |
| | Cross Role Exemption                                                                                  | Compliant SoD Incident(s) for those caused by multiple Roles   | 1. Cross Role Exemption associated to the SoD Incident(s)                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                  |
| | SoD Conflicts that have no Exemption                                                                  | Unresolved SoD Incident(s)                                     | 1. No immediate action taken<br />2. If an Exemption is created to resolve the SoD Conflict(s) in arrears, it is associated to the SoD Incident(s) at that time                                    |                                                                                                                                                                                                                                                                                                                                                                  |
| Existing Employee Offboarded by unchecking **Give Access** checkbox or removing all Roles             | Role Exemption                                                 |                                                                                                                                                                                               | 1. Employee removed from Affected Employees on the SoD Role Exemption                                                                                                                                                                                                                                                                                            |
| | Cross Role Exemption                                                                                  |                                                                | 1. Employee removed from Affected Employees on the SoD Cross Role Exemption                                                                                                                   |                                                                                                                                                                                                                                                                                                                                                                  |
| | SoD Conflicts that have no Exemption                                                                  |                                                                | 1. N/A. Employee has been Offboarded, no new SoD Conflict exists                                                                                                                              |                                                                                                                                                                                                                                                                                                                                                                  |
| Existing Employee gets a new Role(s) causing new SoD Incident(s)                                      | Role Exemption                                                 | Compliant SoD Incident(s) only for single Role SoD Incident(s)                                                                                                                                | 1. Role Exemption associated to the SoD Incident(s) (if **All Current and Future** checkbox is checked, if not it is treated as SoD Conflicts that have no Exemption)                                                                                                                                                                                            |
| | Cross Role Exemption                                                                                  | Compliant SoD Incident(s) for those caused by multiple Roles   | 1. Cross Role Exemption associated to the SoD Incident(s)                                                                                                                                     |                                                                                                                                                                                                                                                                                                                                                                  |
| | SoD Conflicts that have no Exemption                                                                  | Unresolved SoD Incident(s)                                     | 1. No immediate action taken<br />2. If an Exemption is created to resolve the SoD Conflict(s) in arrears, it is associated to the SoD Incident(s) at that time                                    |                                                                                                                                                                                                                                                                                                                                                                  |
| Existing Employee with a Cross Role Conflict has one or more Roles removed. SoD must be re-evaluated. | Role Exemption                                                 | Compliant SoD Incident(s) only for single Role SoD Incident(s)                                                                                                                                | 1. Role Exemption associated to the SoD Incident(s) (if **All Current and Future** checkbox is checked, if not it is treated as SoD Conflicts that have no Exemption)<br />2. Employee added to Affected Employees on the Role Exemption<br />3. If the Role removal resolved an existing SOD Conflict, Employee removed from Affected Employees on the SOD Role Exemption |
| | Cross Role Exemption                                                                                  | Compliant SoD Incident(s) for those caused by multiple Roles   | 1. Cross Role Exemption associated to the SOD Incident(s).<br />2. If the Role removal resolved an existing SOD Conflict, Employee removed from Affected Employees on the SOD Cross Role Exemption |                                                                                                                                                                                                                                                                                                                                                                  |
| | SoD Conflicts that have no Exemption                                                                  | Unresolved SoD Incident(s)                                     | 1. No immediate action taken<br />2. If an Exemption is created to resolve the SoD Conflict(s) in arrears, it is associated to the SoD Incident(s) at that time                                    |                                                                                                                                                                                                                                                                                                                                                                  |
