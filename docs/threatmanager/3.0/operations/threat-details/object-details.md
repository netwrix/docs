# Active Directory Object Details Pages

Active Directory Object details pages provide details on Active Directory objects including users,
groups,  and hosts (computers). These pages can be used to discover more information about the
various resources related to threats and events in Threat Manager. Pages include:

- [User Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)
- [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)
- [Host Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)

![threatlist](/img/product_docs/threatmanager/threatmanager/administration/threatlist.webp)

The [Threats Page](/docs/threatmanager/3.0/operations/threat-details/viewing-threats.md) contains a threats list with hyperlinks which can be clicked to
access these pages.

Common Details Page Elements

The User Details, Group Details, and Host Details pages contain some common page elements.

![page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

Common details page elements include:

- Profile Card
- Tabs
- Add Tag Button

## Profile Card

The profile card displays information about the selected user, group, or host.

![This screenshot displays a Profile Card.](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/profilecard.webp)

The type information displayed depends on the information available for the user, group, or host.

Profile Card Icons

The following icons may be displayed in the profile card for user accounts and computers:

![profileicon](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/profileicon.webp)

1. Non-Synced object icon : This icon appears when an object was not found in a sync but was created
   by an event.
2. UBA training hourglass icon : This icon shows that the object is still undergoing its User
   Behavior Analytics (UBA) training period.
3. Magnifying Glass Icon : This magnifying glass icon will lead you to the investigation page to
   create one for this object.

## Tabs

Depending on the selected user, group, or host, the following tabs may be displayed:

![This screenshot displays the tabs for the Active Directory Objects page. Tabs include Threats, Activity Summary, and Group Membership.](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/adobjecttabs.webp)

- Threats Tab – Displays a chart with threats detected for the user, group, or host
- Activity Summary Tab – Depending on the selected user, group, or host, the page may display the
  following information:
  - Activity Overview Chart (Past 12 Months)
  - Average Activity by Hour Chart
  - Average Activity by Day Chart
  - Events by Type Chart
  - Activity by Host Table
  - Activity by Client Table
- Group Membership Tab – For a user, displays a table that lists the groups of which the user is a
  member. For a group, displays a table that lists the users that belong to that group.

## Add Tag Button

The Add Tag button can be used to assign existing tags to a user, group, or host computer. It also
provides the option to create new tags.

Add an Existing Tag

Follow the steps to add a tag to a user, group, or computer.

![addtagbutton](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/addtagbutton.webp)

**Step 1 –** Click the Add Tag button.

**Step 2 –** Click the desired tag to add from the list of existing tags.

The selected tag is added to the user, group, or computer. See the
[Tag Management Page](/docs/threatmanager/3.0/administration/system-configuration/system-settings.md) topic for additional
information.

# Application Details Page

The Application Details page provides information about an application registered in Microsoft Entra
ID.

![Entra ID Application Page](/img/product_docs/accessanalyzer/12.0/admin/settings/application/application.webp)

The top of the page displays a profile card which may contain the following information about the
application:

- App ID
- Object ID
- Object Type
- Tenant
- Add Tag button

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab
- Roles Tab

## Threats Tab

The Threats tab for an application displays the threats for the application by timeframe.

![Application Threat Tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/threatstab.webp)

## Activity Summary Tab

The Activity Summary tab displays charts for an application's activity over different time periods.

The Activity Overview (Past 12 Months) shows a color-coded heat map of user activity.

![Entra ID Application Activity Summary Tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitysummarytab.webp)

## Group Membership Tab

The Group Membership tab displays groups in which the application is a member.

![Entra ID Group Membership Tab](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/groupmembershiptab.webp)

The Group Membership tab displays two tables:

- Direct Member Of – Lists groups the application is a direct member of
- Indirect Member Of – Lists groups the application is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) topic for additional information.
- Group Type – The type of group within Microsoft Entra ID
- Membership Type - How the group membership was assigned

- Security Enabled - Shows whether or not the "Security Enabled" flag is enabled within Microsoft
  Entra ID, if enabled it means that this type of group is used to manage user and computer access
  to shared resources for a group of users.

- Role Assignments Allowed - This flag shows whether or not a group can be assigned a role within
  Microsoft Entra ID

- Tags - The tags associated with the group Image

## Roles Tab

The role assignments tab displays a table that lists the roles that have been assigned to the Entra
ID application.

