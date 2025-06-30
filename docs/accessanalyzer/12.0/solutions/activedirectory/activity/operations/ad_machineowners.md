# AD_MachineOwners Job

The AD_MachineOwners Job helps to identify the owner of a particular host.

## Analysis Tasks for the AD_MachineOwners Job

Navigate to the **Active Directory** > **6.Activity** > **Operations** > **AD_MachineOwners** >
**Configure** node and select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the AD_MachineOwners Job](/img/product_docs/accessanalyzer/12.0/solutions/activedirectory/activity/operations/machineownersanalysis.webp)

The default analysis tasks are:

- Identify Machine Owners – Creates the SA_AD_MachineOwners_Details table accessible under the job’s
  Results node
- User Summary – Creates the SA_AD_MachineOwners_UserSummary table accessible under the job’s
  Results node

In addition to the tables created by the analysis tasks, the AD_MachineOwners Job produces the
following pre-configured report:

| Report         | Description                                                   | Default Tags                                               | Report Elements                                                                                                               |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Machine Owners | Identify owners of machines based on authentication patterns. | CCPA GDPR SOX HIPPA PCI-DSS GLBA ITAR FERPA FISMA ISO27001 | This report is comprised of two elements: - Bar Chart– Displays top users by machines owned - Table – Displays machine owners |
