---
title: "Disaster recovery scenarios"
description: "Disaster recovery scenarios"
sidebar_position: 30
---

# Disaster recovery scenarios

#### Finding a quick solution in the event of a disaster

In our experience, Netwrix Password Secure is usually installed in IT in a central location. If the
system fails, it must be possible to gain access to the passwords again as quickly as possible. This
section is designed to help you quickly find a solution in the event of a problem.

#### Prevention

It is extremely important to create a sensible recovery plan and to make corresponding preparations.
Unfortunately, it is not possible to supply a finished recovery plan because it always needs to be
created individually. The following points should be taken into account in this process:

**Creating backups**

It is of course essential in the event of a disaster that you can access a backup that is as
up-to-date as possible. Therefore, it is necessary to regularly create
[Backup management](/docs/passwordsecure/9.1/configuration/servermanger/mainmenu/backupsettings/backup_management.md).

Who is responsible in the event of a disaster?

The first thing to decide is who should take action in the event of a disaster. Corresponding
deputies should also be defined. The responsible employee should have the corresponding rights
within Netwrix Password Secure.

**Providing the required passwords**

What passwords do those people responsible need in order to restore Netwrix Password Secure?

- Domain password to log into the specific computer
- Password for the Server Manager
- Access data for the service user
- Access data for the SQL user
- Password for logging into Netwrix Password Secure

Furthermore, it must be ensured that the responsible user has access to these passwords at all
times. The following options are possible:

- Store the passwords in the company safe
- Create corresponding
  [Offline Add-on](/docs/passwordsecure/9.1/configuration/offlineclient/offline_client.md)
- Periodically create a HTML WebViewer file with automatic delivery via a system task including
  e-mail forwarding which can be configured in
  [Account](/docs/passwordsecure/9.1/configuration/advancedview/mainmenufc/account.md)

#### Disaster scenarios

The following section will describe various disaster scenarios including the possible recovery
steps.

**Scenario 1**

Problem:

**Database is corrupt**

Solution:

Restore the database from a backup.

**Scenario 2**

Problem:

**Database server is faulty**

Solution:

Install the database server on new hardware. If the server name changes as a result, the licence
needs to be reactivated. If the licence has already been activated multiple times, it may be that it
can only be released again by Netwrix. If the SQL instance name changes, the connection to the
database server needs to be reconfigured on the application server. This is carried out via the
basic configuration.

Any existing offline databases will continue to function properly.

**Scenario 3**

Problem:

**Application server faulty**

Solution:

New installation on new hardware. The licence must be reactivated. If the server name has changed,
it may be that the licence can only be released again by Netwrix. The basic configuration must be
completed to restore the connection to the database server. If the server name changes, the database
profile on the client needs to be amended.

**Any existing offline databases need to be recreated!**

Scenario 4

Problem:

Both servers are faulty but passwords from Netwrix Password Secure are required urgently.

Solution:

Install the database server and application server on new hardware. The licence must be reactivated.
Restore the database from the backup. The basic configuration must be completed to restore the
connection to the database server. If the licence has already been activated multiple times, it may
be that it can only be released again by Netwrix.

**Any existing offline databases need to be recreated!**

Scenario 5

Problem:

As for Scenario 4 but the Active Directory is also not available.

Solution:

As described for scenario 4. If the user was imported in end-to-end mode, you can also log in
without an AD connection. Users imported in Masterkey mode cannot log in. Therefore, it is
recommended that you create special, local emergency users for such cases.
