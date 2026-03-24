---
title: "Version 26.3.101.34065"
description: "List of all changes that were done with Netwrix Password Secure in version 26.3.101"
sidebar_position: 10
---

## Improved
### Server
- Password Secure now logs errors during web service requests to the Windows event log.

## Fixed

### Server 
- Some customers reported that they aren't able to activate their databases after the last update. This problem was caused by having the user right "Is database administrator" globally set to "Activated". Now, this setup is no longer an issue.

### MSP
- MSPs can edit their customers again using the Server Manager.

### Web application Advanced view and Basic view
- Fixed an issue in web application validation. You can now save passwords with a minimum or maximum length configured.

### Browser extension
- Fixed a minor visual issue in the browser extension for Mozilla Firefox

### .NET SDK
- Fixed an issue that prevented the .NET SDK from being operational. You can now use it again.
