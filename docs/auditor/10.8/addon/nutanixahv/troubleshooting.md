---
title: "Maintenance and Troubleshooting"
description: "Maintenance and Troubleshooting"
sidebar_position: 50
---

# Maintenance and Troubleshooting

If you cannot see collected data in Auditor, check the following:

- Service account has sufficient rights to access Auditor.
- In Auditor settings, go to the **Integrations** section and make sure the **Leverage Integration
  API** is switched to **ON**. Check the communication port number – default is **9699**.
- If you configured a dedicated monitoring plan, make sure data source monitoring is enabled.
- Verify the parameters you provided in **settings.xml**.

Also, remember that events from the remote Syslog server (add-on installation server) are not
collected.

Currently, the add-on supports only one Prism installation (Central or Element). To monitor more
than one Prism Central/Element, you can copy the add-on to another folder, configure
**settings.xml** as described in this document and modify **install.ps1** to rename the service:

**Step 1 –** Deploy one more add-on instance to the server where the first add-on instance is
already installed. Be sure to use a different installation folder.

**Step 2 –** Open **settings.xml** and configure the new add-on instance to work with the second
Prism server.

**Step 3 –** Open **install.ps1** for the new add-on for edit.

**Step 4 –** Modify the default service name:

`$name = "enter_new_name"`

**Step 5 –** Save and then launch the updated **install.ps1** file.