![Entra ID User Role Assignment Eligible page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduserrolestabeligible.webp)

![Entra ID User Role Assignment Eligible page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduserrolestabeligible.webp)

The Roles tab displays two tables:

- Eligible Assignments – Lists the roles that the user is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active

- Active Assignments – Lists roles that are currently active and usable to a user.

The eligible assignments table has the following columns:

- Role - Roles the user is eligible for
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether or not the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

The active assignments table has the following columns:

- Role - Roles that are currently active
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Assignment Type - How was the active role assignment assigned
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether or not the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

# Group Details Page

The Microsoft Entra ID Group Details page provides information about the group including threats
generated by it's members, a list of members, the groups that the group is part of, the group
owners, and the roles assigned to the group.

![Entra ID Group Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidgroup.webp)

The top of the page displays a profile card which may contain the following information about the
group:

- Name
- Security Enabled
- Assignable to Role
- Object ID
- Object Type
- Tenant
- Tags

The page has the following tabs:

- Threats Tab
- Members Tab
- Group Membership Tab
- Owners Tab
- Roles Tab

## Threats Tab

The Threats tab for a user displays the threats for the user by timeframe.

![Entra ID Group Threats Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidgroupthreats.webp)

A key for threat types is displayed below the chart.

## Members Tab

The Members tab displays information of Entra ID group members.

![Entra ID Group Members Tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidgroupmemberstab.webp)

The table displays the following columns:

- Name – The display name of the member within Microsoft Entra ID

- Domain – The Microsoft Entra ID tenant domain name

- Email – The email address of the member

- Title – The member's job title

- Department – The member's department

## Group Membership Tab

The Group Membership tab displays groups in which the group is a member.

![Entra ID Group - Group Membership Tab](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/groupmembershiptab.webp)

![Group Membership Indirect Member of  Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershiptabindirect.webp)

The Group Membership tab displays two tables:

- Direct Member Of – Lists groups the group is a direct member of

- Indirect Member Of – Lists groups the group is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the Group Details Page
  topic for additional information
- Group Type – The type of group within Microsoft Entra ID
- Membership Type - How the group membership was assigned
- Security Enabled - Shows whether or not the "Security Enabled" flag is enabled within Microsoft
  Entra ID, if enabled it means that this type of group is used to manage user and computer access
  to shared resources for a group of users
- Role Assignments Allowed - This flag shows whether or not a group can be assigned a role within
  Microsoft Entra ID
- Tags - The tags associated with the group

## Owners Tab

The Owners tab shows which objects can manage the group, these are the "owners".

![Group Membership Owners Tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershipownerstab.webp)

The table displays the following columns:

- Name – The display name of the owner
- Type – The type of Entra ID object
- Email – The email associated with the owners object

## Roles Tab

The Roles tab displays information about roles assigned to the group.

![Entra ID Group Roles Tab Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidgrouprolestab.webp)

The Roles tab displays two tables:

- Eligible Assignments – Lists the roles that the group is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active

- Active Assignments – Lists roles that are currently active and usable to the group

The eligible assignments table has the following columns

- Role - Roles the group is eligible for
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Start Time - When the group is eligible for the role
- End Time - When the role eligibility expires
- Privileged - If the role is privileged or not. A privileged role in Microsoft Entra ID grants
  elevated permissions for high-level administrative tasks.

The active assignments table has the following columns

![Roles Active Assignment Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershiprolesactiveassignment.webp)

- Role - Roles that are currently active
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Assignment Type - How was the active role assignment assigned
- Start Time - When the group is eligible for the role
- End Time - When the role eligibility expires
- Privileged - Whether or not the role is privileged (the role has elevated permission or
  administrative access to EntraID resources)

# Entra ID Object Details Pages

The Microsoft Entra ID Object details pages provide details on Microsoft Entra ID objects including
users, groups, applications, devices and roles. These pages can be used to discover more information
about the various resources related to threats and events in Threat Manager. Pages include:

- [User Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)

- [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)

- [Role Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)

- [Application Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md)

![threatlist](/img/product_docs/threatmanager/threatmanager/administration/threatlist.webp)

The [Threats Page](/docs/threatmanager/3.0/operations/threat-details/viewing-threats.md) contains a threats list with hyperlinks which can be clicked to
access these pages.

