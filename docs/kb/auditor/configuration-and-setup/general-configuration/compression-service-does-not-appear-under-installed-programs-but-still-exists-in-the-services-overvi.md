---
description: >-
  After uninstalling the Netwrix Compression Service, it may disappear from the
  Control Panel's Programs and Features while remaining in the Services
  Overview. This article explains how to remove the leftover service and its
  files manually.
keywords:
  - compression service
  - uninstall
  - services overview
  - Programs and Features
  - sc delete
  - Windows Services
  - Netwrix Compression Service
products:
  - auditor
sidebar_label: Compression Service Not in Installed Programs
tags: []
title: >-
  Compression Service Does Not Appear Under Installed Programs but Still Exists
  in The Services Overview
knowledge_article_id: kA0Qk0000000R53KAE
---

# Compression Service Does Not Appear Under Installed Programs but Still Exists in The Services Overview

## Symptom

After uninstallation of Netwrix Compression Service, it does not appear under **Programs and Features** in the Control Panel, but still exists in the **Services Overview**.

## Cause

Compression service components were not completely removed during uninstallation.

## Resolution

You can manually delete the Service and its components. For that:

1. Open the **Services** snap-in and open properties of the problematic service.
2. Copy the full name of the service and the path to executable, for example, to a **Notepad** document.  
   ![User-added image]./../0-images/ka0Qk0000001hxN_0EMQk000002u2KX.png)
3. Run the command prompt as administrator and run the following command:

   ```bat
   sc delete <service_name>
   ```

   where the `<service_name>` is the full name of the service you copied on the step 2.
4. After that, navigate to the file path you copied earlier and delete all the files.



