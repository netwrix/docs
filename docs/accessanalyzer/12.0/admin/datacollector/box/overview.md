# Box Data Collector

The Box Data Collector audits access, group membership, and content within a Box enterprise.

**NOTE:** If the Box Data Collector is used in a new job, outside of the Box Solution, it is
necessary to deselect the **Skip Hosts that do not respond to PING** option on the job’s
**Properties** > **Performance** tab.

The Box Data Collector has been preconfigured within the Box Solution. Both this data collector and
the solution are available with a special Access Analyzer license. See the
[Box Solution](/docs/accessanalyzer/12.0/solutions/box/overview.md) topic for additional information.

Protocols

- HTTP
- HTTPS

Ports

- TCP 80
- TCP 443

Permissions

- Box Enterprise Administrator

## Box Query Configuration

The Box Data Collector is configured through the Box Data Collector Wizard. The wizard contains the
following pages, which change based up on the query category selected:

- Welcome
- [Box: Category](/docs/accessanalyzer/12.0/admin/datacollector/box/category.md)
- [Box: Exclusions Page](/docs/accessanalyzer/12.0/admin/datacollector/box/exclusions.md)
- [Box: Scope by User Page](/docs/accessanalyzer/12.0/admin/datacollector/box/scopebyuser.md)
- [Box: Additional Scoping](/docs/accessanalyzer/12.0/admin/datacollector/box/additionalscoping.md)
- [Box: Activity Timeframe Scope](/docs/accessanalyzer/12.0/admin/datacollector/box/activitytimeframescope.md)
- [Box: Activity Operation Scope](/docs/accessanalyzer/12.0/admin/datacollector/box/activityoperationscope.md)
- [Box: Authenticate](/docs/accessanalyzer/12.0/admin/datacollector/box/authenticate.md)
- [Box: Results](/docs/accessanalyzer/12.0/admin/datacollector/box/results.md)
- [Box: Summary](/docs/accessanalyzer/12.0/admin/datacollector/box/summary.md)

The Welcome page gives an overview of the data collector. To proceed through the pages, click
**Next** or use the Steps navigation pane to open another page in the wizard. Review the
introductory and caution information about the Box Data Collector before proceeding.

![Box DC Wizard Welcome page](/img/product_docs/accessanalyzer/12.0/admin/datacollector/box/welcome.webp)

The Welcome page can be hidden by checking the **Do not display this page the next time** box when
the wizard is open and configuration settings are saved.
