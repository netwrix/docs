---
title: "Active Directory: manual configuration"
description: "Active Directory: manual configuration"
sidebar_position: 30
---

# Active Directory: manual configuration

To configure your domain for monitoring manually, you will need:

- **Group Policy Management Console** — if you plan to perform configuration steps from a domain
  controller

**-OR-**

- **ADSI Edit** — if you plan to perform configuration steps from a server other than domain
  controller

If these tools are not installed, refer to the related topics:

- [Install ADSI Edit](/docs/1secure/configuration/admanual/adsi.md)
- [Group Policy Management Console](/docs/1secure/configuration/admanual/grouppolicymanagementconsole.md)

Take the following configuration steps:

**Step 1 –** Configure effective domain controllers policy (by default, Default Domain Controllers
Policy). See [Configure Basic Domain Audit Policies](/docs/1secure/configuration/admanual/domainauditpolicies.md) or
[Configure Advanced Audit Policies](/docs/1secure/configuration/admanual/advancedpolicy.md) for details.

**Step 2 –** [Configure Object-Level Auditing](/docs/1secure/configuration/admanual/objectlevel.md)

**Step 3 –** Adjust Security Event Log Size and Retention Settings

**Step 4 –** If you have an on-premises Exchange server in your Active Directory domain, consider
that some changes to AD can be made via that Exchange server. To be able to audit and report who
made those changes, you should
[Configure Exchange Administrator Audit Logging Settings](/docs/1secure/admin/datacollection/activedirectoryauditing/auditlogging.md)

Also, remember to do the following for AD auditing:

**Step 1 –** Configure Data Collecting Account, as described in
[Active Directory Auditing](/docs/1secure/admin/datacollection/activedirectoryauditing/activedirectoryauditing.md)

**Step 2 –** Configure required protocols and ports, as described in
[Protocols and Ports Required for Monitoring Active Directory, Exchange, and Group Policy](/docs/1secure/configuration/admanual/protocolsandports.md)
topic.

**Step 3 –** [Enable Secondary Logon Service](/docs/1secure/configuration/admanual/secondarylogonservice.md) on the computer where
Netwrix Cloud Agent resides.
