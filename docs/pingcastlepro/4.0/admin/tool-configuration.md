---
title: "Tool configuration"
description: "Manage exceptions and import data in the PingCastle Pro configuration view."
sidebar_position: 60
---

# Tool configuration (\"Configuration\")

The \"Configuration\" view of the PingCastle Pro application lets the
user set up the tool completely. In this view, the user can also
personalize settings so the tool better fits the company's needs.

## Exceptions management

This part lets an administrator configure PingCastle Pro so that it
adapts to the company's specific context. You can configure how
PingCastle Pro handles exceptions specific to your perimeter.

![](/images/pingcastlepro/4.0/prouser/image9.webp)

**Rule exceptions**

You can set \"rule exceptions\" to completely disable a rule
within a specific domain. This means PingCastle Pro doesn't apply this
rule for a period that you specify. Use this only
for very specific reasons, such as when a rule doesn't apply in
your organization. Contact the PingCastle editors if you have doubts or require extra assistance about exception management.

**Migration**

In the same way you can set exceptions for a specific domain, you can
inform the application when one of your domains is migrating. It
automatically applies a set of exceptions during the timetable of the
migration.

## Importing data

PingCastle Pro allows administrators to consult all report data and make decisions.

:::note
You can't yet launch scans directly from the application, so you must launch the PingCastle tool in standalone mode and then import the reports it produces.
:::

There are two ways to do so:

- Option 1: Importing the file manually

From the \"Configuration\" tab, open \"Import one or more reports.
On that page, you can drag and drop any file the
PingCastle standalone executable produces, and it uploads to the
PingCastle Pro solution.

After it's done, PingCastle Pro marks the file with either a success or
a failure.

In case of a failure, hovering over the item displays the associated error
message to help you upload the file.

Import **page**

![](/images/pingcastlepro/4.0/prouser/image10.webp)

![](/images/pingcastlepro/4.0/prouser/image11.webp)

- Option 2: Importing the file automatically through the Agent mode

From the \"Configuration\" tab, you first need to get an API key using
the \"Agents\" page and configure the PingCastle agent accordingly.

![](/images/pingcastlepro/4.0/prouser/image12.webp)

The first step is to create an Agent API key. Click the create button
to reach the creation page.

![](/images/pingcastlepro/4.0/prouser/image13.webp)

To map the agent to a responsible party, complete the Owner field. It
can be an entity or a domain, such as the \"default\" entity.

PingCastle Pro generates the API key automatically, but you can change it if it meets the
complexity requirements

After you set this up correctly, you can upload reports
automatically with the following command:

```bash
pingcastle --healthcheck --api-endpoint <endpoint> --api-key <key>
```

![](/images/pingcastlepro/4.0/prouser/image14.webp)

:::note
By default, PingCastle Pro filters all detailed information.
To avoid this behavior, change the command line as follows.
:::

```bash
pingcastle --healthcheck --api-endpoint <endpoint> --api-key <key> --level Full
```

You can browse the API using the link found on the agent page:

![](/images/pingcastlepro/4.0/prouser/image15.webp)
