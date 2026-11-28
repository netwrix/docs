---
title: "GroupID Data Service"
description: "Learn what the GroupID Data service does, how the default service is created, and why to create multiple Data services."
keywords:
  - GroupID Data service
  - default Data service
  - load balancing
  - native IIS
  - high availability
sidebar_position: 20
---

# GroupID Data Service

Admin Center lets you quickly create and deploy a Data service. This service is responsible for core
GroupID operations, such as communication with identity providers, communication with the
GroupID database, object creation and update, and more.

You can create multiple Data services. GroupID creates the default service while you
configure it.

## The Default Data Service

While configuring GroupID with the Configuration Tool, the administrator can create a Data
service and a Security service in native IIS.

To deploy these services in native IIS, the Configuration Tool creates and configures a new website
named GroupIDSite11 in IIS. By default, it binds this site to any of the available ports. The
administrator can change the binding if required. The Data service and Security service directories
are created within GroupIDSite11.

Admin Center uses the default Data service and Security service. You can't change this binding.

To view the default services, see the
[View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
topic.

## Reasons to Create Multiple Data Services

For load balancing and high availability, GroupID lets you create and maintain multiple
Data services. When you create a GroupID portal or a Mobile service, you can choose a Data
service to bind to it. In this way, different portals and Mobile services can use different Data
services for improved response times and load balancing.

GroupID lets you create and deploy a Data service in any of these web servers: native IIS,
remote IIS, and Docker.

**See Also**

- [Manage GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Create a GroupID Data Service in IIS](/docs/directorymanager/11.0/signin/service/dataservice/create.md)
- [Manage GroupID Data Service Settings](/docs/directorymanager/11.0/signin/service/dataservice/manage.md)
