---
description: >-
  Shows how to resolve the "Invalid class" error when running the Report
  Configuration Wizard by compiling the SQL Server MOF provider with mofcomp.
keywords:
  - Invalid class
  - mofcomp
  - sqlmgmproviderxpsp2up.mof
  - SQL Server 2012
  - SQL Server 2008
  - MOF Compiler
  - Report Configuration Wizard
  - Netwrix Auditor
products:
  - auditor
sidebar_label: 'ERROR: SQL Error: invalid class'
tags: []
title: 'ERROR: SQL Error: invalid class'
knowledge_article_id: kA00g000000H9XbCAK
---

# ERROR: SQL Error: invalid class

When you run the Report Configuration Wizard you receive the following error message: "Invalid class."

---

1. Open the following folder for the SQL Server 2012: `"C:ProgramFiles(x86)MicrosoftSQLServer110Shared"`
   (Open the following folder for the SQL Server 2008: `"C:Program Files (x86)Microsoft SQL Server100Shared"`)

2. then run: `mofcomp sqlmgmproviderxpsp2up.mof`

3. This should give an output like this:

```
C:Windowssystem32>cd "C:Program Files (x86)Microsoft SQL Server110Shared"

C:Program Files (x86)Microsoft SQL Server120Shared>mofcomp sqlmgmproviderxpsp2up.mof
Microsoft (R) MOF Compiler Version 6.1.7600.16385
Copyright (c) Microsoft Corp. 1997-2006. All rights reserved.
Parsing MOF file: sqlmgmproviderxpsp2up.mof
MOF file has been successfully parsed
Storing data in the repository...
Done!
```
