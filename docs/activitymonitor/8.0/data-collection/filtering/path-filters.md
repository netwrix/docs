# Path Filtering Tab

The Path Filtering tab on an output Properties window is where monitoring scope by file paths can be
modified. Specified paths can be included in or excluded. These settings are initially configured
when the output is added.

Select an output from the Monitored Hosts tab and click **Edit** to open the output Properties
window. The tab varies based on the type of host selected.

## For Linux Hosts

The tab contains the following settings and features:

![pathfilteringtab](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/pathfilteringtab.webp)

- Add – Opens the Add or Edit Path window to add a new path to the list. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Remove – Removes the selected path from the list. Confirmation is not requested.

  **CAUTION:** If a path is removed by accident, use the **Cancel** button to discard the change.

- Move Up / Move Down – Since path filters are evaluated in the order specified by the table, these
  buttons move the selected path up or down in the list
- Edit – Opens the Add or Edit Path window to modify the selected path. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Type a path below to test whether it will be included or excluded – Enter a path in the textbox to
  test whether it will be included/excluded based on the path filtering list

  - Result – Under the text box, a description of whether the indicated path is included or
    excluded will appear, as well as a reason for why the indicated path is included or excluded.
    Additionally, the path in the list that is applied to the test will be highlight ed: green
    highlight for an included path and red highlight for an excluded path.

- Exclude extensions – Displays a space separated list of file extensions that are excluded
- Exclude streams – Displays a space separated list of streams that are excluded

The table lists paths that are being filtered, displaying columns for Type, indicating if it is
being Included or Excluded, and Pattern. The order of the list determines what paths are included
and what paths are excluded.

**CAUTION:** Exclude takes precedence over the Include. For example, if the C:\OpenShare is
excluded, but the C:\OpenShare\Edward is included, the ‘OpenShare’ parent exclusion takes
precedence, and the ‘Edward’ child folder will not be monitored.

**NOTE:** If ‘Include’ is not listed under the Filter Type column (or no Include filter paths are
added), then all current and new discovered drives will be monitored.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For NAS Device Hosts

The tab contains the following settings and features:

![Host Properties - Path Filtering Tab](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/pathfilteringtab.webp)

- Add – Opens the Add or Edit Path window to add a new path to the list. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Remove – Removes the selected path from the list. Confirmation is not requested.

  **CAUTION:** If a path is removed by accident, use the **Cancel** button to discard the change.

- Move Up / Move Down – Since path filters are evaluated in the order specified by the table, these
  buttons move the selected path up or down in the list
- Edit – Opens the Add or Edit Path window to modify the selected path. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Type a path below to test whether it will be included or excluded – Enter a path in the textbox to
  test whether it will be included/excluded based on the path filtering list

  - Result – Under the text box, a description of whether the indicated path is included or
    excluded will appear, as well as a reason for why the indicated path is included or excluded.
    Additionally, the path in the list that is applied to the test will be highlight ed: green
    highlight for an included path and red highlight for an excluded path.

- Exclude extensions – Displays a space separated list of file extensions that are excluded
- Exclude streams – Displays a space separated list of streams that are excluded

The table lists paths that are being filtered, displaying columns for Type, indicating if it is
being Included or Excluded, and Pattern. The order of the list determines what paths are included
and what paths are excluded.

**CAUTION:** Exclude takes precedence over the Include. For example, if the C:\OpenShare is
excluded, but the C:\OpenShare\Edward is included, the ‘OpenShare’ parent exclusion takes
precedence, and the ‘Edward’ child folder will not be monitored.

**NOTE:** If ‘Include’ is not listed under the Filter Type column (or no Include filter paths are
added), then all current and new discovered drives will be monitored.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

## For SharePoint Hosts

For a SharePoint host, the Path Filtering tab is for including and excluding sites. The tab contains
the following settings and features:

![Path Filtering Tab for SharePoint Hosts](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/pathfilteringsharepointhosts.webp)

- To audit all sites, leave the textbox blank
- To include a specific site, enter the URL
- To exclude a specific site, enter the URL but add a minus sign (-) as a prefix to the URL, for
  example:

-http://sharepoint.local/sites/marketing

Use a semicolon (;) to separate multiple URLs.

## For Windows File Server Hosts

The tab contains the following settings and features:

- Add – Opens the Add or Edit Path window to add a new path to the list. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Remove – Removes the selected path from the list. Confirmation is not requested.

  **CAUTION:** If a path is removed by accident, use the **Cancel** button to discard the change.

- Move Up / Move Down – Since path filters are evaluated in the order specified by the table, these
  buttons move the selected path up or down in the list
- Edit – Opens the Add or Edit Path window to modify the selected path. See the
  [Add or Edit Path Window](/docs/activitymonitor/8.0/data-collection/filtering/path-filters.md) topic for additional information.
- Add all local drives – Retrieves and adds all local drives to the bottom of the list with a type
  of Include
- Type a path below to test whether it will be included or excluded – Enter a path in the textbox to
  test whether it will be included/excluded based on the path filtering list

  - Result – Under the text box, a description of whether the indicated path is included or
    excluded will appear, as well as a reason for why the indicated path is included or excluded.
    Additionally, the path in the list that is applied to the test will be highlight ed: green
    highlight for an included path and red highlight for an excluded path.

- Exclude extensions – Displays a space separated list of file extensions that are excluded
- Exclude streams – Displays a space separated list of streams that are excluded

The table lists paths that are being filtered, displaying columns for Type, indicating if it is
being Included or Excluded, and Pattern. The order of the list determines what paths are included
and what paths are excluded.

**CAUTION:** Exclude takes precedence over the Include. For example, if the C:\OpenShare is
excluded, but the C:\OpenShare\Edward is included, the ‘OpenShare’ parent exclusion takes
precedence, and the ‘Edward’ child folder will not be monitored.

**NOTE:** If ‘Include’ is not listed under the Filter Type column (or no Include filter paths are
added), then all current and new discovered drives will be monitored.

Click **OK** to commit the modifications. Click **Cancel** to discard the modifications. The output
Properties window closes.

# Add or Edit Path Window

The Add or Edit Path window is opened from the Path Filtering tab of a monitored host's output
Properties window.

![addoreditpath](/img/product_docs/activitymonitor/activitymonitor/admin/outputs/window/addoreditpath.webp)

- Specify a path to filter during collection – Enter a file path in the textbox or use the ellipsis
  (…) to browse for a folder
- Filter Type – Indicates if the filter will be **Included** or **Excluded**

Then click OK. The Add or Edit Path window closes, and the path is added to the filtering list for
the monitored host.

## Special Consideration for NAS Device Hosts

For NAS devices, the activity agent can configured to add ‘C:\’ to the beginning of the path, which
is a requirement for the output that is designated for StealthAUDIT.exe or being read by a Netwrix
Threat Prevention agent. That configuration is on the [Log Files Tab](/docs/activitymonitor/8.0/data-collection/outputs/log-files.md). If the option
is enabled for this monitored device, start your paths with C:\.

## Wildcard

Wildcard filtering can be configured using the following wildcard characters:

| Wildcard | Definition                                                   |
| -------- | ------------------------------------------------------------ |
| \*       | matches zero or more characters (except for "\" or "/")      |
| ?        | matches any single character (except for "\" or "/")         |
| \*\*     | matches zero or more characters (useful for directory trees) |
