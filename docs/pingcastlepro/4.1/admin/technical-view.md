---
title: "Technical view"
description: "Use the technical view to explore domain audit data in PingCastle Pro."
sidebar_position: 20
---

# Technical view

The technical view, named **Audit data** in the application, shows the PingCastle report for a domain you imported.

:::note
PingCastle Pro supports a maximum of five different domains. See [License](../requirements/license.md).
:::

## Select a domain

If you imported reports for more than one domain, Audit data first shows a table of those domains. Select the domain you want to view.

## Report tabs

After you select a domain, the page displays its data on several tabs.

**Last report**

![](/images/pingcastlepro/4.1/prouser/image5.webp)

This tab gives access to the full detail of the last report, though the page doesn't show it.

**History**

![](/images/pingcastlepro/4.1/prouser/image6.webp)

**Timeline**

![](/images/pingcastlepro/4.1/prouser/image7.webp)

The timeline shows the following events.

Domain event:

A domain changed within a specific perimeter in PingCastle Pro. It can be a domain that a user added, a domain discovered after importing a report, a status change, and so on.

Risk event:

The risks PingCastle Pro follows changed. It either means that the solution discovered a new risk that the user should follow, or that a risk has cleared and that the overall level of security improved. It can also mean that someone set a risk to an exception status.

Trust event:

The trust between several monitored domains changed. It implies that someone established a new trust between two domains, deleted an existing trust between two domains, or modified an existing trust.

Technical event:

A significant technical change modified the global level of security, but the existing rules don't yet cover it. This is a very rare event, and you're unlikely to see it.

**Cartography**

![](/images/pingcastlepro/4.1/prouser/image8.webp)
