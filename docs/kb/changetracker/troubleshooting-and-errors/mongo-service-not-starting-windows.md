---
description: >-
  After installing Netwrix Change Tracker, the MongoDB service may fail to
  start with a "Logon Failure" message. Updating the Visual C++
  Redistributable Packages on the system resolves the issue.
keywords:
  - MongoDB
  - Mongo service
  - Visual C++
  - Redistributable
  - Netwrix Change Tracker
  - Windows service
  - Logon Failure
  - installation
  - service not starting
  - troubleshooting
  - Windows
  - could not start
knowledge_article_id:
products:
  - change-tracker
sidebar_label: Mongo Service Not Starting on Windows
tags: [kb, troubleshooting-and-errors]
title: Mongo Service Not Starting on Windows Installation
---

This article explains how to resolve the MongoDB service failing to start after a fresh installation of Netwrix Change Tracker on Windows.

## Symptom

After installing Netwrix Change Tracker for the first time, you are able to reach the logon page but receive a "Logon Failure" message when attempting to access Netwrix Change Tracker. The MongoDB service is stopped, and attempting to start it produces the following error:

`Windows could not start the MongoDB service on Local Computer`

<!-- Image removed: Screenshot showing the Windows service error when attempting to start the MongoDB service -->

## Cause

The system is missing the required Visual C++ Redistributable Packages that MongoDB depends on to run.

## Resolution

Update the Visual C++ Redistributable Packages on the system.

1. Download the latest Visual C++ package from the [Microsoft Visual C++ Redistributable download page](https://www.microsoft.com/en-gb/download/details.aspx?id=48145).
2. Install the C++ package. No reboot is required.
3. Start the MongoDB service.