Common Details Page Elements

The User Details, Group Details, Application details and Role details pages contain some common page
elements.

## Profile Card

The profile card displays information about the selected user, application, group, or role.

![Entra ID User Profile Card](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduserprofilecard.webp)

- Name
- UPN
- Manager
- Department
- ObjectID
- Object Type
- Tenant
- On-premises synced accounts (will appear if a synced account exists)
- Assigned tags, with an option to add Tags

## Tabs

Depending on the selected user, group, application or role, the following tabs may be displayed:

![Tabs](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/tabs.webp)

- Threats Tab – Displays a chart with threats detected for a Microsoft Entra ID object
- Activity Summary Tab – Depending on the selected object, the page may display the following
  information:

  - Activity Overview Chart (Past 12 Months)
  - Average Activity by Hour Chart
  - Average Activity by Day Chart
  - Events by Type Chart
  - Activity by Host Table
  - Activity by Client Table

- Group Membership Tab – For a:

  - user - displays a table that lists the groups of which the user is a member
  - group - displays a table that lists the users that belong to that group

- Roles - roles assigned to the group or user

## Add Tag Button

The Add Tag button can be used to assign existing tags to a user, group, or host computer. It also
provides the option to create new tags.

Add an Existing Tag

Follow the steps to add a tag to a user, group, or computer

![Existing Tags List](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/addtagbutton.webp)

**Step 1 –** Click the Add Tag button.

**Step 2 –** Click the desired tag to add from the list of existing tags.

The selected tag is added to the user, group, application or role. See the
[Tag Management Page](/docs/threatmanager/3.0/administration/system-configuration/system-settings.md) topic for additional
information.

# Role Details Page

The Role Details page provides information about a role including its description and role
membership.

![Roles Page](/img/product_docs/accessanalyzer/12.0/requirements/target/config/roles.webp)

The top of the page displays a profile card which may contain the following information about the
role:

- Description
- Built-in
- Enabled
- Object ID
- Object Type
- Tenant

## Members Tab

The members tab displays two tables:

- Eligible Assignments – Lists the roles that the user is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active.
- Active Assignments – Lists roles that are currently active and usable to a user.

![Role Members Tab Active Assignement Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/rolesactiveassignments.webp)

Both tables have the following columns:

- Name – The display name of the member
- Type – The object type
- Scope – Defines the boundary within which the assigned role permissions are valid
- Inherited from – How the eligible assignment was inherited
- Assignment Type – How was the active role assignment assigned
- Start Time – When the member is eligible for the role
- End Time – When the role eligibility expires

# User Details Page

The Microsoft Entra ID User Details page provides information about the user including threats
generated by the user, user activity, group membership, and role assignments for the user.

![Entra ID User Details Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidpage.webp)

The top of the page displays a user profile card which may contain the following information about
the user:

- Name
- UPN
- Manager
- Department
- ObjectID
- Object Type
- Tenant
- On-premises synced accounts (will appear if a synced account exists)
- Tags, with an option to add additional tags

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab

- Roles Tab

## Threats Tab

The Threats tab for a user displays the threats for the user by timeframe.

![threats](/img/product_docs/threatprevention/threatprevention/reportingmodule/threats.webp)

A key for threat types is displayed below the chart.

## Activity Summary Tab

The Activity Summary tab displays charts for a user's activity over different time periods.

![Entra ID User ACtivity Summary Tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidactivitysummarytab.webp)

The Activity Overview (Past 12 Months) shows a color-coded heat map of user activity. Other metrics
include Average Activity by Day, and Events by Type.

The Activity by Host and Activity by Client tables are displayed below the charts.

Activity by Host Table

The Activity by Host table displays the user's activity by host.

![Entra ID User Activity Summary Tab Activity By Host Table](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidactivitybyhost.webp)

The table has the following columns:

- Server – Server where the activity occurred
- First Access – First date and time that the server was accessed
- Last Access – Last date and time that the server was accessed
- Number of Events – Total number of activity events on the server

Use the Search icon to search for data contained in any column. Click the Export button to export
the current rows displayed on the page into a CSV file.

Activity by Client Table

The Activity by Client table displays the user's activity by client.

![Entra ID User Activity Summary Tab Activity By Client Table](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduseractivitybyclient.webp)

The table has the following columns:

