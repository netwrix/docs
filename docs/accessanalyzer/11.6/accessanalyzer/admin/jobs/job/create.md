# Create a New Job

Follow the steps to create a new job.

![Create Job from Jobs Tree context menu](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/jobs/job/createjob.webp)

**Step 1 –** Select the Jobs tree or the desired job group to add the new job to. Right-click and
select **Create Job**.

![New Job added to Jobs Tree](/img/versioned_docs/accessanalyzer_11.6/accessanalyzer/admin/navigate/newjob.webp)

**Step 2 –** Provide a unique, descriptive name for the job. The default name is `NewJob`. Some
considerations for naming conventions:

**CAUTION:** Do not end a job name with a space.

- There can never be two jobs with the same name. Enterprise Auditor automatically appends a numeral
  to the end of a job name to avoid duplicates, for example `NewJob1`.
- No special characters can be used. See the Microsoft
  [Naming Conventions](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
  article for limitations.
- Jobs in a group are run alphanumerically
- When possible, keep names short to avoid report path errors caused by Microsoft’s maximum path
  length. See the Microsoft article referenced above.

The new job is now ready to be configured. See the
[Data Collectors](/docs/accessanalyzer/11.6/accessanalyzer/admin/datacollector/overview.md),
[Analysis Modules](/docs/accessanalyzer/11.6/accessanalyzer/admin/analysis/overview.md),
[Action Modules](/docs/accessanalyzer/11.6/accessanalyzer/admin/action/overview.md),
and [Reporting](/docs/accessanalyzer/11.6/accessanalyzer/admin/report/overview.md)
topics for additional information.
