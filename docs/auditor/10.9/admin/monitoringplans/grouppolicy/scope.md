---
title: "Group Policy Monitoring Scope"
description: "Group Policy Monitoring Scope"
sidebar_position: 10
---

# Group Policy Monitoring Scope

You can fine-tune Netwrix Auditor by specifying data that you want to exclude from the Group Policy
monitoring scope. To do it, edit the omitobjlist_gp.txt, omitproplist_gp.txt and omituserlist_gp.txt
files.

Follow the steps to exclude data from the Group Policy monitoring scope:

**Step 1 –** Navigate to the _%Netwrix Auditor installation folder%\Active Directory Auditing_
folder.

**Step 2 –** Edit the \*.txt files, based on the following guidelines:

- Each entry must be a separate line.
- A wildcard (\*) is supported. You can use \* for cmdlets and their parameters.
- Lines that start with the # sign are treated as comments and are ignored.

| File                | Description                                                                                         | Syntax                                                                                                                                                  |
| ------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| omitobjlist_gp.txt  | The file contains a list of the Group Policy Object (GPO) names to be excluded from change reports. | `<object name>` For example, to exclude changes to the Default Domain Policy GPO, add the following line: `Default Domain Policy`.                      |
| omitproplist_gp.txt | The file contains a list of the Group Policy Object settings to be excluded from change reports.    | `<settingname>` For example, to exclude data on changes made to the Maximum password length setting, add the following line: `Maximum password length`. |
| omituserlist_gp     | The file contains a list of user names to be excluded from change reports.                          | `<domain\user>` For example, to exclude changes made by the user “usertest” in the domain “domaintest”, add the following line: `domaintest\usertest`.  |
