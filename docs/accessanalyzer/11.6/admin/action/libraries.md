---
title: "Action Libraries"
description: "Action Libraries"
sidebar_position: 10
---

# Action Libraries

When creating a new action on a job, you have the ability to load action tasks that have been
preconfigured with table input, script body, and parameters. This helps you:

- Perform operations that are not available in one of the out of the box action modules
- Build custom action workflows to satisfy common use cases
- Build custom remediation workflows, such as:

    - PowerShell Script / Action Body
    - Table references
    - Parameters

On the job's **Configure** > **Action** node, the **Add from Library** option opens the Libraries
window with the available Action Libraries and operations:

![Libraries window](/images/accessanalyzer/11.6/admin/action/libraries.webp)

When a specific operation within a library is chosen, the action is added in the disabled state to
the job. The Action Properties page opens, which has a description, action module, and source table
with relevant filters applied.

When you click the **Configure Action** link, the action module's wizard opens.

![PowerShell Action Module Wizard](/images/accessanalyzer/11.6/admin/action/powershellmodulewizard.webp)

The following Action Libraries and Templates leverage the PowerShell Action module for running
actions within the specific environment:

- Active Directory
- Azure Active Directory
- ServiceNow
- SharePoint Online
- Windows

Prerequisite information for each of the PowerShell scripts is included as part of the script
comments. Typically, a script requires necessary cmdlets available and installed, as well as
parameter inputs configured.

## Create a Custom Action Library

You can also create and maintain custom libraries of action tasks for easy reference and use. Once
you configure an action task as desired, follow the steps to add it to an Action Library.

**Step 1 –** From within the Action Selections view where the custom action tasks exists,
right-click and copy the task.

**Step 2 –** Click the **Add from Library** link to open the Libraries window.

**Step 3 –** Click the green plus sign on the top left to add a new library.

![Add custom library on Libraries window](/images/accessanalyzer/11.6/admin/action/librariescustom.webp)

**Step 4 –** In the pop-up window, specify a name for the library and click **OK**.

![Libraries window paste button](/images/accessanalyzer/11.6/admin/action/librariescustompaste.webp)

**Step 5 –** Select the new library and paste the copied action task.

The custom action task is now available for use in other jobs through the **Add from Library**
option.
