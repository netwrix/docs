---
title: "Pull and Push Modes"
description: "Pull and Push Modes"
sidebar_position: 20
---

# Pull and Push Modes

Figure 3 below demonstrates how the pull and push modes work in GPCR. The details of each mode are
discussed in the following sections.

![gpcr_concepts_and_quickstart_2](/images/endpointpolicymanager/grouppolicycompliancereporter/mode/gpcr_concepts_and_quickstart_2.webp)

Figure 3. Endpoint Policy Manager GPCR working in pull mode (gray arrows) and in push mode (black
arrows).

## Pull Mode

In pull mode with Endpoint Policy Manager GPCR, each administrator acts as an island. Administrators
query each endpoint (target) computer and pull their data. The endpoint must be on and available to
accept requests. For instance, the endpoint's firewall must be off and the required ports must
accept requests.

## Push Mode

Push mode in Endpoint Policy Manager GPCR uses the Endpoint Policy Manager GPCR server.
Administrators can still request (pull) data directly from endpoints, like in pull mode, but they
can also take advantage of the server with clientless auditing, through which endpoints deliver
their data directly to a central server. This enables all endpoints the ability to push their data
up whenever Group Policy applies or changes on an endpoint. In this way, endpoints are not required
to be on at the time administrators want to query their status. As soon as Group Policy applies,
data is automatically delivered to the shared database on the designated Endpoint Policy Manager
GPCR server. Additionally, since all data is centrally stored in a server, administrators can share
all tests or results.

