---
title: "Troubleshooting Server Problems"
description: "Troubleshooting Server Problems"
sidebar_position: 30
---

# Troubleshooting Server Problems

The most likely reason for server problems is that the service has not started. The service must be
running and started on a server, as shown in Figure 68.

![tuning_and_troubleshooting_9](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_9.webp)

Figure 68. Verification that the GPCR server service is running.

Another possible reason why all connections are rejected is that the firewall is not allowing
incoming requests. Verify the following entry is in place, since it should automatically be created
when the Endpoint Policy Manager GPCR server component and service are installed (see Figure 69).

![tuning_and_troubleshooting_10](/images/endpointpolicymanager/troubleshooting/grouppolicycompliancereporter/tuning_and_troubleshooting_10.webp)

Figure 69. Ensuring the firewall is properly configured.

If this does not solve the problem, temporarily disable the server's firewall to determine whether
requests start to come in.

