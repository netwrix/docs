---
title: "Standard Reference Tables & Views For the Box Data Collector"
description: "Standard Reference Tables & Views For the Box Data Collector"
sidebar_position: 10
---

# Standard Reference Tables & Views For the Box Data Collector

The Box Data Collector gathers essential user and group inventory information into standard
reference tables. These tables and their associated views are outlined below:

| Table                      | Details                                                                                                                 |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| SA_Box_Collaborations      | Contains all of the trustees who have access on folders and defines the access type                                     |
| SA_Box_Enterprises         | Contains information on the enterprises within the Box environment                                                      |
| SA_Box_EventNames          | Contains information on the names of events within the Box environment                                                  |
| SA_Box_Events              | Contains information on the type of events within the Box environment                                                   |
| SA_Box_ExternalUsers       | Contains one row per user and displays information on external users over the past 30 days                              |
| SA_Box_FileDetails         | Contains one row per file and displays file-specific details                                                            |
| SA_Box_FolderDetails       | Contains one row per folder and displays folder-specific details                                                        |
| SA_Box_GroupMembers        | Contains unique row for each trustee per group and defines the access type of each member                               |
| SA_Box_Groups              | Contains all of the enterprise-created groups and has a unique row for each group                                       |
| SA_Box_Hosts               | Contains the name and ID of all Box enterprises that have been scanned for permissions                                  |
| SA_Box_Resources           | Contains information about all audited resources, which can be files or folders. It contains a unique row per resource. |
| SA_Box_TaskStatus          | Displays the tasks which have been completed and the corresponding USN value                                            |
| SA_Box_Trustees            | Contains basic information about all of the users and groups                                                            |
| SA_Box_UnusualUserActivity | Contains information about suspicious activity on user accounts                                                         |
| SA_Box_Users               | Contains one row per user and displays information on users of any teams present                                        |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the
Box Data Collector. They contain additional information for building queries easily. The following
is an explanation of the corresponding views created for some of the tables generated by the Box
Data Collector:

| Views                     | Details                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------ |
| SA_Box_CollaborationsView | Displays the collaborations applied to shared folders and the access type for the trustee                    |
| SA_Box_ExternalUsersView  | Displays external user activity which has occurred over the past 30 days                                     |
| SA_Box_GroupMembersView   | Displays all of the users, which groups they are members of, and the access type on the group                |
| SA_Box_ResourceEventsView | Displays all of the events, which users created it, the source of that event, and the name and type of event |
