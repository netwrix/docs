---
title: "Copying and Pasting Valid Endpoint Policy Manager Items"
description: "Copying and Pasting Valid Endpoint Policy Manager Items"
sidebar_position: 20
---

# Copying and Pasting Valid Endpoint Policy Manager Items

When using the Endpoint Policy Manager Exporter, you can select Add Existing Files to bring in files
to an MSI. In addition to this option, you can also select Paste XMLdata from Clipboard instead of
first exporting items as files from the MMC editor. You can see the general steps for this option
below.

![policypak_exporter_tips_tricks_3](/images/endpointpolicymanager/mdm/tips/endpointpolicymanager_exporter_tips_tricks_3.webp)

**Step 1 –** As for Group Policy Preference item content, you can right-click the content inside the
Group Policy Preferences editor, and select Display XML. As shown below, the first line must always
be `<?xml version="1.0" encoding="utf-8"?>`

**Step 2 –** Click to the end of that line, and then click Enter.

**Step 3 –** Paste your Group Policy Preference item, omitting the initial dash that Internet
Explorer includes in order to make it easier to read.

**Step 4 –** Click **Validate**. If successful, the **Validate** button will change to Save.

![policypak_exporter_tips_tricks_4](/images/endpointpolicymanager/mdm/tips/endpointpolicymanager_exporter_tips_tricks_4.webp)

