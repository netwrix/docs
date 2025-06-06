# Standard Reference Tables & Views for the SPAA Data Collector

The SPAA Data Collector gathers essential SharePoint on-premises and SharePoint Online information into standard reference tables. Unlike most of the other Access Analyzer data collectors, the SPAA Data Collector writes data to these tables regardless of the job executing the query.

## SharePoint Access Auditing Tables & Views

The tables and their associated views are grouped by types.

Structure Tables

| Tables | Details |
| --- | --- |
| SA\_SPAA\_Hosts | Contains the names and ID of all SharePoint hosts that have been scanned for permissions. |
| SA\_SPAA\_Resources | Contains information about all audited resources, which can be site collections, sites, libraries, lists, or folders. This provides information on the hierarchy relationship, as well as references to the name and rights applied to that folder. |
| SA\_SPAA\_Sharing | Contains the view and edit links for anonymously shared resources, indicates if a resource is shared directly with trustees, and indicates whether a resource has a pending sharing request. |
| SA\_SPAA\_SharingUsers | Contains information about the users to whom resources are shared with such as their email, login name, title, department, and describes whether the sharing grants is view only or edit permissions. |
| SA\_SPAA\_SiteCollections | Contains a list of site collections that were audited and references the SA\_SPAA\_Resources and SA\_SPAA\_Trustees tables for the administrators of each site collection. |
| SA\_SPAA\_WebApplications | Contains a list of web applications audited. |
| SA\_SPAA\_WebAppURls | Contains a list of URLs for each web application audited. |

Trustee Tables

| Tables | Details |
| --- | --- |
| SA\_SPAA\_Trustees | Contains information about any domain user, group, or security principal that has been assigned permissions. This table does not contain local user and groups, as none of the trustees in this table are specific to any one host. |
| SA\_SPAA\_TrusteeGroupMembers | Table contains information on SharePoint group membership. |

Access Calculation Tables

| Tables | Details |
| --- | --- |
| SA\_SPAA\_Permissions | Contains information on the actual permissions that have been granted to resources. Each entry summarizes the rights assigned to every trustee that would appear on the permissions of a SharePoint resource. |
| SA\_SPAA\_Roles | Contains information about all of the roles on all of the site collections. |
| SA\_SPAA\_RolesProxy | Contains a mapping of role sets to individually assigned role definitions. A role set is a distinct set of roles that are applied to one or more resources. |
| SA\_SPAA\_WebAppPolicies | Contains summarized rights for every trustee in a web application policy. Each policy refers to a specific URL within that web application. |

Calculated Tables

| Tables | Details |
| --- | --- |
| SA\_SPAA\_Exceptions | Contains information about security issues and concerns. One out-of-the-box exception stored inside this table is the Open Resource exception, which identifies where resources are open to Everyone, Authenticated Users, or Domain Users. |
| SA\_SPAA\_ExceptionTypes | Contains summary information about exceptions. It details how many exceptions are found on each host scanned and breaks them down by exception type. |

Content Tables

| Tables | Details |
| --- | --- |
| SA\_SPAA\_DocumentMetaData | Contains all of the details about all of the files found on the audited SharePoint environment. It will list information like the file size, the number of versions of each file, the author editor of the file, and the editor of the file. |
| SA\_SPAA\_ProbableOwners | Contains information about the probable owners of the files stored within the audited SharePoint folders and lists. This table will tell what trustees own the most files and, therefore, may be the owners of the entire folder or the list. |
| SA\_SPAA\_TagProxies | Contains a mapping of tag sets to individual tags. A tag set is a distinct collection of tags appearing together in one or more documents. |
| SA\_SPAA\_Tags | Contains the individual tags which were found in documents. |

 Views are the recommended way for Access Analyzer users to obtain the information gathered by the SPAA Data Collector. They contain additional information for building queries easily. The following is an explanation of the corresponding views created for some of the tables generated by the SPAA Data Collector:

Permission Views

