---
description: >-
  This article addresses the error message "Object doesn't support property or method" encountered in the Netwrix Access Analyzer and provides steps to resolve it.
keywords:
  - Netwrix Access Analyzer
  - error resolution
  - interactive grid
products:
  - access-analyzer
sidebar_label: "Error: Object Doesn't Support Property or Method"
tags:
  - troubleshooting-and-errors
title: "Error: Object Doesn't Support Property or Method"
knowledge_article_id: kA0Qk0000001nl3KAA
---

# Error: Object Doesn't Support Property or Method

## Symptom

When you attempt to access the Netwrix Access Analyzer report configuration, you receive the following error:

```
Unable to log error to Access Analyzer: Object doesn't support property or method 'LogJSMessage'.
```

## Cause

The exact cause of this error is currently unknown, but it typically occurs after an upgrade.

## Resolution

Set the report grid to interactive to resolve the issue. Follow these steps to enable an interactive grid:

1. In the affected Access Analyzer job **Reports** node, configure the affected report by clicking **Configure**.
   ![Configure report in Access Analyzer Reports node](./../0-images/servlet_image_73e60a4574bb.png)

2. Click **Widgets** and select any Grid-type widget. Check it, then click **Configure**.
   ![Select and configure Grid-type widget in Access Analyzer](./../0-images/servlet_image_bd5be116677a.png)

3. Ensure that the **Table Properties** setting is set to **Interactive grid**.
   ![Set Table Properties to Interactive grid in Access Analyzer](./../0-images/servlet_image_a02a8fc4212e.png)

4. Click **OK** and then **Finish** on the Widget screen to save your changes.

5. Regenerate the report to verify that the error is resolved:
   - Click the **three dots** next to Configure and click **Generate**.
     ![Generate report in Access Analyzer](./../0-images/servlet_image_b962017fe9d6.png)

6. Review the report to confirm that the generation did not error.