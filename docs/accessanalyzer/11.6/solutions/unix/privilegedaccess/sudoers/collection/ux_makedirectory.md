# UX_MakeDirectory Job

The UX_MakeDirectory job creates a temporary Enterprise Auditor directory on the target host to be
used by the UX_ParseSudoers job.

## Queries for the UX_MakeDirectory Job

The UX_MakeDirectory job uses the Unix Data Collector for the following query:

**CAUTION:** The query is preconfigured for this job. Never modify the query.

![Queries for the UX_MakeDirectory Job](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/solutions/unix/privilegedaccess/sudoers/collection/makedirectoryquery.webp)

- MakeDirectory – Makes a directory for the sudoers.pl file on the target host
