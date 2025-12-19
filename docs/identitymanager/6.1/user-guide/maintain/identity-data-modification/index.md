---
title: "Update Identity Data"
description: "Update Identity Data"
sidebar_position: 10
---

# Update Identity Data

How to perform modifications in the identity repository, to manage onboarding, offboarding and
position changes.

This part is not about changing the data model, but data itself.

## Overview

After the identity repository is initiated, you will need to modify it for many possible reasons.
Among them:

- update all identities with new attributes because you didn't have the required information during
  the repository creation, or because it wasn't a priority for you then;
- perform onboarding: add new identities as new workers arrive in the company;
- modify identities' attributes to fix existing errors, or to reflect a real change in users' data,
  or model a position change;
- remove identities' attributes, as they are no longer required to manage entitlements;
- perform offboarding: remove identities with all their attributes, as users leave the company.

## Participants and Artifacts

Integrators are able to perform an identity update if they master the new data.

| Input                                                                                                                                                      | Output                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- |
| [Identity repository](/docs/identitymanager/6.1/user-guide/set-up/initial-identities-loading/index.md) (required) New identity data (required) | Updated identity repository |

## Modify Identity Data

Modify identity data by proceeding as follows, according to the changes to be made:

- either
  [update data individually](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/individual-update/index.md)
  by using predefined workflows in the UI;
- or
  [perform a same change on several identities simultaneously](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/multiple-update/index.md)
  by using Usercube's predefined workflow in the UI;
- or
  [update data on a massive scale](/docs/identitymanager/6.1/user-guide/maintain/identity-data-modification/mass-update/index.md)
  by uploading an external file into Usercube, as an incremental version of the identity repository.
