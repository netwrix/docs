---
title: "Missing Items Window"
description: "Missing Items Window"
sidebar_position: 20
---

# Missing Items Window

When you import a resource list in the Create Review or Edit Review wizard, the CSV file might
specify items that Access Information Center can't find or that aren't valid for the review.

![Some items couldn't be found dialog](/images/accessinformationcenter/12.0/resourcereviews/window/missingitemsmessage.webp)

Click **Yes** to open the Missing Items window or click **No** to complete the import without
viewing the missing items.

![Missing items window](/images/accessinformationcenter/12.0/resourcereviews/window/missingitems.webp)

Review the list of resources. Items appear for multiple reasons:

- Resources that don't exist in the resource owners list
- Resources where the resource owner declined ownership
- Resources that aren't valid selections for the selected review type

    - Membership – Resources that aren't groups
    - Access / Permissions / Sensitive Data – Resources that aren't file system, SharePoint, or DFS

- For Sensitive Data reviews, resources that don't have scan data available. This includes
  resources that only have sensitive data at a child folder level.

Click **OK** to close the window and complete the import of any valid resources.
