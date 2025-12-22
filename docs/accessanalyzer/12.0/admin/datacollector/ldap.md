---
title: "LDAP Data Collector"
description: "LDAP Data Collector"
sidebar_position: 260
---

# LDAP Data Collector

The LDAP Data Collector uses LDAP to query Active Directory returning the specified objects and
attributes. For example, a query can be configured to return all user objects at the selected level.
Another query can be configured to return a master list of all user objects found within the target
domain. Wildcards and LDAP filters can be applied to the query configurations.

The LDAP Data Collector is a core component of Access Analyzer, but it has been preconfigured within
the Active Directory Solution. While the data collector is available with all Access Analyzer
license options, the Active Directory Solution is only available with a special Access Analyzer
license. See the [Active Directory Solution](/docs/accessanalyzer/12.0/solutions/activedirectory/overview.md) topic for
additional information.

**Protocols**

- LDAP

**Ports**

- TCP 389

**Permissions**

- Member of the Domain Administrators group

## LDAP Query Configuration

The LDAP Data Collector is configured through the LDAP template form. The LDAP template form has the
following configuration options:

![LDAP template form](/images/accessanalyzer/12.0/admin/datacollector/templateform.webp)

- Connect to the server – Use the default domain controller entered in the box, or enter an
  alternate server
- Naming context – Select a directory partition from the drop-down list: **Default Context**,
  **Configuration Context**, or **Schema Context**
- Connect – Connects to the domain specified. The root folder of the domain is displayed in the left
  pane of the window.

    :::note
    Before clicking **Connect**, the server port must be configured. To configure the
    server port, click **Options** to open the Options window and configure the server port as
    described in the Options Window section.
    :::


- Options – Opens the Options window to configure connection options and multi-value results
  options. See the [Options Window](#options-window) topic for additional information.
- List of attributes – Table in the upper right corner lists attributes for the object selected in
  the left pane
- Root path – The Root path textbox is populated with the path to the highlighted attributes to be
  collected
- LDAP filter – The LDAP filter textbox shows the filters applied to the objects. Click the ellipses
  (**…**) to open the Filter Options window. See the [Filter Options Window](#filter-options-window)
  topic for additional information.

The button bar provides additional options for selecting objects and attributes. See the
[Button Bar](#button-bar) topic for additional information.

### Options Window

The Options window contains configure connection options and multi-value results options. Click the
**Options** button located in the upper right corner of the LDAP template form to open it.

![Options Window](/images/accessanalyzer/12.0/admin/datacollector/options.webp)

- Connect Securely with TL/SSL – Connect using TLS/SSL. If the checkbox is selected, the server port
  defaults to `636`.
- Ignore Certificate Errors – Ignores certificate errors during connection when encrypted
  communication is enabled
- Server Port

    - If the Connect Securely with TLS/SSL option is selected, use Server Port `686`
    - If the Connect Securely with TLS/SSL option is not selected, use Server Port `389`

- Authentication Type

    - Negotiate – Default authentication type
    - Simple

- TreeView Node Limit – Typically set to 500
- Multi-valued attributes – Indicates how multi-valued properties are returned

    - Concatenated – All values are listed in one cell using the delimiter specified

        - Delimiter – Symbol used to separate values in the cell

    - First Value Only – Only the first value is listed in the cell

### Filter Options Window

The Filter Options window is where to add filters to the query. Click the ellipses (**…**) button
located to the right of the **LDAP filter** box in the LDAP template form to open this window.

![filteroptions](/images/accessanalyzer/12.0/admin/datacollector/filteroptions.webp)

- Extract all objects (no filter) – No filters applied
- Extract only objects of the following classes – Applies class filter for selected classes

    - Users
    - Groups
    - Contacts
    - Computers
    - Printers
    - Shared Folders

- Custom Filter – Applies a custom filter configured in the Custom Filter window. See the
  [Custom Filter Window](#custom-filter-window) topic for additional information.

#### Custom Filter Window

The Custom Filter window provides options for creating a complex filter.

![Custom Filter window](/images/accessanalyzer/12.0/admin/datacollector/customfilter.webp)

Select a **Field** and **Condition** from the drop-down lists. Enter a **Value** for the condition.
Click **Add** to add the filter to the Filter Lines table.

- Filter Lines will be combined with a logical – Select the **AND** or **OR** option. **AND** is
  selected by default.
- Edit Raw Filter – Opens the Raw Filter Edit window

    ![Raw Filter Edit window](/images/accessanalyzer/12.0/admin/datacollector/rawfilteredit.webp)

    Enter the entire LDAP filter in the textbox. Click **Verify** to confirm the filter, and then
    **OK** to add it to the custom filter list.

- Clear Filter – Deletes the selected filter

Click **OK** to save the changes and close the Custom Filter window.

### Button Bar

The button bar provides several options for configuring the query.

![buttonbar](/images/accessanalyzer/12.0/admin/datacollector/buttonbar.webp)

| Button                                                                                                                                                                     | Name                                        | Description                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------------------------------------------- |
| ![Include sublevels button](/images/accessanalyzer/12.0/admin/datacollector/sublevels.webp)                                    | Include sublevels                           | Include sublevel folders of the selected folder.                          |
| ![Org wildcard button](/images/accessanalyzer/12.0/admin/datacollector/orgwildcard.webp)                                       | Org wildcard                                | Search for the attribute across multiple domains.                         |
| ![Wildcard the level button](/images/accessanalyzer/12.0/admin/datacollector/wildcard.webp)                                    | Wildcard the level                          | Search everything on the selected level.                                  |
| ![Unwildcard all levels button](/images/accessanalyzer/12.0/admin/datacollector/unwildcard.webp)                               | Unwildcard all levels                       | Removes the wildcard and returns the search scope to the selected domain. |
| ![Include a HostName Tag button](/images/accessanalyzer/12.0/admin/datacollector/includehostname.webp)                         | Include a HostName Tag                      | Replaces the OU with a HostName Tag.                                      |
| ![Remove all HostName Tags button](/images/accessanalyzer/12.0/admin/datacollector/removehostname.webp)                        | Remove all HostName Tags                    | Removes the HostName Tag.                                                 |
| ![Add Security Properties for Selected Key button](/images/accessanalyzer/12.0/admin/datacollector/addsecurityproperties.webp) | Add Security Properties for Selected Key    | Adds the list of security properties.                                     |
| ![Select Highlighted Attributes button](/images/accessanalyzer/12.0/admin/datacollector/addattributes.webp)                    | Select Highlighted Attributes               | Adds the highlighted attributes to the list.                              |
| ![Delete the Highlighted Selected Attributes button](/images/accessanalyzer/12.0/admin/datacollector/deleteattributes.webp)    | Delete the Highlighted Selected Attributes  | Deletes the highlighted attributes from the list.                         |
| ![Find the Root Path in the Directory Objects button](/images/accessanalyzer/12.0/admin/datacollector/rootpath.webp)           | Find the Root Path in the Directory Objects | Returns the root path to the selected root.                               |
