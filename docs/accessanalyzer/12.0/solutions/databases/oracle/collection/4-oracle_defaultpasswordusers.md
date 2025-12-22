---
title: "4-Oracle_DefaultPasswordUsers Job"
description: "4-Oracle_DefaultPasswordUsers Job"
sidebar_position: 50
---

# 4-Oracle_DefaultPasswordUsers Job

The 4-Oracle_DefaultPasswordUsers Job provides a list of users in the database that are configured
to use default passwords.

## Query for the 4-Oracle_DefaultPasswordUsers Job

The 4-Oracle_DefaultPasswordUsers Job uses the SQL Data Collector for the following query:

![Query Selection](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/jobgroup17.webp)

- Users with Default Passwords – Collects usernames of users whose passwords have not been updated
  since the database creation

### Configure the 4-Oracle_DefaultPasswordUsers Query

The 4-Oracle_DefaultPasswordUsers Job is preconfigured to run using the default settings for the
Permissions Collection category in the SQL Data Collector. Follow the steps to customize
configurations:

**Step 1 –** Navigate to the **Databases** > **0.Collection** > **Oracle** >
**4-Oracle_DefaultPasswordUsers** > **Configure** node and select Queries.

**Step 2 –** In the Query Selection view, select the Users with Default Passwords query and click on
Query Properties. The Query Properties window opens.

**Step 3 –** Select the Data Source tab and click Configure. The SQL Data Collector wizard opens.

:::warning
Do not make changes to wizard pages not listed in these steps. They have been
pre-configured for this job.
:::


![Filters Page](/images/accessanalyzer/12.0/solutions/databases/oracle/collection/4oracledefaultpasswordsfilterpage.webp)

**Step 4 –** To query for specific databases/instances, navigate to the Filter page. The default
query target is All Databases. The default query scope is Only select database objects. Click
Retrieve. The Available database objects section will be populated. Databases and instances can be
added in the following ways:

- Select the desired database objects and click Add
- Use the Import CSV button to import a list from a CSV file, if desired
- Optionally, use the Add Custom Filter button to create and apply a custom filter

**Step 5 –** Navigate to the Summary page, click Finish to save any setting modifications or click
Cancel if no changes were made. Then click OK to close the Query Properties window.

The 4-Oracle_DefaultPasswordUsers Job is now ready to run with the customized settings.
