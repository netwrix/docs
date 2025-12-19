---
description: >-
  Shows how to configure SSRS-based reports in Netwrix Auditor to display
  additional Active Directory attributes (modification, created, and deleted
  reports).
keywords:
  - SSRS
  - attributes
  - Active Directory
  - Netwrix Auditor
  - modification report
  - created report
  - deleted report
  - processmodifiedprops
products:
  - auditor
visibility: public
sidebar_label: 'Can any additional attribites be displayed in the '
tags: []
title: "Can any additional attribites be displayed in the modification reports?"
knowledge_article_id: kA00g000000H9VrCAK
---

# Can any additional attribites be displayed in the modification reports?

How do I get the values of the additional attributes to be displayed in any particular SSRS based report.

---

It is possible to make some the following reports display the values of the additional attributes. Usually the reports are called Modification/Created/Deleted with details. The most popular are the following:
- All User Changes with Advanced Attributes;
- User Created with Details;
- User Deleted with Details;

To do that please follow the steps:

1. Determine the report you want to show the additional information in:
   a. If you want the "Modification" report to show the additional attributes you need - `processmodifiedprops.txt` file located in the installation folder;  
   b. For "Created" reports - `processaddedprops.txt`;  
   c. For "Deleted" reports - `processdeletedprops.txt`;

2. Find out the AD object you are interested in. For example: user, computer, group, etc.

3. Find out the attribute name you want to be displayed. Like: `mail`, `employeeID`, etc. The attribute can be found in the Attribute editor in Active Directory Users and Computers snap-in. **Note:** it is case sensitive.

4. Open the text file according to the first step and put the following line:
```
objectType:Attribute:
```
Examples:

![Attr]./../0-images/ka04u000000HcP8_0EM7000000051Zt.png)

**NOTE:** Each attribute should be put in a separate line. The pound key at the beginning of a line means exclusion of the line.

