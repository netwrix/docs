---
title: "Data Service"
description: "Data Service"
sidebar_position: 10
---

# Data Service

Admin Center lets you quickly create and deploy a Data service. This service is responsible for core
Directory Manager operations, such as communication with identity providers, communications with the
Directory Manager database, object creation and update, and more.

You can create multiple Data services; the default service is created while configuring Directory
Manager.

## The Default Data Service

While configuring Directory Manager using the Configuration Tool, the administrator can create a
Data service and a Security service in native IIS.

To deploy these services in native IIS, the Configuration Tool creates and configures a new website
named GroupIDSite11 in IIS. By default, it binds this site to any of the available ports; the
administrator can change it if required. The Data service and Security service directories are
created within GroupIDSite11.

Admin Center uses the default Data service and Security service; you cannot change this binding.

To view the default services, see the
[View Data Service Details](manage.md#view-data-service-details) topic.

## Why Create Multiple Data Services?

For load balancing and high availability, Directory Manager facilitates you to create and maintain
multiple Data services. While creating a Directory Manager portal, you can choose a Data service to
bind to it. In this way, different portals can use different Data services for improved response
times and load balancing.

Directory Manager enables you to create and deploy a Data service in any of these web servers:
native IIS, remote IIS, and Docker.
