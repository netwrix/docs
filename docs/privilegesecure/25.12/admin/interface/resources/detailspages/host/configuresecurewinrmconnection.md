---
title: "Configure Secure WinRM Connection Window"
description: "Configure Secure WinRM Connection Window"
sidebar_position: 20
---

# Configure Secure WinRM Connection Window

Follow the steps to configure secure WinRM connection for the selected host:

**Step 1 –** Navigate to the Resources page.

**Step 2 –** Select the resource(s) to modify.

**Step 3 –** Click the **WinRM Config** button.

![winrmconfig](/images/privilegesecure/25.12/accessmanagement/admin/policy/window/resources/winrmconfig.webp)

**Step 4 –** Perform the following steps:

- Choose certificate source – Select the source to apply the certificate for the secure WinRm
  connection to the desired host resource. The following options are available:

    - Import certificate from host;
    - Push NPS certificate to host;
    - Generate a new self-signed certificate .

- Select a certificate – Provide a certificate thumbprint.

:::note
This option is applicable to the host and NPS certificates. If you selected a new
self-signed certificate option, it will be generated automatically and imported to Netwrix Privilege
Secure.
:::


**Step 5 –** Click **Submit**.

Secure WinRM connection has been configured for the selected host.
