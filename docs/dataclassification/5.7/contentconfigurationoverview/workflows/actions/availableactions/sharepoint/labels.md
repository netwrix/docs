---
title: "Labels"
description: "Labels"
sidebar_position: 10
---

# Labels

This section contains information on how to configure SharePoint and Office 365 labels.

## SharePoint Labels

SharePoint labels (Alternate Term Labels) are alternate labels configured in SharePoint against the
English language. Through the administration interface it is possible to add and remove alternate
labels. It is not currently possible to change the default label (this should be achieved by
renaming the node via the treeview right click menu).

## O365 Labels

For a simple automated experience it is possible to assign Office 365 Classification labels to
existing Term Set structures within Taxonomy Manager.

At the time of classification the classification process will identify any terms that have both met
their threshold and also contain mappings to Office Classification Labels. The engine will then
select the highest scoring term, and automatically apply the mapped label to the document in
SharePoint (taking into account which labels are available per site collection as well as the
setting specified at the term level).

More than one label can be applied to each term to allow for labels to be applied that are only
available on a limited set of site collections.

Simply select Add and choose the label you wish to assign from the drop down list:

![o365labels_thumb_0_0](/images/dataclassification/5.7/admin/taxonomies/o365labels_thumb_0_0.webp)

:::note
If the site collection has only recently been added then the label may not yet have been
synchronized down.
:::


## Help

The Help tab displays a list of clue type information, as well as allows you to run the product tour
specific to the Taxonomies area.
