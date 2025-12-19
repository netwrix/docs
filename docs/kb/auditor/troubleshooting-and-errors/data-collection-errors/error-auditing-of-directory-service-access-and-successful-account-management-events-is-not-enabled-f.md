---
description: >-
  Explains the cause and resolution for the "Auditing of Directory Service
  Access and successful Account Management events is not enabled for this DC"
  warning in Netwrix Auditor, including steps to enable audit policies or
  suppress the warning via a registry key.
keywords:
  - auditing
  - directory service access
  - account management
  - domain controller
  - group policy
  - gpupdate
  - registry
  - IgnoreAuditCheckResultError
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'Error: "Auditing of Directory Service Access and successful Account Management events is not enabled for this DC"'
tags: []
title: 'Error: "Auditing of Directory Service Access and successful Account Management events is not enabled for this DC. Please adjust audit policy settings"'
knowledge_article_id: kA00g000000H9YjCAK
---

# Error: "Auditing of Directory Service Access and successful Account  Management events is not enabled for this DC. Please adjust audit  policy settings"

- The Change Summary and the Netwrix Auditor System Health log (Netwrix Auditor log in 6.5 or `warning.txt` file in 5.0) contain the following warning message: "Auditing of Directory Service Access and successful Account  Management events is not enabled for this DC. Please adjust audit  policy settings".
- The **Who Changed** field contains the `System` value.

---

The Local Security Policy snap-in on the domain controller indicates that the **Audit directory service access** and/or the **Audit account management** options are not set to `Success`.

If these settings are set to `Success` in the applied effective policy, but you keep receiving this error, this may be due to one of the following reasons:

- The effective policy applied to domain controllers is not configured properly.
- For some reason, the effective policy is not applied to the domain controller.
- The audit settings are configured using the Advanced Audit Policies.

---

## Enable the required audit settings

Set the **Audit directory service access** and **Audit account management** options to `Success`. To do this, perform the following steps:

1. Open the Group Policy Management console on any domain controller in the target domain: navigate to **Start → Administrative Tools → Group Policy Management**.
2. In the left pane, navigate to **Forest: `&lt;domain_name&gt;` → Domains → `&lt;domain_name&gt;` → Domain Controllers**. Right-click the effective domain controllers policy (by default, it is the **Default Domain Controllers Policy**), and select **Edit** from the pop-up menu.
3. Navigate to **Computer Configuration → Policies → Windows Settings → Security Settings → Local Policies → Audit Policy**.
4. Make sure that the **Audit directory service access** and **Audit account management** are set to `Success` (or `Success` and `Failure`).
5. Navigate to **Start → Run** and type `cmd`. Input the `gpupdate /force` command and press **Enter**. The group policy will be updated.

Refer to the Netwrix Auditor Installation and Configuration Guide for more information: http://www.netwrix.com/download/documents/Netwrix_Auditor_Installation_Configuration_Guide.pdf

- If the effective policy is applied to the domain controller, but you keep receiving this error, contact your Administrator.
- If you are sure that you have the Advanced Audit Policies applied correctly, but keep receiving this error, you can omit it. Perform the following steps to omit the error:

1. On the computer where Netwrix Auditor is installed, navigate to **Start → Run** and type `regedit`.
2. Navigate to the following node: Versions 6.5 and Below - `HKEY_LOCAL_MACHINESOFTWARE(Wow6432Node)NetwrixAD Change Reporter` and set the `IgnoreAuditCheckResultError` registry key to `1`. If this key does not exist please create it.

Note: In Netwrix Auditor 7.0 the registry location is `HKEY_LOCAL_MACHINESOFTWARE(Wow6432Node)Netwrix AuditorAD Change Reporter`
