---
description: >-
  Steps to back up Netwrix Auditor components, including the Long-Term Archive
  and configuration file, with exact commands and locations to export the
  config.
keywords:
  - backup
  - Long-Term Archive
  - LTA
  - Netwrix Auditor
  - config export
  - configserverDbProcessor
  - naconfig.xml
  - restore
products:
  - auditor
sidebar_label: Backup Recommendations
tags: []
title: "Backup Recommendations"
knowledge_article_id: kA04u000000wniSCAQ
---

# Backup Recommendations

## Question

What are the recommended Netwrix Auditor components to be backed up on a regular basis?

## Answer

The minimum components to be backed up in Netwrix Auditor are the Long-Term Archive and the configuration file.

1. Create a separate folder for the Auditor backups − the `C:\NA_Backups\` path is used to reference the process, and it can be altered.
2. Back up the entire Long-Term Archive folder to `C:\NA_Backups\`.

> **NOTE:** Long-Term Archive is located in `\%ProgramData\%\Netwrix Auditor\Data` by default. You can establish the LTA location by following the main **Netwrix Auditor** menu > the **Settings** button > **Long-Term Archive** tab > **Write audit data to**.

3. Export the configuration file by running the following lines in elevated Command Prompt on your Netwrix Auditor server:

```text
cd C:\Program Files (x86)\Netwrix Auditor\Audit Core
configserverDbProcessor.exe export -target "C:\NA_Backups\naconfig.xml"
```

> **NOTE:** You can use any target path to export the config file to. Make sure to add the file name and extension (e.g., **naconfig.xml**) to the end of the export path.

4. Once the components are backed up, you can store them in any location to use once needed.

For additional information on import, refer to the following article: [Migrating Auditor to New Server](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/migrating-auditor-to-new-server).

## Related articles

- [Migrating Auditor to New Server](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/migrating-auditor-to-new-server)
- [How to Move Long-Term Archive to a New Location](/docs/kb/auditor/features-and-operations/glossaries-and-faqs/how-to-move-long-term-archive-to-a-new-location)
