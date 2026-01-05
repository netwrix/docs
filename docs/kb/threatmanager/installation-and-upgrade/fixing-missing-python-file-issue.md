---
description: 'Steps to resolve missing Python files after upgrades that cause LaunchPythonJob errors when running Netwrix Threat Manager; includes registry removal, manual file deletion, repair, and reinstall instructions.'
keywords:
- python
- LaunchPythonJob
- Win32Exception
- registry
- uninstall
- reinstall
- Netwrix Threat Manager
- AppData
- repair
products:
- threat-manager
title: 'Fixing missing python file issue'
knowledge_article_id: kA04u000000LLkSCAW
---

# Fixing missing python file issue

## Issue
Sometimes during upgrades Python can fail to lay down files correctly. Follow these steps to fix that.

Example error:
`[ERR] LaunchPythonJob error: System.ComponentModel.Win32Exception (2): The system cannot find the file specified.`

If you’re seeing this in your job logs you will likely need to follow the steps below.

## Instructions
First, try to cleanly uninstall Python via **Add/Remove Programs** and follow these steps:

1. Remove registry key `\HKEY_LOCAL_MACHINE\SOFTWARE\Python\PythonCore\3.10`
2. Uninstall Netwrix Threat Manager
3. Re-install Netwrix Threat Manager

If you are unable to cleanly uninstall Python using the above steps, follow these steps then try the above again:

4. Go to `C:\Users\%USERNAME%\AppData\Local\Programs`
5. **Delete** Python Folder
6. Go to Control Panel >> **Uninstall a Program**
7. Right Click on Python and then **Change/Modify**
8. Click on **Repair** Python. **Note: This may or may not fail, but be patient**
9. Now Again go to step 6
10. Now, after step 6, uninstall Python
11. Now, try steps 1-3 again

## Affected Versions
**Affected Versions :** `2.7.1544+`