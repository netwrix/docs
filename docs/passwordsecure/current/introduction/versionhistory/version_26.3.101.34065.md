---
title: "Version 26.3.101.34065"
description: "List of all changes that were done with Netwrix Password Secure in version 26.3.101"
sidebar_position: 10
---

## Improved
### Server
- Errors that happen during web service requests are now logged into the Windows event log, too.

## Fixed

### Server 
- Some customers reported that they aren't able to activate their databases after the last update. This problem was caused by having the user right "Is database administrator" globally set to "Activated". Now, this setup is no longer an issue.

### MSP
- It is possible again for MSPs to edit their customers using the Server Manager.

### Web application (Advanced view and basic view)
- An issue in the validation of the web application was fixed. It is now possible again to save passwords having a minimum or a maximum length configured.

### Browser extension
- Fixed a minor visual issue in the browser extension for Mozilla Firefox

### .NET SDK
- We fixed an issue that prevented the .NET SDK from being operational. Now, it can be used again.
