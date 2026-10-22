---
title: "Reset USN values after changing domain controllers"
description: "Reset the stored update sequence number (USN) values for a domain so the product resynchronizes after you point it to a different domain controller."
sidebar_position: 30
---

Netwrix Privilege Secure for Discovery reads one domain controller (DC) for each domain. It stores the highest update sequence number (USN) that it has read from Active Directory, and on each synchronization it asks only for objects with a higher `uSNChanged` value. USN values don't replicate between DCs, so each DC has its own numbers.

When you point a domain to a different DC and the new DC has a lower USN than the stored value, the product asks for objects above a number that the new DC hasn't reached. It misses group and computer changes, and access that depends on the changed groups stops updating.

The product resets the stored values itself when it fails over to another DC of the domain after the configured DC stops responding. You reset them yourself only when you change the DC of a domain in **Configure** > **Server**. The nightly full synchronization doesn't correct the problem, because it reads all objects but doesn't update the stored USN values.

To force a full resynchronization, set the stored USN values of the domain to zero. When the highest stored USN is zero, the next synchronization reads all directory data for the domain and stores the USN values of the new DC. Run the procedure during a maintenance window, because the first synchronization takes longer than usual.

## Prerequisites

- Shell access with `sudo` rights to a node of the deployment.
- The NetBIOS name of each domain that you changed the DC for.

## Reset the USN values for a domain

1. Open a database shell on a node:

   ```bash
   s1 db
   ```

   On a cluster, use the options that [Open the MongoDB shell](../admin/maintenance/open-the-mongodb-shell.md) describes.

1. Display the current USN values for all domains:

   ```javascript
   db.secureone_config.find(
     { type: "ldap_config" },
     { _id: 0, domain_netbios: 1, "sync.previous_usn": 1, "sync.highest_usn": 1 }
   )
   ```

   The output lists one document for each domain, for example:

   ```text
   [
     {
       sync: { previous_usn: 2405725, highest_usn: 2405725 },
       domain_netbios: 'EXAMPLE'
     }
   ]
   ```

1. Set both values to zero for one domain. Replace `<NETBIOS-NAME>` with the value of `domain_netbios` from the previous step:

   ```javascript
   db.secureone_config.updateOne(
     { type: "ldap_config", domain_netbios: "<NETBIOS-NAME>" },
     { $set: { "sync.highest_usn": NumberInt(0), "sync.previous_usn": NumberInt(0) } }
   )
   ```

   A successful update returns `matchedCount: 1` and `modifiedCount: 1`.

1. Run the command from step 2 again and confirm that `highest_usn` and `previous_usn` are `0` for the domain.
1. Repeat steps 3 and 4 for each domain that you changed the DC for.
1. Exit the shell:

   ```javascript
   exit
   ```

After the next synchronization, run the command from step 2 in a new shell session. The `highest_usn` value is now the current USN of the new DC. To follow the synchronization, see [View application logs](./application-logs.md).
