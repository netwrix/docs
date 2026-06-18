---
title: "Version 26.6.100.34161"
description: "List of all changes introduced in Netwrix Password Secure version 26.6.100"
sidebar_position: 7
---

:::warning[Breaking changes]

This release brings in some **breaking changes** related both to the PKCS#11 integration and the handling of user rights and logbook entries. Read this changelog carefully to prevent any difficulties with the upgrade.

::: 

## New
- Password Secure is now available in **French**.
- This release introduces two new user rights in Netwrix Password Secure to restrict what logbook information non-administrative users can see. Previously, users could view logbook entries for all other users they have permissions for, including login activity, IP addresses, and related connection properties.<br />
  The right "Can see client connection info in logbook" controls visibility of client connection details such as IP addresses, MAC addresses, and computer names. The right "Can see administrative logbook events" controls visibility of administrative event types, hiding events belonging to other users when not granted.<br />
  Both rights default to enabled for database administrators and disabled for all other users. This change supports compliance with data minimization requirements under GDPR, HIPAA, and SOX.

## Improved
- You no longer need to define a last name when creating or editing a user. This solves some compatibility issues with Active Directory and Entra ID. It also solves the issue that passwords of users without last name couldn't be reset.

### Web application: Advanced view and Windows Application
- Some option names related to the browser extension now appear in a new category called "Browser extension".
- When creating API keys, it is no longer possible to select a "Custom" scope without defining object types.
- This release adds a new user right, "Can manage user rights and options from third users and roles". Users without this right can no longer see or update the user rights and settings from other users, organizational units, and roles. Additionally, reading the user rights and options of other users, organizational units, and roles requires "Read" rights on those objects.
- Some text labels throughout the solution now use clearer, shorter wording.

### Web application: Advanced view
- The web app no longer displays the file path of a document in the documents list, as you can't use the path from the web. The file path now appears only in the document preview area.
- The toggle switch that lets you define whether all criteria must match has a new look.


## Fixed
### Server
- This fix contains breaking changes. Review the following guidance before deploying the update to a production environment.

  A potential security vulnerability (**ADV-2026-008**, view details in the [Netwrix Community](https://community.netwrix.com/t/adv-2026-008-multiple-vulnerabilities-in-netwrix-password-secure/133168)) in Netwrix Password Secure allowed any authenticated user - including accounts without administrative rights - to remotely invoke sensitive server-level operations without authorization. By exploiting this, an attacker could cause the server to load a malicious library and execute arbitrary code on the host, putting the entire password management infrastructure at risk.

  This fix applies three mitigations in combination:
  - **Server key creation** now accepts only local server calls and is unavailable over the network interface.
  - **Hardware Security Module (HSM)/PKCS#11 configuration operations** now require database administrator rights and accept only requests originating from localhost, preventing access from client workstations.
  - **PKCS#11 library path validation** is now strict: the server rejects network and UNC paths and requires any library to carry a valid code-signing certificate from a trusted issuer before loading it.

  As this update affects PKCS#11 library path handling, ensure your configured library resides on a local path and carries a valid code-signing certificate before upgrading.

- An error caused the database to lose all password and document history when you permanently deleted a user, an organizational unit, or a role using the Windows Application (version 9.3.1 to 26.5.1). This issue no longer occurs.
- An issue caused server methods without authentication, like the HealthCheck, to fail. The affected methods work again.

### Web application: Advanced view and Windows Application
- An incorrect German translation caused a logbook event to display as a duplicate. This issue no longer occurs.

### Web application: Advanced view
- The context menus in the "Applications" module and the list of directory services showed some entries like "Tags" twice. This is no longer the case; every entry is available only once.
- You can now change the server-side language of a user without changing another property.

### Web application
- Several design issues from the latest web application redesign no longer appear.
- The CSV import in the web application now works correctly in both the advanced and basic views.
- It is now possible to store IPv6 values in fields of type "IP address".

### Windows Application
- The column headers of data printouts are now visible again when you run them via the Windows Application.

### Browser extension
- The icon in the browser extension notifying a user about not executed autofill now has the normal size again.

### .NET SDK
- An issue in the .NET SDK affected role creation and modification (`PsrRole` object). This issue no longer occurs.
