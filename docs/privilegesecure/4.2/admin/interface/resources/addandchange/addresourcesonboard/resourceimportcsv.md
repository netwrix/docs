---
title: "Create Resource Import CSV File"
description: "Create Resource Import CSV File"
sidebar_position: 10
---

# Create Resource Import CSV File

Resources can be onboarded via a CSV import process. Create a CSV file with the following values:

- DNS Host Name — Displays the fully qualified domain name for the resource
- Operating System — Displays the operating system of the resource. This is an optional value.
- IP Address — Displays the IP address for the resource
- Platform — Displays the type of platform, which defines the resource. This is an optional value,
  but it must be an exact match to known platforms on the
  [Platforms Page](/docs/privilegesecure/4.2/admin/interface/platforms/overview.md).
- Credential — Displays the service account associated with the resource. This is an optional value,
  but it must be an exact match to known service accounts on the
  [Service Accounts Page](/docs/privilegesecure/4.2/admin/configuration/serviceaccounts/serviceaccounts.md).

The CSV file must contain one resource per row. Each resource must be identified by either a DNS
Host Name or an IP Address. All other values are optional.

## Download Template

There is a template available. Follow the steps to download the template.

**Step 1 –** Navigate to either the Resources dashboard or the Resources page.

**Step 2 –** Click the **Add** button and select New Server. The Add Resources window will open to
onboard new servers.

**Step 3 –** Select the **Import from CSV** radio button.

**Step 4 –** Click **Download CSV Template**.

The `nps-resource-import-template.csv` file is downloaded to your browser's default download folder.

## Example CSV File

```csv
DNS Host Name,Operating System,IP Address,Platform,Credential

NewYork10.nwxtech.com,Windows Server 2019,192.168.13.150,Windows,Windows Demo

Wisconsim10.nwxtech.com,Windows Server 2022,192.168.13.155,Windows,

Arizona10.nwxtech.com,Windows Server 2019,,,

Oregon50.nwxtech.com,,,,

,Windows Server 2019,192.168.13.125,Windows,

,,192.168.13.15,Linux,Linux Demo

Texas70.nwxtech.com,,,,
```