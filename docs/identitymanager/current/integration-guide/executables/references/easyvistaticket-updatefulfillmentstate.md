---
title: "Usercube-EasyVistaTicket-UpdateFulfillmentState"
description: "Usercube-EasyVistaTicket-UpdateFulfillmentState"
sidebar_position: 90
---

# Usercube-EasyVistaTicket-UpdateFulfillmentState

The use of this executable supposes a previous use of the `Usercube-Fulfill-ToEasyVistaTicket` executable.

`Usercube-Fulfill-ToEasyVistaTicket` creates tickets in an EasyVista instance: `Usercube-EasyVistaTicket-UpdateFulfillmentState` sets the fulfillment state of the corresponding assigned resource types in Identity Manager for tickets that are closed (`Executed`) or canceled (`Error`).

## Examples

### Connector specified

When specifying `--connector`, there is no need to specify `--resource-types`:

`--connector "3" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifier can be also given instead of the id:

`--connector "EasyVista" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

In this example, for all resource types that have a target entity type of the connector `EasyVista`, we set the fulfillment state of the corresponding assigned resource types.

### Resource types specified

When specifying `--resource-types`, there is no need to specify `--connector`:

`--resource-types "40" "41" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret" --url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

But the identifiers can be also given instead of the id:

`--resource-types "EasyVista_NominativeUser" "EasyVista_Administrator" --api-url "http://localhost:5000/" --api-client-id "Job" --api-secret "secret"--url "https://easyvista.contoso.com" --account "12345" --login "Contoso" --password "cOntoSo6789"`

In this example, for the resource types `EasyVista_NominativeUser` and `EasyVista_Administrator`, we set the fulfillment state of the corresponding assigned resource types.

## Arguments

 | Argument Name | Details | 
 | --- | --- | 
 | --api-client-id required | **Type** String **Description** Login used to authenticate to the server. Every request from agent to server needs to be authenticated with an[OpenIdClient](../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. | 
 | --api-secret required | **Type** String **Description** Password used to authenticate to the server. Every request from agent to server needs to be authenticated with an [OpenIdClient](../../../integration-guide/toolkit/xml-configuration/access-control/openidclient) Connect ClientId/Secret pair, linked to a profile with the relevant permissions. | 
 | --api-url required | **Type** String **Description** URL of Identity Manager server. | 
 | --- | --- | 
 | --- | --- | 
 | --url required | **Type** String **Description** EasyVista API Endpoint URL. | 
 | --account required | **Type** String **Description** EasyVista account. | 
 | --login required | **Type** String **Description** Path of the file used for complete synchronization. | 
 | --password required | **Type** String **Description** EasyVista server password. | 
 | --- | --- | 
 | --- | --- | 
 | --connector required if --resource-typesis not given | **Type** String **Description** Id or Identifier of the resource types' connector we want to update the fulfillment state. | 
 | --resource-types required if --connectoris not given | **Type** String List **Description** Id or Identifier of the resource types we want to update the fulfillment state. | 
 | --certificate-identifier optional | **Type** String **Description** Unique key used to retrieve the certificate in Azure Key Vault. | 
 | --vault optional | **Type** String **Description** Vault uri. | 
 | --vault-connection-string optional | **Type** String **Description** Connection string to connect to Azure Key Vault. | 
 | --batch-size default value: 1000 | **Type** Int32 **Description** Number of provisioning orders to wait between each progress report. | 
 | --task-instance-id optional | **Type** String **Description** Id of the task instance which have launch the exe in a job context (for log purposes). | 

