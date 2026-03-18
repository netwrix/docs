---
title: "Version 26.3.100.34058"
description: "List of all changes that were done with Netwrix Password Secure in version 26.3.100"
sidebar_position: 1
---

:::warning[Breaking changes!]

This release brings in some **breaking changes**. Because of this, all clients need to be upgraded as soon as the server is upgraded to the newest version. Older clients are not able to connect!

::: 

## New

- Netwrix Password Secure now follows a new approach to version numbering. While the first two parts represent the year and the month of the release, the third part includes information about major, minor, or patch versions. For an detailed explanation, please refer to the documentation. 

### Windows application
- A new user right "Can manage reports" was introduced. It allows administrators to control which users are allowed to create reports. To keep the current behavior consistent, it is globally set to "Activated" for existing databases. New databases will allow the report creation by default only for administrative users.

### Web application
- The web application and the browser extension interfaces as well as the reports have been updated to align with Netwrix branding, ensuring a seamless, unified experience for security teams using multiple Netwrix products.

### Server Manager
- Sometimes, customers have problems with executing and finishing the ECC migration because of an "Invalid Base64 string" error. We now introduce a new analysis and cleanup tool that can be accessed via the Server Manager. Besides the Base64 error, it can also check for and remove orphaned rights, seal keys and seal releases.



## Fixed

### Windows application
- When changing the name of a form and closing the tab without saving, the Windows app now asks the user if the changes should be discarded.
- In the ribbon, starting an application from the password list displays the name of all connected applications again. In the application list, the names of connected passwords are displayed again, too.

### Web application (Advanced view)
- When creating a seal, the fields for configuring the validity hours of release requests and releases are no longer marked as errors after their value was changed.
- The number of affected users, groups, and organizational structures in the Active Directory synchronization assistant is now displayed correctly again.
- When logging out from the web app, it may happen that the page flickers. This issue is now resolved.

### Web application (Basic view)
- When logging out from the web app, it may happen that the page flickers. This issue is now resolved.

### Browser extension
- We fixed an issue with the automatic password entry in websites for many sites, where the file ending caused problems (like, e.g., `.jsp` or `.jsc` files).
- We improved the logic Password Secure is using to find login forms that can automatically be filled. More sites should now be supported again.

### Server
- When a server method fails, the stack trace is no longer reported to the customer.

## Improved
### Windows application
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- We adjusted the wording in some small parts of the solution to make things clearer.

### Web application (Advanced view)
- The web application now displays fields the logged-in user has no permissions for in a correct way. The user can now request permissions to see the field.
- The search dialog in the web app has a new design. It's now easier and more intuitive to use the filter while adding users and roles to the permissions of an object.
- The validation of input fields in the web application has been reworked completely. They now behave the same way throughout the entire application.

### Web application (Basic view)
- We adjusted the wording in some small parts of the solution to make things clearer.
- The validation of input fields in the web application has been reworked completely. They now behave the same way throughout the entire application.

### Autofill add-on
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- We adjusted the wording in some small parts of the solution to make things clearer.

### Offline add-on
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))

### .NET SDK
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))

### Server Manager
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))
- We adjusted the wording in some small parts of the solution to make things clearer.

### Server
- We changed how the SMTP password is encrypted. It no longer depends on hardware information.
- We changed the priority of user detection in the login flow. Users coming from Entra ID are now prioritized over local users having the same email address configured.
- Security: We improved the way JSON-serialized values are deserialized. ([ADV-2026-005](https://community.netwrix.com/t/adv-2026-005-vulnerability-in-netwrix-password-secure/125724))


## Removed

### Windows application
- As previously announced, we fully removed the dashboard feature in the Windows application, making space for new, exciting features.
- The settings "Edit tab after opening", "Close tab after saving", and "Close tab after discarding" were removed in order to unify and simplify the behavior between all of our frontends.
- The user setting "Restore last tabs opened" has been removed.

### Offline add-on
- The settings "Edit tab after opening", "Close tab after saving", and "Close tab after discarding" were removed in order to unify and simplify the behavior between all of our frontends.

### Browser extension
- The support of the Safari extension (MacApp) has ended. We no longer publish new versions of this application. Please use supported browsers like Microsoft Edge, Google Chrome, or Mozilla Firefox if you want to continue using the automatic password entry in websites.
