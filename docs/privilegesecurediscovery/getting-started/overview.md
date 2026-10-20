---
title: "Getting started with Privilege Secure for Discovery"
description: "Learn what Privilege Secure for Discovery does, its key concepts, and how a typical rollout proceeds."
sidebar_position: 10
---

:::warning[Needs dev input: remove before publishing]
TODO: Confirm the sidebar path names Insight > Computer and Access > Grant Access that the onboarding pages use are unchanged at 26.09.1. Evidence: Access > Grant Access found in docker/web/common/access/views/accessView.html; Insight > Computer not verified.

TODO: Confirm the rollout order (scan, add users, protect a test system, then bulk onboarding) is the recommended sequence for 26.09.1. Evidence: none.
:::

Netwrix Privilege Secure for Discovery finds privileged accounts on Windows and Linux systems and removes standing administrator access. Users request just-in-time access when they need it, so privileged access exists only for the time a task requires. This page introduces the key concepts and the steps of a typical rollout.

## Key concepts

**Scan mode**

Scan mode reads a system to discover which accounts and groups have administrator access. Scan mode doesn't change anything on the system. Run scan mode first to understand your current exposure.

**Protect mode**

Protect mode manages the local administrator group on a system. Protect mode removes accounts that aren't marked persistent from the system and stores them in Privilege Secure for Discovery, which grants them back only when needed.

**Just-in-time access (JITA)**

With JITA, a user requests administrator access to a system for a limited time. The user must also be a member of an Active Directory (AD) group that is allowed to access the system. Privilege Secure for Discovery doesn't change Active Directory.

**Persistent accounts**

A persistent account stays on the system and doesn't require a JITA request. Set service accounts to persistent so that software continues to work after a system enters protect mode.

**Offline Access Management (OAM)**

OAM maintains a local administrator account on a system, with a password that Privilege Secure for Discovery manages and rotates. Use it when a user can't reach Privilege Secure for Discovery, for example during a network outage. See [Offline access management](../admin/systems/offline-access-management.md).

## Typical rollout

A rollout moves from visibility to enforcement in stages.

1. Plan the deployment. Decide whether to use a single node or a three-node cluster, and decide how to recover from a serious failure. See [High availability and disaster recovery](./high-availability-and-disaster-recovery.md) and [Risk register](./risk-register.md).
2. Review the [requirements](../requirements/overview.md) and [install](../install/overview.md) the containers.
3. Add the domain and the service accounts. See [Add a domain](../configuration/domains-and-ad/add-a-domain.md) and [Service accounts](../requirements/service-accounts.md).
4. [Set up scan mode](../configuration/onboard-systems/set-scan-mode.md) and review the results on the [dashboard](../admin/dashboard.md).
5. [Add users to Privilege Secure for Discovery](../configuration/onboard-systems/add-users-to-privilege-secure.md) before you enable protect mode.
6. [Add the protect account to the local Administrators group](../configuration/onboard-systems/add-the-protect-account-to-local-administrators.md) on the systems to protect.
7. [Add a test system to protect mode](../configuration/onboard-systems/add-a-test-system-to-protect-mode.md) to confirm that just-in-time access works as expected.
8. [Add multiple systems to protect mode](../configuration/onboard-systems/add-multiple-systems-to-protect-mode.md). For a large deployment, use [bulk onboarding and reporting](../configuration/bulk-onboarding/bulk-onboarding-and-reporting.md).
9. Optionally, roll out protect mode one group at a time. See [Freeze mode](../configuration/onboard-systems/freeze-mode.md).

## Next steps

- [Architecture](./architecture.md): See the services that make up the product.
- [Requirements](../requirements/overview.md): Prepare hosts, network access, and accounts.
- [Install](../install/overview.md): Deploy the product.