| Views | Details |
| --- | --- |
| SA\_SPAA\_PermissionsView | Provides any object permission, regardless of whether they have been made directly to folders or are inherited. An object includes site, site collection, list, library, folder, and so on. |
| SA\_SPAA\_DirectPermissionsView | Provides permissions that are directly applied to resources. |
| SA\_SPAA\_EffectiveAccessView | Provides information on every trustee with access to a resource and the trustee’s level of access. This will do complete group expansion, but also take into account security principals such as Authenticated Users. Also, this view will not just expand permissions; it will calculate access by making sure every user has access to the web application. |
| SA\_SPAA\_WebAppPoliciesView | Provides details around the web application policies that are applied to the audited SharePoint environment. These policies allow or deny access to the entire web application for the specified trustees. |

Resources Views

| Views | Details |
| --- | --- |
| SA\_SPAA\_SiteCollectionsView | Provides information about each site collection. |
| SA\_SPAA\_SiteCollectionsTraversalView | Provides information about resources and about navigation of these resources, such as their URL, the site collection they belong to, how deeply nested they are beneath the site collection, and so on. |

Calculated Views

| Views | Details |
| --- | --- |
| SA\_SPAA\_ExceptionsView | Provides information on instances of exceptions that exist on the audited hosts. This view will contain a row for each exception type for each host. Exceptions are specific conditions set forth by Access Analyzer that are considered to be issues, such as folders with open access. |

Additional Views

| Views | Details |
| --- | --- |
| SA\_SPAA\_LocalGroupMembersView | Provides information on the local groups present on each host and the members of those groups. |

Legacy Views

| Views | Details |
| --- | --- |
| SA\_SPAA\_PermissionScopeResources | Provides information on the actual permissions that have been granted to resources. Each entry summarizes the rights assigned to every trustee that would appear on the permissions of a SharePoint resource. |

## SharePoint Activity Auditing Tables & Views

The tables and their associated views are:

Activity Changes Tables (SPAC)

| Tables | Details |
| --- | --- |
| SA\_SPAC\_ActivityDates | Contains a list of all dates of activities collected during scans. |
| SA\_SPAC\_ActivityEvents | Contains all of the logged activity events. |
| SA\_SPAC\_ActivitySources | Contains a list of all sources of activity collected during scans. |
| SA\_SPAC\_EventNames | Contains a list of SharePoint event names, their IDs, and a description of each event. |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the SPAA Data Collector. They contain additional information for building queries easily. The following is an explanation of the corresponding views created for some of the tables generated by the SPAA Data Collector:

Activity Changes Views (SPAC)

| Views | Details |
| --- | --- |
| SA\_SPAC\_ActivityEventsView | Provides detailed activity event information. |

## SharePoint Sensitive Data Discovery Auditing Tables & Views

The tables and their associated views are:

__NOTE:__ Lists and libraries are excluded from Sensitive Data Discovery Auditing.

SPDLP Tables

| Tables | Details |
| --- | --- |
| SA\_SPDLP\_Criteria | Contains the sensitive data criteria which are selected for collection by the scan engine (data collector configuration). |
| SA\_SPDLP\_Matches | Contains rolled up aggregate counts of the sensitive data criteria matches found during the scan. |
| SA\_SPDLP\_MatchHits | Contains the actual sensitive data within files that matched selected criteria. For example, if the credit card criteria is used, this table will contain the potential credit card numbers identified within each files with hits. |

Views are the recommended way for Access Analyzer users to obtain the information gathered by the SPAA Data Collector. They contain additional information for building queries easily. The following is an explanation of the corresponding views created for some of the tables generated by the SPAA Data Collector:

SPDLP Views

| Views | Details |
| --- | --- |
| SA\_SPDLP\_MatchesView | Surfaces all relevant data about the files, its location, and the type of criteria found. |
| SA\_SPDLP\_MatchHitsView | Surfaces all actual sensitive data discovered within files which matched selected criteria. |
