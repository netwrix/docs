---
title: "Exchange Online Monitoring Scope"
description: "Exchange Online Monitoring Scope"
sidebar_position: 10
---

# Exchange Online Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Exchange
Online monitoring scope.

Follow the steps to exclude data from Exchange Online monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Exchange Online Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File             | Description                                                                                                                                                                                                           | Syntax                                                                                                                                                                                                                                                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| omitlist.txt     | The file contains a list of changes performed by cmdlets. To exclude a change from reports, search results and Activity Summaries, specify name of a cmdlet and the attribute that is changed by the selected cmdlet. | `cmdlet` For example: `Enable-OrganizationCustomization` `New-AdminAuditLogSearch` `New-MailboxAuditLogSearch` `cmdlet.param` For example: `*.Identity` `*.DomainController` `*.Organization` `*.IgnoreDefaultScope` `*.Force` `*.Confirm` `*.Password` `*-ManagementRoleEntry.Parameters` `Remove-PublicFolder.Recurse` |
| omitpathlist.txt | Contains a list of paths to be excluded from reports, search results and Activity Summaries.                                                                                                                          | `path` For example: `SystemMailbox{*}` `DiscoverySearchMailbox{*}` `FederatedEmail.*` You can use a wildcard (\*) to replace any number of characters in the path.                                                                                                                                                       |
| omituserlist.txt | Contains a list of user names to be excluded from reports, search results and Activity Summaries.                                                                                                                     | `domain\user` For example: `Enterprise\analyst` `email address` For example: `analyst@Enterprise.onmicrosoft.com`                                                                                                                                                                                                        |
| propnames.txt    | Contains a list of human-readable names for object classes and their and their properties to be displayed in search results, reports and Activity Summaries.                                                          | `cmdletobject=friendlyname` `cmdlet.param=friendlyname` For example: `RoleGroupMember = Role Group` `UMHuntGroup = Unified Messaging Hunt Group`                                                                                                                                                                         |
