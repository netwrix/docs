---
title: "CDSA Job"
description: "CDSA Job"
sidebar_position: 10
---

# CDSA Job

The CDSA Job is available through the Instant Job Library under the CDSA library. See the
[Instant Job Wizard](/docs/accessanalyzer/12.0/admin/jobs/instantjobs/overview.md) topic for instructions of how to add
this instant job to the Jobs tree. When installing the job, select **Local host** on the Host pages
of the Instant Job Wizard.

Ensure the supporting solutions have successfully collected and analyzed data prior to running this
job. See the [Presentation Dependencies](/docs/accessanalyzer/12.0/cdsa/presentation.md) topic for alignment between presentation
slides and jobs that supply the data points.

The CDSA job generates three PowerPoint files:

- For the Presenter

    - The **Netwrix_CDSA_Presentation.pptx** file is designed to be presented live to the customer

- For the Customer as printable assets

    - The **Netwrix_CDSA_8.5x11_Presentation.pptx** file is designed to be given to the customer for
      self-review as a PDF file
    - The **Netwrix_CDSA_A4_Presentation.pptx** file is designed to be given to the customer for
      self-review as a PDF file

:::warning
Do not send any these presentations to a customer in PowerPoint format.
:::


The printable assets can be converted to PDFs or printed booklet style at a professional print shop
(suggested) if desired.

These presentations are located within the job’s folder in the Access Analyzer installation
directory, which varies according to the location of the job within the Jobs tree. Navigate to this
folder by clicking **Open Folder** on the job's overview page.

The presentation files contain slides for both a classic CDSA presentation applicable to most
organizations and an ePHI Security Assessment applicable to the healthcare industry.

## Delivering a CDSA Presentation Slide Show

The **Netwrix_CDSA_Presentation.pptx** file is designed to be presented live to the customer. There
are two presentation options for the live slide show:

- The **CDSA - Classic** slide show contains the first 24 slides and is applicable for most
  organizations
- The **ePHI Security Assessment** slide show contains the ending slides with select summary slides
  from the Classic slide show and is applicable to the healthcare industry

Use the Custom Slide Show drop-down menu on the Slide Show ribbon in PowerPoint to select the
appropriate presentation.

:::note
Slide 17 is hidden by default as same information is available on Slides 18-20.
:::


Netwrix University includes a training module with details on the key talking points for a live
delivery of the slide shows. Check out the **315 – Getting Started with Credential & Data Security
Assessment** training course.

## Choosing a PDF Version

Both of the printable assets have two customized options for converting to a PDF:

- CDSA Classic – Contains the first 24 slides and is applicable for most organizations
- ePHI Security Assessment – Contains the ending slides with select summary slides from the Classic
  slide show and is applicable to the healthcare industry

Follow the steps to create the appropriate custom PDF.

**Step 1 –** Use the **Save As** option.

**Step 2 –** Set the file name as desired and change the Save As type to **PDF**.

**Step 3 –** Click **Options** and change the Range to **Custom show**.

**Step 4 –** By default, this is set to the **CDSA Classic** show. If needed, change it to the
**ePHI Security Assessment** show.

**Step 5 –** Click **OK** to confirm the option, and then click **Save** to generate the PDF.

The presentation is converted to a PDF with only the applicable slides included.

:::note
Slide 16 is hidden by default as same information is available on Slides 17-19.
:::


## Custom Slide Show Alignment

The table lists each slide as it is listed in the **Netwrix_CDSA_Presentation.pptx** file. It
indicates which slides are included in each custom slide show. There are slight variations in page
numbering with the files designed to be saved as PDFs.

| #   | Slide Title                                              | CDSA Classic | ePHI Security Assessment |
| --- | -------------------------------------------------------- | ------------ | ------------------------ |
| 1   | Executive Summary                                        | X            |                          |
| 2   | Netwrix Credential and Data Security Assessment (CDSA)   | X            |                          |
| 3   | Data Security                                            | X            |                          |
| 4   | Condition: Open Access                                   | X            | X                        |
| 5   | Sensitive Data                                           | X            |                          |
| 6   | Stale Data                                               | X            |                          |
| 7   | Active Directory Security                                | X            | X                        |
| 8   | Password Issues                                          | X            |                          |
| 9   | Toxic Active Directory Conditions                        | X            |                          |
| 10  | Non-Administrators that can Perform Sensitive AD Actions | X            |                          |
| 11  | Active Directory Sensitive Security Groups               | X            |                          |
| 12  | Windows: Assessment Summary                              | X            | X                        |
| 13  | Local Administrators                                     | X            |                          |
| 14  | Service Accounts                                         | X            |                          |
| 15  | Ticket and Credential Management                         | X            |                          |
| 16  | Shadow Access Rights                                     | X            |                          |
| 17  | Additional Findings (FS, AD, Windows OS)                 |              |                          |
| 18  | Additional Findings (FS, SharePoint, Box, Dropbox)       | X            | X                        |
| 19  | Additional Findings (Exchange, Databases)                | X            | X                        |
| 20  | Additional Findings (AD, Windows OS)                     | X            | X                        |
| 21  | Product Portfolio                                        | X            | X                        |
| 22  | Path To Success                                          | X            | X                        |
| 23  | Netwrix                                                  | X            | X                        |
| 24  | Thank You                                                | X            | X                        |
| 25  | Executive Summary: ePHI Security Assessment              |              | X                        |
| 26  | Netwrix ePHI Security Assessment                         |              | X                        |
| 27  | ePHI Data                                                |              | X                        |
| 28  | Condition: Stale Data                                    |              | X                        |
| 29  | AD Security Assessment                                   |              | X                        |
| 30  | Windows: Security Assessment                             |              | X                        |
| 31  | Shadow Access Rights to ePHI Data                        |              | X                        |
