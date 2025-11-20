---
title: "How to get signature info from pkg installer?"
description: "How to get signature info from pkg installer?"
sidebar_position: 20
---

# How to get signature info from pkg installer?

Open a terminal window and run the command:

`pkgutil --check-signature /path/to/package.pkg`

example output for '`SkypeForBusinessInstaller-16.29.0.72.pkg`':

Package "`SkypeForBusinessInstaller-16.29.0.72.pkg`":

Status: signed by a developer certificate issued by Apple for distribution

Signed with a trusted timestamp on: 2021-10-18 17:33:10 +0000

Certificate Chain:

1. Developer ID Installer: Microsoft Corporation (UBF8T346G9)

   Expires: 2023-05-16 04:46:41 +0000

   SHA256 Fingerprint:

   6A 66 CD 33 B5 5B 9C 14 86 02 29 09 DB 7E 00 85 53 11 29 6B CE 11

   9F 2A 93 5C 69 BF 56 3A 79 82

   ***

2. Developer ID Certification Authority

   Expires: 2027-02-01 22:12:15 +0000

   SHA256 Fingerprint:

   7A FC 9D 01 A6 2F 03 A2 DE 96 37 93 6D 4A FE 68 09 0D 2D E1 8D 03

   F2 9C 88 CF B0 B1 BA 63 58 7F

   ***

3. Apple Root CA

   Expires: 2035-02-09 21:40:36 +0000

   SHA256 Fingerprint:

   B0 B1 73 0E CB C7 FF 45 05 14 2C 49 F1 29 5E 6E DA 6B CA ED 7E 2C

   68 C5 BE 91 B5 A1 10 01 F0 24

In this example, you can pull signed details in three ways:

![909_1_image-20230406154820-1](/images/endpointpolicymanager/cloud/install/mac/909_1_image-20230406154820-1.webp)

**Step 1 –** CN=Developer ID installer: Microsoft Corporation (UBF8T346G9)

![909_2_image-20230406155008-2](/images/endpointpolicymanager/cloud/install/mac/909_2_image-20230406155008-2.webp)

**Step 2 –** OU=UBF8T346G9

![909_3_image-20230406155059-3](/images/endpointpolicymanager/cloud/install/mac/909_3_image-20230406155059-3.webp)

**Step 3 –** O=Microsoft Corporation

To get this information refer to this example of how to pull these details.


