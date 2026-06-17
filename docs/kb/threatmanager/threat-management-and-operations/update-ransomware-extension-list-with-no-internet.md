---
description: 'Shows how to update the ransomware extension list when the appliance has no internet access. Explains how to copy the CryptoBlocker KnownExtensions data to `filters.json` and increment `filters.metadata` to force reprocessing in Netwrix Threat Manager v2.8+.'
keywords:
- ransomware
- extensions
- filters.json
- filters.metadata
- offline update
- pydefend
- CryptoBlocker
- Netwrix Threat Manager
- KnownExtensions
products:
- threatmanager
sidebar_label: 'Update Ransomware Extension List with No Internet'
tags:
- kb
title: 'Update Ransomware Extension List with No Internet'
knowledge_article_id: kA04u0000000HuTCAU
---

# Update Ransomware Extension List with No Internet

## Question

How can I update the ransomware extension list when Netwrix Threat Manager has no internet access?

## Answer

### Netwrix Threat Manager v2.8+

1. Copy the raw data from the following link to a file named `filters.json`: [CryptoBlocker − Known Extensions · GitHub](https://raw.githubusercontent.com/DFFspace/CryptoBlocker/master/KnownExtensions.txt).

2. Copy the `filters.json` file to the following directory:

```text
C:\Program Files\STEALTHbits\StealthDEFEND\JobService\Python\pydefend\pydefend\data
```

3. Increment the version number in the `filters.metadata` file in `pydefend\data` to trigger reprocessing of existing files.
