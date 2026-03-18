---
title: "Logbook entries under Password Reset"
description: "Logbook entries under Password Reset"
sidebar_position: 70
---

# Logbook entries under Password Reset

Subsequently all possible logbook entries in connection with Password Reset are listed

The password reset first checks with the first script (via the heartbeat) whether the password is
correct:

| Logbook Type                   | Logbook Record |
| ------------------------------ | -------------- |
| Login data valid               | Container      |
| Login data invalid             | Container      |
| Check errors during login data | Container      |

Afterwards all scripts of the password reset are executed one after the other and the following
logbook entries are written:

| Logbook type          | Logbook record |
| --------------------- | -------------- |
| Execute               | Password Reset |
| Execute Rollback      | Password Reset |
| Execution Error       | Password Reset |
| Error during rollback | Password Reset |

If an attempt was made to perform a rollback, but the rollback cannot be performed because the old
password was incorrect before the reset, or the first script is of the type “user-defined”, the
following logbook entry is written:

| Logbook type          | Logbook record |
| --------------------- | -------------- |
| Error during rollback | Password Reset |

If a password reset has failed and an attempt is made to perform a rollback, the reset is blocked
for one day and the following logbook entry is written: (It does not matter if the rollback worked
or not)

| Logbook type           | Logbook record |
| ---------------------- | -------------- |
| Password Reset blocked | Password Reset |
