---
title: "How do I license machines to work on-premise if I'm an Endpoint Policy Manager Cloud Customer?"
description: "How do I license machines to work on-premise if I'm an Endpoint Policy Manager Cloud Customer?"
sidebar_position: 10
---

# How do I license machines to work on-premise if I'm an Endpoint Policy Manager Cloud Customer?

## Legacy Endpoint Policy Manager Cloud Monthly or Early Custemers:

When clients consume licenses from Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud, they
automatically pick up Group Policy as well (for free). In other words, if you're a Endpoint Policy
Manager Cloud customer, you don't need to also license the machine for on-premise. Being able to use
Group Policy as the settings delivery mechanism is automatic, because the client has consumed the
cloud license. This way, you get a free on-premise (Group Policy Edition) license (automatically)
when a client has consumed a license with Endpoint Policy Manager Cloud (and continues to check in
within the check-in period.)

## Endpoint Policy Manager Professional and Endpoint Policy Manager Enterprise Edition Customers:

In this case, your Universal License key will have to be enabled for the Group Policy Method. You
will not have the ability to automatically enable the Group Policy method when being licensed via
Endpoint Policy Manager Cloud.

## Endpoint Policy Manager SaaS / Cloud Only Customers:

Here you cannot use Endpoint Policy Manager Cloud to enable the Group Policy Method. If you wish to
enable the Group Policy Method, you need to transition from Endpoint Policy Manager SaaS to Endpoint
Policy Manager Enterprise Edition or Endpoint Policy Manager Professional Edition. You can still
manage Active Directory joined machines, but you must use the Endpoint Policy Manager Cloud delivery
mechanism to perform the operation, and not Active Directory / GPO.

