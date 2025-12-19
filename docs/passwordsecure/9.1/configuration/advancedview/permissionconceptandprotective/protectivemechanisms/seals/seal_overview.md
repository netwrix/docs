---
title: "Seal overview"
description: "Seal overview"
sidebar_position: 10
---

# Seal overview

## What is the seal overview?

Users with the required permissions to issue the releases receive access to the current state of the
existing seals at any time via the seal overview. The overview is accessible via the ribbon as well
as the icon in the password field of the reading pane.

![button seal](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/seals_overview/seal_overview_1-en.webp)

## The four states of a seal

The seal overview provides an overview of all users who have access to the sealed data set. This is
also the case when they receive the seal on the membership of a role. Functions for editing and
removing existing seals are also available. In addition, the current state of the seal is displayed
in the form of a release matrix. There are a total of **four states**, in which a seal can be:

![states of seal](/images/passwordsecure/9.1/configuration/advanced_view/permissionconcept/predefining_rights/protective_mechanisms/seals/seals_overview/seal_overview_2-en.webp)

#### 1. Sealed

If a data record for a user **is sealed**, the user is prevented from seeing the password by the
seal. This corresponds to the condition when a seal has been newly installed. By resetting a request
via the icon at the right edge of the screen, current requests from individual users are also
returned to the "sealed" state.

#### 2. Release process

If a user has requested a release, it is in the **release process**. This status is highlighted by
an icon next to the user name, since a possible release can be actively granted by the authorized
user. These so-called **important entries** can also be filtered in the headline of the seal
overview in via the column. The maximum duration of an release request can be configured in the
advanced seal settings. If the deadline has elapsed without sufficient releases being made, the
request is deleted and the state “sealed” is restored.

#### 3. Released

If a release is granted, a seal is approved as **released**. The maximum duration of a granted
release can be limited in the advanced seal settings. The user then has, for example, 24 hours to
accept the release and break the seal.

#### 4. Broken

The actual **seal breach** is obtained by acquiring knowledge of the release and by actively
breaking the seal after a security query. Viewing the password is irrelevant. Once broken seals can
be manually reset by the icon to the right of the broken seal column. The state “Sealed” is
restored.

:::warning
It makes no sense to re-seal already visible passwords. The user was able to view the
password. Therefore, it is not monitorable whether the password has been saved, for example, by
screenshot. In such cases, a new password is the only way to guarantee 100% password security!

:::
