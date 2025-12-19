---
title: "Data Service"
description: "Data Service"
sidebar_position: 20
---

# Data Service

Admin Center lets you quickly create and deploy a Data service. This service is responsible for core
GroupID operations, such as communication with identity providers, communications with the GroupID
database, object creation and update, and more.

You can create multiple Data services; the default service is created while configuring GroupID.

## The Default Data Service

While configuring GroupID using the Configuration Tool, the administrator can create a Data service
and a Security service in native IIS.

To deploy these services in native IIS, the Configuration Tool creates and configures a new website
named GroupIDSite11 in IIS. By default, it binds this site to any of the available ports; the
administrator can change it if required. The Data service and Security service directories are
created within GroupIDSite11.

Admin Center uses the default Data service and Security service; you cannot change this binding.

To view the default services, see the
[View Data Service Details](/docs/directorymanager/11.0/signin/service/dataservice/manage.md#view-data-service-details)
topic.

## Why Create Multiple Data Services?

For load balancing and high availability, GroupID facilitates you to create and maintain multiple
Data services. While creating a GroupID portal or a Mobile service, you can choose a Data service to
bind to it. In this way, different portals and Mobile services can use different Data services for
improved response times and load balancing.

GroupID enables you to create and deploy a Data service in any of these web servers: native IIS,
remote IIS, and Docker.

See Also

- [GroupID Applications](/docs/directorymanager/11.0/signin/applications/applications.md)
- [Create a Data Service](/docs/directorymanager/11.0/signin/service/dataservice/create.md)
- [Manage Data Service Settings](/docs/directorymanager/11.0/signin/service/dataservice/manage.md)
