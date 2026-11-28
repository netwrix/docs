---
title: "Directory Manager Data Service"
description: "Learn what the Directory Manager Data service does, how the default service is created, and how multiple Data services support load balancing."
keywords:
  - Directory Manager Data service
  - default Data service
  - load balancing
  - remote IIS
  - Docker
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

Use Directory Manager to create and maintain multiple Data services for load balancing and high availability. When you create a Directory Manager portal, you can choose a Data service to bind to it. Different portals can then use different Data services for improved response times and load balancing.

You can create and deploy a Data service in native IIS, remote IIS, or Docker.
