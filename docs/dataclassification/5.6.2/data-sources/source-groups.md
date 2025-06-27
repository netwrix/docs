# Dynamic Source Groups — Exchange

This section contains information on how to configure SharePoint Online dynamic source groups.
Toggle between Basic and Advanced configuration settings by clicking the icons in the Settings
button in the bottom left corner of the page.

![dynamicsourcegroupex](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/dynamicsourcegroupex.webp)

The following options can be configured for Exchange Dynamic Source Groups:

| Option                 | Description                                                                                                                                                                                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Authentication Type    | Basic — Selecting **Credentials** enables users to authenticate using email address and password credentials Modern (O365) — Selecting **Modern (O365)** enables users to authenticate using Tenant ID                                                 |
| Exchange API Url       | Enter a URL for an Exchange API for data collection. Leave this field blank to autodetect Exchange APIs.                                                                                                                                               |
| Crawl Range            | Configure whether to crawl data over a date range or from a specific date onwards.                                                                                                                                                                     |
| Match Rules            | At least one match rule must be included, match rules are Regular expressions, such as: - `.*@mydomain.com` - `.*@mydomain.co.uk`                                                                                                                      |
| Crawl In-Place Archive | Check the box to enable crawling the Exchange In-Place Archive for data. Uncheck the box to disable this option.                                                                                                                                       |
| Detection Period       | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period        | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |

# Dynamic Source Groups — File Servers

This section contains information on how to configure File Servers dynamic source groups. Toggle
between Basic and Advanced configuration settings by clicking the icons in the Settings button in
the bottom left corner of the page.

![dynamicsourcegroupfs](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/dynamicsourcegroupfs.webp)

The following options can be configured for File Servers Dynamic Source Groups:

| Option                           | Description                                                                                                                                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Server Path                      | Enter the URL for the SharePoint Online tenant. Entering a tenant here will apply the configurations on the Source Configuration page to all source groups that are created under the tenant.                                                          |
| Username and Password            | Enter the username and password to authenticate to the server                                                                                                                                                                                          |
| Crawl User-Defined Hidden Shares | Check the box to enable data collection from user-created hidden shares. Uncheck the box to disable this option.                                                                                                                                       |
| Match Rules                      | At least one match rule must be included, match rules are Regular expressions, such as: - `\\\\myserver\\sales.*` - `\\\\myserver\\.*\$$`                                                                                                              |
| Classification Template          | Search for a Classification Template to apply to Dynamic Source Groups                                                                                                                                                                                 |
| Detection Period                 | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period                  | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |

# Dynamic Source Groups — Google Drive Organization

This section contains information on how to configure Google Drive dynamic source groups. Toggle
between Basic and Advanced configuration settings by clicking the icons in the Settings button in
the bottom left corner of the page.

![dynamicsourcegroupgd](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/dynamicsourcegroupgd.webp)

The following options can be configured for File Servers Dynamic Source Groups:

| Option              | Description                                                                                                                                                                                                                                                                  |
| ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Administrator Email | Enter the email for a Google Drive administrator account. The information entered here cannot be edited once the configurations for this dynamic source group are saved.                                                                                                     |
| Crawl Shared Drives | Check the box to enable data collection from shared drives. Uncheck the box to disable this option.                                                                                                                                                                          |
| Crawl User Drives   | Check the box to enable data collection from user drives. Uncheck the box to disable this option.                                                                                                                                                                            |
| Match Rules         | At least one match rule must be included, match rules are Regular expressions, such as: - `.*\/mySharedDrive.*`                                                                                                                                                              |
| Detection Period    | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours.                       |
| JSON Import         | Drag and drop a JSON file containing the service account credentials here, or copy the JSON text to the 'Project ID' field to automatically import the connection settings. If manually configuring Connection Settings, click the **Show All Configuration Fields** button. |
| Project ID          | If applicable, paste the copied JSON text into the Project ID field to automatically import connection settings.                                                                                                                                                             |
| Re-Index Period     | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                                            |

## Connection Fields

The following information must be provided if manually configuring connection settings:

| Option                     |
| -------------------------- |
| Account Type               |
| Private Key ID             |
| Private Key                |
| Client Email               |
| Client ID                  |
| Authorization URI          |
| Token URI                  |
| Authorization Provider URL |
| Client Certificate URL     |

