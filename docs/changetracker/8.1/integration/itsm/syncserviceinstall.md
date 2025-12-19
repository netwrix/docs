---
title: "Sync Service Installation"
description: "Sync Service Installation"
sidebar_position: 10
---

# Sync Service Installation

The Sync Service is installed as a Windows service. Currently only a single instance of the service
is supported. Run the installer executable, following the installer wizard steps in turn.

## Requirements

- Windows Server 2022
- Change Tracker 8

Upgrading Existing Installations

Normally the upgrade process is as simple as running the new installer and clicking next until the
end. Previously configured values will be the default values (existing passwords will not be
visible).

Version 2.2 is the exception. When upgrading to 2.2 or higher, installations prior to 2.2 must be
uninstalled first by using the `unins000` application in
`C:\Program Files\NNT Change Tracker Suite\Gen7SyncService`.

Make a copy of the `Gen7SyncService.exe.config` file as this will contain all the settings for the
Sync Service.

The following folders should then be removed:

- `C:\Program Files\NNT Change Tracker Suite\Gen7SyncService`
- `C:\Program Data\NNT\syncservice`

You can then proceed with a normal install.

Replace the contents of the `Gen7SyncService.dll.config` file with the contents of the config file
backed up earlier. If no backup is available then enter new configuration during the install wizard.

## Select Components

Under the “ITSM Integration” option, select one ITSM system to integrate with. For brevity this
document describes the steps for a ServiceNow setup, but the steps vary little between ITSMs.

![selectitsm](/images/changetracker/8.1/integration/itsm/selectitsm.webp)

## Change Tracker Hub Connection

Enter the required configuration values:

![itsmurl](/images/changetracker/8.1/integration/itsm/itsmurl.webp)

- In the “Hub Server URL” field, specify the URL for your Change Tracker REST API endpoint, e.g.
  https://changetracker-server/api
- In the “Sync service username” and “Sync service password” fields, enter the credentials for the
  Change Tracker user account which the service should use to connect to Change Tracker; it is
  recommended that a user account be created specifically for this purpose. Note: Change Tracker
  includes an “ITSM” role which is preconfigured with the necessary permissions.

## Authentication

Select which type of authorization to use:

![authenticationtype](/images/changetracker/8.1/integration/itsm/authenticationtype.webp)

- Basic (provide Username / Password of a ServiceNow user account only). Use when OAuth
  authorization is not available. The encoded credentials are sent in the headers of every HTTP
  request.
- OAuth2 Resource Owner Password Flow (provide Username / Password of a ServiceNow user account, and
  Client ID / Client Secret of a ServiceNow OAuth application). Use when using an OAuth application
  registration native to ServiceNow.
- OAuth2 Client Credentials Flow (provide Client ID / Client Secret of an OAuth application). Use if
  required by an OAuth application not registered with ServiceNow e.g. Apigee.

## ITSM URLs

Enter the require configuration values:

![servicenowconnection](/images/changetracker/8.1/integration/itsm/servicenowconnection.webp)

- In the “ServiceNow ITSM Server URL” field, specify the URL for your ServiceNow REST API endpoint,
  e.g. https://service-now-server/api
- In the “ServiceNow OAuth2 Token URL” field (not applicable if using Basic Authentication), specify
  the URL for your OAuth2 token endpoint, e.g. https://service-now-server/ oauth_token.do

## ITSM Account

A ServiceNow account must be created specifically for the Sync Service to connect with. The Sync
Service must be configured to use the same time zone as this ServiceNow account. Because UTC is not
an option for a user's time zone in ServiceNow, the Sync Service defaults to GMT. The only
requirement here is for the time zones to match, so the easiest approach is to use GMT for the
ServiceNow user, but it is possible to configure the Sync Service to use a different time zone by
setting the serviceNow.timeZone element in the Sync Service configuration file (see the
administration page for instructions).

![servicenowcredentials](/images/changetracker/8.1/integration/itsm/servicenowcredentials.webp)

- In the “ServiceNow ITSM username” and “ServiceNow ITSM password” fields (not applicable if using
  OAuth2 Client Credentials), enter the credentials for the ServiceNow user account which the
  service should use to connect to ServiceNow.
- In the “ServiceNow OAuth2 Client ID” and “ServiceNow OAuth2 Client Secret” fields (not applicable
  if using Basic Authentication), enter the Client ID and Client Secret associated with the OAuth
  application registration.
