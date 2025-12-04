---
description: >-
  Shows how to locate the origin of failed NTLM logon attempts by temporarily
  enabling NTLM auditing on a Domain Controller and how to revert the change.
keywords:
  - NTLM
  - failed logon
  - Domain Controller
  - audit
  - Event ID 4776
  - gpupdate
  - authentication
products:
  - auditor
sidebar_label: How to Find Destination of Failed NTLM Logons?
tags: []
title: "How to Find Destination of Failed NTLM Logons?"
knowledge_article_id: kA04u00000111KxCAI
---

# How to Find Destination of Failed NTLM Logons?

## Question

How to identify the origin (destination) of the failed logons occurring through NTLM instead of Kerberos? For example, if a system administrator set up some process on a file server that was trying to authenticate over NTLM, which is hitting the Domain Controllers to authenticate and failing to perform said process.

## Answer

Because failed logons occurred through NTLM, the Domain Controllers were not documenting the details of the login attempts origin via event ID 4776 (not 4768/4769/4771), thus there is no information on failed logons' details in logs, such as the originating workstation name or IP address.

To find the actual source of failed logons, enable NTLM auditing temporarily. For that:

1. On the Domain Controller, open the **Group Policy** snap-in.
2. Expand the **Computer Configuration** **Policies** -> **Windows Settings** -> **Security Settings** -> **Local Policies** -> **Security Options** -> **Network Security: Restrict NTLM: Audit NTLM authentication**.
3. Set it to `enable all`, which only enables auditing of NTLM attempts, does not allow or restrict NTLM traffic.
4. Open **Command Prompt** as an elevated `user/administrator` and run the `gpupdate /force` command so the policy change takes effect on the Domain Controller.
5. The actual NTLM login attempts on the DC are logged here:

   **Applications** -> **Microsoft** -> **Windows** -> **NTLM** -> **Operational**

   Which contains information about the failed logon origin. For example, the name (and I think IP, but cannot guarantee) of a file server.
6. Disable NTLM authentication by unselecting the `enable all` checkbox enabled in step 3.
7. In the command prompt, run the `gpupdate /force` command again to turn off the extra auditing on the Domain Controller.

## Related Articles:

- [Why Do I Have Incomplete Information on Failed Logons?](/docs/kb/auditor/troubleshooting-and-errors/data-collection-errors/why-do-i-have-incomplete-information-on-failed-logons)
