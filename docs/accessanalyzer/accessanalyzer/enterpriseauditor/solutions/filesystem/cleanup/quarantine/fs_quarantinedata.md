# FS\_QuarantineData Job

The FS\_QuarantineData job is designed to quarantine files subject to be cleaned up.

## Action Tasks for the FS\_QuarantineData Job

Navigate to the __FileSystem__ > __Cleanup__ > __3. Quarantine__ > __FS\_QuarantineData__ > __Configure__ node and select __Actions__ to view the action tasks.

__CAUTION:__ Do not enable the actions unless they are required. Disable the actions after execution to prevent making unintended and potentially harmful changes to Active Directory.

__CAUTION:__ Do not modify the action tasks. The action tasks are preconfigured for this job.

![Action Tasks for the FS_QuarantineData Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/quarantinedataactions.png)

The following action tasks are deselected by default:

- Give domain user full control – Gives a specified domain user full control over stale files
- Break inherited permissions – Breaks inherited permissions

Prior to running the FS\_QuarantineData job, it is necessary to select the __Give domain user full control__ or __Break inherited permissions__ task to perform an action.
