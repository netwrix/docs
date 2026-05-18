---
title: "FSAA: SPN Mapping"
description: "FSAA: SPN Mapping"
sidebar_position: 31
---

# Configuring Custom SPN Mapping for Applet Hosts

## When to use this

Netwrix Access Analyzer authenticates to each applet host using Kerberos with an automatically generated Service Principal Name (SPN). In environments where the applet host sits behind a proxy — or where applet services run under accounts whose SPNs don't match the default pattern — this automatic SPN will not exist in Active Directory and certificate exchange with the applet will fail.

Use custom SPN mapping to tell the scan which SPN to use when connecting to each applet host.

![Applet Setting Certificate Exchange Options](/images/accessanalyzer/12.0/admin/datacollector/fsaa/appletsettingscertificateexchangeoptions.webp)

## Before you begin


1. Identify the correct SPN for each execution host that needs an override. Verify the SPN is registered in Active Directory and that the scan account can authenticate against it:

```
   setspn -Q <spn>
```


2. Create a table the scan's SQL connection can read, containing at minimum the applet host name and its SPN. Example:

```sql
   CREATE TABLE dbo.FSAAAppletSPN (
       Host NVARCHAR(255) NOT NULL PRIMARY KEY,
       SPN  NVARCHAR(512) NOT NULL
   );

   INSERT INTO dbo.FSAAAppletSPN (Host, SPN) VALUES
       ('fileserver01.contoso.com', 'HOST/proxy01.contoso.local'),
       ('fileserver02.contoso.com', 'HOST/proxy02.contoso.local');
```

## Configure the mapping


1. Open **Netwrix Access Analyzer** and edit the scan job.
2. In the job wizard, go to the **Applet** page.
3. Under **SPN Mapping**, check **Enable SPN mapping**.
4. Click **Configure Query**.
5. Enter a SQL query that returns the columns `Host` and `SPN`. You can either filter the results by scan target using the `@host` parameter, or omit the parameter and return the full mapping for all applet hosts.

![FSAA Data Collector SPN Mapping Query](/images/accessanalyzer/12.0/admin/datacollector/fsaa/SPNMappingQuery.webp)

   **Filter by scan target** — useful when the mapping table contains entries for many scan targets and you only want to return the one relevant to the current job:

   ```sql
   SELECT Host, SPN
   FROM   dbo.FSAAAppletSPN
   WHERE  Host = @host
   ```

   **Return all mappings** — useful when a single table serves multiple jobs, or when the applet host differs from the scan target (for example, when scanning through a proxy where the `@host` value wouldn't appear in the mapping table):

   ```sql
   SELECT Host, SPN
   FROM   dbo.FSAAAppletSPN
   ```
![FSAA Data Collector SPN Mapping Query Result](/images/accessanalyzer/12.0/admin/datacollector/fsaa/SPNMappingQueryresult.webp)

6. Click **OK**, then finish the wizard to save the job.

   The next time the job runs, Access Analyzer will use the SPN your query returns for each matching applet host. If an applet host has no matching row, Access Analyzer uses the default SPN (DNS resolved FQDN).

   ## Query requirements

* The query must return columns named `Host` and `SPN` (aliases are allowed, e.g. `SELECT ServerName AS Host, …`).
* The `@host` parameter is available if you want to filter by scan target, but it's optional — if your query doesn't reference it, Access Analyzer will use every row returned.
* Host matching is case-insensitive.
* Host name format must be consistent. The format used in the table (FQDN, short name, or IP address) must exactly match the format used for the execution host. For example, if the execution host is configured using a fully qualified domain name (FQDN), then the FQDN must also be used in the table — don't mix formats (e.g., don't use a short hostname in the table when the execution host uses an FQDN)


## Troubleshooting

| Problem | What to check |
|---------|---------------|
| *Query must contain Host column / SPN column* | ensure your `SELECT` returns **BOTH COLUMNS** with those names (or with aliases). |
| *Error getting mapping query results* | Run the query manually using the job's SQL credentials to confirm it's valid and the table is accessible. |
| Certificate exchange still fails after enabling the mapping | Verify the SPN is registered in AD (`setspn -Q <spn>`) and that the scan account can authenticate as it. |

## Turning it off

To return to the default SPN behavior, clear the **Enable SPN mapping** checkbox and save the job. Access Analyzer retains your query so you can re-enable the feature later without re-entering it.
