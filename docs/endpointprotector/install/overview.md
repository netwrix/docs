---
title: "Deployments"
description: "Deployments"
sidebar_position: 30
---

# Deployments

This documentation provides comprehensive guidance on deploying Endpoint Protector across various
environments. Whether you are managing physical hardware, virtual appliances, cloud-based
infrastructure, or integrating with existing management systems, this resource offers essential
information and procedures.

We cover a range of deployment methods, including:

- Physical and Virtual Appliances: Detailed instructions for configuration, deployment, and
  management.
- Cloud Platforms: Deployment strategies for AWS, GCP, and Azure, assuming existing cloud accounts
  and basic platform knowledge.
- Active Directory Integration: Leveraging Group Policy Objects for efficient client deployment.
- Third-party Management Tools: Utilizing JAMF and Microsoft Intune for streamlined deployment.

:::warning Important
This section of the documentation is provided as a best-effort guideline to support deployment. It is optional and may not always reflect the latest interface or features, as third-party products can change frequently. For the most up-to-date information, please refer to the official resources from the product vendor.
:::

## Staging the Server

To start using Endpoint Protector, a server instance needs to be made available. The server is where
all endpoint controls and behavior will be configured, and is the vehicle for delivering the
Endpoint Protector agent to endpoint systems. There are two principal options for server management;
Customer-Managed or Provider- Managed. If Customer-Managed is a desired option, the server can be
installed On-Premise or in a Hosted-Cloud Environment.

The On-Premise option for a Customer-Managed instance allows for a virtualized image to be set up in
a customer’s LAN setting. Virtualization options include, but are not limited to: VMware and
Hyper-V. The Hosted-Cloud method of deployment allows for use of a customer’s Amazon Web Services
(AWS), Azure, or Google Cloud Platform (GCP) instance. To obtain more specific information for each
of these options, see the [Virtual Appliance Formats](/docs/endpointprotector/install/virtualappliance/formats/formats.md) topic and the
[Cloud Services](/docs/endpointprotector/install/configuration/overview.md) topic.

Alternatively, if a Provider-Managed setup is required, an instance of Endpoint Protector can be
spun up in an isolated cloud environment. To obtain more details on the Provider- Managed option,
speak with your Netwrix Account Manager.

Please note, in order to use the Endpoint Protector Server in a production environment, a License
Key is required. After purchasing Endpoint Protector with the necessary module(s), your Account
Manager will assign a license that can be installed within the Endpoint Protector Management Console
(the configuration interface available on the Endpoint Protector Server).

The following sections will delve deeper into the different methods used to deploy Endpoint
Protector, offering step-by-step instructions and best practices.
