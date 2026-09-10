---
title: "Uploading the Script and Package"
description: "Uploading the Script and Package"
sidebar_position: 20
---

# Uploading the Script and Package

To deploy the Endpoint Protector Client, upload the `EndpointProtectorClient2608.2.1.3.pkg` package along with the
`epp_change_ip.sh` script.

:::note
`EndpointProtectorClient2608.2.1.3.pkg` is an example filename. Always download and deploy the
latest available EPP Client version.
:::

:::warning
To obtain the `epp_change_ip.sh script`, customers should submit a support ticket
through the [Netwrix Customer Portal](https://www.netwrix.com/sign_in.html?rf=my_products.html).
:::


To upload the script and package, follow these steps:

**Step 1 –** In your Jamf account, from the main navigation bar, click **Settings**, and then select
**Computer Management**, then **Scripts**.

**Step 2 –** From the Scripts section, in the upper right, click **+ New**.

**Step 3 –** On the General section, add a name for the profile, and then select the **Script tab**
and paste the content of the `epp_change_ip.sh` script.

**Step 4 –** Add your Server IP to the EPP_SERVER_ADDRESS field.

:::note
You can edit the EPP_DEPARTMET CODE and EPP_SERVER_PORT fields to deploy the Endpoint
Protector Client on specific departments or custom ports.
:::


![Uploading the new Script.](newscript.webp)

**Step 5 –** From the Computer Management section, select **Package** and then, in the upper right,
click **+ New**.

**Step 6 –** On the General tab, add a name and then upload the package `EndpointProtectorClient2608.2.1.3.pkg`.

![Uploading the new Package](newpackage.webp)
