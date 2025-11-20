---
title: "How can I use Group Policy Compliance Reporter with multiple domains?"
description: "How can I use Group Policy Compliance Reporter with multiple domains?"
sidebar_position: 10
---

# How can I use Group Policy Compliance Reporter with multiple domains?

First – make sure you have GPCR implemented in the primary domain correctly.

## Group Policy Compliance Reporter Implementation

**Step 1 –** Make sure you have the latest download of Compliance Reporter, which you should have if
you recently downloaded the BITS from the portal

**Step 2 –** Pick a server where you want to run Compliance Reporter

**Step 3 –** Work through this video to install Compliance Reporter

- [Installing Compliance Reporter Server and Client](/docs/endpointpolicymanager/gpcompliancereporter/videos/gettingstarted/install.md)

**Step 4 –** Work through this video to setup Compliance Reporter and for machines to report in
(this is the Server version)

- [Setting up Client-less Endpoint Auditing (Push Mode with Server)](/docs/endpointpolicymanager/gpcompliancereporter/videos/gettingstarted/modepush.md)

## From within the videos above, here is a summary of some important steps:

Preparatory Steps (before installing GPCR)

**Step 1 –** Determine the AD Computer security group to be used

1. Used for 2 Purposes

   - for Server to Accept RSOP uploads
   - for ILT on the Scheduled Task GPO (optional)

**Step 2 –** Confirm that a shortname will work for Auditor path, recommend FQDN

1. Ie. Are you using DNS Suffix Search Lists in the primary domain and in other domains such that a
   shortname will resolve into its FQDN correctly
2. In most cases, its safer to use the FQDN of the GPCR server

**Step 3 –** Will we have access to Create GPO from Server or do we need to export

1. Ie. Will the account that the admin/engineer is logged into while using GPCR have
   access/permissions to create GPO's

**Step 4 –** Recommended to Import `ADMX` files (for troubleshooting, further configuration,
logging, etc.)

1. We have some Netwrix Endpoint Policy Manager (formerly PolicyPak) ADMX templates and among those
   are several settings specific to GPCR that allows for enabling additional logging and managing
   when and how often RSOP checkins occur
2. Recommend to have those imported to the domain Central Store of all domains to be available if
   needed

**Step 5 –** Understand pros and cons of doing all computers or just selections from certain sites
that are representative of the site and its population (and how the AD group plays into that)

1. In domains that have a few hundred to a low thousand and are all well connected in large
   locations, it is often ok to deploy the scheduled task GPO to all machines for all to check in
2. However for larger domains, and also when remote sites might be less well connected, having lower
   bandwidth, its recommended to identify segments of computers to be "representatives" of their
   population. That is, choose some number at a location to receive the GPO and be the
   representatives of what machines at that location are receiving.
   - This cuts down on bandwidth used and load on the server
3. The AD group created earlier can be used, by only having those computers desired as members.

## Overall Server Setup Steps (detailed in videos links above)

**Step 1 –** Install Server piece

- This is a Windows Service

**Step 2 –** Install Server Console

- Often on same server as server service, but could be another server as well

**Step 3 –** Configure Server settings via Console

1. Will need the AD Group created for this step
2. Will need the server name (shortname or FQDN) for this step
3. Will need to be able to create a GPO or export and import later for this step

![758_1_image-20200130171300-1_950x485](/images/endpointpolicymanager/grouppolicycompliancereporter/758_1_image-20200130171300-1_950x485.webp)

## Enabling Other Domains to connect to GPCR

**Step 1 –** Now that you have the server up and running in the primary domain, the following steps
are needed in each additional domain.

**Step 2 –** Copy the GPO you created (during step 3 above configuring server) from Domain 1 to
Domain 2 and deploy it there

1. Do a GPO Backup from Domain 1
2. Copy the Backup folder to a server on Domain 2
3. Restore GPO to Domain 2
4. This article describes the general process of backing up and restoring GPO's, specifically in the
   "About Backup and Import (between domains)" section -
   [https://www.policypak.com/pp-blog/backing-up-your-gpos-with-and-without-policypak-data-dont-get-burned](https://www.policypak.com/pp-blog/backing-up-your-gpos-with-and-without-policypak-data-dont-get-burned)

**Step 3 –** Create an AD group with the SAME NAME as the AD Group in Domain 1

**Step 4 –** Add computers in Domain 2 to the new Domain 2 AD Group

### NOTE – Why a Group in each Domain is Required

- Currently GPCR cannot innumerate members of a Domain Local group that are not in the same domain.
  Even with a two way forest trust in place
- Therefore the workaround as noted above is to create the corresponding local domain group of the
  same name as the primary GPCR domain

  ![758_3_image-20200130171300-2](/images/endpointpolicymanager/grouppolicycompliancereporter/758_3_image-20200130171300-2.webp)

