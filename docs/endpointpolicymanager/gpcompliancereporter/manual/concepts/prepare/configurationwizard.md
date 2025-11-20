---
title: "Configuration Wizard"
description: "Configuration Wizard"
sidebar_position: 40
---

# Configuration Wizard

The first time you run the Endpoint Policy Manager GPCR client (admin console) you are presented
with a wizard, as shown in Figure 8.

![gpcr_concepts_and_quickstart_9](/images/endpointpolicymanager/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_9.webp)

Figure 8. The GPCR Configuration Wizard.

In the wizard, you can select if you want to use Endpoint Policy Manager GPCR in "Standalone mode
(Pull Mode only)" or "Server mode (Pull Mode or Push Mode using Audit)," as shown in Figure 9. For
this Quickstart, select standalone mode.

![gpcr_concepts_and_quickstart_10](/images/endpointpolicymanager/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_10.webp)

Figure 9. Selecting between "Standalone mode" or "Server mode."

:::note
Server mode is used in conjunction with the Endpoint Policy Manager GPCR server.
:::


You can also select where you want to store Endpoint Policy Manager GPCR data in the wizard. The
default is shown in Figure 10.

![gpcr_concepts_and_quickstart_11](/images/endpointpolicymanager/grouppolicycompliancereporter/prepare/gpcr_concepts_and_quickstart_11.webp)

Figure 10. Choosing the location for Endpoint Policy Manager GPCR data.

:::warning
You may change the storage folder location to a shared server; however, this will not
enable server mode with Endpoint Policy Manager GPCR, even if all administrators are pointing to the
same shared location. To share Endpoint Policy Manager GPCR data, you must utilize the Endpoint
Policy Manager GPCR server component.

:::

