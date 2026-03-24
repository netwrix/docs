---
title: "Version 26.3.100.34058"
description: "List of all changes that were done with Netwrix Password Secure in version 26.3.100"
sidebar_position: 20
---

:::warning[Breaking changes]

This release brings in some **breaking changes**. Because of this, all clients need to be upgraded as soon as the server is upgraded to the newest version. Older clients aren't able to connect.

::: 

## New

- Netwrix Password Secure now follows a new approach to version numbering. While the first two parts represent the year and the month of the release, the third part includes information about major, minor, or patch versions. For an detailed explanation, refer to the documentation. 

### Windows application
- A new user right "Can manage reports" was introduced. It allows administrators to control which users are allowed to create reports. To keep the current behavior consistent, it is globally set to "Activated" for existing databases. New databases will allow the report creation by default only for administrative users.

### Web application
- The web application and the browser extension interfaces as well as the reports have been updated to align with Netwrix branding, ensuring a seamless, unified experience for security teams using multiple Netwrix products.

### Server Manager
- Sometimes, customers have problems with executing and finishing the ECC migration because of an "Invalid Base64 string" error. A new analysis and cleanup tool is now available, accessible via the Server Manager. Besides the Base64 error, it can also check for and remove orphaned rights, seal keys and seal releases.



## Fixed

### Windows application
- When you change the name of a form and close the tab without saving, the Windows app now asks the user if the changes should be discarded.
- In the ribbon, starting an application from the password list displays the name of all connected applications again. In the application list, the names of connected passwords are displayed again, too.

### Web application Advanced view
- When creating a seal, the fields for configuring the validity hours of release requests and releases are no longer marked as errors after their value was changed.
- The number of affected users, groups, and organizational structures in the Active Directory synchronization assistant is now displayed correctly again.
- The page may flicker when you log out from the web app. This issue is now resolved.

### Web application Basic view
- The page may flicker when you log out from the web app. This issue is now resolved.

### Browser extension
- Fixed an issue with the automatic password entry in websites for many sites, where the file ending caused problems (like, e.g., `.jsp` or `.jsc` files).
- The logic Password Secure uses to find login forms that can automatically be filled has been improved. More sites are now supported again.

### Server
- When a server method fails, the server no longer reports the stack trace to the customer.

## Improved
### Windows application
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- The wording in some small parts of the solution has been adjusted for clarity.

### Web application Advanced view
- The web application now correctly displays fields the logged-in user has no permissions for. The user can now request permissions to see the field.
- The search dialog in the web app has a new design. It's now easier and more intuitive to use the filter while adding users and roles to the permissions of an object.
- The validation of input fields in the web application has been reworked completely. They now behave the same way throughout the entire application.

### Web application Basic view
- The wording in some small parts of the solution has been adjusted for clarity.
- The validation of input fields in the web application has been reworked completely. They now behave the same way throughout the entire application.

### Autofill add-on
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- The wording in some small parts of the solution has been adjusted for clarity.

### Offline add-on
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))

### .NET SDK
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))

### Server Manager
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- The wording in some small parts of the solution has been adjusted for clarity.

### Server
- The SMTP password encryption method has been updated. It no longer depends on hardware information.
- The priority of user detection in the login flow has been updated. The login flow now prioritizes users from Entra ID over local users with the same email address.
- Security: The way JSON-serialized values are deserialized has been improved. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))


## Removed

### Windows application
- As previously announced, the dashboard feature in the Windows application has been fully removed, making space for new features.
- The settings "Edit tab after opening", "Close tab after saving", and "Close tab after discarding" were removed to unify and simplify the behavior between all frontends.
- The user setting "Restore last tabs opened" has been removed.

### Offline add-on
- The settings "Edit tab after opening", "Close tab after saving", and "Close tab after discarding" were removed to unify and simplify the behavior between all frontends.

### Browser extension
- Support for the Safari extension (MacApp) has ended. Netwrix no longer publishes new versions of this application. Use a supported browser such as Microsoft Edge, Google Chrome, or Mozilla Firefox to continue using automatic password entry in websites.
