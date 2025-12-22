---
title: "Provision Salesforce Users' Profiles via SCIM"
description: "Provision Salesforce Users' Profiles via SCIM"
sidebar_position: 170
---

# Provision Salesforce Users' Profiles via SCIM

This guide shows how to provision a user's account profile in a Salesforce system with the SCIM
connector.

## Prerequisites

This guide supposes that you already have a working synchronization for Salesforce users' accounts,
entitlements and links between accounts and entitlements.

## Context

In Salesforce, both `profiles` and `permission sets` are in the `Entitlements` entity, whereas they
are not managed the same way: a user account must have a profile and only one, while it can have
zero to several permission sets.

This implies a difference of treatment based on the entitlement's `type`.

## Configuration

In order to handle this special case, Identity Manager expects, for now, a very precise
configuration. A generic configuration element will come soon to be able to customize and apply this
special treatment in other cases.

For now, for your `EntityType` representing Salesforce's `Entitlements` entity type, you need to
have an entity property with exactly `type` as identifier:

```

**<Property Identifier="type" DisplayName_L1="Type" TargetColumnIndex="13" Type="String" />**

```

And to map it in the `Entitlements` entity type mapping:

```

**<Property Identifier="type" ConnectionColumn="type" />**

```

That is all you need to do. With the next synchronization, all the entitlements will have their
`type` and then the special treatment can be done for those with the `Profile` type when
provisioning users' entitlements.
