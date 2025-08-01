---
title: "Identity Repository"
description: "Identity Repository"
sidebar_position: 10
---

# Identity Repository

One of the main purposes of an IGA tool is to build a comprehensive repository containing all
identities in the organization. This repository is essential in order to set up the features for
identity lifecycle management, and manage entitlement assignments.

## Overview

The identity repository is supposed to contain the list of all kinds of identities in the company.
Each identity will be represented by a set of properties that are to be used in the calculations for
entitlement assignments.

> For example, a user can be represented by an identifier and linked to their position which
> includes the user's employee id, last name and first name, email, user type, organization, etc.
>
> ![Identity Repository Example](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/identityrepository-example.webp)

> In Usercube, the identity repository can look like the following:
>
> ![Identity Repository Result](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/identityrepository_v602.webp)
>
> ![Identity Example](/images/identitymanager/6.1/user-guide/set-up/initial-identities-loading/identityrepository-person_v602.webp)

The identity repository can be created and updated by:

- uploading an Excel file provided by Usercube with the right model;
- using Usercube's workflows;
- synchronizing HR files to Usercube via a specific connector.

NETWRIX recommends creating the identity repository by downloading the provided Excel file, filling
it with HR information, and uploading it back.
[See how to create the workforce repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/load-identities/index.md).

Then
[perform mass updates](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/mass-update/index.md)
with the same kind of process, and
[individual updates](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/individual-update/index.md)
via Usercube's workflows.

### Useful data

Not all data is useful for identity governance and administration. Thus, to start designing the
repository, you must be aware of which data is necessary and which is unhelpful. Useful data is the
data that:

- needs to be provisioned to the managed applications;

    > For example, if you need to provision users' phone numbers in a given application, then you
    > should fill in the workforce repository's `Phone Number` property.

- is needed to manage identities' lifecycles;

    > For example, consider that internal employees must be managed by HR officers only, then you'll
    > need to identify whether users are internal employees or external contractors. Then you should
    > make sure that you fill an `Employee Type` property with at least two values: one for internal
    > employees, and one for external contractors.

- is needed to automatically grant permissions.

    > For example, if a user's position title ("manager" for instance), defines what users currently
    > do, and thus what permissions they need, then you should make sure to fill in a property
    > storing the position's title in the workforce repository.
