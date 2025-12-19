---
title: "The Incorrect (non-matching) version of PPPUPDATE is installed on a PPC endpoint"
description: "The Incorrect (non-matching) version of PPPUPDATE is installed on a PPC endpoint"
sidebar_position: 190
---

# The Incorrect (non-matching) version of PPPUPDATE is installed on a PPC endpoint

## PROBLEM:

When running ` PPUPDATE` on an endpoint that is registered with Netwrix Endpoint Policy Manager
(formerly PolicyPak) Cloud the incorrect version of `PPUPDATE` is shown. The `PPUPDATE `version
displayed does not match the version of the Endpoint Policy Manager Client-Side Extension installed.

In the screenshots below the CSE version installed is 21.11.2984 but the PPUPDATE version is showing
as 20.1.2317.

![897_1_image-20220125020029-1](/images/endpointpolicymanager/troubleshooting/cloud/897_1_image-20220125020029-1.webp)

![897_2_image-20220125020029-2](/images/endpointpolicymanager/troubleshooting/cloud/897_2_image-20220125020029-2.webp)

## CAUSE:

The Endpoint Policy Manager Cloud Client has overwritten the `PPUPDATE` version with an older
version.

## RESOLUTION:

Try running a repair on the Endpoint Policy Manager CSE version using Programs and Features, and if
that does not work then reinstall the Endpoint Policy Manager CSE manually to fix the issue.


