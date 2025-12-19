---
title: "Settlement right key"
description: "Settlement right key"
sidebar_position: 50
---

# Settlement right key

#### Problem Description

In the version 8.3.0.13378 passwords which cannot be decrypted for other users could be created. In
this case, individual users or even all users do not have the necessary legal key. If a user wants
to reveal an affected password, the following message is displayed:

![installation_with_parameters_219_706x98](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_219_706x98.webp)

#### Bugfix

The bug was fixed with the version 8.3.0.14422 Hotfix 1. If an older version is in use, it is
important to update to the latest version 8.4.0.14576.

#### Review and settlement of records

When updating to version 8.4.0.14576, the Server Manager is checked for affected data records.

###### Review via the Server Manager

The results of the query show which passwords can be fixed by which user. (In this example, the
entries are highlighted in color).

- Blue = password name
- Yellow = Repairable / Irreparable
- Orange = users / roles who can fix the password

**Reparable records**

Passwords in which users / roles with entitlement right and right key exist:

![installation_with_parameters_220_584x65](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_220_584x65.webp)

**Irreparable records**

Passwords in which users / roles without a legal key or with a legal key but without an
authorization right exist:

![installation_with_parameters_221_697x40](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_221_697x40.webp)

###### Settlement of reparable records

Damaged passwords are corrected automatically with the users / roles specified under ‘repairable
with’ when logging on to the client or Web Application.

The right key can be checked using the form field permissions of password fields. If at least one
user has the right key, the password can be fixed. In the following example, only the user ‘white’
has the right key and thus only this user can discover and correct the password.

![installation_with_parameters_222_754x91](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_222_754x91.webp)

When logging on to the database via the client, a cleanup task is started automatically. This task
always runs with the logged in user. In this case – as far as it is possible with the user – all
affected passwords are corrected. Thus, when all users have logged in once, all affected passwords
should be adjusted.

###### Irreparable records (not repairable)

Irreparable passwords cannot be corrected automatically. Nevertheless, it may happen that passwords
marked as irreparably can be corrected manually.

**First case**

In the first case, no user / role has the right key on the password. Thus, no user can decrypt or
correct the password.

![installation_with_parameters_223_757x69](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_223_757x69.webp)

The affected passwords have to be recreated. For the security, a new database with an older backup
can be included. From this database, the affected passwords / data can be taken over into the
current database again.

**Second case**

In the second case, there are users / roles who have the right key but not the right to claim. As
far as the number of irreparable passwords is limited, these can be used to check the form field
permissions manually.

![installation_with_parameters_224_762x90](/images/passwordsecure/9.1/configuration/server_manager/settlement_right_key/installation_with_parameters_224_762x90.webp)

For the passwords concerned, the user with the legal key must be given the right of authorization
temporarily to correct. If the corresponding user has the entitlement right, he can reset the legal
key, either automatically when logging in or manually when saving the authorizations.
