---
title: "SPAA: Scan Scoping Options"
description: "SPAA: Scan Scoping Options"
sidebar_position: 50
---

# SPAA: Scan Scoping Options

The Scan Scoping Options page provides scoping options to specify the list of URLs to be scanned. It
is a wizard page for the categories of:

- Scan SharePoint Access
- Scan For Sensitive Content

![Scan Scoping Options page](/images/accessanalyzer/11.6/admin/datacollector/spaa/scanscopingoptions.webp)

The options on the Scan Scoping Options page are:

- Add – When a URL is entered in the text box, adds the URL to the Scope box

    - To scope for a SharePoint Host Named Site Collections, use the text box to enter the URL for
      both the Web App and the HNSC with custom non-existent URL extensions added. See the
      [Scoping to SharePoint Host Named Site Collections](#scoping-to-sharepoint-host-named-site-collections)
      topic for additional information.

    :::note
    If sites are included in the Scope box, all other sites are excluded from the scan.
    :::


- Import CSV – Opens a file explorer to browse for a CSV file
- Scope box – Lists all added URLs
- Scope drop-down list – Select include to include a URL in the scan. Select exclude to exclude a
  URL from the scan.
- Remove – Removes the selected URL from the Scope box

## Scoping to SharePoint Host Named Site Collections

In order to scope to objects within host named site collections, add a scope line which includes the
URL of the web application containing the host named site collection. To scope the host named site
collection URL `http://sample.com/documents/` for a host named site collection that exists under the
web application URL `http://example.com`, follow the steps:

**Step 1 –** Navigate to the **Scan Scoping Options** page.

![Enter URL on Scan Scoping Options page example](/images/accessanalyzer/11.6/admin/datacollector/spaa/scanscopingoptionswebappurl.webp)

**Step 2 –** In the text box, enter an invalid URL prefixed with the **Web App URL** which contains
the HNSCs. Click **Add**.

- In the example the invalid Web App URL is: `http://example.com/hnsc_indicator/`

**Step 3 –** In the text box, enter the HNSC URL to scope for. Click **Add**.

- In the example, the HNSC URL entered to filter for is: `http://sample.com/documents/`

![Scan Scoping Options example](/images/accessanalyzer/11.6/admin/datacollector/spaa/scanscopingoptionsexample.webp)

**Step 4 –** The Web App URL must appear above the HNSC URL, as depicted in the example above.

**Step 5 –** The SharePoint Access Auditor Data Collector Wizard is now configured to filter for the
URL inside the SharePoint Host Named Site Collections.

## Virtual Hosts

In order to decrease the scan time in large SharePoint Online environments, it is possible to break
Site Collections for a single host down into subsets, or **Virtual Hosts**, that are treated as
separate hosts by Enterprise Auditor. This allows multiple scans of a single host to be run
concurrently. Follow the steps to configure this.

![CSV file with host and site collection information](/images/accessanalyzer/11.6/admin/datacollector/spaa/virtualhostscsv.webp)

**Step 1 –** Create a new CSV file. Add into rows the information for the host and site collection
URLs you want to scan in the format `HOSTNAME#DESIGNATOR;URL`.

- Each unique `DESIGNATOR` is treated as a separate host comprised of the specified URLs.

![Host List for targeting the Virtual Hosts](/images/accessanalyzer/11.6/admin/datacollector/spaa/virtualhostshostlist.webp)

**Step 2 –** Configure the Host List for SPAA or SPSEEK scans to target these Virtual Hosts using
the format `HOSTNAME#DESIGNATOR`.

![SPAA Data Collector Wizard Scan Scoping Options page](/images/accessanalyzer/11.6/admin/datacollector/spaa/scanscopingoptionsvirtualhosts.webp)

**Step 3 –** On the Scan Scoping Options page of the SharePoint Access Auditor Data Collector
Wizard, use the **Import CSV** button to import the information from the CSV file created in Step 1.

**Step 4 –** Click **Next** to continue through the other pages of the SharePoint Access Auditor
Data Collector Wizard. Then click **Finish** on the Summary Page.

Enterprise Auditor is now configured to scan multiple site collections for the same host
concurrently.

A new host folder is created for each Virtual Host in `Jobs/SA_CommonData/SHAREPOINTACCESS`. You
will also see a separate line on the Running Instances tab for each Virtual Host included in the
scan.

:::note
The Host List for Bulk Import should be configured to contain each Virtual Host included
in the above scan using the `HOSTNAME#DESIGNATOR` format. After Bulk Import, the data contained in
Tier 1 Database tables and views will resemble a scan run against multiple hosts.

:::