# Dynamic Source Groups — SharePoint Online

This section contains information on how to configure SharePoint Online dynamic source groups.
Toggle between Basic and Advanced configuration settings by clicking the icons in the Settings
button in the bottom left corner of the page.

![dynamicsourcegroupspo](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/dynamicsourcegroupspo.webp)

The following options can be configured for SharePoint Online Dynamic Source Groups:

| Option                  | Description                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| URL                     | Enter the URL for the SharePoint Online tenant. Entering a tenant here will apply the configurations on the Source Configuration page to all source groups that are created under the tenant.                                                          |
| Authentication Type     | Credentials — Selecting **Credentials** enables users to authenticate using username and password credentials Modern (O365) — Selecting **Modern (O365)** enables users to authenticate using Tenant ID                                                |
| Match Rules             | At least one match rule must be included, match rules are Regular expressions, such as: - `https:\/\/example.sharepoint.com\/sites\/.*` - `.*\/Personal\/.*` - `https:\/\/example-my.sharepoint.com\/.*`                                               |
| Classification Template | Search for a Classification Template to apply to Dynamic Source Groups                                                                                                                                                                                 |
| Detection Period        | The Detection Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Detection Period. To disable detection, set the period to **0** days and **0** hours. |
| Re-Index Period         | The Re-Index Period set here will apply to all SharePoint Online source groups configured under the URL set in the URL text field. Use the slider to change the Re-Index Period. To disable re-indexing, set the period to **0**.                      |

# Source Groups

Source groups provide a way of logically grouping specific sources, perhaps by type, or perhaps by
an internal business specification. Selecting the option Add to Group on the main sources grid
screen will present the following pop-up:

![addtogroup](/img/versioned_docs/dataclassification_5.6.2/ndc/sources/source_groups/addtogroup.webp)

A group can either be "mixed", which allows it to contain all source types, or source specific. In
the example above a group would be created entitled "Demo Content", which only supports the addition
of SharePoint sources. If a supporting source group already exists, this can be selected from the
drop-down list provided. [See Dynamic Source Groups for more information.](#dynamic-source-groups)

Selecting the cog icon on the main sources grid screen for a source group allows you to amend the
group settings:

![editgroup](/img/product_docs/accessanalyzer/11.6/config/dellpowerscale/editgroup.webp)

Here you can:

- Amend the group name
- Delete the group
- Enable / Disable Indexing—When disabled content will not be processed into the core search index
  (content will be excluded from Browse / Search / Suggestions, classification will occur as normal)
- Set the Re-index period, priority, and credentials for a single source in the group or configure
  these options for all sources in this group using the "Apply changes to all sources in Source
  Group" option.

  **NOTE:** Credentials will only be supported if the source group is type specific

- Enable / Disable Content Collection — Disabled files within the source group will not be
  processed. Containers (folders, lists etc.) will be processed as normal with their children
  inserted at a pending state until child collection is re-enabled. This allows a source to be fully
  enumerated before any files are processed
- _(SharePoint only)_ Supply regular expression rules to support automatically assigning sources to
  a specific group

Deleting a group will remove all existing items from the group leaving them unassigned. You can also
remove a specific source(s) from a group by selecting the source group in the grid and then
selecting Remove from Group for the required source(s). Source groups can also be created and
assigned as part of the source creation process.

## Dynamic Source Groups

Dynamic Source Groups are used to add a collection of sources at once. These source groups are
accessed through the Add page in the Auto-Detect a Set of Sources section. Each Dynamic Source Group
will have different options depending on which one is being configured. The Dynamic Source Groups
are:

- [Dynamic Source Groups — Exchange](/docs/dataclassification/5.6.2/data-sources/source-groups.md)
- [Dynamic Source Groups — File Servers](/docs/dataclassification/5.6.2/data-sources/source-groups.md)
- [Dynamic Source Groups — Google Drive Organization](/docs/dataclassification/5.6.2/data-sources/source-groups.md)
- [Dynamic Source Groups — SharePoint Online](/docs/dataclassification/5.6.2/data-sources/source-groups.md)
