---
title: "Script Management"
description: "Script Management"
sidebar_position: 70
---

# Script Management

With the Platform Governance for NetSuite tools and the Critical Script Analysis methodology you
can:

- Identify high priority scripts based on usage
- Identify people and departments triggering scripts to focus on scripts that could be in
  appropriately triggered
- Understand script execution times

:::note
Platform Governance for NetSuite does not document or analyze locked scripts.
:::

## Automatically Archiving Scripts

If enabled, a copy of each script is archived when it is changed, keeping a full version history.
The archived script versions are saved in the script archive folder, are also accessible in the
Customization record for the script. Archiving all script changes does use storage space. It is a
good practice to occasionally review and clean up old versions. To enable automatic archiving:

1. Open **Strongpoint** > **Strongpoint Support** > **Installation Settings**.
2. Click **Edit** by the current version.
3. Open the **Installation** tab.
4. Check **Enable Auto Archive**.
5. Specify the **Auto Archive Folder** location.
6. **Save** the record.

## Error Log and Analysis

Managing script errors is the first level of analysis required for optimization. Eliminating errors
can greatly increase performance and fix broken scripts.

Script error reports provides a summary of all the available errors logged in the system for various
scripts. Errors are summarized into types by excluding specific data such as line numbers, ids and,
where detectable, execution data. The result is a manageable number of errors.

1. Ensure that the scripts are log levels are at least Error (anything other than Emergency). See
   the NetSuite User Guide article “Setting Script Execution Log Levels” for log level definitions.
2. Review the Error Report. All script errors are reported regardless of if the script is locked,
   unlocked, part of a bundle or any other factor.
3. Identify errors that are not material to your business and mark them as resolved
4. Platform Governance for NetSuite no longer reports those errors, so any future errors that occur
   are unexpected and should be managed.

## Analyze Script Performance Data

Platform Governance for NetSuite enables you to systematically analyze:

- How often scripts are executing to enable you to focus on high volume scripts or identity scripts
  that are executing many times more than the transactions in the account would warrant.
- Who is triggering the script to identify scripts that are being triggered inappropriately, which
  is an efficient use of system capacity.
- Script average runtime.

There are two requirements to analyze and report script performance data:

1. Start Tags must be inserted at the beginning of the script in order to track frequency of
   execution and who is triggering the script. End tags are required for Script Average Run Time.
2. Log level of the scripts be set to at least Audit or Debug.

There are pre-built saved mass updates to quickly do this, but some factors need to be considered.

Since tags need to be added to the script file, there are some limitations on the data Platform
Governance for NetSuite can analyze for locked scripts.

1. **Locked Script Records**: A locked script record does not impact script analysis since Platform
   Governance for NetSuite analyzes the Script File. If all elements of the script are unlocked or
   if only the script record is locked, Platform Governance for NetSuite can report on script
   performance metrics.
2. **Locked but readable (not hidden) Script File**: Script tags cannot be added to locked files,
   but Platform Governance for NetSuite can read them if they have audit tags already in them.

    - With audit tags:
        - Spiders identify the audit tags and documents them in the **Audit Tags** field in the
      **Scripting** tab of the Customization Record.
        - Document who is executing the script
        - Provides a sense of how often it is executing. It tracks the number of executions per tag and
      averages them. The number can vary based on the placement of the tags and how the script is
      executed any given time. While it does not provide an exact number, it will be within the
      right range and can help identify if a script is executing significantly more than the
      transaction volume would indicate.
    - Without audit tags: Same and locked and hidden scripts below.

3. **Locked and hidden script files**: For scripts where the script file is hidden and locked,
   Platform Governance for NetSuite cannot track performance metrics, in most cases. However, if the
   script Log Level is changed to Debug mode, Platform Governance for NetSuite can document who is
   executing the script while the script is at that log level.

## Define the Scope of your Analysis

The focus of script analysis can vary based on your business needs. We recommend the following based
on the questions you are trying to answer:

**Which scripts are executing too often or being triggered by the wrong people across the whole
account?**

This question would require a broader approach and applying audit tags and changing log levels
across the account. However, if you have a large number of locked and hidden scripts, you may be
forced to go with a more focused approach due to the limitations mentioned above.

**How are my scripts performing in a particular process?**

To get a process focused view, you can use the Map Customization Tools to associate bundles and
scripts to processes. This enables you to apply audit tags and change log levels for scripts
associated with specific processes using the mass update filters.

**How are particular scripts or bundles performing?**

In this case you can either add the audit tags and change the log levels manually or filter the mass
updates.

Platform Governance for NetSuite has tools to automatically change the log level of script
deployments and add start tags to files. However, before deploying these tools, you may want to
consider the following factors.

1. Changing the log level from Error or Emergency to Audit, which is required for Script Analysis
   may increase the level of log entries that appear on the Execution Log tab based on what tags are
   in the scripts.
2. Log levels **cannot** be automatically changed for bundled deployments. Bundled deployment log
   levels need to be changed manually.
3. Since audit tags can only be added to unlocked files, changing the log levels of locked files
   serves no purpose from a Script Analysis perspective.

Platform Governance for NetSuite has the following capabilities to set up script analysis. We will
provide specific ways to use this tools based on your objectives and account set up.

## Identify which Scripts and how many Scripts have Locked and Hidden Files

As mentioned above audit tags cannot be added to these files and changing the log levels is moot. A
future bundle will have this search built in, but you can quickly identify and count the number of
locked scripts by creating this saved search:

- Create a new saved search, type Customization
- Add the following criteria:
    - Attempt # greater than zero
    - Retrieval Error Not Empty
- You can add Type to the results to see the script type

Compare this number to the number of scripts in your account (Customizations>Scripting [ensure all
filters are cleared]). If a large proportion of your scripts are locked and hidden, you may want to
focus your analysis by changing the log level and adding audit tags to a limited number of scripts.

**Customization Record**: You can also see if a script file is locked by looking at the
Customization record for that script. On the **Scripting** tab, check the script file. If there are
options to download or edit the file, the script file is unlocked.

## Run Mass Updates

A core part of the script performance analysis involves the use of audit tags. These audit tags only
provide data when the scripts are in Audit or Debug mode. It is important to switch the scripts over
to one of those two levels if appropriate.The Add Audit Tags mass update backs up and then adds
start tags to all of your unlocked scripts. This enables tracking frequency of execution. You can
manually add end tags for script execution time tracking.
[Analyzing Script Performance](/docs/platgovnetsuite/scriptmgmt/analyzing_script_performance.md).

## Schedule the Script Utilization Data Update Script

This scheduled script captures the script execution data such as how many times it was triggered,
who used it and how long it took to execute. Schedule the Script Utilization Data Update Script
[Schedule the Script Monitor](/docs/platgovnetsuite/scriptmgmt/scheduling_script_monitor.md)

## Track Progress

You can monitor the progress of the script data collection with **Strongpoint** > **Script
Management** > **Tagged scripts with No Data**  
The scripts on this list will fall off this search as data is collected. Scripts that remain on this
list are not being executed.

## Review Script Performance and Error Reports

There are several searches that provide data about script performance and errors.
[Review Script Performance and Error Reports](/docs/platgovnetsuite/scriptmgmt/reviewing_script_performance_errors.md)

Another critical script is the **Strongpoint Parse Script Files SS** (note there is also an on
demand version OD). This reads each unlocked script file to check for changes, updates the
documentation and stores an archive copy of any previous version of the code. Once complete it
triggers the **Strongpoint MakeJoins** script to complete the documentation by attaching related
fields and saved searches.
