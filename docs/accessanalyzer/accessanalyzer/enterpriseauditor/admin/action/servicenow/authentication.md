# ServiceNow Action: Authentication

The Authentication page implements signing into a ServiceNow account.

A ServiceNow account must be set up and configured to determine which incidents will be visible on the Incident Creation page.

![ServiceNow Action Module wizard Authentication page](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/admin/datacollector/box/authentication.png)

Use the following options to log into a ServiceNow account:

- Select the __Use global ServiceNow credentials__ to access the ServiceNow credentials entered into the Access Analyzer console’s global setting
- To break inheritance, deselect the checkbox and enter information into the following fields:

  - Instance – Domain name for the ServiceNow account
  - User Name/Password – Specify the credentials to access the ServiceNow account

__NOTE:__ ServiceNow accounts must have an administrator role to modify incidents on the configuration page.
