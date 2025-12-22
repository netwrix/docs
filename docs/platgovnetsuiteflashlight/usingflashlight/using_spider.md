---
title: "Using the Spider"
description: "Using the Spider"
sidebar_position: 10
---

# Using the Spider

While NetSuite is flexible and powerful, your account can quickly become out-of-sync and cluttered
with unused or undocumented customizations. Strongpoint’s Flashlight spider creates a searchable
database of your customizations and displays them visually.

- Rapid results in a few days, or faster, with minimal impact on system performance.
- Automatically catalog all custom fields, scripts, forms, reports, records, workflows and
  templates.

## Manual Spider

Flashlight's spider documents your account by analyzing all customizations in the system. It is
critical to run the spider on a regular basis to ensure your account documentation is up-to-date. We
recommend running the spider on a weekly basis or more frequently depending on the amount of changes
being made to your account. Note that updating your account documentation is much quicker after the
first time the spider is run, since Flashlight is documenting new or modified customization.

Run the manual spider:

1. Open **Flashlight** > **Tools** > **Spider**

    ![Open the Spider](/images/platgovnetsuiteflashlight/getting_started/mainmenu.webp)

2. You can run the manual spider:

    - **Fast**: Only updates if there are changes to the customization records.
    - **Slow**: Re-spiders all customization records.
    - **By Record type**: updates a specific record type or several record types can be selected to be
  updated. The selected record types are added to an index. Strongpoint processes read the index,
  create customization records, and parse relationships and scripts.

    ![Spider Options](/images/platgovnetsuiteflashlight/getting_started/spider_800x368.webp)

## Re-spider Now

You can also update the documentation for a specific customization record. Simply click **Respider
Now** on the customization record and your documentation is updated in real time.

![Re-Spider Now](/images/platgovnetsuite/respider_now.webp)
