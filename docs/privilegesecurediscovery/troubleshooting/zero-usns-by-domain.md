---
title: "Reset USN values after changing domain controllers"
description: "Reset the stored update sequence number (USN) values for a domain so the product resynchronizes group changes after you point it to a new domain controller."
sidebar_position: 30
---

:::warning[Needs dev input: remove before publishing]
TODO: Verify the procedure on MongoDB 8.0 with mongosh, including that `s1 db` opens a shell on the SecureONE database and that NumberInt(0) is accepted. Evidence: docker/s1tool/src/s1.py:1098-1105 (`s1 db`); not run against 8.0.

TODO: Confirm that setting sync.highest_usn to 0 still triggers a full resynchronization with the svc-sync service. Evidence: docker/CHANGELOG.md:537 describes the behavior for the former ldapsync service only.

TODO: Decide whether to provide a menu-driven script for this procedure in the container deployment. The former script (appliance paths and the legacy mongo shell) was removed.

TODO: Confirm whether a UI action now replaces this procedure. Evidence: none.
:::

Privilege Secure for Discovery reads one domain controller (DC) for each domain and uses the update sequence number (USN) values from Active Directory to detect group changes. USN values don't replicate between DCs. When you point the product to a different DC and the new DC has a lower USN, the product doesn't detect group changes, and access that depends on the changed groups stops updating.

![Domain configuration page where the domain controller is changed](/images/privilegesecure/4.2/discovery/admin/systemmanagement/4405051526935_image_384x376.webp)

To force a full resynchronization of the directory data, reset the stored USN values to zero after you change the DC. Run the procedure during the next maintenance window.

## Prerequisites

- Shell access with `sudo` rights to a node of the deployment.
- The NetBIOS name of each domain that you changed the DC for.

## Reset the USN values for a domain

1. Open a database shell on a node:

   ```bash
   sudo s1 db
   ```

2. Display the current USN values for all domains:

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
       domain_netbios: 'EXAMPLE',
       sync: { previous_usn: 2405725, highest_usn: 2405725 }
     }
   ]
   ```

3. Set both values to zero for one domain. Replace `<NETBIOS-NAME>` with the value of `domain_netbios` from the previous step:

   ```javascript
   db.secureone_config.updateOne(
     { type: "ldap_config", domain_netbios: "<NETBIOS-NAME>" },
     { $set: { "sync.highest_usn": NumberInt(0), "sync.previous_usn": NumberInt(0) } }
   )
   ```

   A successful update returns `matchedCount: 1` and `modifiedCount: 1`.

4. Run the command from step 2 again and confirm that `highest_usn` and `previous_usn` are `0` for the domain.

5. Repeat steps 3 and 4 for each domain that you changed the DC for.

6. Exit the shell:

   ```javascript
   exit
   ```

Resetting the values makes the next synchronization read all directory data for the domain, so the first synchronization takes longer than usual.
