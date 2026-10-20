---
title: "Configure the Fulfill Task for a Connector"
description: "Configure the Fulfill Task for a Connector"
sidebar_position: 90
---

# Configure the Fulfill Task for a Connector

This guide shows how to create the adequate configuration to add the fulfill task of a given system (here LDAP) in a job.

For Identity Manager fill an LDAP some configuration element are necessary.

## Resource Type Mapping

This configuration is to use the fill for the LDAP and configure the Reset Password.

```
<PasswordResetSettings Identifier="default" BeneficiaryEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Mail"
                      BeneficiaryFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.InternalDisplayName"
                      NotifiedEmailBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.Mail"
                      NotifiedFullNameBinding="AssignedResourceType:Owner.Directory_User:MainRecord.Organization.Manager.MainRecord.InternalDisplayName"
                      Mode="1" DefaultPassword="Usercube@2019" MustChange="true"
                      AutoGenerate="false" DisableNotifications="false" GeneratedLength="12" />  <LDAPResourceTypeMapping Identifier="AD_Entry_NominativeUser" Connection="ADExportFulfillment" PasswordResetSetting="default" DefaultObjectClass="user" RDNAttributeIdentifier="CN" UsePermissiveModify="true" UseTreeDelete="false">    <Property Property="dn" IsDNProperty="true" />    <Property Property="parentdn" IsParentProperty="true" />    <Property Property="cn" IsRDNProperty="true" />    <Property Property="userAccountControl" IsUserAccountControlProperty="true" />    <Property Property="memberOf" DataSourceBacklinkColumnName="member" />  </LDAPResourceTypeMapping>
```

## Add connection information to AD Connect

The [LDAP](../../integration-guide/connectors/references-connectors/ldap) connection information define this section to add all information to use the AD Fulfillment.

```
appsettings.agent.json
{
  ...
  "Connections": {
    ...
    "ADFulfillment": {
      "Servers": [{
          "Server": "paris.contoso.com",
          "BaseDN": "DC=paris,DC=com"
        }],
      "AuthType": "Basic",
      "Login": "CN=exampleCn,DC=exampleDc1,DC=exampleDc2",
      "Password": "Password",
      "AsAdLds": "true"
    }
  }
}
```

After defining this settings, encrypt this JSON file with [Usercube-Protect-X509JsonFile](../../integration-guide/executables/references/protect-x509jsonfile).

## Configure The FulfillTask

Configure The task with the same ResourceType using in ResourceTypeMapping. It's possible to use a connector instead of ResourceType.

```
  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job">    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </FulfillTask>
```

Integrate this Task in the job that provisions the AD connector.

```
<Job Identifier="AD_Provisioning" DisplayName_L1="AD - Provisioning" DisplayName_L2="AD - Provisioning" Agent="Local">  ...
  <FulfillTask Agent="Local" DisplayName_L1="Fulfill LDAP" Identifier="Fulfill_LDAP" OpenIdClient="Job">    <TaskResourceType ResourceType="AD_Entry_NominativeUser"/>  </FulfillTask>  ...
</Job>
```

