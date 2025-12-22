---
description: >-
  Instructions to install individual features from the Netwrix Auditor installer
  by extracting and running the feature MSI files from the temporary unpack
  directory.
keywords:
  - Netwrix Auditor
  - install features
  - MSI
  - '%temp%'
  - RarSFX0
  - Modules
  - installation wizard
  - adcrfull
  - fscrfull
products:
  - auditor
sidebar_label: How to install individual features for Netwrix Aud
tags: []
title: "How to install individual features for Netwrix Auditor"
knowledge_article_id: kA00g000000H9VtCAK
---

# How to install individual features for Netwrix Auditor

When you run the **Netwrix Auditor** installation wizard, you can check the Windows temporary files directory to install separate features.

## Steps

1. Open the **Netwrix Auditor** installation executable.
2. When it asks if you want to **Unpack**, click **Yes**.
3. Leave the main installation wizard window open.
4. Go to the ` %temp% ` folder or the local temp directory for the currently logged in user.
5. Open the folder named `RarSFX0`.
6. Open the **Modules** folder.
7. Here you will find setup msi files for each of the features (adcrfull, fscrfull, iutfull, etc).
8. Run the specific MSI for the feature you need to install.
9. After you have installed the feature(s) you want, you can close the **Netwrix Auditor** installation wizard.
