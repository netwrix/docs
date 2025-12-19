---
title: "Can I use Endpoint Policy Manager Cloud to deliver certificates ?"
description: "Can I use Endpoint Policy Manager Cloud to deliver certificates ?"
sidebar_position: 10
---

# Can I use Endpoint Policy Manager Cloud to deliver certificates ?

It is possible to configure **Security Settings** > **Public Key Policies** as shown in this
example, by following thse steps:

**Step 1 –** Create a real GPO.

![663_1_q10-img-1](/images/endpointpolicymanager/cloud/security/580_1_q10-img-1.webp)

**Step 2 –** Export it using PP Settings Manager to an XML. See the
[Endpoint Policy ManagerCloud: How to deploy Microsoft Group Policy Settings using Endpoint Policy Manager Cloud](/docs/endpointpolicymanager/deliverymethods/cloud/videos/gettingstarted/grouppolicysettings.md) topic
for additional information.

**Step 3 –** Uplaod it to Endpoint Policy Manager Cloud. This would make the specified cert Trusted
Root CA on the target machines.

:::note
It is not possible to deploy (example), a `.PFX` file, which is basically a cert + private
key. This is also not possible with Group Policy itself.
:::


In summary, anything that's in **GP Security Settings** > **Public Key Policies** is also possible
once you export, then deploy using PPCloud or Netwrix Endpoint Policy Manager (formerly PolicyPak)
MDM.

Inside the exported XML you can see the certificate embedded like this and ready for use.

![663_2_q10-img-2](/images/endpointpolicymanager/cloud/security/580_2_q10-img-2.webp)


