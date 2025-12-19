---
title: "View and Search Collected Data"
description: "View and Search Collected Data"
sidebar_position: 40
---

# View and Search Collected Data

Netwrix Auditor delivers complete visibility into your IT infrastructure. Its convenient interactive
search interface enables you to investigate incidents and browse data collected across the entire IT
infrastructure. When running a search, you are not limited to a certain data source, change type, or
object name. You can create flexible searches that provide you with precise results on _who_ changed
_what_, and _when_ and _where_ each change was made.

To review collected data, you must be assigned the **Global administrator** or **Global reviewer**
Netwrix Auditor role. Users with the **Reviewer** role on a certain plan or folder have limited
access to data—only within their delegated scope. See the
[Role-Based Access and Delegation](/docs/auditor/10.7/admin/monitoringplans/delegation.md) topic for additional
information.

This functionality is currently available for the following data sources:

- Active Directory
- Microsoft Entra ID (formerly Azure AD)
- Exchange
- Exchange Online
- File Servers (Windows File Servers, EMC, and NetApp)
- Network Devices
- Oracle Database
- SharePoint
- SharePoint Online
- SQL Server
- VMware
- Windows Server
- Group Policy
- Logon Activity
- User Activity (Video)
- Netwrix API—data imported to the Audit Database from other sources using Netwrix Auditor
  Integration API
- Netwrix Auditor Self-Audit
- Netwrix Data Classification. See
  [Sensitive Data Discovery ](/docs/auditor/10.7/admin/settings/sensitivedatadiscovery.md)for more information.

Netwrix Auditor executes interactive search queries against data stored in the audit databases, that
is, on data collected in the last 180 days (default retention period). If you want to investigate
incidents that occurred more than 180 days ago, then you should import that data from the Long-Term
Archive. See [Investigations](/docs/auditor/10.7/admin/settings/investigations.md) topic for additional information.

## Browsing Your Audit Data

On the main Netwrix Auditor page, click
![search_tile](/images/auditor/10.7/admin/search/search_tile.webp)
on the left.

You can add any elements (a dashboard, report, alert, risk, etc.) to the Auditor Home screen to
access them instantly. See the [Navigation](/docs/auditor/10.7/admin/navigation/overview.md) and
[Customize Home Screen](/docs/auditor/10.7/admin/navigation/customizehome.md) topics for additional information.

There you can use the UI controls to run the variety of search queries that will fecth you exactly
the data you need.

- To view all audit data stored in all Audit Databases by all monitoring plans, click **Search**
  button in the center.

    Be aware that this type of search query may take time due to a large amount of data. Thus, it is
    recommended that instead of retrieveing a massive data set, you pre-configure your search query
    using filters.

    By default, Netwrix Auditor shows only the top 2,000 entries in the search results.

- To pre-configure your search query before you click Search, you can add filters. Then the search
  query will return only data matching your filtering criteria. See
  [Use Filters in Simple Mode](/docs/auditor/10.7/admin/search/filtersimple.md) for details.

    You can also use advanced filtering capabilities based on regular expressions (they involve
    filter fields and conditions). See [Use Filters in Advanced Mode](/docs/auditor/10.7/admin/search/filteradvanced.md) for
    details.

    ![search_filter](/images/auditor/10.7/admin/search/search_filter.webp)

- By default, search results are open in the same window, so the subsequent search results will
  overwrite the previous search results. To view them in different windows, click Open in new
  window.
- In addition, you can customize your view by selecting columns to display.

Use search results for your own needs: save, share, create search-based alerts, subscribe to
periodic delivery of search query results, etc. See Make Search Results Actionnable for more
information.

![search_nofilter_1](/images/auditor/10.7/admin/search/search_nofilter_1.webp)

You can also use the **Search** window to examine details for the selected activity record, or watch
a video recording (for User Ativity data).

### Examining Activity Record in Detail

To work with a certain activity record:

1. Select the activity record which details you want to review. Its key fields and user (initiator)
   account details will be displayed in the right pane.
2. To display all fields and copy them if necessary, click the Full screen... link on the right.

If you are examining User Activity entries, click the Show video... link below the entry. Review
details and play a video by clicking the Show video on the right.

3. You can instruct Netwrix Auditor to include or exclude this activity record from the search query
   results, as described in the Include and Exclude Data

## Customize View

Having reviewed the search results, you can modify the way the data is presented, for example, hide
a column or change its position, or hide the Details pane on the right.

To modify view:

1. Navigate to Tools
2. Click Select columns. The dialog that opens shows the search columns currently selected for
   display.
3. Check the columns you want to include and clear unwanted ones.
4. Set the order of displayed columns using arrows on the right.
5. Click **Hide details** if you want to hide the Details pane with the activity record and user
   (initiator) account details.
6. To restore the original view configuration, click Restore Default.

## Include and Exclude Data

Having reviewed the search results, you can proceed with your investigation by excluding or
including data. Excluding a filter value is helpful if you want to skip it in your search results
(e.g., a service account or trusted user account). On the other hand, including a filter value
ensures that only the entries containing it will be shown (e.g., a suspicious user or potentially
violated folder).

To include or exclude data

1. Review your search results and locate an entry with data you want to exclude or include.
2. Select this entry and review details.
3. Click Exclude from search or Include to search and specify a filter value from the list.
4. Click Search to update the search results.

Your exclusions and inclusions will automatically be added to the search filters, limiting the
amount of data shown in the results pane.

## Make Search Results Actionnable

You can export your search query results, save them as a custom report, subscribe to periodic
delivery of this search results, create a search-based alert.

Navigate to Tools in the top right corner of the Search window and select the required action.

| Use...         | To...                                                                                                                                                                                                                                                                                                                                               |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Save as report | Save your search results as custom reports.                                                                                                                                                                                                                                                                                                         |
| Create alert   | Create an alert with the same set of filters you have just specified for your search.                                                                                                                                                                                                                                                               |
| Subscribe      | Create subscription for periodic delivery of the search query results. Subscription to the search results is not the same as creation of a custom report using this search.                                                                                                                                                                         |
| Export data    | Save your search results as a _.pdf_ or _.csv_ file. All audit data from your search query results will be exported (unlike the interactive view which is limited to the top 2,000 entries). When exporting large amount of data (e.g., changes made by a newly retired employee during the last 8 months), it is recommended to use _.csv_ format. |

## Troubleshooting Tips

If you do not see the expected information in search results, try the following:

- Verify the Audit Database retention and SQL Server settings.
- Make sure that data collection is configured properly in the monitoring plan settings.
- Check the required audit settings in your monitored infrastructure.
- Verify the data collecting account.

See next:

- [Use Filters in Advanced Mode](/docs/auditor/10.7/admin/search/filteradvanced.md)
