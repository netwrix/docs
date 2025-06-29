title: Agent Updates Management
sidebar_label: Agent Updates
description: Deploy ChangeTracker agent updates to devices from the hub console with instant or scheduled deployment using verified zip files and integrity signatures.

# Agent Updates

When a new agent version is released and downloaded from the customer portal, it can be uploaded to
the Hub. It is then possible deploy the agent update to all (or specific) devices from within the
console. The deployment can be instant or scheduled.

![agentupdatefiles](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/agentupdatefiles.webp)

An agent update is comprised of two zip files. One is a new set of program files, the other is a upd
file, which signs the update to confirm its integrity.

![uploadagentupdate](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/uploadagentupdate.webp)

The Agent Updates page can be found in the Settings menu. The Actions button on this page has an
option to Upload an Agent Update.

![agentupdateuploadscreen](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/agentupdateuploadscreen.webp)

The resulting dialog facilitates the upload of the agent update files.

![agentupdateschedule](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/agentupdateschedule.webp)

The deployment schedule for a new update can be controlled via the Agent Software Updates tab on a
per Device Groups basis – See the [Device Groups](/docs/changetracker/8.0/administration/device-management/device-groups.md) topic for additional information.

![devices](/img/versioned_docs/changetracker_8.0/changetracker/admin/settings/devices.webp)

Check the Devices tab to ensure that updates have been deployed as expected.
