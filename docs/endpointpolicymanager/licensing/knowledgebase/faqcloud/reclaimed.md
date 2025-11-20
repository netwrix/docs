---
title: "What happens if PPCloud computers are offline for more than 7 days?"
description: "What happens if PPCloud computers are offline for more than 7 days?"
sidebar_position: 50
---

# What happens if PPCloud computers are offline for more than 7 days?

Netwrix Endpoint Policy Manager (formerly PolicyPak) Cloud licenses are automatically reclaimed back
into the pool of licenses when computers don't check in with Endpoint Policy Manager Cloud every 7
days.

When the computer comes back online, it checks with the Endpoint Policy Manager cloud service, and
then one of two things happens:

- If there are available licenses remaining in the pool, the computer simply re-consumes one of
  those licenses and Endpoint Policy Manager keeps working on that client machine.
- If there are no available licenses remaining in the pool, the computer will stop processing
  Endpoint Policy Manager Cloud directives.

So, in practice, if you have any available licenses in the Endpoint Policy Manager cloud pool, when
computers re-connect, they'll simply pick right back up again where they left off.

