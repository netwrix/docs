---
title: "How can I use a checksum to validate the Endpoint Policy Manager download?"
description: "How can I use a checksum to validate the Endpoint Policy Manager download?"
sidebar_position: 40
---

# How can I use a checksum to validate the Endpoint Policy Manager download?

In the portal you will see a SHA256 checksum for each download.

:::note
This is only for BUILD ISO/ ZIPs and not available for other items such as XML guidance or
scripts.
:::


After you download the software, use the build-in windows command line to validate the SHA256
checksum.

![912_1_image001_950x439](/images/endpointpolicymanager/cloud/912_1_image001_950x439.webp)

An example would be:

`certutil -hashfile endpointpolicymanager-Software-Build-3155.zip SHA256`

and/or

`certutil -hashfile endpointpolicymanager-Software-Build-3155.iso SHA256`

:::note
You must put the SHA256 at the end, or the command is interpreted as SHA1, which will
produce a different result.
:::


![912_2_image002_950x217](/images/endpointpolicymanager/cloud/912_2_image002_950x217.webp)

