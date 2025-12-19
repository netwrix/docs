---
description: >-
  This article addresses the error where the process cannot access the file `sadictionary_hashed_sorted.dat` due to it being used by another process, detailing symptoms, causes, and resolutions.
keywords:
  - Active Directory
  - file access error
  - password dictionary
sidebar_label: Process Access Error
tags: []
title: "Error: The Process Cannot Access sadictionary_hashed_sorted.dat Because It Is Being Used By Another Process"
knowledge_article_id: kA0Qk000000336DKAQ
products:
  - accessanalyzer
---

# Error: The Process Cannot Access sadictionary_hashed_sorted.dat Because It Is Being Used By Another Process

## Related Queries

- "Reports are not running, some time out."
- "The process cannot access the file `D:\Program Files (x86)\STEALTHbits\StealthAUDIT\Jobs\SA_CommonData\PasswordSecurity\Dictionaries\sadictionary_hashed_sorted.dat` because it is being used by another process."
- "Could not update dictionary: Dictionary signature failure: invalid match"

## Symptom

Several Active Directory–related jobs and reports (ccAD Scan, AD Changes, and AD Weak Passwords) fail to complete or time out. The job log contains a `System.IO.IOException` similar to the following:

```
The process cannot access the file 'D:\Program Files (x86)\STEALTHbits\StealthAUDIT\Jobs\SA_CommonData\PasswordSecurity\Dictionaries\sadictionary_hashed_sorted.dat' because it is being used by another process.
```

Attempts to update the password dictionary from the user interface also fail, and job runs show the dictionary file update activity in the logs without a successful update.

## Causes

- Concurrent worker threads are causing resource contention. The default value of 10 concurrent worker threads can allow multiple workers to attempt to access or update the same dictionary file simultaneously, resulting in a file lock and I/O exceptions.
- The dictionary file was locked by another process or a concurrent job, preventing the PasswordSecurity module from replacing or updating the file.
- In some cases, a corrupted or partially downloaded dictionary or a signature mismatch can also cause update failures.

## Resolution

Follow these steps to resolve the issue. After each change, re-run the failing job to confirm the problem is resolved.

> **IMPORTANT:** Before deleting or replacing system files, stop the job engine and take a backup copy of the file. Deleting system files while jobs or services are running can cause additional errors.

1. **Reduce Concurrent Worker Threads.**
   1. Open the **Netwrix Access Analyzer** (formerly Enterprise Auditor) administration console.
   2. Navigate to **Administration** > **Jobs Tree** > **Jobs**.
   3. Open the affected job, select the **Performance** tab, and set **Concurrent Worker Threads** to **1** (the default is 10). See the documentation: Job Properties: Performance ⸱ Netwrix Help Center 🡥.
   
2. **Stop Relevant Services or Jobs.**
   - Before modifying or deleting the dictionary file, stop the job engine or ensure the PasswordSecurity job is not running so the file is not in use.

3. **Delete and Replace the Locked Dictionary File.**
   1. Back up the existing dictionary file copy if needed.
   2. Delete the file at `D:\Program Files (x86)\STEALTHbits\StealthAUDIT\Jobs\SA_CommonData\PasswordSecurity\Dictionaries\sadictionary_hashed_sorted.dat`.
   3. In the Administration console, navigate to **Administration** > **Data Collectors** > **PasswordSecurity Data Collector** > **PasswordSecurity: Dictionaries** and click the **Query** button to update the dictionary from the console. See: PasswordSecurity: Dictionaries ⸱ Netwrix Help Center 🡥.
   4. If the console update fails, manually download and extract the dictionary file: [dictionary.zip ⸱ Stealthbits 🡥](https://downloads.stealthbits.com/access/files/Passwords/dictionary.zip). Replace the deleted file with the correct file from the archive.

4. **Verify Antivirus and Proxy Interference.**
   - Ensure antivirus or endpoint protection software is not scanning or locking the dictionaries folder. Follow the recommended exclusions: Antivirus Exclusions ⸱ Netwrix Help Center 🡥.
   - If dictionary downloads occur from the internet, confirm that proxy and SSL inspection appliances are not altering the files during download.

5. **Restart Services and Test.**
   1. Start the job engine or scheduled jobs you stopped earlier.
   2. Run the failing job (e.g., **AD_WeakPasswords**) and verify it completes successfully and that the dictionary file is updated in the logs.

## Related Links

- Job Properties: Performance ⸱ Netwrix Help Center 🡥
- PasswordSecurity: Dictionaries ⸱ Netwrix Help Center 🡥
- Antivirus Exclusions ⸱ Netwrix Help Center 🡥
- [dictionary.zip ⸱ Stealthbits 🡥](https://downloads.stealthbits.com/access/files/Passwords/dictionary.zip)