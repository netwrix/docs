---
title: "Directory Manager Data Service"
description: "Learn what the Directory Manager Data service does, how the default service is created, and how multiple Data services support load balancing."
keywords:
  - Directory Manager Data service
  - default Data service
  - load balancing
  - IP allow list
  - native IIS
sidebar_position: 10
---

# Directory Manager Data Service

In Admin Center, you can create and deploy a Data service. The Data service handles core Directory Manager operations, such as communication with identity providers and the Directory Manager database, and object creation and update.

You can create multiple Data services. The default service is created while you configure Directory Manager.

## The default Data service

When the administrator configures Directory Manager with the Configuration Tool, they can create a Data service and a Security service in native IIS.

To deploy these services in native IIS, the Configuration Tool creates and configures a new website named GroupIDSite11 in IIS. By default, it binds this site to any of the available ports. The administrator can change the binding if required. The Data service and Security service directories are created within GroupIDSite11.

Admin Center uses the default Data service and Security service. You can't change this binding.

To view the default services, see the [View Data Service Details](manage.md#view-data-service-details) topic.

## Create multiple Data services for load balancing

Create and maintain multiple Data services in Directory Manager for load balancing and high availability. When you create a Directory Manager portal, you can choose a Data service to bind to it. Different portals can then use different Data services for improved response times and load balancing. To set up multiple Directory Manager servers behind a load balancer, see the [Set Up Directory Manager Behind a Load Balancer](/docs/directorymanager/11.2/install/loadbalancer.md) topic.

You can create and deploy a Data service in native IIS or Docker. Remote IIS isn't supported for Data services.

:::important
By default, IIS restricts each Data service to accept requests only from the local IP addresses of the machine it runs on. If a portal or another service on a different machine uses a Data service, add that machine's IP address to the IIS IP allow list of the Data service. Do this for every Data service you create. See [Add a Machine to the Data Service IP Allow List](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#add-a-machine-to-the-data-service-ip-allow-list) for the steps.
:::
