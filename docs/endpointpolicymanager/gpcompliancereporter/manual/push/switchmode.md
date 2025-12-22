---
title: "Switching from Standalone Mode to Server Mode within the Client"
description: "Switching from Standalone Mode to Server Mode within the Client"
sidebar_position: 20
---

## Switching from Standalone Mode to Server Mode within the Client

**Step 1 –** When you are ready to start using the server, click the options icon in the upper right
corner of the GPCR window. Then select "Server mode (Pull Mode or Push Mode using Audit)," and
provide the remote server IP and remote server port. Then, click "OK." Note that local storage
becomes unavailable at this point because multi-user mode is enabled. Restart the Endpoint Policy
Manager GPCR client (admin console) to start using Endpoint Policy Manager GPCR in multi-user mode
as shown in Figure 40.

![gpcr_server_with_push_mode_4](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_4.webp)

Figure 40. Switching to server mode.

**Step 2 –** If, after switching to server mode, you receive the error shown in Figure 41, that
means the server is not found or is not responding. For troubleshooting, see the section "Tuning and
Troubleshooting."

![gpcr_server_with_push_mode_5](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/push/gpcr_server_with_push_mode_5.webp)

Figure 41. The server connection error.

