# Agent Configuration

Identity Manager Agent's configuration includes connection information to the managed systems and to
the Server. Protection of sensitive credentials can be achieved through RSA encryption, storing
information within a CyberArk Vault, or using an Azure Key Vault safe.

## Configuration Files

The Agent configuration uses two sets of settings: the agent **appsettings** set and the
**appsettings.agent** set.

1. The [appsettings](appsettings/index.md) set is written either to the Agent's working directory
   [appsettings.json file](../../architecture/index.md) or as
   [environment variables](../../architecture/index.md).
2. The [appsettings.agent](appsettings-agent/index.md) set is written as
   [environment variables](../../architecture/index.md) or to the
   [appsettings.agent.json](appsettings-agent/index.md) files from the Agent's working directory.
3. There are two additional files involved in the _Agent_'s configuration to protect sensitive data:
   [appsettings.encrypted.agent.json](rsa-encryption/index.md) and
   [appsettings.cyberark.agent.json](cyberark-application-access-manager-credential-providers/index.md).

## Protect Credentials

Managed system credentials are sensitive information. Identity Manager offers three strategies to
protect sensitive data.

### RSA encryption

Any Agent configuration setting value can be encrypted using `Usercube-Protect-X509JsonValue` and
`Usercube-Protect-X509JsonFile` tools. An encrypted value is then written to the
[appsettings.encrypted.agent.json](rsa-encryption/index.md) file.

It means that any sensitive setting value that the user chooses to protect this way won't be written
to the [appsettings.agent.json](appsettings-agent/index.md) file but to the
[appsettings.encrypted.agent.json](rsa-encryption/index.md) file.

### CyberArk Vault

Any Agent configuration setting value can be encrypted using Identity Manager's CyberArk
integration.

To put it simply, any sensitive setting value that the user chooses to protect this way won't be
written to the [appsettings.agent.json](appsettings-agent/index.md) file but stored within a
CyberArk Vault.

### Azure Key Vault safe

Any Agent configuration setting value can be encrypted using Identity Manager's Azure Key Vault
integration.

To put it simply, any sensitive setting value that the user chooses to protect this way won't be
written to the [appsettings.agent.json](appsettings-agent/index.md) file but stored within an Azure
Key Vault safe.

## Merge Priority

Because of the credential protection system, the Agent connection information to managed systems can
be written to the following configuration sources:

- The [appsettings.agent.json](appsettings-agent/index.md) file which contains plain text,
  non-encrypted setting information.
- The [appsettings.encrypted.agent.json](rsa-encryption/index.md) file which contains encrypted
  setting information.
- An Azure Key Vault safe (see [azure key vault](azure-key-vault/index.md)).
- A CyberArkVault referenced by the
  [appsettings.cyberark.agent.json](cyberark-application-access-manager-credential-providers/index.md)
  file.
- The [appsettings.connection.json](../technical-files/appsettings.connection/index.md) file.

Each configuration source is loaded one after the other, in the following order:

1. [appsettings.agent.json](appsettings-agent/index.md)
2. [appsettings.encrypted.agent.json](rsa-encryption/index.md)
3. _[Azure Key Vault](azure-key-vault/index.md)_ safe
4. _[CyberArk](cyberark-application-access-manager-credential-providers/index.md) Vault_
5. [appsettings.connection.json](../technical-files/appsettings.connection/index.md)

If a json key is defined in multiple configuration source, only the last loaded json key is
preserved to build the final configuration.
