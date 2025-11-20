---
title: "Can I embed the Endpoint Policy ManagerClient Side Extension and/or Endpoint Policy Manager Cloud client into a master image for VDI, MDT, Ghost, Citrix, etc?"
description: "Can I embed the Endpoint Policy ManagerClient Side Extension and/or Endpoint Policy Manager Cloud client into a master image for VDI, MDT, Ghost, Citrix, etc?"
sidebar_position: 100
---

# Can I embed the Endpoint Policy ManagerClient Side Extension and/or Endpoint Policy Manager Cloud client into a master image for VDI, MDT, Ghost, Citrix, etc?

There are some rules and guidelines and thoughts.

## For Endpoint Policy Manager Group Policy Edition:

Yes, you can place the Client Side Extension into an image. There is no "SID" or unique identifier
you need to worry about. Then when the machine is in a LICENSED OU, then at that time, the Client
Side Extension will activate.

After some time, you will need to keep the Client Side Extension up to date as we continue to make
improvements and fixes.

- If you are using VDI, you will have to keep the master image updated from time to time.
- If you're using standard machines you will have to use SCCM, PDQ Deploy, or Netwrix Endpoint
  Policy Manager (formerly PolicyPak)'s own auto-updater mechanism. You can see this in action in
  this video ([Auto-updating the CSE](/docs/endpointpolicymanager/installation/videolearningcenter/methodgpoandad/autoupdate.md)) and read more about it in
  Appendix Book A in the Endpoint Policy Manager Manuals.

## For Endpoint Policy Manager Cloud Edition:

Before we explain what you can and cannot do, here's a quick reminder of what happens when you use
Endpoint Policy Manager Cloud. You use your company's Endpoint Policy Manager Cloud MSI which
installs the Endpoint Policy Manager Cloud Client, consumes a Endpoint Policy Manager Cloud license,
and then installs the latest Endpoint Policy Manager Client Side Extension (or whatever the Client
Side Extension level you have set the GROUP membership to, as explained in this video:
[Endpoint Policy Manager Cloud Groups CSE and Cloud Client Small-Scale Testing and Updates](/docs/endpointpolicymanager/deliverymethods/cloud/videos/upkeepanddailyuse/groups.md))

You cannot pre-install the Endpoint Policy Manager Cloud client, because future machines based upon
the image will get confused and NOT consume a new license from Endpoint Policy Manager Cloud.

You CAN however, pre-install the Endpoint Policy Manager Client Side Extension (which typically
happens automatically after the Endpoint Policy Manager Cloud client is installed.) But there's
really no point, unless you want to save a little time or a little bandwidth. Note that if the
Client Side Extension version you hand-install is less than the version in your Endpoint Policy
Manager Cloud Group… then the updated Client Side Extension is simply automatically downloaded via
the Endpoint Policy Manager Cloud group version.

## For Endpoint Policy Manager MDM Edition:

You CAN embed the Endpoint Policy Manager Client Side Extension into an image. There is no "SID" or
unique identifier you need to worry about. Then when the machine acquires a Endpoint Policy Manager
MDM license and is enrolled by a valid UPN then the Client Side Extension will activate.

After some time, you will need to keep the Client Side Extension up to date as we continue to make
improvements and fixes.

We recommend you simply use your MDM solution to deploy the Endpoint Policy Manager Client Side
Extension update. When older CSEs are found they are nicely and automatically updated.

## Other notes about the CSE:

You CAN pre-install the Endpoint Policy Manager Cloud Client in VDI or standard machines and then
have it work. If you want to use Endpoint Policy Manager with VDI, you must follow the steps in one
of the knowledgebase articles directly below, or use the Endpoint Policy Manager Group Policy
Edition and license an on-prem domain / OU.

[How to install the Endpoint Policy Manager Cloud Client for use in an Azure Virtual Desktop image](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttips/azurevirutaldesktop.md)

[How to install and configure the PPC Client for a Non-Persistent VDI Image in VMware Horizon](/docs/endpointpolicymanager/deliverymethods/cloud/knowledgebase/clienttips/vdisolutions.md)

While it will technically work, you are expressly forbidden by the EULA to attempt to install the
Endpoint Policy Manager Cloud client (which will install the Endpoint Policy Manager Client Side
Extension) to a Citrix machine that hosts multiple users. This is because Endpoint Policy Manager
Cloud sees this as ONE consumed license; where you would need to pay licensing fees for each
concurrent connection. The only time this is permissible is with an express written agreement
between your company and Endpoint Policy Manager where we both agree that you are doing this.

