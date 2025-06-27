# View Job XML File

At the bottom of the Job Properties window is the **View XML** button. To view the XML file, click
**View** XML.

| ![View XML button on Job Properties window](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/job/properties/viewxmlbutton.webp) | ![XML Text window](/img/product_docs/accessanalyzer/11.6/accessanalyzer/admin/jobs/job/properties/viewxml.webp) |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Job Properties Window                                                                                                                                 | Job XML File                                                                                                           |

This opens the job’s XML file, which contains all of the job, query, and reporting configurations.
When the log level is directly set at job level, the job XML `<JOBLOGLEVEL>` parameter will show a
value of:

- 0 for Debug
- 1 for Info
- 2 for Warning
- 3 for Error

**NOTE:** Job analysis configurations are kept in a separate XML file.
