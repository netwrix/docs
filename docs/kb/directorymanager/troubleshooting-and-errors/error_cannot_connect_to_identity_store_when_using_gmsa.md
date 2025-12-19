---
description: >-
  This article addresses the error "Cannot connect to identity store" when using Group Managed Service Accounts (gMSA) in Directory Manager, detailing the symptoms, causes, and resolutions.
keywords:
  - gMSA
  - Identity Store
  - Directory Manager
  - authentication error
  - SQL Server
sidebar_label: Cannot Connect to Identity Store
tags:
  - troubleshooting-and-errors
title: "Error: Cannot Connect to Identity Store When Using gMSA"
knowledge_article_id: kA0Qk0000002djdKAA
products:
  - directory-manager
---

# Error: Cannot Connect to Identity Store When Using gMSA

## Related Queries

- "Directory Manager 11 EntraID replication always runs from scratch"
- "Replication does not use stored timestamps to perform delta updates"
- "Getting delta Groups from server. ShouldGetObjectsFromScratch = True"

## Symptom

- Group Managed Service Account (gMSA) initially connects successfully to the Identity Store in Directory Manager, but shortly afterward a **Cannot connect to identity store** error appears.
- Identity store settings in the UI become greyed out and inaccessible.

## Cause

This issue is caused by improper handling of the password value in the database:

- When using gMSA, Directory Manager erroneously stores a password string in the `SSPR_IdentityStoreValue` table.
- Since gMSAs do not use static passwords, this stored value causes authentication to fail.

## Resolutions

1. **Review the Database Table**  
   Open SQL Server Management Studio and run the following query:

   ```sql
   SELECT * FROM SSPR_IdentityStoreValue WHERE AttributeID = <PasswordAttributeID>;
   ```

   Replace `<PasswordAttributeID>` with the actual ID for the password field.

   Example record before fix:

   | AttributesValueID | IdentityStoreID | AttributeID | AttributeValue |
   |--------------------|------------------|-------------|-----------------|
   | 3                  | 2                | 2           | 0AA##0PV7#ayMdKyDlK3yyacs=p/4xL3vHhY438M8BlHsVUyFR+... |

2. **Clear the Stored Password**  
   Update the record to clear the encrypted password:

   ```sql
   UPDATE SSPR_IdentityStoreValue 
   SET AttributeValue = NULL 
   WHERE AttributeID = <PasswordAttributeID>;
   ```

3. **Reconfigure Identity Store to Use gMSA**  
   In the Directory Manager UI, update the Identity Store configuration to use the gMSA (for example, `gmsagroupid$`).

4. **Restart Services**  
   - Recycle the **Directory Manager SecurityService**.
   - Run `iisreset` from an elevated command prompt.
   - (Optional) Restart the server to ensure a clean environment.

5. **Re-enter Credentials Using Full Domain Format**  
   When prompted, use the full domain-qualified format:

   ```plaintext
   DOMAIN\gmsaAccount$
   ```

   > **NOTE:** Using only `gmsagroupid$` may fail. Specifying the full domain format is required after a reset.

## Additional Notes

- Regular service accounts may work without the domain prefix.
- gMSA accounts require the full format: `DOMAIN\account$`.
- Ensure any stored password in SQL is cleared.
- Use the full domain-qualified format for the gMSA account.
- Restart all relevant services after making changes.