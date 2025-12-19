---
description: >-
  Learn how to investigate where and why a user account was locked out using
  Netwrix Auditor, including reports to run, searches to perform, and how to
  enable auditing to trace failed logon sources.
keywords:
  - account lockout
  - failed logon
  - Event ID 4740
  - Event ID 4625
  - Netwrix Auditor
  - lockout investigation
  - audit policy
  - Caller Computer Name
products:
  - auditor
sidebar_label: 'How to figure out where a user account was locked '
tags: []
title: "How to figure out where a user account was locked out?"
knowledge_article_id: kA04u00000110vTCAQ
---

# How to figure out where a user account was locked out?

## Question

How to figure out where a user account was locked out with Netwrix Auditor?

## Answer

There are several root causes for an account being locked, such as the user providing the wrong password multiple times or services/applications running under the account using expired stored credentials. When a service or application attempts to authenticate using expired or incorrect credentials, it causes failed logon events that can lead to an account lockout.

With Netwrix Auditor, try the following to learn more about the locked account and find the reason:

1. Review the User Accounts - Locked report. For that:
   - On the Netwrix Auditor Client home page, click the **REPORTS** tile in the upper left corner.
   - Expand **Predefined** > **Active Directory** > **Active Directory - State-in-Time**.
   - Run the **User Account - Locked** report.

2. Run a search to see how many failed logons were performed by this user before the account was locked. For that:
   - On the Netwrix Auditor Client home page, click the **SEARCH ACTIVITY RECORDS** tile in the upper left corner.
   - Switch to the **Advanced** view.
   - Apply filters as follows:
     - `Monitoring plan - Equals - Logon Activity`
     - `Who - Contains - Account Name`
     - `Action - Equals - Failed logon`

3. Netwrix Auditor also suggests searching for the related event ID on the domain controller where the account was locked. For example, Event ID `4740` is generated on domain controllers, Windows servers, and workstations every time an account gets locked out. View the **Caller Computer Name** in the event details to see the source.

4. To track the source of failed logons, enable failed logon auditing on the workstations from which these failed logons originated. For that:
   - On the workstation where failed logons occurred, open the **Local Security Policy** snap-in.
   - Expand **Local Policies** > **Security Options** and set the **Audit: Force audit policy** subcategory settings to `Enabled`.
   - Navigate to **Advanced Audit Policy Configuration** > **System Audit Policy Configuration** > **Logon\Logoff** and set **Audit Logon** to `Failure`.

   NOTE: If this workstation is subject to a Group Policy configuration, configure audit policies via the **Group Policy Configuration** snap-in.

   When done, look up failed logon events (typically, Event ID `4625`) under the corresponding account in the **Security log** on these workstations, correlating the date and time of the failed logons with the entries seen in Netwrix Auditor reports and/or search results.

   Learn more about failed logon events:
   - https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4625
   - https://www.ultimatewindowssecurity.com/securitylog/encyclopedia/event.aspx?eventid=4648

   Review the events. They might contain information about the process generating the failed logons for a particular user account.
