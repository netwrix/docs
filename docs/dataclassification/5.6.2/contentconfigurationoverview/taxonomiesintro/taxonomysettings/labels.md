---
title: "Labels"
description: "Labels"
sidebar_position: 20
---

# Labels

This section contains information on how to configure SharePoint and Office 365 labels.

## SharePoint Labels

SharePoint labels (Alternate Term Labels) are alternate labels configured in SharePoint against the
English language. Through the administration interface you can add and remove alternate
labels. You can't change the default label directly (rename the node via the treeview right click menu).

## O365 Labels

For a simple automated experience, assign Office 365 Classification labels to
existing Term Set structures within Taxonomy Manager.

At the time of classification the classification process will identify any terms that have both met
their threshold and also contain mappings to Office Classification Labels. The engine will then
select the highest scoring term, and automatically apply the mapped label to the document in
SharePoint (taking into account which labels are available per site collection as well as the
setting specified at the term level).

More than one label can be applied to each term to allow for labels to be applied that are only
available on a limited set of site collections.

Select Add and choose the label you want to assign from the dropdown list:

![o365labels_thumb_0_0](/images/dataclassification/5.6.2/taxonomies/o365labels_thumb_0_0.webp)

**NOTE:** If the site collection has only recently been added then the label may not yet have been
synchronized down.

## Help

The Help tab displays a list of clue type information, as well as runs the product tour
specific to the Taxonomies area.
