---
title: "View Job XML File"
description: "View Job XML File"
sidebar_position: 100
---

# View Job XML File

At the bottom of the Job Properties window is the **View XML** button. To view the XML file, click
**View** XML.

| ![View XML button on Job Properties window](/images/accessanalyzer/11.6/admin/jobs/job/properties/viewxmlbutton.webp) | ![XML Text window](/images/accessanalyzer/11.6/admin/jobs/job/properties/viewxml.webp) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Job Properties Window                                                                                                                                 | Job XML File                                                                                                           |

This opens the job’s XML file, which contains all of the job, query, and reporting configurations.
When you directly set the log level at job level, the job XML `<JOBLOGLEVEL>` parameter shows a
value of:

- 0 for Debug
- 1 for Info
- 2 for Warning
- 3 for Error

:::note
Enterprise Auditor keeps job analysis configurations in a separate XML file.

:::
