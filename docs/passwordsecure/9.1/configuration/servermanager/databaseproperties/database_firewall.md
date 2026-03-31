---
title: "Database firewall"
description: "Database firewall"
sidebar_position: 30
---

# Database firewall

## What is the database firewall?

The database firewall enables you to regulate access to the database. A whitelist policy is used for
this process. Firewall rules are used to allow access to the database in individual cases.

#### Activating the firewall

The firewall can be directly activated in the database settings.

![database firewall](/images/passwordsecure/9.1/configuration/server_manager/database_properties/installation_with_parameters_226-en.webp)

Access to the firewall is blocked after it has been activated. Login attempts are directly blocked.

![installation_with_parameters_227](/images/passwordsecure/9.1/configuration/server_manager/database_properties/installation_with_parameters_227.webp)

#### Firewall rules

The rules already set are displayed in the section on the right. The icons
![+](/images/passwordsecure/9.1/configuration/server_manager/database_properties/+.webp)
and
![-](/images/passwordsecure/9.1/configuration/server_manager/database_properties/-.webp)
can be used to add or also delete rules. Rules can be edited by double clicking on them.

![firewall rule](/images/passwordsecure/9.1/configuration/server_manager/database_properties/installation_with_parameters_230-en.webp)

The following possibilities exist:

- Access from an individual computer is allowed via the IP address.
- A Range of multiple IP addresses can also be optionally selected.
- It is also possible to regulate access using the Computer name.
- Finally, access can also be allowed for a certain Windows user. For example, the administrator can
  be allowed access irrespective of the computer being used.
- The setting Grant access defines whether access is allowed or blocked. This is symbolised by a
  corresponding icon.

Naturally, the rules can also be combined. It is thus possible e.g that only one defined user can
access one database from a certain IP address.

NOTE: The conditions are always combined using AND operators

If two or more rules overlap, the rule with the least rights will always be applied. For example, if
a rule allows access from a range of IP addresses but another rule blocks a specific computer within
this range then the rule blocking the computer is applied.

## Examples

The functionality of the firewall will be explained in more detail using the following rules:

![defined firewall rules](/images/passwordsecure/9.1/configuration/server_manager/database_properties/installation_with_parameters_231-en.webp)

**Approving an IP range (Rule 1)**

The first rule in the example allows access from a range of IP addresses from 192.168.150.1 to
192.168.150.254

**Locking a particular computer (Rule 2)**

The computer with the IP 192.168.150.64 is within the range defined in Rule 1. Access from this PC
is blocked using this rule.

**Blocking an individual user (Rule 3)**

If you want to block a particular user (perhaps because they have left the company) then this is
also possible.

**Computer-independent access for a user (Rule 4)**

This rule grants access to the administrator. It is irrelevant which computer the administrator uses
to log in to the database.
