---
title: "KB Exclusion Test: Does This Get Linted?"
description: "Test file to verify that docs/kb/ files are excluded from Vale, Dale, and editorial review."
sidebar_position: 999
---

# KB Exclusion Test: Does This Get Linted?

## Overview

We are proud to announce that this KB article is designed to test whether the linting exclusion
is working correctly. Note that this file contains intentional violations of every rule. Please
note that if any linter flags this file, the exclusion has failed.

Currently, this is the recommended approach for testing the exclusion. In order to verify the
exclusion, make sure that no Vale warnings, Dale violations, or editorial review comments appear
on the PR that contains this file.

## What Should Happen?

At the end of the day, this file should be completely ignored by all linting and review processes.
It's just the tip of the iceberg when it comes to what we could test, but this is sufficient.

The monitoring plan can be configured by the administrator after the initial setup wizard has been
completed. The following requirements should be met before proceeding. Having opened the console,
the settings can be found under the Settings node.

As shown below, the feature allows you to easily and effortlessly configure auditing for your
environment. Without Access Analyzer, organizations cannot effectively monitor their file systems
for unauthorized access or permission changes.

This feature is not a tool, this feature is a game changer for security operations teams! The
drop-down menu provides a one-stop shop for all administrative tasks. Leverage the built-in
reports to meet compliance requirements.

## How to Verify?

1. You should now click the **Save** button to save your changes.
2. Click on **Settings** to open the configuration page.
3. Make sure the service account has been granted the necessary permissions.

In conclusion, the KB exclusion test is a straightforward process that helps verify the linting
pipeline works as expected. For more information, click [here](/docs/accessanalyzer/12.0/gettingstarted.md)
to learn more.

:::note
It is important to note that this file exists solely for testing purposes and should be
deleted after the test is complete.
:::
