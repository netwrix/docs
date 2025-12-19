---
title: "Agent"
description: "Agent"
sidebar_position: 40
---

# Agent

This section identifies the requirements for an Identity Manager agent.

## Software

The agent is a .NET application.

Running an agent requires installing the
[Windows hosting bundle for ASP.Net Runtime](https://dotnet.microsoft.com/en-us/download/dotnet/8.0).

## Hosting

When used separated from the server, the agent can be run as:

- An [Internet Information Services (IIS)](https://www.iis.net/) website from the minimal version
  IIS 10.0 (recommended)
- A
  [Windows service](https://docs.microsoft.com/en-us/dotnet/framework/windows-services/introduction-to-windows-service-applications)
- A stand-alone executable for tests or debugging purposes

### Integrated agent

Some installations require multiple separate agents, but most of them use a single integrated agent
that runs within the Identity Manager server process. In that case, the server executable contains
the agents and no agent executable needs to be executed. It means that if a Identity Manager server
is already installed, no further installation is required.

In this case, the agent working directory is the same as the server working directory, and both the
agent's and server's `appsettings` share the same configuration. The `appsettings.agent`
configuration set is still configured through environment variables or via a separate
`appsettings.agent.json` file stored next to the `Usercube-Server.exe` executable, in the common
working directory. See the
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
and
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
topics for additional information.

## Service Accounts

The agent should be assigned a
[Windows Server service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts).

The installation of the server as part of an Active Directory domain requires the use of an account
with sufficient privileges to create a service account on the domain.

It can be either the IIS built-in
[application pool identity](https://support.microsoft.com/en-us/help/4466942/understanding-identities-in-iis),
or a custom
[Windows Server service account](https://docs.microsoft.com/en-us/windows/security/identity-protection/access-control/service-accounts).

### Working directory permissions

The agent's service account needs specific permissions presented in the
[Create a Working Directory](/docs/identitymanager/saas/installation-guide/production-ready/working-directory/index.md) topic as:

- _Read_, _Modify_, and _List folder contents_ on the working directory;
- _Read & Execute_ and _List folder contents_ on the `Runtime` directory, usually
  `C:/identitymanager<Organization>/Runtime`, in order to run the agent executable;
- _Read_, _Modify_, and _List folder contents_ on the directory for provisioning orders, whose path
  depends on the `Work` folder's path;
- _Read_, _Modify_, _List folder contents_, and _Write_ on the directory for data collection, whose
  path depends on the `Work` folder's path.

See the [Create a Working Directory](/docs/identitymanager/saas/installation-guide/production-ready/working-directory/index.md) and
[Application Settings](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings/index.md)
topics for additional information.

Other permissions should be denied.

> **FAQ**: How to set up directory permissions in Windows Server? See the
> [Install the Server](/docs/identitymanager/saas/installation-guide/production-ready/server/index.md) topic for additional information.

### Managed systems' permissions

Every Identity Manager agent needs one or several service accounts on the target managed systems,
able to read and write to said managed systems.

> For example, using Identity Manager with an Active Directory instance requires the agent to be
> assigned an Active Directory service account that can read, write, change users' passwords, update
> group memberships, and synchronize the whole Active Directory.

Before going further, make sure the integration team has provided:

- The list of all managed systems
- Service accounts with the necessary permissions for the agent to perform _Read_ and/or _Write_
  operations on the systems associated with a connector allowing respectively synchronization and/or
  provisioning; See the [Connectors](/docs/identitymanager/saas/integration-guide/connectors/index.md) topic for
  additional information.
- service accounts' credentials

Managed systems credentials are stored in the `appsettings.agent` configuration set and can be
protected. See the
[appsettings.agent](/docs/identitymanager/saas/integration-guide/network-configuration/agent-configuration/appsettings-agent/index.md)
and [Modules](/docs/identitymanager/saas/integration-guide/modules/index.md) topics for additional information.

### Database permissions

The agent needs a service account that can authenticate to SQL Server.

## Hostname and DNS

The agent needs to be assigned a hostname within the organization's domain. End-user browsers must
be able to resolve the agent's hostname.

The associated DNS zone needs to be
[updated accordingly](https://docs.microsoft.com/en-us/windows-server/networking/core-network-guide/cncg/server-certs/create-an-alias-cname-record-in-dns-for-web1).

The DNS alias should be written in lowercase in order to comply with as many security rules as
possible.

## SSL Certificate

The agent requires the use of HTTPS ports and an SSL certificate in order to perform HTTPS
communication with the server.

## Emails

The agent needs access to an SMTP server to
[Send Notifications](/docs/identitymanager/saas/installation-guide/production-ready/email-server/index.md).

## Encryption Key Pair

An [RSA-2048 encryption key pair](https://en.wikipedia.org/wiki/Public-key_cryptography) is required
for the agent in order to perform various encryption operations, such as source, configuration, or
log file encryptions;

Such a certificate does not need to be integrated into the target organization's Public Key
Infrastructure and does not require an expiration date. They are only relevant to internal and
temporary Identity Manager data and can be changed at any time.

An RSA key pair, as in an [X.509](https://fr.wikipedia.org/wiki/X.509) public key certificate and a
private key, can be stored either:

- As a [PKCS #12](https://en.wikipedia.org/wiki/PKCS_12) archive (also called
  [Personal Information Exchange file](https://docs.microsoft.com/en-us/windows-hardware/drivers/install/personal-information-exchange---pfx--files)
  or `.pfx` file) stored in the _server_'s host file system. The archive contains both the public
  key certificate and the private key.
- As a certificate from a Windows'
  [certificate store](https://docs.microsoft.com/en-us/dotnet/framework/wcf/feature-details/working-with-certificates#certificate-store)
  identified by _SubjectDistinguishedName_ or by _Thumbprint_. The Windows certificate also contains
  both the public key certificate and the private key. This is the recommended method.

The key pair can be generated with tools such as
[OpenSSL](https://www.openssl.org/docs/manmaster/man1/req.html) or Microsoft's
[New-SelfSignedCertificate](https://docs.microsoft.com/en-us/powershell/module/pkiclient/new-selfsignedcertificate?view=win10-ps)
and
[pvk2pfx tool](https://docs.microsoft.com/en-us/windows-hardware/drivers/devtest/pvk2pfx?redirectedfrom=MSDN).

## What's Next?

To start the installation, follow either the [ Quick Start Guide](/docs/identitymanager/saas/installation-guide/quick-start/index.md) or the
[Production-Ready Installation](/docs/identitymanager/saas/installation-guide/production-ready/index.md).
