---
title: "License settings"
description: "License settings"
sidebar_position: 30
---

# License settings

## What are license settings?

Licenses for the Netwrix Password Secure are managed within the license settings. In addition, all
current license details are displayed in the window provided for this purpose.

![License settings](/images/passwordsecure/9.2/configuration/server_manager/main_menu/installation_with_parameters_262-en.webp)

## Licenses

**CAUTION:** Version 7 licenses cannot be used for Netwrix Password Secure version 9. “Please
contact us”: http: //www.passwordsafe.de to obtain a version 9 license.

Licenses are linked via the Netwrix license server. Here are the details:

- license.passwordsafe.de
- IP: 13.74.32.103
- Port 443 TCP (standard HTTPS port)

Ensure that this server is accessible. You may also use Proxy servers. The license is retrieved from
the server and stored in the server configuration. The license will be checked every hour, and
updated as required. The retention time is 30 days. If there is no internet connection, you can
continue to work for 30 days. If this period should cause problems, please contact us.

#### Integrating and managing licenses

After purchase, you will receive the required license information in the form of “customer name” and
“password”. Enter this information directly into the License Server Access area. Use the Select and
Activate button to establish a connection to the license server. You can select the acquired
licenses from a list. The license can be now used.

NOTE: Optionally, you may specify a proxy. By default, the proxy stored in the operating system is
used.

**CAUTION:** The licence is called up in the context of the service user. If you experience
connection problems, the firewall and, if relevant, the proxy should be checked.

#### How to activate the license via license file

1. Transition the file attached to this email to the Netwrix Password Secure Server(s).
2. Open the Netwrix Password Secure Server Manager.
3. Open the main menu and select the License settings area.
4. Open the License file tab.
5. Click Upload license file.
   ![license_file_tab](/images/passwordsecure/9.2/configuration/server_manager/main_menu/license_file_tab.webp)
6. Select the file from this email and then click Open.
   ![activated_license](/images/passwordsecure/9.2/configuration/server_manager/main_menu/activated_license.webp)
