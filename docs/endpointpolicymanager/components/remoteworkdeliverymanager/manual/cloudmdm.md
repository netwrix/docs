---
title: "Remote Work Delivery Manager with Endpoint Policy Manager Cloud and MDM Services"
description: "Remote Work Delivery Manager with Endpoint Policy Manager Cloud and MDM Services"
sidebar_position: 70
---

# Remote Work Delivery Manager with Endpoint Policy Manager Cloud and MDM Services

Netwrix Endpoint Policy Manager (formerly PolicyPak) Remote Work Delivery Manager works with
Endpoint Policy Manager Cloud like all other Endpoint Policy Manager components. But there is a
special way to make policies from within Endpoint Policy Manager Cloud. Additionally, Endpoint
Policy Manager Remote Work Delivery Manager works perfectly with your MDM service to keep files
automatically updated on endpoints. We'll explore both of these options in the following sections.

## Remote Work Delivery Manager and Endpoint Policy Manager Cloud Lite Policies

:::note
For a video showing how to create and use Endpoint Policy Manager Cloud Lite policies with
Endpoint Policy Manager Remote Work Delivery Manager, watch:
[Deploy software with Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/methods/cloud.md).
:::


You may recall from other components' manuals that you must always do the following:

- Create a policy within the GPMC from an on-prem computer (usually a DC or computer joined to a DC)
- Export the policy from the GPO into an XML
- Upload the policy into Endpoint Policy Manager Cloud

If you wish to deliver standard policies and web policies, this workflow is still required. After
the policy is created, you can click the policy, and select Show Policy Settings to see the result
of the policy you just created.

## Remote Work Delivery Manager and MDM Services

:::note
See
[Copy files and keep them up to date with your MDM service](/docs/endpointpolicymanager/components/remoteworkdeliverymanager/videos/methods/mdm.md)for additional
information on how to use Endpoint Policy Manager Remote Work Delivery Manager and your MDM service
to keep files up to date
:::


You get a special superpower when using Endpoint Policy Manager Remote Work Delivery Manager with
your MDM service. Specifically, you can make and deliver a policy one time, which will deliver one
or more files and will keep them updated. By itself, your MDM service has no way to deliver just one
file, or multiple files. But with Endpoint Policy Manager Remote Work Delivery Manager you are able
to pre-stage your files on a file service of your choice, like Amazon S3 or a ZIP file. Then, you
can make a web policy to deliver that file, which will periodically look for changes and make sure
those changes are made automatically on endpoints. For instance, if you created a web policy, and
used a .zip file, then you can select **Archived folder**.

![pprwdm_with_policypak_cloud](/images/endpointpolicymanager/remoteworkdelivery/pprwdm_with_endpointpolicymanager_cloud.webp)

![pprwdm_with_policypak_cloud_1](/images/endpointpolicymanager/remoteworkdelivery/pprwdm_with_endpointpolicymanager_cloud_1.webp)

Next, specify the overwrite mode.

![pprwdm_with_policypak_cloud_2](/images/endpointpolicymanager/remoteworkdelivery/pprwdm_with_endpointpolicymanager_cloud_2.webp)

After the Endpoint Policy Manager Remote Work Delivery Manager policy setting is delivered one time
using your MDM service, all you need to do is update the ZIP file as needed. Endpoint Policy Manager
keeps those files updated on your endpoints.


