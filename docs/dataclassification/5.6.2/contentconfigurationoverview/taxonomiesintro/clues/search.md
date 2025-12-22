---
title: "Search Documents by Clue"
description: "Search Documents by Clue"
sidebar_position: 40
---

# Search Documents by Clue

You can search for documents based on the class clues. For that, click on the name of any single
clue in the clue list in the management console (or even any suggested clue), go to the **Search**
tab and configure search settings.

![searchtab](/images/dataclassification/5.6.2/taxonomies/searchtab.webp)

1. Set up the following properties that will be considered a basis for the search:

    - Clue type – Select the required value from the **Type** list
    - Clue itself (clue body) – Enter the required keyword or phrase in the **Find** field

    **NOTE:** See the
    [Classification Rules (Clues)](/docs/dataclassification/5.6.2/contentconfigurationoverview/taxonomiesintro/clues/clues.md)
    topic for additional information

2. To restrict the search further, you can either add a **URL** filter, or add a custom filter by
   clicking **Add custom filter** link. This can be helpful when evaluating the usefulness of a clue
   by quickly examining its usage within the corpus. Consider the following:

    - The URL filter must end on a folder boundary.
    - Use custom filter to specify a number of complex filters: boolean, datetime and numeric.

    **NOTE:** Full description of all filters can be found in the API Reference Guide. You can
    access it by entering http://localhost/NDC/apidocumentation from your NDC server. If the
    originally installed version of NDC is 5.6 or older, the path is
    http://localhost/conceptqs/apidocumentation.

3. To view how recent changes to the term will affect the document classifications, select Show
   document movements. As a result, the “movement” of the document since the last classification
   will be shown. Possible scenarios are:

![movementskey](/images/dataclassification/5.6.2/taxonomies/movementskey.webp)

OR

![documentmovements_thumb_0_0](/images/dataclassification/5.6.2/taxonomies/documentmovements_thumb_0_0.webp)