- Client – Client where the activity occurred
- First Access – First date and time that the client was accessed
- Last Access – Last date and time that the client was accessed
- Number of Events – Total number of activity events on the client

Use the Search icon to search for data contained in any column. Click the Export button to export
the current rows displayed on the page into a CSV file.

## Group Membership Tab

The Group Membership tab displays groups in which the user is a member.

![Entra ID User Group Membership page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraidusergroupmembershiptab.webp)

The Group Membership tab displays the groups the user is a member of. It has the following sub-tabs:

- Direct Member Of – Lists groups the user is a direct member of
- Indirect Member Of – Lists groups the user is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) topic for additional information.
- Group Type – The type of group within Microsoft Entra ID
- Membership Type - How the group membership was assigned

- Security Enabled - Shows whether or not the "Security Enabled" flag is enabled within Microsoft
  Entra ID, if enabled it means that this type of group is used to manage user and computer access
  to shared resources for a group of users.

- Role Assignments Allowed - This flag shows whether or not a group can be assigned a role within
  Microsoft Entra ID

- Tags - The tags associated with the group Image

## Roles Tab

The role assignments tab displays a table that lists the roles that have been assigned to the
Microsoft Entra ID user.

![Entra ID User Role Assignment Eligible page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduserrolestabeligible.webp)

![Entra ID User Roles tab Activity Assignments Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/entraiduserrolesactiveassignment.webp)

The Roles tab displays two tables:

- Eligible Assignments – Lists the roles that the user is eligible for. An eligible assignment
  refers to a role assignment that a user or group can activate when needed but is not permanently
  active

- Active Assignments – Lists roles that are currently active and usable to a user.

The eligible assignments table has the following columns:

- Role - Roles the user is eligible for
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - If the role is privileged or not. A privileged role in Microsoft Entra ID grants
  elevated permissions for high-level administrative tasks

The active assignments table has the following columns:

- Role - Roles that are currently active
- Scope - Defines the boundary within which the assigned role permissions are valid
- Inherited from - How the eligible assignment was inherited
- Assignment Type - How was the active role assignment assigned
- Start Time - When the member is eligible for the role
- End Time - When the role eligibility expires
- Privileged - If the role is privileged or not. A privileged role in Microsoft Entra ID grants
  elevated permissions for high-level administrative tasks

# Group Details Page

The Group Details page provides information about the selected Active Directory group, threats
generated by the group, and group membership.

