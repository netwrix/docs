---
title: "Labels"
description: "Labels"
sidebar_position: 10
---

# Labels

This section contains information on how to configure SharePoint and Office 365 labels.

## SharePoint Labels

SharePoint labels (Alternate Term Labels) are alternate labels that you configure in SharePoint
against the English language. Through the administration interface you can add and remove alternate
labels. You can't change the default label (instead, rename the node via the treeview right click
menu).

## O365 Labels

For a simple automated experience, you can assign Office 365 Classification labels to
existing Term Set structures within Taxonomy Manager.

At the time of classification, the classification process identifies any terms that have both met
their threshold and also contain mappings to Office Classification Labels. The engine then
selects the highest scoring term, and automatically applies the mapped label to the document in
SharePoint (taking into account which labels are available per site collection as well as the
setting specified at the term level).

You can apply more than one label to each term, to allow for labels that are only
available on a limited set of site collections.

Select **Add** and choose the label you want to assign from the dropdown list:

![o365labels_thumb_0_0](/images/dataclassification/5.8/admin/taxonomies/o365labels_thumb_0_0.webp)

:::note
If you only recently added the site collection, the label may not yet be synchronized.
:::


## Help

The Help tab displays a list of clue type information and lets you run the product tour
specific to the Taxonomies area.
