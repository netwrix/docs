# FS\_RestoreInheritance Job

The FS\_RestoreInheritance job is designed to restore inheritance to previously quarantined files.

## Analysis Tasks for the FS\_RestoreInheritance Job

Navigate to the __FileSystem__ > __Cleanup__ > __3. Quarantine__ > __FS\_RestoreInheritance__ > __Configure__ node and select __Analysis__ to view the analysis tasks.

__CAUTION:__ Do not modify or deselect the selected analysis task. The analysis task is preconfigured for this job.

![Analysis Tasks for the FS_RestoreInheritance Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/restoreinheritanceanalysis.png)

The following analysis task is selected by default:

- Determines candidates for restored inheritance – Creates the SA\_FS\_RestoreInheritance\_CandidatesView table accessible under the job’s Results node

## Action Tasks for the FS\_RestoreInheritance Job

Navigate to the __FileSystem__ > __Cleanup__ > __3. Quarantine__ > __FS\_RestoreInheritance__ > __Configure__ node and select __Actions__ to view the action tasks.

__CAUTION:__ Do not enable the action unless it is required. Disable the action after execution to prevent making unintended and potentially harmful changes to Active Directory.

__CAUTION:__ Do not modify the action task. The action task is preconfigured for this job.

![Action Tasks for the FS_RestoreInheritance Job](/static/img/product_docs/accessanalyzer/accessanalyzer/enterpriseauditor/solutions/filesystem/cleanup/quarantine/restoreinheritanceaction.png)

The following action tasks are deselected by default:

- Restore Permissions – Restores permission inheritance to quarantined files where activity has occurred
