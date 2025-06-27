# SG_LSASettings Job

The SG_LASettings job lists settings on all targeted hosts. In particular, the RunAsPPL,
RestrictAnonymous, and ValidateKdcPacSignature keys are examined. If these keys are not set to 1, a
host is vulnerable to mimikatz and other exploitation tools. See the Microsoft
[Configuring Additional LSA Protection](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn408187(v=ws.11))
article for additional information.

## Queries for the SG_LSASettings Job

The SG_LSASettings job uses the Registry Data Collector for the following queries:

**CAUTION:** The queries are preconfigured for this job. Never modify the queries.

![Queries for the SG_LSASettings Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/authentication/lsasettingsqueries.webp)

The queries for the SG_LSASettings Job are:

- Check LSA registry keys – Checks LSA registry keys
- PAC Validation – Provides PAC Validation

## Analysis Tasks for the SG_LSASettings Job

Navigate to the **Windows** > **Authentication** > **SG_LSASettings** > **Configure** node and
select **Analysis** to view the analysis tasks.

**CAUTION:** Do not modify or deselect the selected analysis tasks. The analysis tasks are
preconfigured for this job.

![Analysis Tasks for the SG_LSASettings Job](/img/product_docs/accessanalyzer/11.6/accessanalyzer/solutions/windows/authentication/lsasettingsanalysis.webp)

The default analysis tasks are:

- TrackRunAsPPL changes – Creates the SG_LSASettings_RunAsPPLChangeTracking table accessible under
  the job’s Results node
- List RunAsPPL setting details – Creates the SG_LSASettings_RunAsPPLDetails table accessible under
  the job’s Results node
- Summarize RunAsPPL settings – Creates an interim processing table in the database for use by
  downstream analysis and report generation
- Track RestrictAnonymous changes – Creates the SG_LSASettings_RestrictAnonymousChangeTracking table
  accessible under the job’s Results node
- List RestrictAnonymous setting details – Creates the SG_LSASettings_RestrictAnonymousDetails table
  accessible under the job’s Results node
- Summarize RestrictAnonymous settings – Creates an interim processing table in the database for use
  by downstream analysis and report generation
- PAC – Creates the SG_LSASettings_PACStatus table accessible under the job’s Results node

In addition to the tables created by the data collector, the SG_LSASettings job produces the
following pre-configured reports.

| Report                    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Default Tags | Report Elements                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Additional LSA Protection | This report summarizes RunAsPPL registry settings on targeted hosts. This key governs whether or not additional LSA protection is enabled. See the Microsoft [Configuring Additional LSA Protection](https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-R2-and-2012/dn408187(v=ws.11)) article for additional information.                                                                                                    | None         | This report is comprised of two elements: - Pie Chart – Displays additional LSA protection by host - Table – Provides additional LSA Protection Details |
| PAC Validation            | This report indicates whether or not PAC Validation is enabled on all targeted hosts. This is governed by the ValidateKdcPacSignature key. Default behavior in the event of this key's absence depends on the Windows version installed. See the Microsoft [Understanding Microsoft Kerberos PAC Validation](https://learn.microsoft.com/en-gb/archive/blogs/openspecification/understanding-microsoft-kerberos-pac-validation) article for additional information. | None         | This report is comprised of two elements: - Pie Chart – Displays PAC validation status - Table – Provides PAC validation details                        |
| Restrict Anonymous Access | This report summarizes RestrictAnonymous registry settings on targeted hosts. This key governs whether or not access over anonymous connections is enabled. See the Microsoft [Restrict Anonymous check](https://learn.microsoft.com/en-us/previous-versions/tn-archive/bb418944(v=technet.10)) article for additional information.                                                                                                                               | None         | This report is comprised of two elements: - Pie Chart – Displays anonymous access by host - Table – Provides anonymous access details                   |
