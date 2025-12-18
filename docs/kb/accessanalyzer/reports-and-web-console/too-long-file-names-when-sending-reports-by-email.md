---
description: >-
  This article explains how to resolve the "path too long" error when emailed
  reports fail to compile by enabling long paths or shortening/moving job files
  for Netwrix Access Analyzer.
keywords:
  - long paths
  - LongPathsEnabled
  - registry
  - file path length
  - email report
  - scheduled task
  - 260 characters
  - 248 characters
products:
  - access-analyzer
sidebar_label: Too Long File Names when Sending Reports by Email
tags:
  - reports-and-web-console
title: "Too Long File Names when Sending Reports by Email"
knowledge_article_id: kA04u000000HDiKCAW
---

# Too Long File Names when Sending Reports by Email

## Symptom

The emailed report fails to compile on successful job completion.
The following error message appears:

```
"Error in sending an email: The specified path, file name, or both are too long. The fully qualified file name must be less than 260 characters, and the directory name must be less than 248 characters."
```

## Cause

Long paths are not enabled on host. This error is relevant only for file paths to job files exceeding 248 characters as stated in the error message.

## Solution

The error can be resolved by performing one of the following steps:

- Enable longer paths by editing the registry key `Computer\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\FileSystem\LongPathsEnabled`. For additional information, refer to the following Microsoft article: https://learn.microsoft.com/en-us/windows/win32/fileio/maximum-file-path-limitation?tabs=registry. Group Policy Objects and other security functions might prevent the modification of the key.

- Shorten the name of the job file path or the job file itself to under 248 characters; this will also enable the report compilation.

- Move the job file to a higher-level folder; this will resolve the error depending on the length of the name of each folder.

When moving the job file or renaming the folder, make sure to verify and edit the scheduled task to match the current job file location.

Once you introduce the changes, you should be able to rerun the job or regenerate the report to test.
