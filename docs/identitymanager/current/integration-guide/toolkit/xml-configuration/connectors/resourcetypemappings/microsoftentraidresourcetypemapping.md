---
title: "Microsoft EntraID Resource Type Mapping"
description: "Microsoft EntraID Resource Type Mapping"
sidebar_position: 10
---

# Microsoft EntraID Resource Type Mapping

Any resource type mapping must be configured with the same identifier as the related resource type.

## Examples

Code attributes enclosed with `<>` need to be replaced with a custom value before entering the script in the command line.

```xml
<MicrosoftEntraIDResourceTypeMapping Identifier="MicrosoftEntraID_DirectoryObject_Guest" Connection="MicrosoftEntraIDExportFulfillment" DefaultObjectClass="users" InvitationMode="MicrosoftInvitation" InvitationRedirectUrl="https://demo.usercube.com" PasswordResetSetting="ToSponsor">    <Property Property="objectid" IsDNProperty="true" />    <Property Property="groups" DataSourceBacklinkColumnName="member" />    <Property Property="displayName" IsDisplayNameProperty="true" />    <Property Property="mail" IsMailProperty="true" /></MicrosoftEntraIDResourceTypeMapping>
```

## Properties

 | Property | Type | Description | 
 | --- | --- | --- | 
 | Connection required | String | Identifier of the corresponding connection. | 
 | DefaultObjectClass required | String | Default object class used by the provisioner, for example: person, organizationalPerson, or user, etc. Multiple default object classes are separated by: &#xA;. | 
 | InvitationCustomizedMessageBody optional | String | Message that will replace Azure's default message in the invitation. Only used when InvitationMode is set to MicrosoftInvitation. | 
 | InvitationMessageLanguage optional | String | Language of the invitation's message. When not specified, the message is in English. Only used when InvitationMode is set to MicrosoftInvitation. | 
 | InvitationMode default value: None | InvitationMode | Mode of the invitation email sent during the creation of a guest Microsoft Entra ID account. None : nothing is sent. MicrosoftInvitation : an invitation email is sent to another person to initiate the external user's guest account in Microsoft Entra ID according to the related password reset setting (one-way, two-way, etc.). | 
 | InvitationRedirectUrl optional | String | URL that will be displayed in the invitation email. Required when InvitationMode is set to MicrosoftInvitation. | 
 | PasswordResetSetting optional | String | Identifier of the corresponding password reset setting. Required when InvitationMode is set to None and DefaultObjectClass set to users. | 
