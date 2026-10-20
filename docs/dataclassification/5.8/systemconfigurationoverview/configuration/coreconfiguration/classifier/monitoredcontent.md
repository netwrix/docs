---
title: "MonitoredContent"
description: "MonitoredContent"
sidebar_position: 20
---

# MonitoredContent

You can decrease the Classifier load, targeting it at _monitored content_ only. This means that you
can schedule automatic re-classification of content only when a specific condition or set of
conditions match, or with a minimum time period between runs.

![core_thumb_0_0](/images/dataclassification/5.8/configuration/core_thumb_0_0.webp)

:::note
Each option has an associated information popup (the “**i**” symbol next to the option name) which describes what the setting does and how it works.
:::


| Option                                     | Description                                                                                                                | Comment                                                                                                         |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Monitored Document Indicator               | The product marks content for automatic re-classification if it carries a particular term.                             | Click the tag icon to select the term to use for identifying monitored content.                     |
| Minimum Reclassification Regularity (days) | Defines the minimum period to use when re-classifying monitored content: from _1_ to _180_ days, default is **1** day. | The product marks content for reclassification if it was last classified before the specified regularity period.   |

To re-classify content that meets specific conditions:

1. Use tagging. The product marks content for automatic re-classification if it carries a
   particular term.
2. In the **Monitored Content** section of **System Configuration > Core > Classifier** locate
   **Monitored Document Indicator**.
3. Click the tag icon, and in the **Select Term** dialog specify the term to use for identifying
   monitored content:
   ![core_classifier_mc_terms_thumb_0_0](/images/dataclassification/5.8/configuration/core/core_classifier_mc_terms_thumb_0_0.webp)4.
   When finished, click **Select**, then in the Classifier settings window click **Save**,

To re-classify content with a minimum time period between runs:

1. In the **Monitored Content** section of **System Configuration > Core > Classifier** settings
   window locate **Minimum Reclassification Regularity**.
2. Default reclassification period is 1 day. Use the slider to adjust the value. The product marks
   content for reclassification if it was last classified before the specified period.
3. Click **Save**.
