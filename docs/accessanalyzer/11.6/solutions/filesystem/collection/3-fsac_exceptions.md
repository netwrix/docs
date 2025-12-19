---
title: "3-FSAC Exceptions Job"
description: "3-FSAC Exceptions Job"
sidebar_position: 110
---

# 3-FSAC Exceptions Job

The 3-FSAC Exceptions job is designed to analyze collected access information for exceptions.

## Parameter Configuration

The Configuration section on a Job's overview page allows you to easily modify any customizable
parameters used by analysis tasks in the job. See the
[Parameter Configuration](/docs/accessanalyzer/11.6/admin/jobs/job/overview.md#parameter-configuration)
topic for instructions on how to edit parameters on a job overview page.

The 3-FSAC Exceptions job has many customizable parameters. See the
[Customizable Analysis Tasks for the 3-FSAC Exceptions Job](#customizable-analysis-tasks-for-the-3-fsac-exceptions-job)
topic for information on these.

## Analysis Tasks for the 3-FSAC Exceptions Job

View the analysis tasks by navigating to the **FileSystem** > **0.Collection** > **3-FSAC
Exceptions** > **Configure** node and select **Analysis**.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the 3-FSAC Exceptions Job](/images/accessanalyzer/11.6/solutions/filesystem/collection/fsacexceptionsanalysis.webp)

The following analysis tasks are selected by default:

- Unusual share activity – Share exceptions for unusual volumes (spikes) of activity
- First time access to share – Recent share access by users for the first time
- Sensitive data activity – Recent access to sensitive content
- Unusual peer group share activity – Spikes in interdepartmental activity
- Unusual binaries activity – First time user activity performed on binaries
- Unusual user activity – Spikes in activity by user
- Unusual user sensitive data activity – Spikes in sensitive data activity by user
- Ransomware – Spikes in updates by user
- Unusual user stale data activity – Spikes in stale data activity by user

While it is possible to deselect particular tasks as specified, it is not recommended. The following
analysis tasks are deselected by default:

- Show view – Displays the SA_FSAC_ExceptionsView within the Results node of the Enterprise Auditor
  Console
- Show users view – Displays the SA_FSAC_UserExceptionsView within the Results node of the
  Enterprise Auditor Console

### Customizable Analysis Tasks for the 3-FSAC Exceptions Job

Customizable parameters enable users to set the values used for classification during the job’s
analysis. The 3-FSAC Exceptions job contains the following customizable parameters:

| Analysis Task                        | Customizable Parameter Name | Default Value | Value Indicates                                                                 |
| ------------------------------------ | --------------------------- | ------------- | ------------------------------------------------------------------------------- |
| Unusual share activity               | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Unusual share activity               | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Unusual share activity               | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Unusual share activity               | @PEOPLE                     | 10            | Minimum amount of people for user activity exception                            |
| Unusual share activity               | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Unusual share activity               | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Unusual share activity               | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operation count exception     |
| Unusual share activity               | @TRUSTEESTDDEVS             | 3             | Multiples of standard deviation required to be a user volume exception          |
| Unusual share activity               | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a file activity volume exception |
| First time access to share           | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| First time access to share           | @MINDAYS                    | 30            | minimum amount of days a share needs to determine access                        |
| Sensitive data activity              | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Unusual peer group share activity    | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Unusual peer group share activity    | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Unusual peer group share activity    | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Unusual peer group share activity    | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Unusual peer group share activity    | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Unusual peer group share activity    | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operation count exception     |
| Unusual peer group share activity    | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a file activity volume exception |
| Unusual binaries activity            | @DATE_CUTOFF                | 7             | From the current time, how many days to look back when considering exceptions   |
| Unusual user activity                | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Unusual user activity                | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Unusual user activity                | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Unusual user activity                | @SHARES                     | 10            | Minimum amount of shares for share activity exception                           |
| Unusual user activity                | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Unusual user activity                | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Unusual user activity                | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operations exception          |
| Unusual user activity                | @GATESTDDEVS                | 3             | Multiples of standard deviation required to be a share exception                |
| Unusual user activity                | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a resource count exception       |
| Unusual user sensitive data activity | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Unusual user sensitive data activity | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Unusual user sensitive data activity | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Unusual user sensitive data activity | @SHARES                     | 10            | Minimum amount of shares for share activity exception                           |
| Unusual user sensitive data activity | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Unusual user sensitive data activity | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Unusual user sensitive data activity | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operations exception          |
| Unusual user sensitive data activity | @GATESTDDEVS                | 3             | Multiples of standard deviation required to be a share exception                |
| Unusual user sensitive data activity | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a resource count exception       |
| Ransomware                           | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Ransomware                           | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Ransomware                           | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Ransomware                           | @SHARES                     | 10            | Minimum amount of shares for share activity exception                           |
| Ransomware                           | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Ransomware                           | @DAYS                       | 7             | Amount of days to generate exceptions for from today                            |
| Ransomware                           | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operations exception          |
| Ransomware                           | @GATESTDDEVS                | 3             | Multiples of standard deviation required to be a share exception                |
| Ransomware                           | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a resource count exception       |
| Unusual user stale data activity     | @WEEKS                      | 3             | Minimum data points required for analysis                                       |
| Unusual user stale data activity     | @THROWAWAY                  | 1             | When calculating averages throw away the top N%                                 |
| Unusual user stale data activity     | @EVENTS                     | 10            | Minimum amount of events for operations exception                               |
| Unusual user stale data activity     | @SHARES                     | 10            | Minimum amount of shares for share activity exception                           |
| Unusual user stale data activity     | @FILES                      | 10            | Minimum amount of files for resource count exception                            |
| Unusual user stale data activity     | @DAYS                       | 7             | The amount of days to generate exceptions for from today                        |
| Unusual user stale data activity     | @EVENTSTDDEVS               | 3             | Multiples of standard deviation required to be an operations exception          |
| Unusual user stale data activity     | @GATESTDDEVS                | 3             | Multiples of standard deviation required to be a share exception                |
| Unusual user stale data activity     | @FILESTDDEVS                | 3             | Multiples of standard deviation required to be a resource count exception       |
| Unusual user stale data activity     | @STALETHRESHOLD             | 365           | Number of days after which resources are considered stale                       |

See the
[Configure the Customizable Parameters in an Analysis Task](/docs/accessanalyzer/11.6/admin/jobs/job/configure/analysis/analysiscustomizableparameters.md)
topic for additional information on modifying analysis parameters.
