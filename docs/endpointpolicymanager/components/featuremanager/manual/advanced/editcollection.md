---
title: "Editing a Collection"
description: "Editing a Collection"
sidebar_position: 30
---

# Editing a Collection

Collections can be edited as well and their properties changed.

![advanced_manipulations_of_3](/images/endpointpolicymanager/feature/advanced/advanced_manipulations_of_3.webp)

The collection editor enables you to add a comment and change the state of the collection. It also
allows you to change three settings.

![advanced_manipulations_of_4](/images/endpointpolicymanager/feature/advanced/advanced_manipulations_of_4.webp)

- **Existing Features Option**

  - **Not Configured** - The default is to preserve all optional features, if this is not set in
    any collection. However, if this is set in a higher or lower collection, then the settings of
    the other collection will be honored.
  - **Preserve** - Maintains all existing features.
  - **Remove** - Removes all existing features. This should be used with caution. Unless features
    are specifically added within this collection or merged from another collection, they will be
    removed. This could cause unintended results, like removing language AppSets and functionality
    that the computer needs. Note also that some features are not removable, even if they appear
    to be selectable.

- **Existing Optional Features Option**

  - **Not Configured** - If this is set in another collection, do that. Otherwise, when it's not
    set, the default is to preserve all optional features.
  - **Preserve** - Maintains all existing optional features.
  - **Remove** - Removes all existing features. This should be used with caution. Unless features
    are specifically added within this collection or merged from another collection, they will be
    removed. This could cause unintended results, like removing language AppSets and functionality
    that the computer needs. Note also that some optional features are not removable, even if they
    appear to be selectable.

- **Reboot Mode**

  - **Not Configured** - If this is set in another collection, do that. Otherwise, when it's not
    set, the default is "Asks user."
  - **Prevent** - Actively blocks reboots and does not prompt user.
  - **Allow** - Automatically reboots a machine, if required.
  - **Asks User** - Prompts the user if Windows determines a reboot is needed.


