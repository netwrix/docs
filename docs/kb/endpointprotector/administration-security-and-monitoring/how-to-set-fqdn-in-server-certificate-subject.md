---
description: >-
  Shows how to configure the server certificate subject to use the Fully
  Qualified Domain Name (FQDN) and how to regenerate the server certificate
  stack so the new subject takes effect.
keywords:
  - FQDN
  - server certificate
  - certificate regeneration
  - DPI certificate
  - MacOS
  - Endpoint Protector
  - certificate stack
  - regenerate
products:
  - endpointprotector
sidebar_label: Setting the FQDN in the Server Certificate Subject
tags:
  - administration-security-and-monitoring
  - kb
title: "Setting the FQDN in the Server Certificate Subject"
knowledge_article_id: kA0Qk0000002BB7KAM
---

# Setting the FQDN in the Server Certificate Subject

## Overview

You can set the Fully Qualified Domain Name (FQDN) in the server certificate subject on the **Server Certificate Stack** page. After you save the setting, regenerate the server certificate stack so the new subject takes effect.

## Instructions

Follow these steps to set the FQDN in the server certificate subject:

1. Go to **System Configuration > System Settings > Server Certificate Stack**.
2. Turn ON **Use FQDN in subject** (or **Generate Custom Server Certificate** if applicable).
3. Enter the desired FQDN in the appropriate field.
4. At the bottom of the page, click **Save** to apply the changes.
5. Verify that a confirmation message appears at the top of the page indicating the changes have been saved.
6. Click the **Regenerate** button in the **Regenerate Server Certificate Stack** section.
7. When prompted by the pop-up window, select **Yes** to confirm regeneration.
8. A green banner will appear at the top of the screen stating that the server certificate will be regenerated in a few minutes. The console logs you out of the user interface, and you must log in again.
9. Wait a few minutes until the certificate is regenerated.

![Server Certificate Stack configuration page with FQDN field highlighted](./../0-images/ka0Qk000000Dynx_0EMQk00000CKudS.png)

### Important Notes

- If you are using FQDN in the subject and a self-signed certificate, you must reimport the self-signed certificate after regenerating the server certificate stack.
- If the server certificate is regenerated, the Deep Packet Inspection (DPI) certificate will also be regenerated. You must reimport the new DPI certificate on all Mac machines.
- MacOS users must proceed with caution when performing these steps. If you regenerate the server certificate stack and do not upload the new DPI certificate, Mac machines may lose internet access.
- Use the same FQDN that your Endpoint Protector clients and single sign-on (SSO) integrations use to reach the server.
- If you are still experiencing issues, reach out to [Netwrix Support](https://www.netwrix.com/support.html).
