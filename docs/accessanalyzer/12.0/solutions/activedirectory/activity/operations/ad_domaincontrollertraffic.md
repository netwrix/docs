---
title: "AD_DomainControllerTraffic Job"
description: "AD_DomainControllerTraffic Job"
sidebar_position: 20
---

# AD_DomainControllerTraffic Job

The AD_DomainControllerTraffic Job provides a summary of the amount of traffic for Changes,
Authentication, Replication, and LDAP Queries for each domain controller which can be used to
identify issues with load balancing. If the AD_DCSummary job has been run, the roles for each domain
controller will be provided.

## Analysis Tasks for the AD_DomainControllerTraffic Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** >
**AD_DomainControllerTraffic** > **Configure** node and select **Analysis** to view the analysis
tasks.

:::warning
Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.
:::


![Analysis Tasks for the AD_DomainControllerTraffic Job](/images/accessanalyzer/12.0/solutions/activedirectory/activity/operations/dctrafficanalysis.webp)

The default analysis task is:

- Summarize Protocol Usage – Creates the SA_AD_DomainControllerTraffic_Details table accessible
  under the job’s Results node

In addition to the tables created by the analysis tasks, the AD_DomainControllerTraffic Job produces
the follow pre-configured report:

| Report                    | Description                                                                            | Default Tags                                               | Report Elements                                                                                          |
| ------------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| Domain Controller Traffic | Identifies the amount of active directory events that occur on each domain controller. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of one element: <ul><li>Table –  Displays a Domain Controller summary</li></ul> |
