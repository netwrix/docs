---
title: "Importing reports"
description: "Import PingCastle reports into PingCastle Pro manually or through an agent."
sidebar_position: 30
---

# Importing reports

PingCastle Pro lets administrators consult all report data and make decisions. You can import reports for a maximum of five different domains. See [License](../../requirements/license.md).

:::note
You can't yet launch scans directly from the application, so you must launch the PingCastle tool in standalone mode and then import the reports it produces.
:::

There are two ways to import reports.

## Import a file manually

1. From the **Configuration** tab, open **Import one or more reports**.
2. Drag and drop any file the PingCastle standalone executable produces. It uploads to PingCastle Pro.

After the upload finishes, PingCastle Pro marks the file with either a success or a failure. For a failure, hover over the item to display the associated error message.

![](/images/pingcastlepro/4.1/prouser/image10.webp)

![](/images/pingcastlepro/4.1/prouser/image11.webp)

## Import automatically with an agent

Agent mode uploads reports from the PingCastle standalone executable with an API key. Get the key from **Configuration** > **Agents**, then run PingCastle with the `--api-endpoint` and `--api-key` options. See [Agent deployment](../../configuration/agent-deployment.md) for how to create the key, build the command line, and import existing reports in bulk.

The Agents page also has a link to browse the API.
