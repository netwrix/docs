# AD\_ComputerDelegation Job

The AD\_ComputerDelegation Job provides details on computer accounts that have been enabled for unconstrained delegation. Once this configuration is enabled for a computer, any time an account connects to the computer for any reason, their ticket-granting ticket (TGT) is stored in memory so it can be used later by the computer for impersonation, which exposes a significant security risk in cases where privileged accounts access the computer.  See the [What Is Kerberos Delegation?](https://blog.netwrix.com/2021/11/30/what-is-kerberos-delegation-an-overview-of-kerberos-delegation/) Netwrix blog article for more information about this configuration and the related security risks.

## Analysis Task for the AD\_ComputerDelegation Job

Navigate to the __Active Directory__ > __3.Computers__ > __AD\_ComputerDelegation__ > Configure node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the analysis task. The analysis task is preconfigured for this job.

![Analysis Task for the AD_ComputerDelegation Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/activedirectory/computers/computerdelegationanalysis.png)

The default analysis tasks are:

- Determine computers trusted for delegation – Creates the SA\_AD\_ComputerDelegation\_Details table accessible under the job’s Results node

In addition to the tables and views created by the analysis task, the AD\_ComputerDelegation Job produces the following pre-configured report:

| Report | Description | Default Tags | Report Elements |
| --- | --- | --- | --- |
| Computers Trusted for Delegation | This report highlights which computers are trusted for delegation, which accounts are sensitive, and whether the delegation is constrained or unconstrained. | None | This report is comprised of three elements:   - Stacked Bar Chart – Displays computers trusted for delegation by domain  - Table – Provides details on computers trusted for delegation  - Table – Provides details on computers trusted for delegation by domain |
