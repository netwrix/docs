---
title: "Setup Wizard"
description: "Setup Wizard"
sidebar_position: 20
---

# Setup Wizard

The Endpoint Protector Appliance requires incoming traffic for ports 443 inbound to be whitelisted
from the firewall. They are used for:

- Endpoint Protector Server and Client communication: 443 inbound
- Live Update (liveupdate.endpointprotector.com): 80 & 443 outbound to this single address
  (178.63.3.86/32)

Follow the steps to conﬁgure the Endpoint Protector Appliance for the ﬁrst time.

**Step 1 –** Select **Continue** when ﬁnished reading the End User License Agreement.

![End User License Agreement](/images/endpointprotector/2509/install/licenseagreement.webp)

**Step 2 –** Select **Accept**.

![Accepting the term of the license](/images/endpointprotector/2509/install/acceptagreement.webp)

**Step 3 –** Select **Networking**.

![Selecting Networking](/images/endpointprotector/2509/install/networking.webp)

**Step 4 –** The conﬁguration methods are now available.

:::warning
We recommend a manual conﬁguration of the network settings.
:::


![Automatic Network configuration for Endpoint Protector Appliance](/images/endpointprotector/2509/install/autonetworkconfig.webp)

## Manual Conﬁguration

For precise control, use manual configuration to set the IP address and default gateway, ensuring
the appliance is correctly set up and accessible.

**Step 1 –** Select **Conﬁgure Network manually** (recommended).

![Manual Network configuration for Endpoint Protector Appliance](/images/endpointprotector/2509/install/manualnetworkconfig.webp)

**Step 2 –** Set the IP Address, and Default Gateway (in our example we set the IP Address as
192.168.7.94 and the Default Gateway as 192.168.7.1).

![Setting IP and default GateAway](/images/endpointprotector/2509/install/setip.webp)

**Step 3 –** Press **Tab**.

![Select tab to move to the apply button](/images/endpointprotector/2509/install/setip21.webp)

**Step 4 –** Select **Apply**. The virtual appliance is now accessible from the conﬁgured IP
Address. (e.g., https:// 192.168.7.94).

## Automatic Conﬁguration

Select **conﬁgure network automatically**, and click **Enter**.

![ IP Address and Default Gateway conﬁgured automatically](/images/endpointprotector/2509/install/autonetworkconfig.webp)

The IP Address and Default Gateway will be conﬁgured automatically.
