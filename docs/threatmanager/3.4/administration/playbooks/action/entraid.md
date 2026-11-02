---
title: "Entra ID Target Actions"
description: "Entra ID Target Actions"
sidebar_position: 20
---

# Entra ID Target Actions

The following actions target an Entra ID application.

## Entra ID Group Membership

Manages an Entra ID group's membership by adding or removing an object from a group.

![entraidmembership](/images/threatmanager/3.0/administration/playbooks/action/entraidmembership.webp)

- Users – Select the users for whom to alter group membership. If you leave it blank, the action uses the user who
  triggered the threat.
    - Perpetrator – The account that initiated the threat
    - Users Affected – Users the threat affected
    - Both Perpetrators and Users Affected – The account that initiated the threat and the users the
      threat affected
- Group – Specify the identity of the group to manage. If you leave it blank, the action uses the group the
  threat affected.
- Action – Select the action to take on the user's group membership
    - Add – Add the user to the specified group
    - Remove – Remove the user from the specified group
- Credential – Select a credential profile that contains valid Entra ID credentials. Credential
  profiles are on the
  [Integrations Interface](/docs/threatmanager/3.4/administration/configuration/integrations/overview.md). If you leave it blank, the
  action runs as the credentials of the Action Service.

## Flag Entra ID User as Confirmed Compromised

Flag a user, enterprise application, or service principal as confirmed compromised within your Entra ID tenant. When the perpetrator is an application or service principal, the action reads its application and service principal IDs from the event details.

![confirmcompromised](/images/threatmanager/3.0/administration/playbooks/action/confirmcompromised.webp)

- Users – The users to flag as confirmed compromised. If you leave it blank, the action uses the user who triggered the
  threat.

    - Perpetrator – The account that initiated the threat
    - Users Affected – Users the threat affected
    - Both Perpetrators and Users Affected – The account that initiated the threat and the users the
      threat affected

- Credential – Select a credential profile that will mark the user as confirmed compromised.
  Credential profiles are on the
  [Integrations Interface](/docs/threatmanager/3.4/administration/configuration/integrations/overview.md). If you leave it blank, the
  action runs as the credentials of the Action Service.

## Disable Entra ID User

This actions disables a user in your Entra ID tenant.

![disableuser](/images/threatmanager/3.0/administration/playbooks/action/disableuser.webp)

- Users –The users to disable. If you leave it blank, the action uses the user who triggered the threat

    - Perpetrator – The account that initiated the threat
    - Users Affected – Users the threat affected
    - Both Perpetrators and Users Affected – The account that initiated the threat and the users the
      threat affected

- Credential – Select a credential profile that will execute this action. Credential profiles are on the [Integrations Interface](/docs/threatmanager/3.4/administration/configuration/integrations/overview.md). If you leave it blank, the action runs as the credentials of the Action Service.

## Reset Entra ID Password

Resets an Entra ID user's password to a specified password. If you don't specify a password, it resets a
user's password to a random group of letters, numbers, and special characters.

![entraidresetpassword](/images/threatmanager/3.0/administration/playbooks/action/entraidresetpassword.webp)

- New Password – The action sets the password to this value. If you leave it blank, it generates a random
  password.
- Users – The users whose passwords the action resets. If you leave it blank, the action uses the user who triggered
  the threat.

    - Perpetrator – The account that initiated the threat
    - Users Affected – Users the threat affected
    - Both Perpetrators and Users Affected – The account that initiated the threat and the users the
      threat affected

- Credential – Select a credential profile that will execute this action. Credential profiles are on the [Integrations Interface](/docs/threatmanager/3.4/administration/configuration/integrations/overview.md). If you leave it blank, the action runs as the credentials of the Action Service.
