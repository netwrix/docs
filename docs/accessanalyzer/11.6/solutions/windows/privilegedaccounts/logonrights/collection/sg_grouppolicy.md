# SG_GroupPolicy Job

The SG_GroupPolicy job collects policy assignments from all targeted servers. The following policy
assignments are audited:

- Allow log on locally
- Log on as a batch job
- Allow log on through Remote Desktop Services
- Log on as a service

## Queries for the SG_GroupPolicy Job

The SG_GroupPolicy job uses the GroupPolicy Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the SG_GroupPolicy Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/activedirectory/grouppolicy/grouppolicyquery.webp)

The query for the SG_GroupPolicy job is:

- GroupPolicy – Collects group policy information
