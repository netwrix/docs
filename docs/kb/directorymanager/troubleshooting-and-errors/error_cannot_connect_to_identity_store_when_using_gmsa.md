---
description: >-
  This article addresses the error "Cannot connect to identity store" when using Group Managed Service Accounts (gMSA) in Directory Manager, detailing the symptoms, causes, and resolutions.
keywords:
  - gMSA
  - Identity Store
  - Directory Manager
  - authentication error
  - SQL Server
  - Cannot connect to identity store
  - SSPR_IdentityStoreValue
  - iisreset
  - SecurityService
  - domain-qualified format
  - password
sidebar_label: "Error: Cannot Connect to Identity Store"
tags:
  - kb
  - troubleshooting-and-errors
title: "Error: Cannot Connect to Identity Store When Using gMSA"
knowledge_article_id: kA0Qk0000002djdKAA
products:
  - directorymanager
---

# Error: Cannot Connect to Identity Store When Using gMSA

## Related Queries

- "Directory Manager 11 EntraID replication always runs from scratch"
- "Replication does not use stored timestamps to perform delta updates"
- "Getting delta Groups from server. ShouldGetObjectsFromScratch = True"

## Symptom

You may observe the following when this issue occurs:

- Group Managed Service Account (gMSA) initially connects successfully to the Identity Store in Netwrix Directory Manager, but shortly afterward a `Cannot connect to identity store` error appears.
- Identity store settings in the UI become greyed out and inaccessible.

## Cause

Directory Manager improperly handles the password value in the database. When using gMSA, Directory Manager erroneously stores a password string in the `SSPR_IdentityStoreValue` table. Since gMSAs do not use static passwords, this stored value causes authentication to fail.

## Resolution

1. Open SQL Server Management Studio and run the following query, replacing `<PasswordAttributeID>` with the actual password field ID:

   ```sql
   SELECT * FROM SSPR_IdentityStoreValue WHERE AttributeID = <PasswordAttributeID>;
   ```

   Example broken record:

   | AttributesValueID | IdentityStoreID | AttributeID | AttributeValue |
   |--------------------|------------------|-------------|-----------------|
   | 3                  | 2                | 2           | 0AA##0PV7#ayMdKyDlK3yyacs=p/4xL3vHhY438M8BlHsVUyFR+... |

2. Clear the stored password by running:

   ```sql
   UPDATE SSPR_IdentityStoreValue 
   SET AttributeValue = NULL 
   WHERE AttributeID = <PasswordAttributeID>;
   ```

3. In Directory Manager, update the Identity Store configuration to use the gMSA (for example, `gmsagroupid$`).

4. Restart the following services:
   - Recycle the **Directory Manager SecurityService**.
   - Run `iisreset` from an elevated command prompt.
   - (Optional) Restart the server to ensure a clean environment.

5. When prompted, enter credentials in the full domain-qualified format:

   ```plaintext
   DOMAIN\gmsaAccount$
   ```

   > **NOTE:** Using only `gmsagroupid$` may fail. You must specify the full domain format after a reset.

## Additional Notes

- Regular service accounts may work without the domain prefix.
- gMSA accounts require the full format: `DOMAIN\account$`.
- Clear any stored password in SQL.
- Use the full domain-qualified format for the gMSA account.
- Restart all relevant services after making changes.