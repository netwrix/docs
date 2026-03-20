---
title: "Group Membership Mapping"
description: "Transitive group membership resolution"
sidebar_position: 30
---

# Group Membership Mapping

Access Analyzer resolves transitive (nested) group memberships to build a complete picture of effective access.

## How It Works

The Active Directory connector collects:

1. **Direct memberships** — Users and groups that are immediate members of a group
2. **Nested memberships** — Groups that are members of other groups, creating a hierarchy

Access Analyzer flattens these hierarchies to determine **effective membership** — the complete list of groups a user belongs to, whether directly or through nesting.

## Impact on Access Analysis

Effective group memberships are mapped to entitlements discovered by source connector scans, enabling Access Analyzer to show:

- All groups that grant a user access to a resource
- Whether access comes from direct or nested group membership
- Overly permissive access through deeply nested group chains
