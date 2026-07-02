---
description: >-
  Shows how to fix the Rolling-Log error "HubDetails - Crypto error. Has the
  agent process account changed since the password data was entered?" by
  repairing the HubDetails.xml file used by the Netwrix Change Tracker agent.
keywords:
  - HubDetails.xml
  - Crypto error
  - CryptographicException
  - agent process account
  - gen7agent
  - Rolling Log
  - Key not valid
  - Netwrix Change Tracker
  - agent service
  - password encryption
  - hub connection
  - troubleshooting
knowledge_article_id: ka0Qk000000DlabIAC
products:
  - change-tracker
sidebar_label: HubDetails Crypto Error
tags: [kb, troubleshooting-and-errors]
title: >-
  Rolling-Log Fix: "HubDetails - Crypto Error. Has the Agent Process Account
  Changed Since the Password Data Was Entered?"
---

This article explains how to resolve the `HubDetails - Crypto error` in the Netwrix Change Tracker agent Rolling Log by repairing the `HubDetails.xml` file.

## Symptom

The following error appears in the agent Rolling Log, typically followed by additional messages indicating the application is shutting down:

```text
2019-01-04 07:02:35,644 [4] ERROR HubDetails - Crypto error. Has the agent process account changed since the password data was entered?
System.Security.Cryptography.CryptographicException: Key not valid for use in specified state.

2019-01-04 07:02:35,675 [4] ERROR ConfigurationLoader - Hub details cannot be read successfully from: C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml. Error: Key not valid for use in specified state.
2019-01-04 07:02:35,675 [4] INFO  Message - Application core shutting down due to error, please restart service: Hub details cannot be read successfully from: C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml. Error: Key not valid for use in specified state.
2019-01-04 07:02:35,691 [4] INFO  Message - Application starting shutdown due to: FatalError - Hub details cannot be read successfully from: C:\ProgramData\NNT\gen7agent.app.netcore\HubDetails.xml. Error: Key not valid for use in specified state.
```

## Cause

The information in the `HubDetails.xml` file cannot be decrypted by the current agent service account. Each agent must locally encrypt the password entered into the `HubDetails.xml` file. This error commonly occurs when copying a `HubDetails.xml` file from one agent to another to simplify installation — the password encrypted on the source machine cannot be decrypted on the destination machine.

<!-- Image removed: Screenshot showing the encrypted password data in the HubDetails.xml file -->

## Resolution

If you are receiving this error, the agent is not reporting to your hub. This is a critical error and monitoring will not continue until it is resolved.

1. Stop the **Netwrix ChangeTracker Gen7 Agent NetCore** service.

   On Linux:

   ```bash
   service nntgen7agentcore stop
   ```

2. Navigate to the agent service data folder:
   - **Windows:** `C:\ProgramData\NNT\gen7agent.app.netcore`
   - **Linux:** `/var/nnt/gen7agent.app.netcore/`

3. Delete all files in this folder **except** for the `HubDetails.xml` file.

4. Edit the `HubDetails.xml` file using a text editor such as Notepad (Windows) or Nano (Linux).

5. Remove the entire line containing the `<E1>` tags.

   <!-- Image removed: Screenshot showing the E1 encrypted password tags to remove from HubDetails.xml -->

6. Replace the password element with the following, substituting your actual agent password:

   ```xml
   <Password>Enter-Password-Here</Password>
   ```

7. Confirm that the `HubDetails.xml` file contains the proper information in the correct format.

   <!-- Image removed: Screenshot showing a correctly formatted HubDetails.xml file -->

   For more information about the `HubDetails.xml` file, refer to the [Agent HubDetails File](/docs/changetracker/8_2/install/agent/hubdetailsfile) documentation.

8. Start the **Netwrix ChangeTracker Gen7 Agent NetCore** service.

   On Linux:

   ```bash
   service nntgen7agentcore start
   ```

9. Check the Rolling Log to verify the agent was able to read the information and connect to the hub.

   <!-- Image removed: Screenshot showing successful agent connection in the Rolling Log -->

10. You can also confirm that the device is registered via the Netwrix Change Tracker web console.

    <!-- Image removed: Screenshot showing the device registered in the Netwrix Change Tracker web console -->
