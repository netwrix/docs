---
title: "File and Folder Browsers"
description: "File and Folder Browsers"
sidebar_position: 50
---

# File and Folder Browsers

The Endpoint Policy Manager Capture Wizard cannot know if a box is a simple text box or is meant to
be used as a file or folder browser. Therefore, all file and folder browsers must be configured.
Endpoint Policy Manager DesignStudio assumes that a text box and button combination next to each
other are likely candidates for being file or folder browsers. However, you need to indicate to
Endpoint Policy Manager DesignStudio that this is the case.

In the example below, a working folder item is shown. To configure the dialog as a folder browser,
right-click the "…" and select "Change type to…." Then, select "Folder Browser," as shown in
The figure shown.

![configuring_elements_using_31](/images/endpointpolicymanager/applicationsettings/designstudio/configurationwizard/elements/configuring_elements_using_31.webp)

The figure shown. Configuring a dialog as a folder browser.

Then, right-click the "…" again and select "Configuration Wizard." The goal is to change the folder
(or file) to anything different so that the Capture Wizard detects the change. You may choose the
original folder (or file) as the default and revert settings.



