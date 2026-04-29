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

This section covers a range of deployment methods, including:

- Physical and Virtual Appliances: Detailed instructions for configuration, deployment, and
  management.
- Cloud Platforms: Deployment strategies for AWS, GCP, and Azure, assuming existing cloud accounts
  and basic platform knowledge.
- Active Directory Integration: Leveraging Group Policy Objects for efficient client deployment.
- Third-party Management Tools: using JAMF and Microsoft Intune for streamlined deployment.

:::warning Important
This section of the documentation is provided as a best-effort guideline to support deployment. It is optional and may not always reflect the latest interface or features, as third-party products can change frequently. For the most up-to-date information, refer to the official resources from the product vendor.
:::

## Staging the Server

To start using Endpoint Protector, you need to deploy a server instance. The server hosts all endpoint controls and behavior configuration and delivers the
Endpoint Protector agent to endpoint systems. There are two principal options for server management;
Customer-Managed or Provider- Managed. If Customer-Managed is a desired option, you can install the server On-Premise or in a Hosted-Cloud Environment.

The On-Premise option for a Customer-Managed instance allows you to set up a virtualized image in your LAN. Virtualization options include, but aren't limited to: VMware and
Hyper-V. The Hosted-Cloud method of deployment allows for use of a customer’s Amazon Web Services
(AWS), Azure, or Google Cloud Platform (GCP) instance. For more information on each of these options, see the [Virtual Appliance Formats](/docs/endpointprotector/install/virtualappliance/formats/formats.md) topic and the
[Cloud Services](/docs/endpointprotector/install/configuration/overview.md) topic.

Alternatively, if a Provider-Managed setup is required, Netwrix can deploy an instance of Endpoint Protector in an isolated cloud environment. For details on the Provider-Managed option, speak with your Netwrix Account Manager.

:::note
To use the Endpoint Protector Server in a production environment, a License Key is required. After purchasing Endpoint Protector with the necessary modules, your Account Manager will assign a license that can be installed within the Endpoint Protector Management Console (the configuration interface available on the Endpoint Protector Server).
:::

The following sections describe the different methods for deploying Endpoint Protector, with step-by-step instructions and best practices.

## Communication Between Endpoint Protector Server and Netwrix Servers

Communication between Endpoint Protector Server (apliance used by your company) and Netwrix servers is possible only when your server is connected to the internet.

When connected, Netwrix may access the following metadata information:

- **Server metrics:**  
  - RAM  
  - Database version  
  - Web server version  
  - CPU type / number / frequency  
  - HDD size / partition / free space  
  - Operating system version  
  - Purchased product version  
  - Server serial number  
  - IP address  
  - MAC address of the server

- **Admin details:** 
  - Name  
  - Email address  
  - Phone number

- **Licensing information:**  
  - Number of licenses  
  - Validity  
  - Operating system platforms  
  - License utilization
  - Module Activation Status

Netwrix collects this metadata strictly for licensing and statistical purposes. It doesn't include any customer-sensitive information or content stored or processed by your company.

Additionally, internet connectivity allows your company to:

- Download product updates
- Activate modules by communicating with Netwrix servers

:::note 
All communication with Netwrix servers is governed by the applicable privacy and security policies.
:::


## Unified EPP Clients and Server Versioning

Starting with version 2509, Netwrix standardizes EPP product versioning. The versioning format follows a structured scheme that encodes the release year, month, target platform, and build metadata.

**Key aspects of the new versioning system**

**Structured format:** Version numbers follow the format:

`YYMM.O.C.B`

**`YYMM`** — Release year and month (e.g., `2603` = March 2026)

**`O`** — Target platform or component:
- `0` = Server
- `1` = Windows Client
- `2` = Mac Client
- `3` = Linux Client
- `4` = Combined Win-Mac Environments (EE)

**`C`** — Custom/fork/build increment:
- `0` = internal
- `1` = standard releases
- `2+` = customer-specific builds or hotfixes

**`B`** — Optional build number for internal tracking

**Consistency across interfaces:** This versioning format is applied across all UI pages where version numbers appear, including dashboards, reports, maintenance tools, and the EPP Client Notifier.


**Examples of the New Versioning**
| Description | Version |
|---|---|
| February 2026 server, standard build | 2602.0.1.0 |
| February 2026 Windows client, standard | 2602.1.1.0 |
| RHEL client, May 2026, custom #3 | 2605.4.3.0 |
| Server, April 2026, internal build #7 | 2604.0.0.7 |


With this enhancement, our goal is to enhance your workflow by providing a transparent and easily navigable versioning system.
