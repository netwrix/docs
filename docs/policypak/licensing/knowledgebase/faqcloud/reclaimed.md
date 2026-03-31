---
title: "What happens if PPCloud computers are offline for more than 7 days?"
description: "What happens if PPCloud computers are offline for more than 7 days?"
sidebar_position: 50
---

# What happens if PPCloud computers are offline for more than 7 days?

Netwrix PolicyPak Cloud licenses are automatically reclaimed back
into the pool of licenses when computers don't check in with PolicyPak Cloud every 7
days.

When the computer comes back online, it checks with the PolicyPak cloud service, and
then one of two things happens:

- If there are available licenses remaining in the pool, the computer simply re-consumes one of
  those licenses and PolicyPak keeps working on that client machine.
- If there are no available licenses remaining in the pool, the computer will stop processing
  PolicyPak Cloud directives.

So, in practice, if you have any available licenses in the PolicyPak cloud pool, when
computers re-connect, they'll simply pick right back up again where they left off.

