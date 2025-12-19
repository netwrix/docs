---
title: "Standard Reference Tables & Views for the ADInventory Data Collector"
description: "Standard Reference Tables & Views for the ADInventory Data Collector"
sidebar_position: 10
---

# Standard Reference Tables & Views for the ADInventory Data Collector

The ADInventory Data Collector gathers essential user and group inventory information into standard
reference tables. Unlike other Enterprise Auditor data collectors, the ADInventory Data Collector
writes data to these tables regardless of the job executing the query.

These tables and their associated views are outlined below:

| Table                                | Details                                                                                                                                                                                                       | AD Object Reference Article                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_ADInventory_AttributeChanges      | Contains a list of principal identifiers and their corresponding attribute changes for each differential scan that is performed against a domain.                                                             | [Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema)                                    |
| SA_ADInventory_Computers             | Contains extended information about computers, operating systems, service packs, etc.                                                                                                                         | [Computer class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-computer)                                                          |
| SA_ADInventory_DistinguishedNames    | Contains every distinguished name collected from principals and group membership.                                                                                                                             | [Attribute distinguishedName](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-ada1/56da5a9b-485d-4d7c-a226-1a54a43d9013)      |
| SA_ADInventory_Domains               | Contains information about the domain such as its naming context and when it was last scanned.                                                                                                                | [Domain class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-domain)                                                              |
| SA_ADInventory_EffectiveGroupMembers | Contains expanded group membership which includes a flattened representation of members.                                                                                                                      |                                                                                                                                                |
| SA_ADInventory_Exceptions            | Contains information about security issues and concerns. <br />**NOTE:** See the [AD Exception Types Translated](#ad-exception-types-translated) topic for an explanation of Exception Types.                 |                                                                                                                                                |
| SA_ADInventory_ExceptionTypes        | Identifies how many instances of exceptions exist on the audited domain. <br />**NOTE:** See the [AD Exception Types Translated](#ad-exception-types-translated) topic for an explanation of Exception Types. |                                                                                                                                                |
| SA_ADInventory_Exchange              | Contains information about the Exchange Server, each database and storage group, and the HomeMDB property.                                                                                                    | [ms-Exch-Home-MDB Attribute](https://learn.microsoft.com/en-us/previous-versions/office/developer/exchange-server-2003/ms980583(v=exchg.65))   |
| SA_ADInventory_ExtendedAttributes    | Contains information gathered by the custom attributes component of the query configuration.                                                                                                                  | [Active Directory Schema](https://learn.microsoft.com/en-gb/windows/win32/adschema/active-directory-schema)                                    |
| SA_ADInventory_GroupMemberChanges    | Contains a list of group principal identifiers and their corresponding membership changes for each differential scan that is performed against a domain.                                                      | [Member attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-member)                                                          |
| SA_ADInventory_GroupMembers          | Contains a map of groups to member distinguished names.                                                                                                                                                       | [Member attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-member)                                                          |
| SA_ADInventory_Groups                | Contains extended information about groups, group type, managed by, etc.                                                                                                                                      | [Group class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-group)                                                                |
| SA_ADInventory_ImportHistory         | Contains a list of all imports performed against a particular domain along with when the import happened and the GUID of the domain controller that was scanned.                                              |                                                                                                                                                |
| SA_ADInventory_Principals            | Contains common attributes for users, groups, and computers as well as references to their primary distinguished name and security identifiers.                                                               | [Security-Principal class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-securityprincipal)                                       |
| SA_ADInventory_SecurityIdentifiers   | Contains every SID collected from the principals, including historical identifiers.                                                                                                                           | [Security-Identifier attribute](https://learn.microsoft.com/en-gb/windows/win32/adschema/a-securityidentifier)                                 |
| SA_ADInventory_Users                 | Contains extended information about users, department, title, etc.                                                                                                                                            | [User class](https://learn.microsoft.com/en-gb/windows/win32/adschema/c-user)                                                                  |


Views are the recommended way for you to obtain the information gathered by the ADInventory Data
Collector. They contain additional information for building queries easily.

The following is an explanation of the corresponding views created for some of the tables generated
by the ADInventory Data Collector:

| Views                                    | Details                                                                                  |
| ---------------------------------------- | ---------------------------------------------------------------------------------------- |
| SA_ADInventory_AttributeChangesView      | Contains attribute change information                                                    |
| SA_ADInventory_ComputersView             | Contains computer information                                                            |
| SA_ADInventory_EffectiveGroupMembersView | Contains effective group membership information                                          |
| SA_ADInventory_ExceptionsView            | Contains principals that are identified to have security concerns                        |
| SA_ADInventory_GroupMemberChangesView    | Contains group membership change information                                             |
| SA_ADInventory_GroupMembersView          | Contains group membership information                                                    |
| SA_ADInventory_GroupsView                | Contains group level information                                                         |
| SA_ADInventory_PrincipalsView            | Contains common attributes from the principals table including additional domain details |
| SA_ADInventory_UsersView                 | Contains user information                                                                |

### AD Exception Types Translated

The following table translates the Type of Exceptions that can found.

| Type | Exception            | Description                                                               |
| ---- | -------------------- | ------------------------------------------------------------------------- |
| 1    | Large Groups         | Groups with a large amount of effective members                           |
| 2    | Deeply Nested        | Groups with deep levels of membership nesting                             |
| 3    | Circular Nesting     | Groups with circular references in their effective membership             |
| 4    | Empty Groups         | Groups with no membership                                                 |
| 5    | Single Member Groups | Groups with a single direct member                                        |
| 6    | Stale Users          | Users that have not logged onto the domain for an extended period of time |
| 7    | Stale Membership     | Groups with a high percentage of effective members that are stale users   |
| 8    | Large Token          | Users with a large amount of authorization groups in their token          |
