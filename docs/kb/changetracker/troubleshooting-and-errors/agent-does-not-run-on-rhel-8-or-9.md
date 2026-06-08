---
description: >-
  Resolving an issue where the Netwrix Change Tracker agent cannot start on
  RHEL 8 or 9 due to default cryptographic policy changes, by applying a
  custom subpolicy.
keywords:
  - change tracker agent
  - RHEL 8
  - RHEL 9
  - crypto policies
  - GEN7AGENT.pmod
  - SHA1
  - update-crypto-policies
  - RSA-SHA1
  - NetCore Agent
  - crypto policy subpolicy
products:
  - change-tracker
sidebar_label: Agent Does Not Run on RHEL 8 or 9
tags:
  - kb
  - troubleshooting-and-errors
title: Change Tracker Agent Does Not Run on RHEL 8 or 9
knowledge_article_id: ""
---

# Change Tracker Agent Does Not Run on RHEL 8 or 9

## Symptom

Affected versions:

- Netwrix Change Tracker NetCore Agent — version 7.0.1.9-255 and later

Error on agent service startup:

```text
[1] INFO Message - Application core shutting down due to error, please restart service:
This license is invalid. Please see servicestack.net or contact team@servicestack.net for more details.
The id for this license is '<id>'
```

## Cause

The Change Tracker agent cannot run due to cryptographic policy changes that Red Hat Enterprise Linux (RHEL) 8 or 9 applies by default.

## Resolution

1. On the RHEL server hosting the Change Tracker agent, open the terminal and navigate to the crypto policies modules directory:

   ```bash
   cd /usr/share/crypto-policies/policies/modules
   ```

2. Create a new file called `GEN7AGENT.pmod` and open it:

   ```bash
   touch GEN7AGENT.pmod
   vi /usr/share/crypto-policies/policies/modules/GEN7AGENT.pmod
   ```

3. Add the following lines to the file:

   ```text
   # This subpolicy adds SHA1 hash and signature support

   hash = SHA1+

   sign = RSA-SHA1+
   ```

4. Apply the updated crypto policy:

   ```bash
   update-crypto-policies --set DEFAULT:GEN7AGENT
   ```

5. Reboot the RHEL system hosting the agent.

The Change Tracker agent should run after you apply the subpolicies.
