# How to Configure File System Delete Action to Prevent "File Missing" Errors

## Related Query

* "We're trying to create a job that deletes files and need help with the delete action part of it."

## Overview

This article explains how to configure the File System delete action so that it reliably removes files and reports results without producing a misleading **`file missing`** error.

The issue typically appears when the action is configured to target a folder or a single UNC path column: the action deletes the file, but a subsequent check reports that the file cannot be found.

The confirmed resolution is to update the input table and action to target the file explicitly.

For more information about the File System Action Module, see: [File System Action Module](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/action/filesystem/overview).

## Instructions

> **IMPORTANT:** Back up your input table and test the updated action in a non-production environment before running delete jobs at scale. Deletions are irreversible if proper backups are not in place.

1. **Verify the action artifacts.** Confirm that the action execution produced an **input.db** for the job. Look for the file in one of these locations:

   * `\STEALTHbits\StealthAUDIT\FileSystemAM\Data\session-yyyymmddThhmmss\input.db`
   * `Stealthbits\StealthAUDIT\Actions\FileSystem\yyyymmddThhmmss\HOST.input1.db`

2. **If `input.db` is missing.** Someone may have deleted it. Reproduce the action in a test environment and collect the full Data/session folder after a job run. Provide that folder to support or development for analysis, or use it to validate your configuration locally.

3. **Adjust the input table.** Add or verify the following columns in the source table used by the action:

   * Unique row identifier columns such as **RowKey** and **RowGuid**. (These were fixed during troubleshooting and allowed the job to run end to end.)
   * Split the original UNC path into three separate columns: **Server**, **FilePath** (directory path), and **FileName** (file name with extension). For example, split `\\server\share\path\file.exe` into:

     * `Server = server`
     * `FilePath = \share\path\`
     * `FileName = file.exe`

4. **Update the File System action mapping.** Edit the delete action so it uses the new **Server**, **FilePath**, and **FileName** columns to construct and target the full file path. Do not point the action only to the folder or to a single UNC column that includes both path and filename if the action expects explicit file targeting.

5. **Validate credentials.** Ensure the account used by the action has sufficient permissions on the target server and share. In testing, using the long corporate profile credential was acceptable. Test with the same credentials in a lab before running in production.

6. **Run the job in a test environment.** Confirm the following:

   * The action deletes the target files as expected.
   * Task Stats and Action Results no longer show the misleading **`file missing`** error after successful deletion.

7. **If results still show an error while files are removed,** collect and attach the action Data/session folder (containing **input.db** and other artifacts) to further troubleshooting. The presence of the **input.db** allows engineering to verify whether the action attempted to target a file or a folder.

> **NOTE:** Every action execution normally produces an **input.db** in the session or Actions folder. If you cannot find **input.db**, check both locations above or confirm that no process has removed those files after the run.

## Troubleshooting

* **Job completes but Action Results show a `file missing` error:** Confirm the action was configured to target the file. If it targeted only a folder or a single UNC column, split the UNC and map using three columns as described.
* **No `input.db` file exists:** Re-run the action in a test environment and capture the Data/session folder. If the file is absent from both the session and Actions folders, verify that nothing in your environment is deleting action artifacts post-run.
* **Deletes fail due to permissions:** Re-check the credentials used by the action and test access to the target files via the same account outside of the product.
* **If the above steps do not resolve the `file missing` error,** try either of the following options:

  * Delete and recreate the job and action configuration.
  * Create a new job with action configuration.

## Related Link

* [File System Action Module](https://docs.netwrix.com/docs/accessanalyzer/12_0/admin/action/filesystem/overview)
