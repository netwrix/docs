---
title: "Conditions"
description: "Conditions"
sidebar_position: 30
---

# Conditions

To make a match you need to match one or more Conditions: Path, Hash or Signature.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/conditions_1.webp)

- Path – The name of the file and/or the location. This is the least secure method so use it with
  caution. You may also provide a folder or folder recursively.
- Hash — This is bound to change from time to time, so use sparingly.
- Signature — Digitally signed items about the package which are difficult to forge.

You can see the dialogs for Path, Hash and Signature condition here:

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/conditions_2.webp)

To acquire the Path, you may use the Finder.

![conditions_3](/images/endpointpolicymanager/mac/scenarios/conditions_3.webp)

To acquirethe application's Hash or Signature, you can use the `ppfileinfo` tool:

![A computer screen with white text Description automatically generated](/images/endpointpolicymanager/mac/scenarios/conditions_4.webp)

Actions:

- Deny Execution — Deny installation of PKG files;
- Allow Execution —  Operates in accordance with the system configurations (Endpoint Policy Manager
  client logs actions);
- Elevate — Gives the user elevated privileges for actions, e.g. can perform actions without admin
  rights.

![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/conditions_5.webp)

Additional Approve settings may be:

- Not configured — Allow all users to perform the elevation / install if a rule match occurs.
- Credentials — Specify who can perform the elevation / install if a rule match occurrs

  - Any Administrator — Permit anyone will Admin credentials to perform the installation
  - User — Specify specific users (non-Admin) which, with their own password, will perform the
    elevation / installation.

:::note
Users may be specified with wildcards, such as teacher\*, to allow all Teachers (Teacher1,
Teacher2, etc.) to perform the work.
:::


![A screenshot of a computer Description automatically generated](/images/endpointpolicymanager/mac/scenarios/conditions_6.webp)



