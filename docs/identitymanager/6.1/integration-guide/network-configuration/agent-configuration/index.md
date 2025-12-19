---
title: "Agent Configuration"
description: "Agent Configuration"
sidebar_position: 20
---

# Agent Configuration

_Usercube Agent_'s configuration includes connection information to the managed systems and to the
_Server_. Protection of sensitive credentials can be achieved through RSA encryption, storing
information within a _CyberArk Vault_, or using an _Azure Key Vault_ safe.

## Configuration Files

The _Agent_ configuration uses two sets of settings: the agent **appsettings** set and the
**appsettings.agent** set.

1. The
   [appsettings](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
   set is written either to the _Agent_'s working directory
   [appsettings.json file](/docs/identitymanager/6.1/integration-guide/architecture/index.md)
   or as
   [environment variables](/docs/identitymanager/6.1/integration-guide/architecture/index.md).
2. The
   [appsettings.agent](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
   set is written as
   [environment variables](/docs/identitymanager/6.1/integration-guide/architecture/index.md)
   or to the
   [appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
   files from the Agent's working directory.
3. There are two additional files involved in the _Agent_'s configuration to protect sensitive data:
   [appsettings.encrypted.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
   and
   [appsettings.cyberark.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md).

## Protect Credentials

Managed system credentials are sensitive information. Usercube offers three strategies to protect
sensitive data.

### RSA encryption

Any _Agent_ configuration setting value can be encrypted using `Usercube-Protect-X509JsonValue` and
`Usercube-Protect-X509JsonFile` tools. An encrypted value is then written to the
[appsettings.encrypted.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
file.

It means that any sensitive setting value that the user chooses to protect this way won't be written
to the
[appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file but to the
[appsettings.encrypted.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
file.

### CyberArk Vault

Any _Agent_ configuration setting value can be encrypted using Usercube's _CyberArk_ integration.

To put it simply, any sensitive setting value that the user chooses to protect this way won't be
written to the
[appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file but stored within a _CyberArk Vault_.

### Azure Key Vault safe

Any _Agent_ configuration setting value can be encrypted using Usercube's _Azure Key Vault_
integration.

To put it simply, any sensitive setting value that the user chooses to protect this way won't be
written to the
[appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
file but stored within an _Azure Key Vault_ safe.

## Merge Priority

Because of the credential protection system, the _Agent_ connection information to managed systems
can be written to the following configuration sources:

- The
  [appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
  file which contains plain text, non-encrypted setting information.
- The
  [appsettings.encrypted.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
  file which contains encrypted setting information.
- An _Azure Key Vault_ safe (see
  [azure key vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)).
- A _CyberArk__Vault_ referenced by the
  [appsettings.cyberark.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
  file.
- The
  [appsettings.connection.json](/docs/identitymanager/6.1/integration-guide/network-configuration/technical-files/appsettings.connection/index.md)
  file.

Each configuration source is loaded one after the other, in the following order:

1. [appsettings.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
2. [appsettings.encrypted.agent.json](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/rsa-encryption/index.md)
3. _[Azure Key Vault](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/azure-key-vault/index.md)_
   safe
4. _[CyberArk](/docs/identitymanager/6.1/integration-guide/network-configuration/agent-configuration/cyberark-application-access-manager-credential-providers/index.md)
   Vault_
5. [appsettings.connection.json](/docs/identitymanager/6.1/integration-guide/network-configuration/technical-files/appsettings.connection/index.md)

If a json key is defined in multiple configuration source, only the last loaded json key is
preserved to build the final configuration.
