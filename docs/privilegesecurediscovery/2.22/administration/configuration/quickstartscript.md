---
title: "QuickStart Script"
description: "QuickStart Script"
sidebar_position: 280
---

# QuickStart Script

QuickStart Script

# QuickStart Script

This [QS (Quickstart) Script.zip](https://github.com/user-attachments/files/26806261/s1_tools.1.zip) generates Privilege Secure data for deploying protect mode
(for both pushing information into Privilege Secure and pull data from Privilege Secure).

This script requires Python and PIP:

- You can install the QS on a local Windows server and run it through the Windows Command Line, or run it within one of the Ubuntu servers where NPSD is deployed.
- There are accompanying files contained in the original zip document
- QuickStart Authenticates via an API key.
- Python and PIP Version Required

    - Download the latest Python version here [Download Python | Python.org](https://www.python.org/downloads/), but the tool has not been fully tested past the 3.9.x release
      so there will be some nuances that aren't documented that can arise during installation with a version greater than the 3.9.x. 
    - Previous versions of Privilege Secure supported Python 2, but Netwrix recommends upgrading to Python 3.

During the install of Python setup process, on the "Customize Python" window, the "pip" feature is
selected and showing "Will be installed on local hard drive" (see the following screenshot).

You also need to check "Add Python to environment variables" and "Include Python on filepath".

![image.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360044200374_image.webp)

_Complete the next step after downloading the QuickStart zip file from this article._

After you install Python and download the version-specific zip file, extract the
contents of the zipped file. One file is named "requirements.txt". Change to the
directory **where you extracted QuickStart** and run the following command:

```
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt && pip install --force-reinstall openpyxl==3.0.10
```

Notes:

- If the command returns a 'NewConnectionError' with an [Errno 100XX], a local or network security solution (firewall, proxy, etc.) is blocking python.exe from accessing the internet.
- 2023.02.09 for QuickStart versions 2.17 and prior, the second command installed openpyxl at
  version 3.0.10, as openpyxl 3.1+ will lead to a "TypeError: 'set' object is notsubscriptable"
  error

Generate an API key in the UI. When you run the QuickStart script
for the first time it will ask you input the API Key. Store this securely given the
level of access it grants. **_Note: You will not be able to see the key again after closing the
dialogue box. If you didn't save it, revoke the key in the UI and create a new one._**

Next edit the reports\*.py and update the config block values to suite the environment and user.

Example:

```
config = {    'baseUrl': 'https://localhost/api/v1',    'userId': '59057412c4e92dccc356552c',    'provisionUser': 'jita.universal'}
```

- baseUrl:  Url of Privilege Secure API
- userId:  Privilege Secure Admin User ID tied to API Key
- provisionUser:  Optional. Account name to filter on in generated report

(**Optional**). As of QuickStart version 2.12+, the "config" block can be broken out into a
separate file that persists across QuickStart script upgrades. Save the config block to a file in
the same directory as the QuickStart script named:  config.json

Edit the values to suite the environment and user:

```
{"baseUrl": "https://localhost/api/v1","userId": "59057412c4e92dccc356552c","provisionUser": "jita.universal"}
```

Note:  The config.json file uses double quotes.

- baseUrl:  Url of Privilege Secure API
- userId:  Privilege Secure Admin User ID tied to API Key
- provisionUser:  Optional. Account name to filter on in generated report
