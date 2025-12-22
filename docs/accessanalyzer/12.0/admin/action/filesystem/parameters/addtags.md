---
title: "Add Tags"
description: "Add Tags"
sidebar_position: 70
---

# Add Tags

Use the Parameters page to specify the file tags the action adds.

![File System Action Module Wizard Add Tags Parameters page](/images/accessanalyzer/12.0/admin/action/filesystem/parameters/addtags.webp)

Use the fields provided to select tags from the drop-down lists and populate the Tag field, or edit
the field manually. The Preview field updates based on the contents of the Tag field.

- Add Mode:

    - Append to existing tags - Adds new tags to the existing list of tags
    - Overwrite existing tags - Removes all existing tags before adding newly configured tags

:::note
If choosing the option to overwrite tags, the action module will clear out both normal
tags and Boldon James tags and then proceed to apply the tags configured for overwrite. If choosing
the option to remove all tags, the action module will clear out both normal tags and Boldon James
tags.
:::


- Fields – Use the drop-down list to select a field (column) from the source table, then click the
  blue arrow to insert the item into the **Tag** field
- Environment Variables – Select an item from the drop-down list, then click the blue arrow to
  insert the item into the **Tag** field
- Preview – Shows what the compound path specified will be resolved in to
- Click **Add** to add the tag field to the list
- Click **Remove** to remove the tag field from the list

![Boldon James Column on Add Tags Parameters page](/images/accessanalyzer/12.0/admin/action/filesystem/parameters/addremovetagsboldonjames.webp)

- Type - Select which type of tag to add. The two types of tags that can be added are:

    - Regular - Configure new tag as a regular tag
    - Boldon James - Configure new tag as a Boldon James tag

        :::note
        The Boldon James column indicates whether a file tag is a regular tag or a Boldon
        James tag. Regular tags will be identified with **0**. Boldon James tags will be identified
        with **1**.
        :::


A list of supported file types appears at the bottom of the page.
