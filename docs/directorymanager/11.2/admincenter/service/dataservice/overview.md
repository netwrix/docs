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

Admin Center uses the default Data service and Security service; you can't change this binding.

To view the default services, see the
[View Data Service Details](manage.md#view-data-service-details) topic.

## Create Multiple Data Services for Load Balancing

For load balancing and high availability, use Directory Manager to create and maintain
multiple Data services. While creating a Directory Manager portal, you can choose a Data service to
bind to it. In this way, different portals can use different Data services for improved response
times and load balancing. To set up multiple Directory Manager servers behind a load balancer, see
the [Set Up Directory Manager Behind a Load Balancer](/docs/directorymanager/11.2/install/loadbalancer.md)
topic.

With Directory Manager, you can create and deploy a Data service in native IIS or Docker. Remote IIS
isn't supported for Data services.

:::important
By default, IIS restricts each Data service to accept requests only from the local IP addresses of
the machine it runs on. If a portal or another service on a different machine uses a Data service,
add that machine's IP address to the IIS IP allow list of the Data service. Do this for every Data
service you create. See
[Add a Machine to the Data Service IP Allow List](/docs/directorymanager/11.2/admincenter/applications/portal/create.md#add-a-machine-to-the-data-service-ip-allow-list)
for the steps.
:::
