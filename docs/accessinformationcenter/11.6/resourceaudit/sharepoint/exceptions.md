---
title: "Exceptions Report"
description: "Exceptions Report"
sidebar_position: 20
---

# Exceptions Report

The Exceptions report at the **SharePoint** node provides a list of exceptions that were found
across the targeted SharePoint on-premise farms and SharePoint Online instances. This report
includes a Details table.

![Exceptions report at the SharePoint node](/images/accessinformationcenter/11.6/resourceaudit/sharepoint/exceptions.webp)

An exception is defined as a problem or risk to data governance security. Exceptions include open
access and permissions granted to stale or disabled users. This table will be blank if no exceptions
were found within the targeted farm/instance. This report is comprised of the following columns:

- Server Name – Single server name representing the entire SharePoint on-premise farm or SharePoint
  Online instance
- Name – Type of exception found
- Description – Description of the exception type
- Count – Number of this type of exception found on the farm/instance

There is one table at the bottom displaying Details for the selected exception:

- Trustee Name – Owner of the trustee account
- Path – Location of the resource where the exception exists
