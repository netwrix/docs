---
title: "Standard Reference Tables & Views for the FSAA Data Collector"
description: "Standard Reference Tables & Views for the FSAA Data Collector"
sidebar_position: 10
---

# Standard Reference Tables & Views for the FSAA Data Collector

The FSAA Data Collector gathers essential File System information into standard reference tables.
Unlike most of the other Access Analyzer data collectors, the FSAA Data Collector writes data to
these tables regardless of the job executing the query.

## File System Access Auditing Tables & Views

The tables and their associated views are grouped by types.

**Structure Tables**

| Tables                | Details                                                                                                                                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SA_FSAA_Hosts         | Contains the name and ID of all File System hosts that have been scanned for permissions                                                                                                                     |
| SA_FSAA_ImportHistory | Contains historical information about the import process for each host that is imported                                                                                                                      |
| SA_FSAA_Resources     | Contains information about all audited resources, which can be file shares or folders. This provides information on the hierarchy relationship and references to the name and rights applied to that folder. |

**Trustee Tables**

| Tables                     | Details                                                                                                                                                                                                                                |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_FSAA_Trustees           | Contains information about any domain user, group, or security principal that has been assigned permissions. This table does not contain local users and groups since none of the trustees in this table are specific to any one host. |
| SA_FSAA_LocalTrustees      | Contains information about any trustees that do not belong to a domain, primarily local users and local groups                                                                                                                         |
| SA_FSAA_TrusteeEquivalence | Contains information about Local Group membership. The trustees described can be found in the SA_FSAA_LocalTrustees table.                                                                                                             |

**Access Calculation Tables**

| Tables             | Details                                                                                                                                                                                                                                                                                                            |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| SA_FSAA_Rights     | Contains information about the actual permissions that have been granted to folders. Each entry summarizes the rights assigned to every trustee that would appear in the DACL of a folder. If a trustee is entered twice in a DACL, then that trustee’s rights will be summarized into a single row in this table. |
| SA_FSAA_Gates      | Contains information about all gates, or access points, to shared data. This includes shared folders, administrative shares, and policies.                                                                                                                                                                         |
| SA_FSAA_GatesProxy | Allows for quick determination of the shares through which a folder can be accessed as well as the child folders that can be accessed from a single share. The combination of ID and GateID is unique by host.                                                                                                     |
| SA_FSAA_Policies   | Contains information about what trustees are allowed or denied through the policies described in the SA_FSAA_Gates table                                                                                                                                                                                           |
| SA_FSAA_UnixRights | Contains information about permissions as they exist within the targeted Unix environment                                                                                                                                                                                                                          |

**Calculated Tables**

| Tables                 | Details                                                                                                                                                                                                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_FSAA_Exceptions     | Contains information about security issues and concerns. One out-of-box exception stored inside this table is the Open Shares exception. This exception identifies where resources which are open to Everyone, Authenticated Users, or Domain users are located.                 |
| SA_FSAA_ExceptionTypes | Identifies how many instances of exceptions exist on the audited hosts. This table will contain a row for each exception type for each host. Exceptions are specific conditions set forth by Access Analyzer that are considered to be issues, such as folders with open access. |

**Folder Content Tables**

| Tables                 | Details                                                                                                                                                                                         |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_FSAA_FileAges       | Contains information about the age of files within folders by looking at the created timestamp                                                                                                  |
| SA_FSAA_FileSizes      | Contains information about the size of the files stored within audited folders. This table will tell the total size of every folder and the number of files within it.                          |
| SA_FSAA_FileTags       | Contains file tag information at the folder level                                                                                                                                               |
| SA_FSAA_FileTypes      | Contains information about the types of files stored within audited folders by their extensions. This table will tell how many files of particular extension types exist within a folder.       |
| SA_FSAA_ProbableOwners | Contains information about the owners of the files stored within audited folders. This table will tell what trustees own the most files and, therefore, may be the owners of the entire folder. |
| SA_FSAA_TagKeys        | Contains the unique combination of the tags and ID                                                                                                                                              |
| SA_FSAA_TagProxies     | Contains the unique combination of the TagID and TagProxyID                                                                                                                                     |
| SA_FSAA_Tags           | Contains file tags and the unique ID                                                                                                                                                            |

**System Tables**

| Tables              | Details                                                        |
| ------------------- | -------------------------------------------------------------- |
| SA_FSAA_ScanHistory | Track the history of the scans for troubleshooting purposes    |
| SA_FSAA_SchemaVer   | Tracks the schema version of the tables for upgrading purposes |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the
FSAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the FSAA
Data Collector:

**Permission Views**

| Views                            | Details                                                                                                                 |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SA_FSAA_PermissionsView          | Contains any folder or share permission, regardless of whether they have been made directly to folders or are inherited |
| SA_FSAA_DirectPermissionsView    | Contains only permissions which are directly applied to resources                                                       |
| SA_FSAA_ExpandedPermissionsView  | Contains an expansion of any domain groups that are assigned rights                                                     |
| SA_FSAA_InheritedPermissionsView | Contains only the inherited permission values for the folder, share, or audited object                                  |
| SA_FSAA_EffectiveAccessView      | Correlates share folder permissions and group membership                                                                |
| SA_FSAA_ExceptionsView           | Contains how many instances of exceptions exist on the audited hosts                                                    |

**Resources Views**

| Views                       | Details                                                                                                                                                                                                                                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_FSAA_ResourcesView       | Contains information about file shares or folders                                                                                                                                                                                                                                                           |
| SA_FSAA_SharesTraversalView | Contains information about shared folders. It also provides useful information for the locations of these resources, including the local and network paths. Additionally, mount/junction points will show as a normal path traversal, unless the mount/junction point has system and hidden attributes set. |
| SA_FSAA_Paths               | Contains information about the full paths to every distinct folder location for which permissions have been scanned and child folders exist                                                                                                                                                                 |

**Additional Views**

| Views                         | Details                                                                                       |
| ----------------------------- | --------------------------------------------------------------------------------------------- |
| SA_FSAA_LocalGroupMembersView | Contains information on the local groups present on each host and the members of those groups |

## File System Activity Auditing Tables & Views

The tables and their associated views are grouped by types.

**Activity Changes Tables (FSAC)**

| Tables                     | Details                                                                                                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| SA_FSAC_ActivityEvents     | Contains all of the logged activity events                                                                                                         |
| SA_FSAC_DailyActivity      | Contains roll-up information of the number of operations that have been performed by a trustee on a file or folder. This information is date-wise. |
| SA_FSAC_Exceptions         | Contains information about security issues and concerns                                                                                            |
| SA_FSAC_ExceptionTypes     | Identifies how many instances of exceptions exist on the audited hosts                                                                             |
| SA_FSAC_OwnerChanges       | Contains information about ownership changes on folders and files                                                                                  |
| SA_FSAC_PermissionChanges  | Contains details around permission changes events for an activity                                                                                  |
| SA_FSAC_ProcessNames       | Contains process names by which user have performed activity                                                                                       |
| SA_FSAC_RenameTargets      | Contains the target path for rename operations                                                                                                     |
| SA_FSAC_UserExceptions     | Contains information about user security issues and concerns                                                                                       |
| SA_FSAC_UserExceptionTypes | Identifies how many instances of user exceptions exist on the audited hosts                                                                        |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the
FSAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the FSAA
Data Collector:

**Activity Change Views (FSAC)**

| Views                             | Details                                                                   |
| --------------------------------- | ------------------------------------------------------------------------- |
| SA_FSAC_ActivityEventsView        | Contains detailed activity event information                              |
| SA_FSAC_DailyActivityView         | Contains the daily rollup statistics for activity events per day          |
| SA_FSAC_DailyResourceActivityView | Contains the daily rollup statistics per folder                           |
| SA_FSAC_DailyUserActivityView     | Contains the daily rollup statistics for activity events per user         |
| SA_FSAC_ExceptionsView            | Contains how many instances of exceptions exist on the audited hosts      |
| SA_FSAC_PermissionChangesView     | Contains detailed permission changes event information                    |
| SA_FSAC_UserExceptionsView        | Contains how many instances of user exceptions exist on the audited hosts |

## File System DFS Auditing Tables & Views

The tables and their associated views are grouped by types.

**FSDFS Tables**

| Tables              | Details                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------- |
| SA_FSDFS_Links      | Contains information on links                                                                                  |
| SA_FSDFS_Namespaces | Contains a list of all of the domain and server namespaces with corresponding links to the SA_FSAA_Hosts table |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the
FSAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the FSAA
Data Collector:

**FSDFS Views**

| Views                            | Details                               |
| -------------------------------- | ------------------------------------- |
| SA_FSDFS_NamespacesTraversalView | Expands all of the scanned namespaces |

## File System Sensitive Data Discovery Auditing (SEEK) Tables & Views

The tables and their associated views are grouped by types.

**FSDLP Tables**

| Tables                            | Details                                                                                                                  |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| SA_FSDLP_Criteria                 | Contains the sensitive data criteria which are selected for collection by the scan engine (data collector configuration) |
| SA_FSDLP_ImportHistory            | Contains historical information about the import process for each host that is imported                                  |
| SA_FSDLP_Matches                  | Contains rolled up aggregate counts of the sensitive data criteria matches found during the scan                         |
| SA_FSDLP_MatchHits                | Contains the actual sensitive data discovered within files which matched selected criteria                               |
| SA_FSDLP_MatchHits_SubjectProfile | Contains the actual sensitive data within files that matched selected criteria for subject profiles                      |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the
FSAA Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the FSAA
Data Collector:

**FSDLP Views**

| Views                  | Details                                                                                    |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| SA_FSDLP_MatchesView   | Surfaces all relevant data about the files, its location, and the type of criteria found   |
| SA_FSDLP_MatchHitsView | Surfaces all actual sensitive data discovered within files which matched selected criteria |
