---
title: "Release mechanism"
description: "Release mechanism"
sidebar_position: 20
---

# Release mechanism

## What is the release mechanism?

A sealed password will not be released until the number of approvals required in the seal has been
granted. Releases can be granted by anyone who has been defined as having the required permissions
to issue the release in the seal. The mechanism describes the complete process from the first
release request to the final grant of the release and the breaking of the seal.

## Users and roles in the release mechanism

As noted in the previous sections, seals always restrict the right of a user to view a specific
password. Even if the configuration is usually done at the level of the role, each user is naturally
responsible for his own request when carrying out the release. Even if a seal is defined for a role,
technically separate seals are created for each individual member of the role.

NOTE: Requests or releases are only valid for the respective user!

**CAUTION:** If a user is a member of several roles of a seal, the "stronger" right is always
applied. Release rights have a priority over read rights

## 1. Requesting a release

In order to release a seal for sealed passwords, this must be requested from the user with the
required permissions to issue the release. Within the Netwrix Password Secure client, this can be
done via the buttons **Reveal** and **Seal** in the ribbon, as well as via the **Icon in the
password field** of the data record in the reading pane.

![seal protection](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/release_mechanism/release_mechanism_1-en.webp)

A modal window opens, which can be used to request the seal. The reason for the entry will be
displayed to the users with the required permissions to issue the release.

![start seal process](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/release_mechanism/release_mechanism_2-en.webp)

All user with the required permissions to issue the release will be notified that the user has
requested the seal. This can be viewed via the module
[Notifications](/docs/passwordsecure/9.2/configuration/advancedview/clientmodule/notifications.md), as well as in the Seal
overview.

## 2. Granting a release

The [Seal overview](/docs/passwordsecure/9.2/configuration/advancedview/permissionconceptandprotective/protectivemechanisms/seals/seal_overview.md) can be opened via the seal symbol in the
ribbon directly from the mentioned notification. It is indicated by the corresponding icon that
there is a need for action. All relevant data for a release are illustrated within the seal
overview. The reason given in the release is also evident.

![seal overview](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/release_mechanism/release_mechanism_3-en.webp)

If the release is granted, the Inquirer Im **Module Notifications** will be informed. You can also
open the seal directly from the ribbon and see the now released state.

![notification seal status](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/release_mechanism/release_mechanism_4-en.webp)

## 3. Breaking the seal

As soon as the requesting user has received the number of the required releases, he will be informed
via the notifications as usual. The seal can now be broken. From this point on, the user will be
able to see the password.

![broken seal](/images/passwordsecure/9.2/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/release_mechanism/release_mechanism_5-en.webp)