![AD Group Details page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The top of the page displays a group profile card which may contain the following information about
the group:

- Name
- DN
- Sam Account Name
- Object GUID
- Object Type
- Domain
- Tags, with an option to add additional tags

The Group Details page has the following tabs:

- Threats Tab
- Members Tab
- Group Membership Tab

## Threats Tab

The Threats tab for a group displays the threats detected for the group by timeframe.

![Threats tab for on the Group Details page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/threatstab.webp)

A key for threat types is displayed below the chart.

## Members Tab

The Members tab displays information about its members.

![AD Group Details Members Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/memberstab.webp)

![Group Members Tab All Members Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/memberstaballmembers.webp)

The Membership tab displays two tables:

- Direct Member – Lists users who are direct members of the group
- All Members – has the following two tables:

  - Domain Admins – Users responsible for managing and controlling settings within the domain
  - Domain Guests – Temporary accounts who need limited access to the domain

Each table has the following columns:

- Name – The display name of the member
- Domain – The domain name of the member
- Email – The email address of the member
- Title – The member's job title
- Department – The member's department

## Group Membership Tab

The Group Membership tab displays a table that lists the users who are members of the group.

![Group Membership tab for on the Group Details page](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/groupmembershiptab.webp)

![Group Membership Tab Indirect Memberof Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershiptabindirect.webp)

The Group Membership tab displays the groups that _the group_ is a member of. Here, 'the group'
refers to the group whose details you are viewing.

The tab has two sub-tabs:

- Direct Member Of – Lists groups the group is a direct member of
- Indirect Member Of – Lists groups the group is a member of via membership in a nested group

Each sub-tab displays a table with the following columns:

- Name - The name of the group. Click the link to view group details.
- Domain - Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Tags - The tag present on the perpetrator, file, or host associated with the event

# Host Details Page

The Host Details page displays all threats on the selected host.

![Host Details page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The top of the page displays a host profile card which may contain the following information about
the host:

- Host Name
- Distinguished Name (DN)
- NT Name (SAM Account Name)
- DNG Host Name
- Operating System
- Operating System Version
- Object GUID
- Object Type
- Domain
- Tags, with an option to add additional tags

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab

## Threats Tab

The Threats tab for a host displays the threats for the host by timeframe.

![Threats tab of the Host Details page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/threatstab.webp)

The Threats tab contains a bar chart that displays each type of threat on the host and a pie chart
that shows the total number of threats on the host. The Threats List displayed below the Historical
Events section displays all threats that occurred on the host for the selected timeframe.

## Activity Summary Tab

The Activity Summary tab displays charts for host activity over different time periods.

![Activity Summary tab of the Host Details page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitysummarytab.webp)

The Activity Overview (Past 12 Months) shows a color-coded heat map of host activity. Other metrics
include Average Activity by Hour, and Average Activity by Day, and Events by Type.

## Group Membership Tab

The Group Membership tab displays the groups the host is a member of. It has the following sub-tabs:

- Direct Member Of – Lists groups the host is a direct member of
- Indirect Member Of – Lists groups the host is a member of via membership in a nested group

![groupmembershiptab](/img/product_docs/threatprevention/threatprevention/reportingmodule/investigations/groupmembershiptab.webp)

![Group Membership Tab Indirect Member of Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershiptabindirect.webp)

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) topic for additional information.
- Domain – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Tags – The tag present on the perpetrator, file, or host associated with the event

# User Details Page

The Active Directory User Details page provides information about the user including threats
generated by the user, user activity, and group membership for the user.

![page](/img/product_docs/threatprevention/threatprevention/reportingmodule/configuration/systemsettings/page.webp)

The top of the page displays a user profile card which may contain the following information about
the user:

- Name
- DN
- NT Name (SAM Account Name)
- Email
- Object GUID
- Object Type
- Domain
- Tags, with an option to add additional tags

The page has the following tabs:

- Threats Tab
- Activity Summary Tab
- Group Membership Tab

## Threats Tab

The Threats tab for a user displays the threats for the user by timeframe.

![Active Directory User Threats tab](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/aduserthreats.webp)

A key for threat types is displayed below the chart.

## Activity Summary Tab

The Activity Summary tab displays charts for a user's activity over different time periods.

![activitysummary](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitysummary.webp)

The Activity Overview (Past 12 Months) shows a color-coded heat map of user activity. Other metrics
include, Average Activity by Day, and Events by Type.

The Activity by Host, Activity by Client, and Activity Details tables are displayed below the
charts.

Activity by Host Table

The Activity by Host table displays the user's activity by host.

![activitybyhost](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitybyhost.webp)

- Server – Server where the activity occurred
- First Access – First date and time that the server was accessed
- Last Access – Last date and time that the server was accessed
- Number of Events – Total number of activity events on the server

Use the Search icon to search for data contained in any column. Click the Export CSV button to
export the current rows displayed on the page into a CSV file.

Activity by Client Table

The Activity by Client table displays the user's activity by host.

![activitybyclient](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/activitybyclient.webp)

- Client IP – IP address for the client
- Client Name– Client where the activity occurred
- First Access – First date and time that the client was accessed
- Last Access – Last date and time that the client was accessed
- Number of Events – Total number of activity events on the client

Use the Search icon to search for data contained in any column. Click the Export CSV button to
export the current rows displayed on the page into a CSV file.

## Group Membership Tab

The Group Membership tab displays groups in which the user is a member.

![groupmembership](/img/product_docs/accessanalyzer/12.0/admin/action/activedirectory/operations/groupmembership.webp)

![Group Membership Indirect Member of Page](/img/product_docs/threatmanager/threatmanager/administration/threatdetails/groupmembershipindirect.webp)

The Group Membership tab displays the groups the user is a member of. It has the following sub-tabs:

- Direct Member Of – Lists groups the user is a direct member of
- Indirect Member Of – Lists groups the user is a member of via membership in a nested group

Each table has the following columns:

- Name – The name of the group. Click the link to view group details. See the
  [Group Details Page](/docs/threatmanager/3.0/operations/threat-details/object-details.md) topic for additional information.
- Domain – Name of the domain. This may be either the domain DNS name or domain controller hostname.
- Tags – The tag present on the perpetrator, file, or host associated with the event
