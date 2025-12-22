---
title: "Exceptions Report"
description: "Exceptions Report"
sidebar_position: 30
---

# Exceptions Report

The Exceptions report at the on-premise farm and online instance levels provides a list of
exceptions that were found within the selected farm/instance. This report includes a Details table.

![Exceptions report at the on-premise farm and online instance levels](/images/accessinformationcenter/12.0/resourceaudit/sharepoint/farminstance/instanceexceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
access and permissions granted to stale or disabled users. This report will be blank if no
exceptions were found on the selected farm/instance. It is comprised of the following columns:

- Server Name – Single server name representing the entire SharePoint on-premise farm or SharePoint
  Online instance
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the server

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists
