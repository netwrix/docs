---
title: "QuickStart Script"
description: "QuickStart Script"
sidebar_position: 280
---

# QuickStart Script

QuickStart Script

# QuickStart Script

This QS (QuickStart) script is used to generate Privilege Secure data for deploying protect mode
(for both pushing information into Privilege Secure and pull data from Privilege Secure).

This script requires Python and PIP:

- It is run from a Windows command terminal
- There are accompanying files contained in the original zip document
- QuickStart Authenticates via an API key.
- Python and PIP Version Required

    - Privilege Secure Versions 2.7 and later, require Python 3.9.6 and PIP
      [https://www.python.org/downloads/release/python-396](https://www.python.org/downloads/release/python-396/)
    - Previous versions ofPrivilege Secure supported python 2, but it's strongly recommended to
      upgrade to Python3.

During the install of Python setup process, on the "Customize Python" window, the "pip" feature is
selected and showing "Will be installed on local hard drive" (screenshot below).

You also need to check "Add Python to environment variables" and "Include Python on filepath".

![image.webp](/images/privilegesecure/4.2/discovery/admin/configuration/360044200374_image.webp)

_The next step will need to be completed after downloading the version of the QuickStart zip file at
the bottom of this article._

After python has been installed, and the version specific zip file has been downloaded. Extract the
contents of the zipped file, one file being named "requirements.txt". You will need to change to the
directory **where QuickStart has been extracted** and run the following command:

```
pip install --trusted-host pypi.org --trusted-host files.pythonhosted.org -r requirements.txt && pip install --force-reinstall openpyxl==3.0.10
```

Notes:

- If the above returns and a 'NewConnectionError' with an [Errno 100XX], that means python.exe is
  being blocked from the internet, by a local or network security solution (firewall, proxy, etc).
- 2023.02.09 for QuickStart versions 2.17 and prior, the above second command installed openpyxl at
  version 3.0.10, as openpyxl 3.1+ will lead to a "TypeError: 'set' object is notsubscriptable"
  error

At this point you will need to generate an API Key within the UI. When you run the QuickStart script
for the first time it will ask you input the API Key. We recommend storing this securely given the
level of access it grants. **_Note: You will not be able to see the key again after closing the
dialogue box. If you did not save it, simply revoke the key in the UI and create a new one._**

Next edit the reports\*.py and update the config block values to suite the environment and user.

Example:

```
config = {    'baseUrl': 'https://localhost/api/v1',    'userId': '59057412c4e92dccc356552c',    'provisionUser': 'jita.universal'}
```

- baseUrl:  Url of Privilege Secure API
- userId:  Privilege Secure Admin User ID tied to API Key
- provisionUser:  Optional. Account name to filter on in generated report

(**Optional**). As of QuickStart version 2.12+, the above "config" block can be broken out into a
separate file that persists across QuickStart script upgrades.  Save the config block to a file in
the same directory as the QuickStart script named:  config.json

Edit the values to suite the environment and user:

```
{"baseUrl": "https://localhost/api/v1","userId": "59057412c4e92dccc356552c","provisionUser": "jita.universal"}
```

Note:  The config.json file uses double quotes.

- baseUrl:  Url of Privilege Secure API
- userId:  Privilege Secure Admin User ID tied to API Key
- provisionUser:  Optional. Account name to filter on in generated report
