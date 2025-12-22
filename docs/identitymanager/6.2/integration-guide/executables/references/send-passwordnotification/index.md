---
title: "Usercube-Send-PasswordNotification"
description: "Usercube-Send-PasswordNotification"
sidebar_position: 340
---

# Usercube-Send-PasswordNotification

## Examples

### Manually send a password initialization mail notification

Consider a user who needs an account in an external system. Consider that this account requires a
password.

As an example, we will consider that the id of the
[Resource Type Mappings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md)
associated with the external system is 10, and the id of the assigned resource type associated with
the user is 1000.

Once the password is set, we need to communicate this password to the user. We send a mail
notification to inform the user.

`--password true --assigned-resource-type 1000 --resource-type-mapping 10`

For the notification to be sent, the server set at **appsettings** > **ApplicationUri** should be
running.  
The [Resource Type Mappings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md)
should have an associated
[Password Reset Settings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/passwordresetsettings/index.md).  
For
the notification to be sent, the password reset settings should at least contain a notified email
binding.  
For the notification to make sense, the password reset settings should at least contain a
beneficiary full name binding.

## Arguments

| Argument Name                     | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| --assigned-resource-type required | **Type** String **Description** Specifies the id of the assigned resource type corresponding to the user and the external system that is being fulfilled with a new password. This can be found in the provisioning order at **ProvisioningOrdersList** > **AssignedResourceTypeId**. **Example** Send a notification for the assigned resource type with id 1000: `--assigned-resource-type 1000`.                                                                                                                                                |
| --password required               | **Type** String **Description** Specifies the new password that will be sent by mail. **Example** Send a notification for the password NewPassword: `--password NewPassword`.                                                                                                                                                                                                                                                                                                                                                                      |
| --resource-type-mapping required  | **Type** String **Description** Specifies the id of the [Resource Type Mappings](/docs/identitymanager/6.2/integration-guide/toolkit/xml-configuration/connectors/resourcetypemappings/index.md) corresponding to the external system that is being fulfilled with a new password. This can be found in the provisioning order at **ProvisioningOrdersList** > **ResourceType** > **Id**, as the resource type and its corresponding resource type mapping share the same id. **Example** Send a notification for the resource type mapping with id 10: `--resource-type-mapping 10`. |
| --notification-cc optional        | **Type** Integer **Description** Specifies an address that should also receive the notification. **Example** Add [admin@acme.admin](mailto:admin@acme.admin) to the mail CC: `--notification-cc admin@acme.admin`.                                                                                                                                                                                                                                                                                                                                 |
