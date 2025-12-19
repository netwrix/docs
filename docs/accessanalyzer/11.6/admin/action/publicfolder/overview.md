---
title: "PublicFolder Action Module"
description: "PublicFolder Action Module"
sidebar_position: 60
---

# PublicFolder Action Module

The Public Folder action module allows users to make bulk changes to selected Microsoft Exchange
public folders by adding, changing, or removing folders and permissions from the environment. Use
the Pubic Folder Action Module Wizard to choose the data table column that identifies the folders
and to configure the operations performed against the selected folders.

Prior to configuring the Pubic Folder Action Module Wizard, scope the source data table to ensure
the actions apply only to the desired folders.

:::warning
Be careful when using this action module. Make sure that only the changes required are
applied and only to those target folders desired. Always verify the data prior to execution of any
action.
:::


:::info
Although rollbacks for some actions are available, having to use one should be
avoided
:::


## Configuration

The Public Folder action module is configured through the Public Folder Action Module Wizard, which
contains the following wizard pages:

- Welcome
- [Public Folder: Action](/docs/accessanalyzer/11.6/admin/action/publicfolder/action.md)
- [Public Folder: Prior Actions](/docs/accessanalyzer/11.6/admin/action/publicfolder/prioractions.md)
- [Public Folder: Folders](/docs/accessanalyzer/11.6/admin/action/publicfolder/folders.md)
- [Public Folder: MAPI Settings](/docs/accessanalyzer/11.6/admin/action/publicfolder/mapisettings.md)
- [Public Folder: Operations](/docs/accessanalyzer/11.6/admin/action/publicfolder/operations.md)
- [Public Folder: Rollback](/docs/accessanalyzer/11.6/admin/action/publicfolder/rollback.md)
- [Public Folder: Options](/docs/accessanalyzer/11.6/admin/action/publicfolder/options.md)
- [Public Folder: Summary](/docs/accessanalyzer/11.6/admin/action/publicfolder/summary.md)

The Welcome page gives an overview of the action module. The navigation pane contains links to the
pages in the wizard. Review the introductory and caution information about the Public Folder Action
Module before proceeding.

![Public Folder Action Module Wizard Welcome page](/images/accessanalyzer/11.6/admin/action/publicfolder/welcome.webp)

To proceed, click **Next** or use the Steps navigation pane to open another page in the wizard.
