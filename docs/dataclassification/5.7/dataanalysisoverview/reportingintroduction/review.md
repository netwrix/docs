---
title: "Review Reports and Browse Classified Documents"
description: "Review Reports and Browse Classified Documents"
sidebar_position: 10
---

# Review Reports and Browse Classified Documents

Once your documents are classified, you can identify sensitive information and reduce its exposure.
Netwrix recommends starting with the Document Tagging report to see automatic and manual
classifications of the documents within the reporting set. Further, you can browse your documents to
see a list of documents achieving the minimum score set for classification in the term. Review the
following for additional information:

- To browse classification results
- To review the Document Tagging report

**To browse classification results**

1. In administrative web console, navigate to Taxonomies → Term Management.
2. Select Taxonomy in the dropdown on the left and then expand specific term you are interested in.
3. Switch to Browse tab:

    ![browsetab_thumb_0_0](/images/dataclassification/5.7/admin/reporting/browsetab_thumb_0_0.webp)

4. Click Filter to start browsing your documents.
   [See Browse for more information.](/docs/dataclassification/5.7/contentconfigurationoverview/taxonomies/clues/browse.md)

**To review the Document Tagging report**

1. In administrative web console, navigate to Reports and expand the Document Reports set.
2. Select the Document Tagging report and click Show filters to narrow report scope.

    | Filter         | Description                                                                                                                              |
    | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
    | Taxonomy       | By default, the report shows results for all taxonomies. Select the taxonomy you are interested in to restrict report scope.             |
    | Score Range    | Select the score. Review [Scoring](https://helpcenter.netwrix.com/NDC/NDC/Taxonomies/Scoring.html?Highlight=score) for more information. |
    | Classification | By default, the report shows results for all terms within a taxonomy. Limit your results by selected term.                               |
    | Page URL       | Filter your results by selected page URL.                                                                                                |
    | Source         | Select source group you created for Google Drive.                                                                                        |

3. Click Generate and review results.
4. You can also export displayed page to .csv and .xlsx table or download the whole results.

    **TIP:** Upon export, you will be prompted to include any associated document metadata to the
    report. It can be useful if you want to generate custom security reports. Specify metadata
    fields and click Export to download report.
