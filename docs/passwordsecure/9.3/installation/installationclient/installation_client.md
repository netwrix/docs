---
title: "Installation Client"
description: "Installation Client"
sidebar_position: 30
---

# Installation Client

## Guide

The MSI installation files and the associated
[Client configuration](/docs/passwordsecure/9.3/installation/requirements/client_configuration.md) can be found in the corresponding
sections. The following step-by-step guide will accompany you through the wizards.

![installation wizard page 1](/images/passwordsecure/9.2/installation/installation_client/installation-client-1-en.webp)

You are required to read and accept the terms of service. These can also be printed.

The next step is to define the location of the client. The suggested location can be retained.You
can also define whether additional components should be installed.

**CAUTION:** Please only install the Terminal Server Service (for Autofill Add-on) if terminal
server operation is intended!

![installation wizard page 2](/images/passwordsecure/9.2/installation/installation_client/installation-client-3-en.webp)

The actual installation starts in the next step.

![installation wizard page 3](/images/passwordsecure/9.2/installation/installation_client/installation-client-4-en_339x265.webp)

The last step closes the setup and opens (if desired) the Client.

![installation wizard page 4](/images/passwordsecure/9.2/installation/installation_client/installation-client-5-en.webp)

## Installed applications

There are always several applications installed.

![client icon](/images/passwordsecure/9.2/installation/installation_client/cllient-en.webp)

This is the regular Client.

![offline client icon](/images/passwordsecure/9.2/installation/installation_client/psrofflineclient-en.webp)

The Offline Add-on allows access to the data without connection to Server Manager.

![icon_autofill_agent](/images/passwordsecure/9.2/installation/installation_client/icon_autofill_agent.webp)

The Autofill Add-on is used for SSO applications.

## Integrating a database

For connection to the database, the creation of a database profile is obligatory. The following
information is required:

- Profile name: The name of the profile. This will be displayed on the client in the future
- IP address: The IP address of the Netwrix Password Secure V8 server is stored here
- Database name: Specifies the name of the database

## Distributing database profiles via the registry

There is also an option to distribute database profiles. The profiles are specified via a
corresponding registry entry. The next time Netwrix Password Secure is started, the profiles will be
saved in the local configuration file. The database connection can be made with the following keys:


```
HKEY_CURRENT_USER\SOFTWARE\MATESO\Password Safe and Repository 8\DatabaseProfiles
HKEY_LOCAL_MACHINE\SOFTWARE\MATESO\Password Safe and Repository 8\DatabaseProfiles

```

These keys are structured like this:

- HostIP: Server IP address
- DatabaseName: Name of the database
- LastUserName: The field for the user name can be specified here

![profil-registry](/images/passwordsecure/9.2/installation/installation_client/profil-registry-en.webp)

Is the profile set with the following entries?


```
HKEY_LOCAL_MACHINE\SOFTWARE\MATESO\Password Safe and Repository 8\DatabaseProfiles

```

Then the last used date base as well as the last registered user are created with the following ID,
when you log in for the first time:


```
HKEY_CURRENT_USER\SOFTWARE\MATESO\Password Safe and Repository 8\DatabaseProfiles

```

NOTE: When the corresponding registry entry is set and no related database profile exists, the
profile will be created at the next start-up. Please note that profiles created like this cannot be
edited or deleted in the client.
