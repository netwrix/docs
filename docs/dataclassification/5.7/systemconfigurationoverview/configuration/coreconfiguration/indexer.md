---
title: "Indexer"
description: "Indexer"
sidebar_position: 20
---

# Indexer

This configuration tab contains the indexing engine settings. Each configuration option has an
associated “**i**” which describes the nature of the setting. To view advanced options, click the
screwdriver icon at **Settings** on the right.

![core_indexer_thumb_0_0](/images/dataclassification/5.7/configuration/core/core_indexer_thumb_0_0.webp)

| Option                           | Description                                                                                                                                                                                                   | Comment                                                                                                                                                                   |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General settings**             |                                                                                                                                                                                                               |                                                                                                                                                                           |
| Indexer Threads                  | The number of background threads used for the indexer's processing. Default is _0_ (auto).                                                                                                                    | We recommend leaving this setting on its default value. For more information, see this Knowledge Base article: [https://kb.netwrix.com/3863](https://kb.netwrix.com/3863) |
| Near Duplicate Detection Enabled | With this option enabled, the Indexer will attempt a fuzzy match to locate near duplicates within the index (as a background action). These can then be reviewed via the **Near Duplicate Detection** report. | By default, duplicate detection will be based purely on an exact match (matching checksum).                                                                               |
| **Advanced settings**            |                                                                                                                                                                                                               |                                                                                                                                                                           |
| Indexer Delay                    | The sleep time (in milliseconds) between intensive operations (for example, extracting terms). Default is _1_ millisecond.                                                                                    |                                                                                                                                                                           |
| Indexer Polling                  | The sleep time between Indexer batches.                                                                                                                                                                       | Only utilised when the indexing queue is empty.                                                                                                                           |
| DocumentID`<N>` Mapping          | Used to map fields into the search index ID references. Allows for custom queries based on external IDs against the SOAP search API calls.                                                                    | Theses are ID3 — ID8                                                                                                                                                      |
