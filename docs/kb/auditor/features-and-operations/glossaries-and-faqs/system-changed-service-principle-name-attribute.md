---
description: >-
  Explains why changes to the Service Principle Name attribute may be reported
  as made by System or a user account, and how to exclude this attribute from
  auditing in Netwrix Auditor.
keywords:
  - Service Principle Name
  - SPN
  - Active Directory
  - System account
  - Netwrix Auditor
  - omitproplist
  - unomitproplist
  - Kerberos
products:
  - auditor
sidebar_label: System Changed Service Principle Name Attribute
tags: []
title: "System Changed Service Principle Name Attribute"
knowledge_article_id: kA00g000000H9SlCAK
---

# System Changed Service Principle Name Attribute

## Question

Why was a Service Principle Name attribute change reported as made by System or a user account?

## Answer

A Kerberos Service Principle Name attribute allows a service on a specific server to be associated with an account responsible for management of the service. Once associated, a mutual Kerberos authentication is permitted. Changes to this attribute are usually made by System in response to the operating system changes on a specific computer, e.g. installation of operating system updates, name changes, installation of SQL Server, etc.  
The WHO field for changes related to the Service Principle Name attribute may contain the following:

- Made by a computer account with $ prefix (**DOMAINXVISIO$**) — the Service Principle Name attribute was changed by a local system service of the computer.
- Made by a domain controller account with $ prefix (**DOMAINXPTDC$**) — the Service Principle Name attribute was changed by a local system service on the domain controller.
- Made by the **System** account — the Service Principle Name attribute was changed by Active Directory represented by System in response to the operating system changes on computer, but the corresponding security event wasn't generated for this system change.
- Made by an actual user account — the Service Principle Name attribute was modified manually.

Since the Service Principle Name attribute is changed only for system purpose, you can exclude this attribute from the monitoring scope:

1. In ` %Netwrix Auditor installation folder%\Active Directory Auditing`, add the following line to the `omitproplist.txt` file:

```text
*.ServicePrincipleName
```

2. In the same folder, remove the following line from the `unomitproplist.txt` file:

```text
*.ServicePrincipleName
```

For additional information on Service Principal Name attribute, refer to the following articles: [Service-Principal-Name Attribute](https://learn.microsoft.com/en-us/windows/win32/adschema/a-serviceprincipalname?redirectedfrom=MSDN), [Service Principal Names](https://learn.microsoft.com/en-us/windows/win32/ad/service-principal-names?redirectedfrom=MSDN) and [Service Principal Names (previous documentation)](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc961723(v=technet.10)?redirectedfrom=MSDN).
